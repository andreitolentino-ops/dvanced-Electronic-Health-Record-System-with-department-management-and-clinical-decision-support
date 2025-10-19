// app.js - merged inline scripts from original index.html

function addMedRow() {
          const tbody = document.getElementById('medTableBody');
          const row = document.createElement('tr');
          row.innerHTML = `
            <td><input name="drug" placeholder="e.g., Paracetamol"></td>
            <td><input name="dosage" placeholder="e.g., 1g"></td>
            <td><input name="route" placeholder="e.g., IV"></td>
            <td><input name="frequency" placeholder="e.g., Q4"></td>
            <td><input name="adminBy" placeholder="e.g., MDSE"></td>
            <td><input name="orderedBy" placeholder="e.g., Dr. S. Hernandez"></td>
            <td><button type="button" class="btn btn-ghost" onclick="removeMedRow(this)">🗑️</button></td>
          `;
          tbody.appendChild(row);
        }
        function removeMedRow(btn) {
          btn.closest('tr').remove();
        }

/* =========================
   Firebase initialization
   ========================= */
const firebaseConfig = {
  apiKey: "AIzaSyAojqcg_UGpamJjTJHb6H-BRoVF5mDZgrU",
  authDomain: "one-care-system.firebaseapp.com",
  projectId: "one-care-system",
  storageBucket: "one-care-system.appspot.com",
  messagingSenderId: "982635756225",
  appId: "1:982635756225:web:c664f162b735b56703f240",
  measurementId: "G-CB5Y0R9K90"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

/* =========================
   App state
   ========================= */
let selectedPatientId = null;
let patients = [];
let vitalsRows = [];
let uploadedLabs = []; // { name, url, type }
let currentUser = null;
let currentRole = 'guest'; // 'admin' | 'doctor' | 'nurse' | 'guest'
let isSaving = false;

/* =========================
   Helpers
   ========================= */
function el(id){ return document.getElementById(id); }
function showToast(msg, ms=3000){ const t = el('toast'); t.textContent = msg; t.style.display = 'block'; setTimeout(()=> t.style.display = 'none', ms); }
function showLoading(show=true){ const l = el('loading'); if(show) l.classList.add('show'); else l.classList.remove('show'); }
function escapeHtml(s){ if(!s && s!==0) return ''; return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }
function readForm(formEl){ const fd = new FormData(formEl); const obj = {}; for(const [k,v] of fd.entries()) obj[k]=v; return obj; }

/* =========================
   Dark mode & Sidebar persistence
   ========================= */
function applyPreferredTheme(){
  const pref = localStorage.getItem('ocs_theme') || 'light';
  if(pref === 'dark'){ document.body.classList.add('dark'); el('darkToggle').textContent = '☀️'; } else { document.body.classList.remove('dark'); el('darkToggle').textContent = '🌙'; }
}
applyPreferredTheme();
document.getElementById('darkToggle').addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  localStorage.setItem('ocs_theme', dark ? 'dark' : 'light');
  document.getElementById('darkToggle').textContent = dark ? '☀️' : '🌙';
});

/* sidebar toggle */
document.getElementById('sidebarToggle').addEventListener('click', ()=>{
  document.body.classList.toggle('sidebar-collapsed');
  localStorage.setItem('ocs_sidebar_collapsed', document.body.classList.contains('sidebar-collapsed') ? '1' : '0');
});
if(localStorage.getItem('ocs_sidebar_collapsed')==='1') document.body.classList.add('sidebar-collapsed');

/* =========================
   Auth: sign in / sign out
   ========================= */
el('btnLogin').addEventListener('click', async ()=>{
  const email = el('loginEmail').value.trim();
  const pass = el('loginPass').value;
  el('loginError').style.display='none';
  if(!email || !pass){ el('loginError').textContent='Please enter email & password.'; el('loginError').style.display='block'; return; }
  try{ await auth.signInWithEmailAndPassword(email, pass); }catch(e){ el('loginError').textContent = e.message || 'Login failed'; el('loginError').style.display='block'; }
});

el('btnLogout').addEventListener('click', async ()=>{ try{ await auth.signOut(); location.reload(); } catch(e){ alert('Logout failed: '+(e.message||e.code)); } });

el('btnHelp').addEventListener('click', ()=>{ alert('Role setup guide: Add users to Firestore "users" collection with fields { email: "...", role: "admin|doctor|nurse" }'); });

/* onAuth state */
auth.onAuthStateChanged(async user => {
  if(user){
    currentUser = user;
    // determine role from 'users' collection by email
    try{
      const uq = await db.collection('users').where('email','==', user.email).limit(1).get();
      if(!uq.empty){
        const doc = uq.docs[0]; const data = doc.data();
        currentRole = (data && data.role) ? data.role.toLowerCase() : 'guest';
      } else {
        currentRole = 'guest';
      }
    }catch(e){
      console.error('Failed to read user role', e);
      currentRole = 'guest';
    }

    // show app
    el('loginScreen').style.display = 'none';
    el('app').style.display = 'block';
    document.querySelector('header').style.display = 'flex';

    // show user info + role
    const ui = el('userInfo'); ui.innerHTML = '';
    const b = document.createElement('div'); b.style.padding='6px 10px'; b.style.borderRadius='999px'; b.style.background= 'linear-gradient(90deg,var(--accent),#0b5cff)'; b.style.color='white'; b.style.fontWeight='700'; b.textContent='USER'; ui.appendChild(b);
    const e = document.createElement('div'); e.style.marginLeft='8px'; e.style.fontWeight='600'; e.innerHTML = `<div>${user.email}</div><div style="font-size:12px;opacity:0.9">${currentRole.toUpperCase()}</div>`; ui.appendChild(e);

    // apply role-specific UI
    applyRoleUI(currentRole);

    await loadPatients();
    document.querySelector('.navbtn[data-target="tab-dashboard"]').click();
  } else {
    currentUser = null; currentRole = 'guest';
    el('loginScreen').style.display='flex'; el('app').style.display = 'none'; document.querySelector('header').style.display = 'none';
  }
});

/* applyRoleUI: hide/disable elements based on role */
function applyRoleUI(role){
  // Default: hide everything restricted, then reveal as needed
  // New Patient button: only admin
  if(role !== 'admin') el('btnNew').classList.add('role-hidden'); else el('btnNew').classList.remove('role-hidden');

  // In patient cards: delete buttons will only be rendered for admin (render logic checks currentRole)
  // Edit: admin and doctor can edit; nurse cannot (nurses can still access vitals tab)
  // Notes: doctor can edit doctor notes; nurse cannot
  // On UI, disable doctorNotes if nurse
  if(role === 'nurse'){
    el('doctorNotes').setAttribute('disabled','true');
    el('saveNotesBtn').dataset.forRole = 'nurse';
  } else {
    el('doctorNotes').removeAttribute('disabled');
    delete el('saveNotesBtn').dataset.forRole;
  }
}

/* =========================
   Navigation
   ========================= */
const navBtns = document.querySelectorAll('.navbtn');
const pages = document.querySelectorAll('.tab-page');
navBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    navBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const t = btn.dataset.target;
    pages.forEach(p=> p.style.display = (p.id===t ? 'block' : 'none'));
    window.scrollTo(0,0);
  });
});

/* =========================
   Vitals handling + BMI
   ========================= */
function calculateBMI(){ const w = parseFloat(el('v_weight').value); const hcm = parseFloat(el('v_height').value); if(!isFinite(w) || !isFinite(hcm) || hcm<=0){ el('v_bmi').value=''; return; } const h = hcm/100; const bmi = w/(h*h); el('v_bmi').value = bmi.toFixed(1); if(el('info_bmi')) el('info_bmi').value = bmi.toFixed(1); }
['v_weight','v_height'].forEach(id=>{ const e = document.getElementById(id); if(e) e.addEventListener('input', calculateBMI); });

el('btnAddVitals').addEventListener('click', ()=>{
  const f = el('form-vitals');
  const row = { date: f.v_date.value || '', time: f.v_time.value || '', temp: f.v_temp.value || '', pulse: f.v_pulse.value || '', rr: f.v_rr.value || '', bp: f.v_bp.value || '', spo2: f.v_spo2.value || '', pain: f.v_pain.value || '', weight: f.v_weight.value || '', height: f.v_height.value || '', bmi: f.v_bmi.value || '', by: f.v_by.value || '', note: f.monitorNotes ? f.monitorNotes.value : '' };
  if(!row.date && !row.time && !row.temp && !row.bp && !row.pulse){ if(!confirm('Add empty vitals row?')) return; }
  vitalsRows.push(row); renderVitalsTable();
  f.v_temp.value=''; f.v_pulse.value=''; f.v_rr.value=''; f.v_bp.value=''; f.v_spo2.value=''; f.v_pain.value=''; f.v_weight.value=''; f.v_height.value=''; f.v_bmi.value=''; f.v_time.value='';
});
function renderVitalsTable(){ const tbody = el('vitalsTableBody'); tbody.innerHTML=''; vitalsRows.forEach((r,i)=>{ const tr = document.createElement('tr'); tr.innerHTML = `<td>${escapeHtml(r.date)}</td><td>${escapeHtml(r.time)}</td><td>${escapeHtml(r.temp)}</td><td>${escapeHtml(r.pulse)}</td><td>${escapeHtml(r.rr)}</td><td>${escapeHtml(r.bp)}</td><td>${escapeHtml(r.spo2)}</td><td>${escapeHtml(r.pain)}</td><td>${escapeHtml(r.by)}</td><td>${escapeHtml(r.note)}</td><td><button class="btn btn-ghost" onclick="removeVitalsRow(${i})">Del</button></td>`; tbody.appendChild(tr); }); }
window.removeVitalsRow = function(i){ vitalsRows.splice(i,1); renderVitalsTable(); }

/* =========================
   Lab upload (Storage) + preview
   ========================= */
const labInput = el('labFileInput');
const labFilesList = el('labFilesList');
el('uploadLabBtn').addEventListener('click', async ()=>{
  const file = labInput.files[0]; if(!file){ alert('Select a file first.'); return; }
  try{
    const path = `labs/${selectedPatientId || 'temp'}/${Date.now()}_${file.name}`;
    const storageRef = storage.ref(path);
    await storageRef.put(file);
    const url = await storageRef.getDownloadURL();
    uploadedLabs.push({ name: file.name, url, type: file.type || 'application/octet-stream' });
    renderLabFiles(); labInput.value=''; showToast('Lab uploaded (preview ready).');
  }catch(e){ alert('Upload failed: '+(e.message||e.code)); }
});
function renderLabFiles(){ labFilesList.innerHTML=''; if(uploadedLabs.length===0){ labFilesList.innerHTML = '<div class="small-muted">No lab files uploaded.</div>'; return; } uploadedLabs.forEach((f,i)=>{ const wrap = document.createElement('div'); wrap.className='lab-item'; const preview = (f.type && f.type.startsWith('image/')) ? `<img src="${f.url}" class="lab-thumb">` : `<div style="width:80px;height:80px;border-radius:8px;display:flex;align-items:center;justify-content:center;background:#fbfdfe;border:1px solid rgba(0,0,0,0.04);font-size:13px">📄</div>`; wrap.innerHTML = `${preview}<div style="display:flex;gap:6px;align-items:center"><a href="${f.url}" target="_blank" style="font-size:12px;color:var(--primary);font-weight:700">View</a><button class="btn btn-ghost" onclick="removeLabFile(${i})">🗑️</button></div>`; labFilesList.appendChild(wrap); }); }
window.removeLabFile = function(i){ uploadedLabs.splice(i,1); renderLabFiles(); }

/* =========================
   IV calculation
   ========================= */
function calculateIV(){ const vol = parseFloat(el('ivVolume').value); const timeHr = parseFloat(el('ivTime').value); const drop = parseFloat(el('ivDropFactor').value); if(isNaN(vol) || vol<=0 || isNaN(timeHr) || timeHr<=0){ el('ivFlowRate').value=''; return; } const mlPerHr = vol / timeHr; const timeMin = timeHr * 60; const gttPerMin = (!isNaN(drop) && drop>0) ? (vol * drop) / timeMin : null; let out = `${mlPerHr.toFixed(1)} mL/hr`; if(gttPerMin !== null) out += ` — ${Math.round(gttPerMin)} gtt/min`; el('ivFlowRate').value = out; }
['ivVolume','ivTime','ivDropFactor'].forEach(id=>{ const e = document.getElementById(id); if(e) e.addEventListener('input', calculateIV); });

/* =========================
   Firestore: basic CRUD for patients & saves
   ========================= */
/* =========================
   Role-based UI (Updated for full nurse access)
   ========================= */
function applyRoleUI(role) {
  // 🩺 Admin, Doctor, and Nurse all have full access
  if (role === 'admin' || role === 'doctor' || role === 'nurse') {
    el('btnNew').classList.remove('role-hidden');
    // Nurse can see everything but can't edit Doctor's notes
    if (role === 'nurse') {
      el('doctorNotes').setAttribute('disabled', 'true');
    } else {
      el('doctorNotes').removeAttribute('disabled');
    }
  } else {
    // Guests: minimal access
    el('btnNew').classList.add('role-hidden');
    el('doctorNotes').setAttribute('disabled', 'true');
  }
}

/* =========================
   Firestore: CRUD + Search + Role-enhanced Access
   ========================= */
async function loadPatients() {
  patients = [];
  showLoading(true);
  try {
    const q = db.collection('patients').orderBy('updatedAt', 'desc');
    const snap = await q.get();
    snap.forEach(d => patients.push({ id: d.id, ...d.data() }));
  } catch (e) {
    console.error('Load patients failed', e);
    showToast('Failed to load patients');
  }
  showLoading(false);
  renderPatients();
}

/* 🔍 SEARCH: filter by name / physician / room */
el('searchBoxTop').addEventListener('input', e => {
  const term = e.target.value.trim().toLowerCase();
  const filtered = term
    ? patients.filter(p =>
        [p.name, p.physician, p.roomNo]
          .filter(Boolean)
          .some(v => v.toLowerCase().includes(term))
      )
    : patients;
  renderPatients(filtered);
});

/* Render patients (supports filtered list) */
function renderPatients(list = patients) {
  const container = el('patientsContainer');
  container.innerHTML = '';
  list.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'card patient-card';
    card.innerHTML = `
      <div style="width:64px;height:64px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(90deg,var(--accent),#0b5cff);color:white;font-weight:800">
        ${p.name ? p.name.split(' ').map(s => s[0]).slice(0,2).join('') : '--'}
      </div>
      <div class="meta">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <strong>${escapeHtml(p.name || '—')}</strong>
            <div class="small-muted">${escapeHtml(p.address || '')}</div>
          </div>
          <div style="text-align:right">
            <div>${p.patientStatus === 'Inpatient'
              ? '<span class="badge in">Inpatient</span>'
              : '<span class="badge out">Outpatient</span>'}</div>
            <div class="small-muted" style="margin-top:6px">
              ${p.updatedAt ? new Date(p.updatedAt.seconds * 1000).toLocaleString() : ''}
            </div>
          </div>
        </div>
        <div style="display:flex;gap:12px;margin-top:8px;align-items:center">
          <div class="small-muted">${escapeHtml(((p.roomNo || '') + (p.bedNo ? ' / ' + p.bedNo : '')).trim() || '-')}</div>
          <div class="small-muted">${escapeHtml(p.physician || '-')}</div>
          <div class="small-muted">Last vitals: ${p.vitals && p.vitals.length
              ? (escapeHtml(p.vitals[p.vitals.length - 1].temp || '-') + ' °C / ' + escapeHtml(p.vitals[p.vitals.length - 1].bp || '-'))
              : '-'}</div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <button class="icon-btn" title="View" onclick="viewPatient(${idx})">🔍</button>
        ${(currentRole === 'admin' || currentRole === 'doctor' || currentRole === 'nurse')
          ? `<button class="icon-btn" title="Edit" onclick="editPatient(${idx})">✏️</button>` : ''}
        ${(currentRole === 'admin' || currentRole === 'doctor' || currentRole === 'nurse')
          ? `<button class="icon-btn" title="Delete" onclick="deletePatient(${idx})">🗑️</button>` : ''}
      </div>`;
    container.appendChild(card);
  });
  el('count').innerText = list.length;
}

/* Save handlers — nurses restricted only from doctorNotes */
const saveMap = { info:'form-info', assessment:'form-assessment', id:'form-id', history:'form-history', labs:'form-labs', meds:'form-meds', vitals:'form-vitals', nurse:'form-nurse', doctor:'form-doctor', plan:'form-plan' };
document.querySelectorAll('[data-save]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const tabKey = btn.dataset.save;
    const fid = saveMap[tabKey];
    if (!fid) return;
    const form = el(fid);
    const data = readForm(form);

    if (tabKey === 'notes' && currentRole === 'nurse') {
      const out = { nurseNotes: data.nurseNotes };
      await saveTabData(btn, out);
      return;
    }

    if (tabKey === 'vitals') data.vitals = vitalsRows.slice();
    if (tabKey === 'labs' && uploadedLabs.length > 0) data.labFiles = uploadedLabs.slice();
    if (tabKey === 'meds' && el('ivFlowRate').value) data.ivFlowRate = el('ivFlowRate').value;

    if (tabKey === 'info' && (!data.name || !data.initialDiagnosis)) {
      return showToast('Name and Initial Diagnosis are required.');
    }

    if (isSaving) return showToast('Save in progress...');
    isSaving = true; btn.disabled = true;
    try { await saveTabData(btn, data); }
    catch (e) { alert('Save failed: ' + (e.message || e.code)); }
    finally { isSaving = false; btn.disabled = false; }
  });
});

/* Save data helper */
async function saveTabData(btn, data) {
  const meta = { updatedAt: firebase.firestore.FieldValue.serverTimestamp(), updatedBy: currentUser ? currentUser.email : '' };
  if (!selectedPatientId) {
    const created = await db.collection('patients').add({ ...data, createdAt: firebase.firestore.FieldValue.serverTimestamp(), ...meta });
    selectedPatientId = created.id;
    showToast('Created new patient and saved.');
  } else {
    await db.collection('patients').doc(selectedPatientId).set({ ...data, ...meta }, { merge: true });
    showToast('Saved.');
  }
  if (btn.dataset.save === 'labs') uploadedLabs = [];
  await loadPatients();
}


/* =========================
   New patient & Clear handlers
   ========================= */
el('btnNew').addEventListener('click', ()=>{ selectedPatientId = null; document.querySelectorAll('form').forEach(f=>f.reset()); vitalsRows=[]; uploadedLabs=[]; renderVitalsTable(); renderLabFiles(); showToast('Creating new patient. Fill Patient Info and Save Info to create record.'); document.querySelector('.navbtn[data-target="tab-info"]').click(); });

['clearInfo','clearID','clearHistory','clearLabs','clearMeds','clearVitals','clearNotes','clearPlan'].forEach(id=>{ const node = document.getElementById(id); if(!node) return; node.addEventListener('click', ()=>{ const fid = 'form-'+id.replace('clear','').toLowerCase(); const f = document.getElementById(fid); if(f) f.reset(); if(id==='clearVitals'){ vitalsRows=[]; renderVitalsTable(); } if(id==='clearLabs'){ uploadedLabs=[]; renderLabFiles(); } }); });

/* =========================
   View / Edit / Delete patient
   ========================= */
window.viewPatient = function(index){ const p = patients[index]; if(!p) return alert('Patient not found'); el('modalBody').innerHTML = renderPatientHTML(p); el('modal').classList.add('show'); }
window.editPatient = async function(index){
  const p = patients[index]; if(!p) return alert('Patient not found');
  selectedPatientId = p.id;

  // Role-sensitive loading:
  if(currentRole === 'nurse'){
    // Nurses can only edit vitals and nurse notes — so only load those into their forms
    vitalsRows = Array.isArray(p.vitals)?p.vitals.slice():[];
    uploadedLabs = Array.isArray(p.labFiles)?p.labFiles.slice():[];
    renderVitalsTable(); renderLabFiles();
    // populate nurse notes only
    const notesForm = el('form-notes');
    if(notesForm) notesForm.elements['nurseNotes'].value = p.nurseNotes || '';
    // switch to vitals tab
    document.querySelector('.navbtn[data-target="tab-vitals"]').click();
    showToast('Loaded vitals & nurse notes for editing.');
    return;
  }

  // Admins & doctors: full load
  loadIntoForm('form-info', p); loadIntoForm('form-id', p); loadIntoForm('form-history', p); loadIntoForm('form-assessment', p); loadIntoForm('form-labs', p); loadIntoForm('form-meds', p); loadIntoForm('form-nurse', p); loadIntoForm('form-doctor', p); loadIntoForm('form-plan', p);
  vitalsRows = Array.isArray(p.vitals)?p.vitals.slice():[];
  uploadedLabs = Array.isArray(p.labFiles)?p.labFiles.slice():[];
  renderVitalsTable(); renderLabFiles();
  document.querySelector('.navbtn[data-target="tab-info"]').click();
  showToast('Loaded patient for editing.');
}
window.deletePatient = async function(index){ if(!confirm('Delete this patient? This action cannot be undone.')) return; const id = patients[index].id; try{ await db.collection('patients').doc(id).delete(); await loadPatients(); showToast('Patient deleted.'); }catch(e){ alert('Delete failed: '+(e.message||e.code)); } }
window.closeModal = function(){ el('modal').classList.remove('show'); }

function loadIntoForm(formId, data){ const f = document.getElementById(formId); if(!f) return; Object.keys(data).forEach(k=>{ if(f.elements[k]) f.elements[k].value = data[k] || ''; }); }

/* Renders patient details for modal */
function renderPatientHTML(p){ const parts = []; parts.push(`<h3 style="margin-top:0">${escapeHtml(p.name||'-')} <small class="small-muted">ID: ${escapeHtml(p.id||'')}</small></h3>`);
  if(p.photoURL) parts.push(`<div style="margin-bottom:8px"><img src="${escapeHtml(p.photoURL)}" style="width:120px;height:120px;border-radius:12px;object-fit:cover;margin-bottom:10px;"></div>`);
  parts.push(`<div style="display:flex;gap:18px;flex-wrap:wrap;margin-bottom:8px"><div><div class="small-muted">DOB</div><div>${escapeHtml(p.dob||'')}</div></div><div><div class="small-muted">Age / Gender</div><div>${escapeHtml(p.age||'')} ${escapeHtml(p.gender||'')}</div></div><div><div class="small-muted">Room / Bed</div><div>${escapeHtml(p.roomNo||'-')} ${p.bedNo?('/ '+escapeHtml(p.bedNo)):''}</div></div><div><div class="small-muted">Physician</div><div>${escapeHtml(p.physician||'-')}</div></div></div><hr>`);
  function s(title, body){ return `<h4 style="margin:10px 0 6px 0;color:var(--primary)">${title}</h4><div style="margin-bottom:8px">${body||'<span class="small-muted">—</span>'}</div>`; }
  parts.push(s('Contact & Address', `<b>Contact:</b> ${escapeHtml(p.contact||'-')}<br/><b>Address:</b> ${escapeHtml(p.address||'-')}<br/><b>PhilHealth:</b> ${escapeHtml(p.philhealth||'-')} ${escapeHtml(p.philType||'')}<br/><b>Religion:</b> ${escapeHtml(p.religion||'-')}`));
  parts.push(s('Medical History', `<b>Present Illness:</b> ${escapeHtml(p.presentIllness||'-')}<br/><b>Past Hx:</b> ${escapeHtml(p.pastHx||'-')}`));
  parts.push(s('Medications / Orders', `<b>Med Orders:</b> ${escapeHtml(p.medOrders||'-')}<br/><b>IV Flow:</b> ${escapeHtml(p.ivFlowRate||'-')}`));
  let vitHtml = '<table style="width:100%;border-collapse:collapse"><thead><tr><th>Date</th><th>Time</th><th>Temp</th><th>P</th><th>RR</th><th>BP</th><th>SpO₂</th><th>Pain</th><th>By</th></tr></thead><tbody>';
  const vrows = p.vitals || [];
  if(vrows.length === 0) vitHtml += '<tr><td colspan="9" style="text-align:center;color:#888">No vitals recorded</td></tr>';
  else vrows.forEach(r => vitHtml += `<tr><td>${escapeHtml(r.date)}</td><td>${escapeHtml(r.time)}</td><td>${escapeHtml(r.temp)}</td><td>${escapeHtml(r.pulse)}</td><td>${escapeHtml(r.rr)}</td><td>${escapeHtml(r.bp)}</td><td>${escapeHtml(r.spo2)}</td><td>${escapeHtml(r.pain)}</td><td>${escapeHtml(r.by)}</td></tr>`);
  vitHtml += '</tbody></table>';
  parts.push(s('Vitals', vitHtml));
  parts.push(s('Labs & Diagnostics', `<b>Ordered Tests:</b> ${escapeHtml(p.orderedTests||'-')}<br/><b>Results:</b> ${escapeHtml(p.testResults||'-')}`));
  parts.push(s('Assessment', `<b>Assessment notes:</b> ${escapeHtml(p.assessment_notes||'-')}<br/><b>Diet:</b> ${escapeHtml((p.diet_summary)||'-')}`));
  parts.push(s('Nurse FDAR', `<b>F:</b> ${escapeHtml(p.nurse_f||'-')}<br/><b>D:</b> ${escapeHtml(p.nurse_d||'-')}<br/><b>A:</b> ${escapeHtml(p.nurse_a||'-')}<br/><b>R:</b> ${escapeHtml(p.nurse_r||'-')}`));
  parts.push(s('Discharge Plan', `<b>Final Dx:</b> ${escapeHtml(p.dis_finalDx||'-')}<br/><b>Condition:</b> ${escapeHtml(p.dis_condition||'-')}<br/><b>Instructions:</b> ${escapeHtml(p.dis_instructions||'-')}`));

if(p.labFiles && p.labFiles.length>0){ let labsHTML = '<div style="display:flex;flex-wrap:wrap;gap:10px">'; p.labFiles.forEach(f=>{ if(f.type && f.type.startsWith('image/')) labsHTML += `<div style="text-align:center"><img src="${escapeHtml(f.url)}" style="width:120px;height:120px;object-fit:cover;border-radius:8px"><br><a href="${escapeHtml(f.url)}" target="_blank">View</a></div>`; else labsHTML += `<div><a href="${escapeHtml(f.url)}" target="_blank">📄 ${escapeHtml(f.name)}</a></div>`; }); labsHTML += '</div>'; parts.push(s('Uploaded Lab Files', labsHTML)); }
  parts.push(s('Notes & Plan', `<b>Nurse:</b> ${escapeHtml(p.nurseNotes||'-')}<br/><b>Doctor:</b> ${escapeHtml(p.doctorNotes||'-')}<br/><b>Plan:</b> ${escapeHtml(p.planCare||'-')}`));
  return parts.join(''); }

/* =========================
   Initial render helpers
   ========================= */
renderLabFiles(); renderVitalsTable();

/* small safe UI: click brand to dashboard */
document.getElementById('brand')?.addEventListener('click', ()=>{ document.querySelector('.navbtn[data-target="tab-dashboard"]').click(); });

// === Print Record Function (Doctor only) ===
document.addEventListener('DOMContentLoaded', () => {
  const printBtn = document.getElementById('printRecordBtn');
  if (typeof currentRole === 'undefined' || currentRole !== 'doctor') {
    if (printBtn) printBtn.style.display = 'none';
  } else {
    if (printBtn) printBtn.addEventListener('click', () => {
      const patientModal = document.querySelector('.modal') || document.querySelector('.patient-detail') || document.body;
      const header = document.querySelector('.print-header');
      const printWindow = window.open('', '_blank');
      printWindow.document.write('<html><head><title>Patient Record</title>');
      printWindow.document.write('<style>@media print{body{font-family:Inter,sans-serif;color:#000;background:#fff;} h2{color:#1E3A8A;}}</style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write('<div style="display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #1E3A8A;padding-bottom:8px;margin-bottom:12px"><div style="display:flex;align-items:center;gap:12px"><img src="data:image/jpeg;base64,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" style="height:48px;object-fit:contain"/><div style="font-weight:800;color:#1E3A8A;font-size:18px">ONE CARE SYSTEM</div></div><div style="text-align:right;font-size:13px">Printed: '+(new Date()).toLocaleString()+'</div></div>');
      printWindow.document.write(patientModal.outerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    });
  }
});
/* =========================
   PRINT — MODAL ONLY
   ========================= */
document.querySelectorAll('#printRecordBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalBody = document.getElementById('modalBody');
    if (!modalBody) {
      alert('No patient record to print.');
      return;
    }

    const printContents = modalBody.innerHTML;

    // Create clean print window with header
    const win = window.open('', '', 'width=900,height=650');
    win.document.write(`
      <html>
      <head>
        <title>Patient Record — ONE CARE SYSTEM</title>
        <style>
          body {
            font-family: 'Inter', sans-serif;
            background: white;
            color: black;
            padding: 40px;
          }
          header {
            text-align: center;
            margin-bottom: 25px;
          }
          header h2 {
            color: #1E3A8A;
            margin: 0;
          }
          header small {
            color: #334155;
          }
          hr {
            border: 1px solid #1E3A8A;
            margin: 12px 0 24px;
          }
          /* Ensure modal layout fits A4 width */
          .modal-content {
            max-width: 800px;
            margin: 0 auto;
          }
          @page { size: A4; margin: 20mm; }
          @media print {
            button, .btn, .header-controls { display: none !important; }
          }
        </style>
      </head>
      <body>
        <header>
          <h2>Olivarez College Tagaytay</h2>
          <small>ONE CARE EHR System</small>
        </header>
        <hr/>
        <div class="modal-content">
          ${printContents}
        </div>
      </body>
      </html>
    `);
    win.document.close();
    win.focus();
    win.print();
  });
});

// Patient-info independent BMI calculator (read-only BMI, inline reading)
// Inserts listeners for #info_weight and #info_height
(function(){
  function computeBMI(){
    var wEl = document.getElementById('info_weight');
    var hEl = document.getElementById('info_height');
    var bmiEl = document.getElementById('info_bmi');
    var readEl = document.getElementById('bmi_reading');
    if(!bmiEl || !readEl) return;
    var w = parseFloat(wEl && wEl.value);
    var h = parseFloat(hEl && hEl.value);
    if(!isFinite(w) || !isFinite(h) || h <= 0){
      bmiEl.value = '';
      readEl.textContent = '';
      return;
    }
    var bmi = w / Math.pow(h/100, 2);
    bmiEl.value = bmi.toFixed(1);
    var cat = '';
    if(bmi < 18.5) cat = '(Underweight)';
    else if(bmi < 25) cat = '(Normal)';
    else if(bmi < 30) cat = '(Overweight)';
    else cat = '(Obese)';
    readEl.textContent = ' ' + cat;
  }
  function attach(){
    var w = document.getElementById('info_weight');
    var h = document.getElementById('info_height');
    if(w) w.addEventListener('input', computeBMI);
    if(h) h.addEventListener('input', computeBMI);
    // compute on load in case values are preset
    computeBMI();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attach);
  else attach();
})();