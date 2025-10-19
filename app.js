// app.js - merged full logic

// Firebase initialization - KEEP your actual config values
const firebaseConfig = {
  apiKey: "AIzaSyAojqcg_UGpamJjTJHb6H-BRoVF5mDZgrU",
  authDomain: "one-care-system.firebaseapp.com",
  projectId: "one-care-system",
  storageBucket: "one-care-system.appspot.com",
  messagingSenderId: "982635756225",
  appId: "1:982635756225:web:c664f162b735b56703f240"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// App state
let currentUser = null;
let currentRole = 'guest';
let patients = [];
let selectedPatientId = null;
let vitalsRows = [];
let uploadedLabs = [];
let isSaving = false;

// Small helpers
const $ = id => document.getElementById(id);
const qsa = sel => Array.from(document.querySelectorAll(sel));
function nowTs() { return firebase.firestore.FieldValue.serverTimestamp(); }
function escapeHtml(s){ if(!s && s!==0) return ''; return String(s).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])); }

// Toasts (modern)
function toast(msg, type='info', ms=3500){
  const container = $('toastContainer') || document.body;
  const el = document.createElement('div');
  el.className = 'toast show';
  el.style.background = (type==='success') ? '#059669' : (type==='error') ? '#ef4444' : '#0ea5e9';
  el.textContent = msg;
  ( $('toastContainer') || container ).appendChild(el);
  setTimeout(()=> el.remove(), ms);
}

// Render user info & role-based UI
function renderUserInfo(){
  const ui = $('userInfo');
  if(!ui) return;
  ui.innerHTML = '';
  if(!currentUser){ ui.innerHTML = '<div class="text-sm text-white/80">Not signed in</div>'; return; }
  const badge = document.createElement('div'); badge.className='px-3 py-1 rounded-full bg-white/10 text-white font-semibold'; badge.textContent='USER';
  const t = document.createElement('div'); t.className='text-sm text-white/90'; t.innerHTML = `<div class="font-medium">${escapeHtml(currentUser.email)}</div><div class="text-xs opacity-60">${(currentRole||'guest').toUpperCase()}</div>`;
  ui.appendChild(badge); ui.appendChild(t);
}
function applyRoleUI(){
  const newBtn = $('btnNew'); if(newBtn){ if(['admin','doctor','nurse'].includes(currentRole)) newBtn.classList.remove('hidden'); else newBtn.classList.add('hidden'); }
}

// Auth watcher + role lookup
auth.onAuthStateChanged(async user=>{
  currentUser = user;
  if(user){
    try{
      const uq = await db.collection('users').where('email','==',user.email).limit(1).get();
      if(!uq.empty) currentRole = (uq.docs[0].data().role || 'guest').toLowerCase();
      else currentRole = 'guest';
    }catch(e){ console.warn('Role lookup failed', e); currentRole='guest'; }
    renderUserInfo(); applyRoleUI();
    $('loginModal') && $('loginModal').classList.add('hidden');
    await loadPatients();
  } else {
    currentRole='guest'; renderUserInfo(); applyRoleUI();
    $('loginModal') && $('loginModal').classList.remove('hidden');
    patients=[]; renderPatients([]);
  }
});

// Load patients
async function loadPatients(){
  patients = [];
  try{
    const snap = await db.collection('patients').orderBy('updatedAt','desc').get();
    snap.forEach(d => patients.push({ id: d.id, ...d.data() }));
    renderPatients(patients);
    updateStats();
  }catch(e){ console.error(e); toast('Failed to load patients','error'); }
}
function updateStats(){
  $('totalPatients') && ($('totalPatients').textContent = patients.length);
  $('inPatients') && ($('inPatients').textContent = patients.filter(p=>p.patientStatus==='Inpatient').length);
  $('outPatients') && ($('outPatients').textContent = patients.filter(p=>p.patientStatus==='Outpatient').length);
  $('count') && ($('count').textContent = patients.length);
}
function renderPatients(list){
  const container = $('patientsContainer'); if(!container) return;
  container.innerHTML = '';
  (list||[]).forEach((p,idx)=>{
    const card = document.createElement('div'); card.className='p-4 rounded-xl glass soft-shadow flex flex-col';
    card.innerHTML = `<div class="flex items-center justify-between"><div><div class="font-semibold">${escapeHtml(p.name||'—')}</div><div class="text-sm text-slate-500">${escapeHtml(p.physician||'')}</div></div><div class="text-sm">${p.patientStatus==='Inpatient'?'<span class="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Inpatient</span>':'<span class="px-2 py-1 rounded-full bg-amber-100 text-amber-700">Outpatient</span>'}</div></div>`;
    const actions = document.createElement('div'); actions.className='mt-3 flex gap-2';
    const viewBtn = document.createElement('button'); viewBtn.className='px-3 py-1 rounded bg-white text-slate-700'; viewBtn.textContent='View'; viewBtn.onclick = ()=> viewPatient(idx);
    const editBtn = document.createElement('button'); editBtn.className='px-3 py-1 rounded bg-white text-slate-700'; editBtn.textContent='Edit'; editBtn.onclick = ()=> editPatient(idx);
    const delBtn = document.createElement('button'); delBtn.className='px-3 py-1 rounded bg-white text-slate-700'; delBtn.textContent='Delete'; delBtn.onclick = ()=> deletePatient(idx);
    actions.appendChild(viewBtn); actions.appendChild(editBtn); actions.appendChild(delBtn);
    card.appendChild(actions);
    container.appendChild(card);
  });
  $('count') && ($('count').innerText = (list||[]).length);
}

// Search
$('searchTop') && $('searchTop').addEventListener('input', e=>{
  const q = e.target.value.trim().toLowerCase();
  if(!q) return renderPatients(patients);
  const filtered = patients.filter(p => [p.name,p.physician,p.roomNo,p.bedNo].filter(Boolean).some(v=>String(v).toLowerCase().includes(q)));
  renderPatients(filtered);
});

// New patient handler
$('btnNew') && $('btnNew').addEventListener('click', ()=>{
  selectedPatientId = null;
  qsa('form').forEach(f=>f.reset());
  vitalsRows=[]; uploadedLabs=[]; renderVitalsTable(); renderLabFiles();
  const b = document.querySelector('.navbtn[data-target="tab-info"]'); if(b) b.click();
  toast('New patient — fill Patient Info and Save Info','info');
});

// Read form utility
function readForm(formElOrId){
  const f = (typeof formElOrId === 'string') ? document.getElementById(formElOrId) : formElOrId;
  if(!f) return {};
  const fd = new FormData(f);
  const obj = {};
  for(const [k,v] of fd.entries()) obj[k]=v;
  return obj;
}

// Fill form (simple fields)
function loadIntoForm(formId, data){
  const f = document.getElementById(formId); if(!f || !data) return;
  Object.keys(data).forEach(k=>{
    if(f.elements[k]) f.elements[k].value = data[k] || '';
  });
}

// Save mapping & per-tab save buttons
const saveMap = { info:'form-info', id:'form-id', history:'form-history', assessment:'form-assessment', labs:'form-labs', meds:'form-meds', vitals:'form-vitals', nurse:'form-nurse', doctor:'form-doctor', plan:'form-plan' };

qsa('[data-save]').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const tabKey = btn.dataset.save;
    const fid = saveMap[tabKey];
    if(!fid) return;
    const data = readForm(fid);
    if(tabKey==='vitals') data.vitals = vitalsRows.slice();
    if(tabKey==='labs' && uploadedLabs.length) data.labFiles = uploadedLabs.slice();
    if(tabKey==='meds'){
      const meds = [];
      qsa('#medTableBody tr').forEach(tr=>{
        const inputs = tr.querySelectorAll('input');
        if(inputs.length>=4){
          meds.push({drug:inputs[0].value,dosage:inputs[1].value,route:inputs[2].value,frequency:inputs[3].value});
        }
      });
      data.medOrders = meds;
    }
    if(tabKey==='info' && (!data.name || !data.initialDiagnosis)) return toast('Name and Initial Diagnosis are required.','error');

    if(isSaving) return toast('Save in progress...','info');
    isSaving=true; btn.disabled=true;
    try{ await saveTabData(btn, data); toast('Saved','success'); } catch(e){ console.error(e); toast('Save failed','error'); }
    finally{ isSaving=false; btn.disabled=false; }
  });
});

async function saveTabData(btn, data){
  const meta = { updatedAt: nowTs(), updatedBy: currentUser?currentUser.email:'' };
  if(!selectedPatientId){
    const docRef = await db.collection('patients').add({ ...data, createdAt: nowTs(), ...meta });
    selectedPatientId = docRef.id;
    toast('Created new patient and saved.','success');
  } else {
    await db.collection('patients').doc(selectedPatientId).set({ ...data, ...meta }, { merge: true });
    toast('Saved.','success');
  }
  if(btn && btn.dataset.save === 'labs') uploadedLabs = [];
  await loadPatients();
}

// Lab uploads
$('uploadLabBtn') && $('uploadLabBtn').addEventListener('click', async ()=>{
  const fileEl = $('labFileInput'); if(!fileEl || !fileEl.files || fileEl.files.length===0) return toast('Select a file','error');
  const file = fileEl.files[0];
  try{
    const path = `labs/${selectedPatientId || 'temp'}/${Date.now()}_${file.name}`;
    const ref = storage.ref(path);
    await ref.put(file);
    const url = await ref.getDownloadURL();
    uploadedLabs.push({ name:file.name, url, type:file.type || '' });
    renderLabFiles(); fileEl.value='';
    toast('Uploaded','success');
  }catch(e){ console.error(e); toast('Upload failed','error'); }
});

function renderLabFiles(){
  const list = $('labFilesList'); if(!list) return;
  list.innerHTML = '';
  if(uploadedLabs.length===0){ list.innerHTML = '<div class="text-sm text-slate-400">No lab files uploaded.</div>'; return; }
  uploadedLabs.forEach((f,i)=>{
    const wrap = document.createElement('div'); wrap.className='flex items-center gap-2';
    const preview = (f.type && f.type.startsWith('image/')) ? `<img src="${f.url}" class="w-20 h-14 object-cover rounded" />` : `<div class="w-20 h-14 flex items-center justify-center bg-white/40 rounded">📄</div>`;
    wrap.innerHTML = preview + `<div class="flex flex-col"><a href="${f.url}" target="_blank" class="font-semibold text-sky-600">${escapeHtml(f.name)}</a><button class="text-sm text-rose-600 mt-1" onclick="removeLabFile(${i})">Remove</button></div>`;
    list.appendChild(wrap);
  });
}
window.removeLabFile = function(i){ uploadedLabs.splice(i,1); renderLabFiles(); }

// Meds add/remove
$('addMedRow') && $('addMedRow').addEventListener('click', ()=>{
  const tbody = $('medTableBody'); if(!tbody) return;
  const tr = document.createElement('tr');
  tr.innerHTML = `<td><input name="drug" class="w-full rounded border px-2 py-1"/></td><td><input name="dosage" class="w-full rounded border px-2 py-1"/></td><td><input name="route" class="w-full rounded border px-2 py-1"/></td><td><input name="frequency" class="w-full rounded border px-2 py-1"/></td><td><button type="button" class="btn-remove-row">🗑️</button></td>`;
  tbody.appendChild(tr);
});
document.addEventListener('click', e=>{ if(e.target && e.target.classList.contains('btn-remove-row')) e.target.closest('tr').remove(); });

// Vitals add/remove
$('btnAddVitals') && $('btnAddVitals').addEventListener('click', ()=>{
  const f = $('form-vitals');
  const row = { date: f && f.v_date ? f.v_date.value : '', time: f && f.v_time ? f.v_time.value : '', temp:'', pulse:'', bp:'', by:'' };
  vitalsRows.push(row); renderVitalsTable(); if(f&&f.v_date) f.v_date.value=''; if(f&&f.v_time) f.v_time.value='';
});
function renderVitalsTable(){ const tbody = $('vitalsTableBody'); if(!tbody) return; tbody.innerHTML = ''; vitalsRows.forEach((r,i)=>{ const tr = document.createElement('tr'); tr.innerHTML = `<td>${escapeHtml(r.date)}</td><td>${escapeHtml(r.time)}</td><td>${escapeHtml(r.temp||'')}</td><td>${escapeHtml(r.pulse||'')}</td><td>${escapeHtml(r.bp||'')}</td><td>${escapeHtml(r.by||'')}</td><td><button class="px-2 py-1 rounded bg-white/80" onclick="removeVitalsRow(${i})">Del</button></td>`; tbody.appendChild(tr); }); }
window.removeVitalsRow = function(i){ vitalsRows.splice(i,1); renderVitalsTable(); }

// BMI & IV helpers
function setupBMIandIV(){
  const w = document.querySelector('#form-info input[name="weight"]') || $('info_weight');
  const h = document.querySelector('#form-info input[name="height"]') || $('info_height');
  const bmi = document.querySelector('#form-info input[name="bmi"]') || $('info_bmi');
  [w,h].forEach(el=>{ if(el) el.addEventListener('input', ()=>{ if(!w||!h||!bmi) return; const W=parseFloat(w.value), H=parseFloat(h.value); if(!isFinite(W)||!isFinite(H)||H<=0){ bmi.value=''; return; } bmi.value = (W/Math.pow(H/100,2)).toFixed(1); }); });
  // IV
  const vol = $('ivVolume'), time = $('ivTime'), drop = $('ivDropFactor'), out = $('ivFlowRate');
  [vol,time,drop].forEach(el=>{ if(el) el.addEventListener('input', ()=>{ if(!vol||!time||!out) return; const V=parseFloat(vol.value), T=parseFloat(time.value), D=parseFloat(drop.value); if(!isFinite(V)||!isFinite(T)||T<=0){ out.value=''; return; } const mlPerHr = V / T; const timeMin = T*60; let gtt = null; if(isFinite(D)&&D>0) gtt = Math.round((V*D)/timeMin); out.value = `${mlPerHr.toFixed(1)} mL/hr${gtt!==null ? ' — '+gtt+' gtt/min' : ''}`; }); });
}
window.addEventListener('load', ()=> setupBMIandIV());

// View/Edit/Delete/Print
window.viewPatient = function(index){
  const p = patients[index]; if(!p) return toast('Patient not found','error');
  const mb = $('modalBody'); if(!mb) return toast('Modal missing','info');
  mb.innerHTML = renderPatientHTML(p);
  $('modal').classList.remove('hidden');
};
window.closeModal = function(){ $('modal') && $('modal').classList.add('hidden'); };

window.editPatient = async function(index){
  const p = patients[index]; if(!p) return toast('Patient not found','error');
  selectedPatientId = p.id;
  // role-sensitive: nurse limited to vitals & nurse notes
  if(currentRole === 'nurse'){
    vitalsRows = Array.isArray(p.vitals)?p.vitals.slice():[];
    uploadedLabs = Array.isArray(p.labFiles)?p.labFiles.slice():[];
    renderVitalsTable(); renderLabFiles();
    const nf = $('form-nurse'); if(nf && nf.elements['nurse_f']) nf.elements['nurse_f'].value = p.nurse_f || '';
    document.querySelector('.navbtn[data-target="tab-vitals"]').click();
    toast('Loaded vitals & nurse notes for editing','info'); return;
  }
  // full load
  loadIntoForm('form-info', p); loadIntoForm('form-id', p); loadIntoForm('form-history', p);
  loadIntoForm('form-assessment', p); loadIntoForm('form-labs', p); loadIntoForm('form-meds', p); loadIntoForm('form-nurse', p);
  loadIntoForm('form-doctor', p); loadIntoForm('form-plan', p);
  // medOrders
  const tbody = $('medTableBody'); if(tbody){ tbody.innerHTML=''; if(Array.isArray(p.medOrders)){ p.medOrders.forEach(m=>{ const tr = document.createElement('tr'); tr.innerHTML = `<td><input name="drug" value="${escapeHtml(m.drug||'')}" class="w-full rounded border px-2 py-1"/></td><td><input name="dosage" value="${escapeHtml(m.dosage||'')}" class="w-full rounded border px-2 py-1"/></td><td><input name="route" value="${escapeHtml(m.route||'')}" class="w-full rounded border px-2 py-1"/></td><td><input name="frequency" value="${escapeHtml(m.frequency||'')}" class="w-full rounded border px-2 py-1"/></td><td><button type="button" class="btn-remove-row">🗑️</button></td>`; tbody.appendChild(tr); }); } }
  vitalsRows = Array.isArray(p.vitals)?p.vitals.slice():[]; uploadedLabs = Array.isArray(p.labFiles)?p.labFiles.slice():[]; renderVitalsTable(); renderLabFiles();
  document.querySelector('.navbtn[data-target="tab-info"]').click();
  toast('Loaded patient for editing','info');
};

window.deletePatient = async function(index){
  const p = patients[index]; if(!p) return toast('Patient not found','error');
  if(!confirm('Delete this patient? This action cannot be undone.')) return;
  try{ await db.collection('patients').doc(p.id).delete(); await loadPatients(); toast('Patient deleted','success'); }catch(e){ console.error(e); toast('Delete failed','error'); }
};

// Render patient HTML for modal (keeps original structure but styled)
function renderPatientHTML(p){
  const parts = [];
  parts.push(`<div class="p-4"><div class="flex justify-between items-start"><div><h3 class="text-xl font-bold">${escapeHtml(p.name||'-')}</h3><div class="text-sm text-slate-500">${escapeHtml(p.physician||'')}</div></div><div><button class="px-3 py-1 rounded bg-white/90" onclick="closeModal()">Close</button></div></div><hr class="my-3">`);
  parts.push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3"><div><strong>Diagnosis:</strong> ${escapeHtml(p.initialDiagnosis||'-')}</div><div><strong>Room/Bed:</strong> ${escapeHtml(p.roomNo||'-')} ${p.bedNo?('/ '+escapeHtml(p.bedNo)):''}</div></div>`);
  if(p.labFiles && Array.isArray(p.labFiles) && p.labFiles.length){
    parts.push('<div class="mb-3"><strong>Lab Files:</strong><ul class="list-disc pl-5">');
    p.labFiles.forEach(f=> parts.push(`<li><a href="${f.url}" target="_blank" class="text-sky-600">${escapeHtml(f.name)}</a></li>`));
    parts.push('</ul></div>');
  }
  parts.push('</div>');
  return parts.join('');
}

// Print (modal only)
qsa('#printRecordBtn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const modalBody = $('modalBody');
    if(!modalBody){ toast('No patient record to print','error'); return; }
    const printContents = modalBody.innerHTML;
    const win = window.open('', '', 'width=900,height=650');
    const headerHtml = `<div style="display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #1E3A8A;padding-bottom:8px;margin-bottom:12px"><div style="display:flex;align-items:center;gap:12px"><img src="" style="height:48px;object-fit:contain"/><div style="font-weight:800;color:#1E3A8A;font-size:18px">ONE CARE SYSTEM</div></div><div style="text-align:right;font-size:13px">Printed: ${new Date().toLocaleString()}</div></div>`;
    win.document.write(`<html><head><title>Patient Record</title><style>body{font-family:Arial,Helvetica,sans-serif;padding:20px;color:#111} h1{font-size:20px}@media print{button{display:none}}</style></head><body>${headerHtml}${printContents}</body></html>`);
    win.document.close(); win.focus(); win.print();
  });
});

// Breadcrumb & nav wiring
qsa('.navbtn').forEach(b=> b.addEventListener('click', ()=>{
  const target = b.dataset.target;
  qsa('.panel').forEach(p => { if(p.id === target) p.classList.remove('hidden'); else p.classList.add('hidden'); });
  qsa('.navbtn').forEach(btn => btn.classList.toggle('bg-sky-50', btn.dataset.target===target));
  const bc = $('breadcrumb-current'); if(bc) bc.textContent = b.textContent.trim();
}));

// Dark toggle
$('darkToggle') && $('darkToggle').addEventListener('click', ()=>{ document.documentElement.classList.toggle('dark'); });

// Login modal behavior
$('loginBtn') && $('loginBtn').addEventListener('click', async ()=>{
  const email = $('loginEmail').value.trim(), pass = $('loginPass').value;
  if(!email||!pass) return toast('Enter email and password','error');
  try{ await auth.signInWithEmailAndPassword(email, pass); toast('Signed in','success'); } catch(e){ toast(e.message||'Login failed','error'); }
});
$('loginCancel') && $('loginCancel').addEventListener('click', ()=>{ $('loginModal') && $('loginModal').classList.add('hidden'); });

// Logout
$('btnLogout') && $('btnLogout').addEventListener('click', async ()=>{ try{ await auth.signOut(); toast('Signed out','info'); }catch(e){ toast('Sign out failed','error'); }});

// Clear buttons (reset forms)
['clearInfo','clearID','clearHistory','clearLabs','clearMeds','clearVitals','clearDoctor','clearPlan','clearDoctor','clearNotes'].forEach(id=>{
  const node = $(id); if(!node) return;
  node.addEventListener('click', ()=>{
    const fid = 'form-' + id.replace('clear','').toLowerCase();
    const f = document.getElementById(fid);
    if(f) f.reset();
    if(id==='clearVitals'){ vitalsRows=[]; renderVitalsTable(); }
    if(id==='clearLabs'){ uploadedLabs=[]; renderLabFiles(); }
  });
});

// Init: default show dashboard
(function(){ const def = document.querySelector('.navbtn[data-target="tab-dashboard"]'); def && def.click(); })();

// Load patients if already signed in (rare)
if(auth.currentUser) loadPatients();
