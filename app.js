// app.js - Full application logic (paste into app.js)
// -------------------- Firebase init --------------------
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

// -------------------- App state --------------------
let currentUser = null;
let currentRole = 'guest';
let patients = [];
let selectedPatientId = null;
let vitalsRows = [];
let uploadedLabs = [];
let isSaving = false;

// -------------------- Helpers --------------------
const $ = id => document.getElementById(id);
function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }
function nowTs() { return firebase.firestore.FieldValue.serverTimestamp(); }
function toast(message, type='info', timeout=3500) {
  // types: info (blue), success (green), error (red)
  const colors = { info: 'bg-sky-600', success: 'bg-emerald-600', error: 'bg-rose-600' };
  const t = document.createElement('div');
  t.className = `fixed right-6 bottom-6 text-white px-4 py-2 rounded shadow-lg ${colors[type] || colors.info} opacity-0 transform translate-y-4`;
  t.style.transition = 'opacity 220ms ease, transform 220ms ease';
  t.textContent = message;
  document.body.appendChild(t);
  // animate in
  requestAnimationFrame(()=> { t.style.opacity = '1'; t.style.transform = 'translateY(0)'; });
  setTimeout(()=> {
    t.style.opacity = '0'; t.style.transform = 'translateY(16px)';
    setTimeout(()=> t.remove(), 260);
  }, timeout);
}

// escape
function esc(s){ if(s===null||s===undefined) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// safe addEventListener
function on(id, event, fn){
  const el = $(id);
  if(el) el.addEventListener(event, fn);
}

// safe query add
function onSel(sel, event, fn){
  qsa(sel).forEach(el=>el.addEventListener(event, fn));
}

// read form into object (keeps empty strings too)
function readForm(formId){
  const f = $(formId);
  if(!f) return {};
  const fd = new FormData(f);
  const obj = {};
  for(const [k,v] of fd.entries()) obj[k] = v;
  return obj;
}

// populate simple fields into form (matching element names)
function fillForm(formId, data){
  const f = $(formId);
  if(!f || !data) return;
  Object.keys(data).forEach(k=>{
    if(f.elements[k]) {
      try { f.elements[k].value = data[k] === undefined || data[k] === null ? '' : data[k]; } catch(e){}
    }
  });
}

// -------------------- Auth & Role --------------------
auth.onAuthStateChanged(async user => {
  currentUser = user;
  if(user){
    // lookup role
    try{
      const uq = await db.collection('users').where('email','==', user.email).limit(1).get();
      if(!uq.empty) currentRole = (uq.docs[0].data().role || 'guest').toLowerCase(); else currentRole = 'guest';
    }catch(e){ console.warn('role lookup failed', e); currentRole = 'guest'; }
    renderUserBadge();
    applyRoleUI();
    // hide login modal if present
    const loginModal = $('loginModal'); if(loginModal) loginModal.classList.add('hidden');
    await loadPatients();
  } else {
    currentRole = 'guest';
    renderUserBadge();
    applyRoleUI();
    // show login modal if present
    const loginModal = $('loginModal'); if(loginModal) loginModal.classList.remove('hidden');
    patients = []; renderPatients([]);
  }
});

// render user badge/email
function renderUserBadge(){
  const ui = $('userInfo');
  if(!ui) return;
  ui.innerHTML = '';
  if(!currentUser) { ui.innerHTML = '<div class="text-sm text-white/80">Not signed in</div>'; return; }
  const b = document.createElement('div'); b.className='px-3 py-1 rounded-full bg-white/10 text-white font-semibold'; b.textContent = 'USER';
  const t = document.createElement('div'); t.className='text-sm text-white/90'; t.innerHTML = `<div class="font-medium">${esc(currentUser.email)}</div><div class="text-xs opacity-60">${(currentRole||'guest').toUpperCase()}</div>`;
  ui.appendChild(b); ui.appendChild(t);
}

// enable/hide UI based on role
function applyRoleUI(){
  const newBtn = $('btnNew'); if(newBtn) { if(['admin','doctor','nurse'].includes(currentRole)) newBtn.classList.remove('hidden'); else newBtn.classList.add('hidden'); }
  // you can add more granular control here (disable delete for nurses etc.)
}

// -------------------- Load & Render Patients --------------------
async function loadPatients(){
  patients = [];
  try{
    const snap = await db.collection('patients').orderBy('updatedAt','desc').get();
    snap.forEach(d => patients.push({ id: d.id, ...d.data() }));
    renderPatients(patients);
    updateStats();
  }catch(e){ console.error(e); toast('Failed to load patients', 'error'); }
}

function updateStats(){
  const total = patients.length;
  const inP = patients.filter(p => p.patientStatus === 'Inpatient').length;
  const outP = patients.filter(p => p.patientStatus === 'Outpatient').length;
  if($('totalPatients')) $('totalPatients').textContent = total;
  if($('inPatients')) $('inPatients').textContent = inP;
  if($('outPatients')) $('outPatients').textContent = outP;
  if($('count')) $('count').textContent = total;
}

function renderPatients(list){
  const container = $('patientsContainer');
  if(!container) return;
  container.innerHTML = '';
  (list||[]).forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'p-4 rounded-xl glass soft-shadow flex flex-col';
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <div>
          <div class="font-semibold">${esc(p.name||p.fullname||'—')}</div>
          <div class="text-sm text-slate-500">${esc(p.physician||'')}</div>
        </div>
        <div class="text-sm">${p.patientStatus==='Inpatient'?'<span class="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Inpatient</span>':'<span class="px-2 py-1 rounded-full bg-amber-100 text-amber-700">Outpatient</span>'}</div>
      </div>`;
    const actions = document.createElement('div'); actions.className='mt-3 flex gap-2';
    const view = document.createElement('button'); view.className='px-3 py-1 rounded bg-white text-slate-700'; view.textContent='View'; view.onclick = ()=> viewPatient(idx);
    const edit = document.createElement('button'); edit.className='px-3 py-1 rounded bg-white text-slate-700'; edit.textContent='Edit'; edit.onclick = ()=> editPatient(idx);
    const del = document.createElement('button'); del.className='px-3 py-1 rounded bg-white text-slate-700'; del.textContent='Delete'; del.onclick = ()=> deletePatient(idx);
    actions.appendChild(view); actions.appendChild(edit); actions.appendChild(del);
    card.appendChild(actions);
    container.appendChild(card);
  });
  if($('count')) $('count').textContent = (list||[]).length;
}

// -------------------- Search & Sort --------------------
const searchEl = $('searchTop');
if(searchEl) searchEl.addEventListener('input', e=>{
  const q = e.target.value.trim().toLowerCase();
  if(!q) return renderPatients(patients);
  const filtered = patients.filter(p => {
    return [p.name,p.physician,p.roomNo,(p.bedNo||'')].filter(Boolean).some(v => String(v).toLowerCase().includes(q));
  });
  renderPatients(filtered);
});

// -------------------- New Patient flow --------------------
if($('btnNew')) $('btnNew').addEventListener('click', ()=>{
  selectedPatientId = null;
  // reset all forms
  qsa('form').forEach(f => f.reset());
  vitalsRows = []; uploadedLabs = [];
  renderVitalsTable(); renderLabFiles();
  updateUploadButtonState();
  // show patient info tab
  const btn = document.querySelector('.navbtn[data-target="tab-info"]');
  if(btn) btn.click();
  toast('New patient - fill Patient Information and click Save Info', 'info');
});

// -------------------- Save per-tab handlers --------------------
const saveMap = {
  info: 'form-info',
  id: 'form-id',
  history: 'form-history',
  assessment: 'form-assessment',
  labs: 'form-labs',
  meds: 'form-meds',
  vitals: 'form-vitals',
  nurse: 'form-nurse',
  doctor: 'form-doctor',
  plan: 'form-plan'
};

qsa('[data-save]').forEach(btn => {
  btn.addEventListener('click', async (ev) => {
    // prevent default form submission which would reload the page
    if(ev && typeof ev.preventDefault === 'function') ev.preventDefault();
    const key = btn.dataset.save;
    const fid = saveMap[key];
    if(!fid) return;
    const form = $(fid);
    const data = readForm(fid);
    // attach complex fields
    if(key === 'vitals') data.vitals = vitalsRows.slice();
    if(key === 'labs') data.labFiles = uploadedLabs.slice();
    if(key === 'meds') {
      // collect medication table
      const meds = [];
      qsa('#medTableBody tr').forEach(tr => {
        const inputs = Array.from(tr.querySelectorAll('input'));
        if(inputs.length>=4){
          meds.push({ drug: inputs[0].value, dosage: inputs[1].value, route: inputs[2].value, frequency: inputs[3].value });
        }
      });
      data.medOrders = meds;
    }
    // validation for info
    if(key === 'info' && (!data.name || !data.initialDiagnosis)) {
      return toast('Please enter patient name and initial diagnosis', 'error');
    }
    // require sign-in to save
    if(!currentUser) return toast('Sign in to save', 'error');
    if(isSaving) return toast('Save already in progress', 'info');
    isSaving = true; btn.disabled = true;
    try{
      await saveTabData(key, data);
      toast('Saved • ' + (key==='info' ? 'Patient Info' : key), 'success');
    }catch(e){
      console.error(e); toast('Save failed: ' + (e.message||e.code), 'error');
    } finally {
      isSaving = false; btn.disabled = false;
    }
  });
});

async function saveTabData(tabKey, data){
  const meta = { updatedAt: nowTs(), updatedBy: currentUser ? currentUser.email : '' };
  if(!selectedPatientId){
    // create new
    const docRef = await db.collection('patients').add({ ...data, createdAt: nowTs(), ...meta });
    selectedPatientId = docRef.id;
    // newly created patient - enable upload
    updateUploadButtonState();
  } else {
    // merge
    await db.collection('patients').doc(selectedPatientId).set({ ...data, ...meta }, { merge: true });
  }
  // reload patients
  await loadPatients();
}

// -------------------- Lab uploads --------------------
if($('uploadLabBtn')) $('uploadLabBtn').addEventListener('click', async (ev)=>{
  ev && ev.preventDefault && ev.preventDefault();
  // guard: require a selected patient before uploading
  if(!selectedPatientId) return toast('Save patient first before uploading lab files', 'error');
  const fileEl = $('labFileInput'); if(!fileEl || !fileEl.files || fileEl.files.length===0) return toast('Select a file to upload', 'error');
  const file = fileEl.files[0];

  // client-side validation
  const MAX_BYTES = 10 * 1024 * 1024; // 10 MB
  const allowedTypes = ['application/pdf'];
  if(file.type && file.type.startsWith('image/')) allowedTypes.push(file.type);
  // simple check: allow images and pdf
  const isImage = file.type && file.type.startsWith('image/');
  const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
  if(!isImage && !isPdf) return toast('Only image files and PDFs are allowed', 'error');
  if(file.size > MAX_BYTES) return toast('File is too large (max 10 MB)', 'error');

  const uplBtn = $('uploadLabBtn');
  const progWrap = $('uploadProgress');
  const progBar = $('uploadProgressBar');
  const progText = $('uploadProgressText');

  try{
    // prepare UI
    if(uplBtn) { uplBtn.setAttribute('disabled','disabled'); uplBtn.classList.add('opacity-50'); }
    if(progWrap) progWrap.classList.remove('hidden');
    if(progBar) { progBar.style.width = '0%'; }
    if(progText) progText.textContent = '0%';

    const path = `labs/${selectedPatientId}/${Date.now()}_${file.name}`;
    const ref = storage.ref(path);
    const uploadTask = ref.put(file);

    // monitor progress
    const progressPromise = new Promise((resolve, reject) => {
      uploadTask.on('state_changed', snapshot => {
        const pct = snapshot.totalBytes ? Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100) : 0;
        if(progBar) progBar.style.width = pct + '%';
        if(progText) progText.textContent = pct + '%';
      }, err => {
        reject(err);
      }, async () => {
        try{
          const url = await ref.getDownloadURL();
          resolve(url);
        }catch(e){ reject(e); }
      });
    });

    const url = await progressPromise;
    uploadedLabs.push({ name: file.name, url, type: file.type || '' });
    renderLabFiles();
    fileEl.value = '';
    toast('File uploaded', 'success');
  }catch(e){ console.error(e); toast('Upload failed: ' + (e.message||e.code), 'error'); }
  finally{
    if(uplBtn) { uplBtn.removeAttribute('disabled'); uplBtn.classList.remove('opacity-50'); }
    // hide progress after short delay
    setTimeout(()=>{ const progWrap = $('uploadProgress'); if(progWrap) progWrap.classList.add('hidden'); }, 800);
  }
});

// enable/disable upload button depending on whether there's a saved patient
function updateUploadButtonState(){
  const upl = $('uploadLabBtn');
  if(!upl) return;
  if(selectedPatientId) { upl.removeAttribute('disabled'); upl.classList.remove('opacity-50'); }
  else { upl.setAttribute('disabled','disabled'); upl.classList.add('opacity-50'); }
}

function renderLabFiles(){
  const list = $('labFilesList'); if(!list) return;
  list.innerHTML = '';
  if(uploadedLabs.length === 0) { list.innerHTML = '<div class="text-sm text-slate-400">No lab files uploaded.</div>'; return; }
  uploadedLabs.forEach((f,i)=>{
    const wrap = document.createElement('div'); wrap.className='flex items-center gap-2';
    const preview = (f.type && f.type.startsWith('image/')) ? `<img src="${f.url}" class="w-20 h-14 object-cover rounded" />` : `<div class="w-20 h-14 flex items-center justify-center bg-white/40 rounded">📄</div>`;
    wrap.innerHTML = preview + `<div class="flex flex-col"><a href="${f.url}" target="_blank" class="font-semibold text-sky-600">${esc(f.name)}</a><button class="text-sm text-rose-600 mt-1" onclick="removeLabFile(${i})">Remove</button></div>`;
    list.appendChild(wrap);
  });
}
window.removeLabFile = function(i){ uploadedLabs.splice(i,1); renderLabFiles(); }

// -------------------- Medication table utilities --------------------
if($('addMedRow')) $('addMedRow').addEventListener('click', ()=>{
  const tbody = $('medTableBody'); if(!tbody) return;
  const tr = document.createElement('tr');
  tr.innerHTML = `<td><input name="drug" class="w-full"/></td><td><input name="dosage" class="w-full"/></td><td><input name="route" class="w-full"/></td><td><input name="frequency" class="w-full"/></td><td><button type="button" class="btn-remove-row">🗑️</button></td>`;
  tbody.appendChild(tr);
});
document.addEventListener('click', e => {
  if(e.target && e.target.classList.contains('btn-remove-row')) e.target.closest('tr').remove();
});

// -------------------- Vitals table utilities --------------------
if($('btnAddVitals')) $('btnAddVitals').addEventListener('click', ()=>{
  const f = $('form-vitals');
  const row = { date: f && f.v_date ? f.v_date.value : '', time: f && f.v_time ? f.v_time.value : '', temp:'', pulse:'', bp:'', by:'' };
  vitalsRows.push(row); renderVitalsTable();
  if(f && f.v_date) f.v_date.value=''; if(f && f.v_time) f.v_time.value='';
});
function renderVitalsTable(){
  const tbody = $('vitalsTableBody'); if(!tbody) return; tbody.innerHTML = '';
  vitalsRows.forEach((r,i)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${esc(r.date)}</td><td>${esc(r.time)}</td><td>${esc(r.temp||'')}</td><td>${esc(r.pulse||'')}</td><td>${esc(r.bp||'')}</td><td>${esc(r.by||'')}</td><td><button class="px-2 py-1 rounded bg-white/80" onclick="removeVitalsRow(${i})">Del</button></td>`;
    tbody.appendChild(tr);
  });
}
window.removeVitalsRow = function(i){ vitalsRows.splice(i,1); renderVitalsTable(); }

// -------------------- BMI and IV Calculation helpers --------------------
function setupBMIandIV(){
  // BMI - form-info fields: weight, height, bmi
  const w = document.querySelector('#form-info input[name="weight"]');
  const h = document.querySelector('#form-info input[name="height"]');
  const bmi = document.querySelector('#form-info input[name="bmi"]');
  // helper to compute and display BMI and category
  function computeAndDisplayBMI(){
    if(!w || !h || !bmi) return;
    const W = parseFloat(w.value);
    const H = parseFloat(h.value);
    const catEl = document.getElementById('info_bmiCategory');
    if(!isFinite(W) || !isFinite(H) || H <= 0) {
      bmi.value = '';
      if(catEl) { catEl.textContent = ''; catEl.className = ''; }
      return;
    }
    const val = (W / Math.pow(H/100,2));
    const rounded = val.toFixed(1);
    bmi.value = rounded;
    // determine category
    const num = parseFloat(rounded);
    let label = '';
    let cls = '';
    if(num < 18.5) { label = 'Underweight'; cls = 'text-sky-600'; }
    else if(num < 25.0) { label = 'Normal'; cls = 'text-emerald-600'; }
    else if(num < 30.0) { label = 'Overweight'; cls = 'text-amber-600'; }
    else { label = 'Obese'; cls = 'text-rose-600'; }
    if(catEl) { catEl.textContent = label; catEl.className = cls + ' font-semibold'; }
  }

  [w,h].forEach(el => { if(el) el.addEventListener('input', computeAndDisplayBMI); });
  // expose for external callers (e.g. when filling form programmatically)
  window.computeAndDisplayBMI = computeAndDisplayBMI;

  // IV calc - optional fields ids ivVolume, ivTime, ivDropFactor, ivFlowRate
  const vol = $('ivVolume'), time = $('ivTime'), drop = $('ivDropFactor'), out = $('ivFlowRate');
  [vol,time,drop].forEach(el => { if(el) el.addEventListener('input', ()=> {
    if(!vol || !time || !out) return;
    const V = parseFloat(vol.value), T = parseFloat(time.value), D = parseFloat(drop.value);
    if(!isFinite(V) || !isFinite(T) || T <= 0) { out.value=''; return; }
    const mlPerHr = V / T;
    const timeMin = T * 60;
    let gttPerMin = null;
    if(isFinite(D) && D > 0) gttPerMin = Math.round((V * D) / timeMin);
    out.value = `${mlPerHr.toFixed(1)} mL/hr${gttPerMin!==null ? ' — '+gttPerMin + ' gtt/min' : ''}`;
  })});
}
window.addEventListener('load', ()=> setupBMIandIV());

// -------------------- View, Edit, Delete, Print --------------------
window.viewPatient = function(index){
  const p = patients[index];
  if(!p) return toast('Patient not found', 'error');
  // open modal or show details - use existing modal placeholder if you want
  const modal = $('modalBody'); if(!modal) { toast('Modal not present', 'info'); return; }
  modal.innerHTML = `
    <div class="p-4">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-xl font-bold">${esc(p.name||'')}</h3>
          <div class="text-sm text-slate-500">${esc(p.physician||'')}</div>
        </div>
        <div><button class="px-3 py-1 rounded bg-white/90" onclick="closeModal()">Close</button></div>
      </div>
      <hr class="my-3" />
      <div><strong>Diagnosis:</strong> ${esc(p.initialDiagnosis||'')}</div>
      <div class="mt-2"><strong>Room/Bed:</strong> ${esc(p.roomNo||'-')} ${p.bedNo?('/ '+esc(p.bedNo)):''}</div>
    </div>`;
  const parent = $('modal'); if(parent) parent.classList.remove('hidden');
};
window.closeModal = function(){ const parent = $('modal'); if(parent) parent.classList.add('hidden'); };

window.editPatient = function(index){
  const p = patients[index]; if(!p) return toast('Patient not found', 'error');
  selectedPatientId = p.id;
  // fill forms
  fillForm('form-info', p);
  fillForm('form-id', p);
  fillForm('form-history', p);
  fillForm('form-assessment', p);
  fillForm('form-labs', p);
  fillForm('form-meds', p);
  fillForm('form-nurse', p);
  fillForm('form-doctor', p);
  fillForm('form-plan', p);
  // meds:
  if(p.medOrders && Array.isArray(p.medOrders)){
    const tbody = $('medTableBody'); if(tbody){ tbody.innerHTML = ''; p.medOrders.forEach(m=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td><input name="drug" value="${esc(m.drug||'')}" class="w-full"/></td><td><input name="dosage" value="${esc(m.dosage||'')}" class="w-full"/></td><td><input name="route" value="${esc(m.route||'')}" class="w-full"/></td><td><input name="frequency" value="${esc(m.frequency||'')}" class="w-full"/></td><td><button type="button" class="btn-remove-row">🗑️</button></td>`;
      tbody.appendChild(tr);
    }) }
  }
  // vitals and labs
  vitalsRows = Array.isArray(p.vitals) ? p.vitals.slice() : [];
  uploadedLabs = Array.isArray(p.labFiles) ? p.labFiles.slice() : [];
  renderVitalsTable(); renderLabFiles();
  updateUploadButtonState();
  // compute BMI category if values present
  try{ if(window.computeAndDisplayBMI) window.computeAndDisplayBMI(); }catch(e){}
  // switch to info tab
  const btn = document.querySelector('.navbtn[data-target="tab-info"]'); if(btn) btn.click();
  toast('Loaded patient for editing', 'info');
};

window.deletePatient = async function(index){
  const p = patients[index]; if(!p) return toast('Patient not found', 'error');
  if(!confirm('Delete this patient? This cannot be undone.')) return;
  try{
    await db.collection('patients').doc(p.id).delete();
    await loadPatients();
    toast('Patient deleted', 'success');
  }catch(e){ console.error(e); toast('Delete failed', 'error'); }
};

function printPatient(p){
  // if no patient provided, use selectedPatientId
  if(!p && selectedPatientId){
    p = patients.find(x=>x.id===selectedPatientId);
  }
  if(!p) return toast('No patient selected', 'error');
  const w = window.open('', '_blank');
  const html = `
  <html><head><title>${esc(p.name||'Patient record')}</title>
    <style>
      body{font-family:Arial,Helvetica,sans-serif;padding:20px;color:#111}
      h1{font-size:20px}
      .section{margin-bottom:12px}
    </style>
  </head><body>
    <h1>ONE CARE SYSTEM — Patient Record</h1>
    <div class="section"><strong>Name:</strong> ${esc(p.name||'')}</div>
    <div class="section"><strong>Diagnosis:</strong> ${esc(p.initialDiagnosis||'')}</div>
    <div class="section"><strong>Admission Date:</strong> ${esc(p.admissionDate||'')}</div>
    <hr/>
  </body></html>`;
  w.document.write(html); w.document.close(); w.print();
}

// -------------------- Breadcrumb & Dark toggle --------------------
qsa('.navbtn').forEach(b => b.addEventListener('click', ()=>{
  const txt = b.textContent.trim();
  const bc = $('breadcrumb-current'); if(bc) bc.textContent = txt;
}));

if($('darkToggle')) $('darkToggle').addEventListener('click', ()=>{
  document.documentElement.classList.toggle('dark');
  // smooth transition handled by CSS
});

// -------------------- Login modal logic (modern toasts used) --------------------
if($('loginBtn')) $('loginBtn').addEventListener('click', async ()=>{
  const email = $('loginEmail').value.trim(), pass = $('loginPass').value;
  if(!email || !pass) return toast('Enter email and password', 'error');
  try{ await auth.signInWithEmailAndPassword(email, pass); toast('Signed in', 'success'); } catch(e){ toast(e.message || 'Sign-in failed', 'error'); }
});
if($('loginCancel')) $('loginCancel').addEventListener('click', ()=>{ const m = $('loginModal'); if(m) m.classList.add('hidden'); });

// -------------------- Misc initial wiring --------------------
// default show dashboard panel (if nav exists)
(function initNav(){
  const navbtns = qsa('.navbtn');
  function showPanel(id){
    qsa('.panel').forEach(p => { if(p.id === id) p.classList.remove('hidden'); else p.classList.add('hidden'); });
    navbtns.forEach(b => b.classList.toggle('bg-sky-50', b.dataset.target===id));
  }
  navbtns.forEach(b => b.addEventListener('click', ()=> showPanel(b.dataset.target)));
  // default to dashboard
  const def = document.querySelector('.navbtn[data-target="tab-dashboard"]');
  if(def) def.click();
})();

// load initial patients if already signed in
if(auth.currentUser) loadPatients();
