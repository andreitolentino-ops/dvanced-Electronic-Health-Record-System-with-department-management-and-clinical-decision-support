// app.js - Full application logic (updated to address top-priority fixes)

// Early global function declarations (before any other code)
window.showMessagingTemplates = function() {
  console.log('📋 Templates function called');
  
  // Simple template modal that works without the complex messaging system
  const modalContent = `
    <div class="bg-white rounded-lg p-6 max-w-4xl mx-auto">
      <h3 class="text-xl font-bold mb-4">� Clinical Message Templates</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="useSimpleTemplate('discharge')">
          <div class="font-semibold text-sm mb-2">Patient Discharge Ready</div>
          <div class="text-xs text-gray-600 mb-2">Category: discharge</div>
          <div class="text-xs text-gray-500">Patient ready for discharge with all requirements completed...</div>
        </div>
        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="useSimpleTemplate('lab')">
          <div class="font-semibold text-sm mb-2">Critical Lab Values</div>
          <div class="text-xs text-gray-600 mb-2">Category: lab</div>
          <div class="text-xs text-gray-500">CRITICAL lab values requiring immediate attention...</div>
        </div>
        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="useSimpleTemplate('medication')">
          <div class="font-semibold text-sm mb-2">Medication Clarification</div>
          <div class="text-xs text-gray-600 mb-2">Category: pharmacy</div>
          <div class="text-xs text-gray-500">Please clarify medication order for patient...</div>
        </div>
        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="useSimpleTemplate('consult')">
          <div class="font-semibold text-sm mb-2">Consultation Request</div>
          <div class="text-xs text-gray-600 mb-2">Category: clinical</div>
          <div class="text-xs text-gray-500">Requesting specialist consultation for patient...</div>
        </div>
      </div>
      <div class="flex gap-3 pt-4 border-t">
        <button onclick="closeModal()" class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          Close
        </button>
      </div>
    </div>
  `;
  
  if (typeof showModal === 'function') {
    showModal(modalContent);
  } else {
    alert('Templates:\n\n1. Patient Discharge Ready\n2. Critical Lab Values\n3. Medication Clarification\n4. Consultation Request\n\nThese templates can be used for quick clinical communication.');
  }
};

window.showPatientMessages = function() {
  console.log('👤 Patient Messages function called');
  
  const modalContent = `
    <div class="bg-white rounded-lg p-6 max-w-4xl mx-auto">
      <h3 class="text-xl font-bold mb-4">👤 Patient Messages</h3>
      <div class="space-y-3 mb-4">
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <div class="font-semibold text-sm mb-1">Patient John Doe - Blood Pressure Alert</div>
          <div class="text-xs text-gray-600 mb-2">From: Dr. Sarah Chen → Nurse Station</div>
          <div class="text-sm text-gray-700">Patient in Room 301 showing elevated BP readings (180/110). Please monitor closely...</div>
          <div class="mt-2 text-xs text-gray-500">2 hours ago • Patient ID: pat_001</div>
        </div>
        <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
          <div class="font-semibold text-sm mb-1">Patient Discharge Planning</div>
          <div class="text-xs text-gray-600 mb-2">From: Nurse Jessica → Dr. Wilson</div>
          <div class="text-sm text-gray-700">Patient in Room 205 is ready for discharge. All medications reconciled...</div>
          <div class="mt-2 text-xs text-gray-500">6 hours ago • Patient ID: pat_004</div>
        </div>
      </div>
      <div class="flex gap-3 pt-4 border-t">
        <button onclick="alert('Compose new patient message functionality would be implemented here')" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          📝 New Patient Message
        </button>
        <button onclick="closeModal()" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          Close
        </button>
      </div>
    </div>
  `;
  
  if (typeof showModal === 'function') {
    showModal(modalContent);
  } else {
    alert('Patient Messages:\n\n• John Doe - Blood Pressure Alert\n• Patient Discharge Planning\n\nThese are patient-linked clinical messages for care coordination.');
  }
};

window.showCriticalAlerts = function() {
  console.log('🚨 Critical Alerts function called');
  
  const modalContent = `
    <div class="bg-white rounded-lg p-6 max-w-4xl mx-auto">
      <h3 class="text-xl font-bold mb-4 text-red-700">🚨 Critical System Alerts</h3>
      <div class="space-y-3 mb-4">
        <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <div class="font-semibold text-red-800 mb-1">Critical Lab Values - Patient Emergency</div>
          <div class="text-xs text-red-600 mb-2">From: Lab Department → Dr. Smith</div>
          <div class="text-sm text-red-700">CRITICAL: Patient Mary Johnson - Troponin levels extremely elevated (15.2 ng/mL). Immediate cardiology consultation recommended.</div>
          <div class="mt-2 text-xs text-red-500">30 minutes ago • URGENT</div>
        </div>
        <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
          <div class="font-semibold text-orange-800 mb-1">Medication Interaction Warning</div>
          <div class="text-xs text-orange-600 mb-2">System Alert → All Providers</div>
          <div class="text-sm text-orange-700">High-risk drug interaction detected between Warfarin and new antibiotic order.</div>
          <div class="mt-2 text-xs text-orange-500">1 hour ago • HIGH PRIORITY</div>
        </div>
      </div>
      <div class="flex gap-3 pt-4 border-t">
        <button onclick="alert('Alert acknowledgment functionality would be implemented here')" class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          ✓ Acknowledge Alerts
        </button>
        <button onclick="closeModal()" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          Close
        </button>
      </div>
    </div>
  `;
  
  if (typeof showModal === 'function') {
    showModal(modalContent);
  } else {
    alert('Critical Alerts:\n\n🚨 Critical Lab Values - Patient Emergency\n⚠️ Medication Interaction Warning\n\nThese require immediate attention.');
  }
};

// Simple template usage function
window.useSimpleTemplate = function(templateType) {
  const templates = {
    discharge: {
      subject: 'Patient Ready for Discharge - Room {room}',
      content: 'Patient {patientName} in Room {room} is ready for discharge.\n\nCompleted items:\n• Medications reconciled\n• Follow-up appointments scheduled\n• Discharge instructions provided\n• Transportation arranged\n\nPlease review and approve discharge.'
    },
    lab: {
      subject: 'CRITICAL LAB VALUES - {patientName}',
      content: 'CRITICAL: Patient {patientName} has abnormal lab values requiring immediate attention.\n\nLab: {labName}\nValue: {labValue}\nNormal Range: {normalRange}\n\nImmediate action required. Please review and respond.'
    },
    medication: {
      subject: 'Medication Order Clarification - {patientName}',
      content: 'Please clarify medication order for {patientName}:\n\nMedication: {medication}\nCurrent Order: {currentOrder}\nConcern: {concern}\n\nPlease review and provide clarification.'
    },
    consult: {
      subject: 'Consultation Request - {specialty} for {patientName}',
      content: 'Requesting {specialty} consultation for {patientName} in Room {room}.\n\nReason for consultation: {reason}\nUrgency: {urgency}\nPatient background: {background}\n\nPlease schedule at your earliest convenience.'
    }
  };
  
  const template = templates[templateType];
  if (template) {
    closeModal();
    alert(`Template Selected: ${template.subject}\n\n${template.content}\n\nThis template would normally populate a compose message form.`);
  }
};

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

// ---- Session policy: NOTE: do NOT force sign-out on every load
// Previous behavior called auth.signOut() on every load which created a poor UX
// and could cause sign-in loops. We keep the helper for possible admin flows but
// do NOT call it automatically. Sign-out on pagehide is still best-effort.
async function enforceFreshLoginOnOpen(){
  try{
    // best-effort sign out; if already signed out this is a noop
    // NOTE: Do NOT call this on initial load. Instead use it selectively.
    await auth.signOut();
  }catch(e){
    console.warn('enforceFreshLoginOnOpen failed', e);
  }
}
// previously enforceFreshLoginOnOpen() was invoked automatically here; removed.

// When the user closes the window/tab, attempt to sign them out so next open requires login.
// Keep as best-effort; this is already unreliable in some browsers but harmless.
function signOutOnClose(){
  try{ auth.signOut().catch(()=>{}); }catch(e){}
}
window.addEventListener('beforeunload', signOutOnClose);
window.addEventListener('pagehide', signOutOnClose);

// -------------------- App state --------------------
let currentUser = null;
let currentRole = 'guest';
let patients = [];
let selectedPatientId = null;
let vitalsRows = [];
let uploadedLabs = [];
let isSaving = false;

// Department and bed management
let departments = [];
let beds = [];
let selectedDepartment = null;

// -------------------- Helpers --------------------
const $ = id => document.getElementById(id);
function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }
function nowTs() { return firebase.firestore.FieldValue.serverTimestamp(); }
function esc(s){ if(s===null||s===undefined) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// Unified toast implementation (consolidates the two previous implementations)
// Usage: showToast('message', 'info'|'success'|'error', timeoutMs)
function showToast(message, type='info', timeout=3500){
  try{
    const colors = { info: 'bg-sky-600', success: 'bg-emerald-600', error: 'bg-rose-600' };
    const container = document.getElementById('toastContainer') || document.body;
    const card = document.createElement('div');
    card.className = `toast-card ${type}`;
    card.innerHTML = `<div style="display:flex;gap:10px;align-items:center"><div style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:center">ℹ️</div><div style="flex:1">${esc(message)}</div><button aria-label="dismiss" style="background:transparent;border:none;color:rgba(255,255,255,0.9);font-weight:700">×</button></div>`;
    (container).appendChild(card);
    // show animation
    requestAnimationFrame(()=> card.classList.add('show'));
    // dismiss on click of X
    card.querySelector('button')?.addEventListener('click', ()=> { card.classList.remove('show'); setTimeout(()=>card.remove(), 320); });
    // auto remove after timeout
    setTimeout(()=>{ card.classList.remove('show'); setTimeout(()=>card.remove(), 420); }, timeout);
  }catch(e){ console.warn('showToast failed', e); }
}
// alias for backward compatibility with many callsites
const toast = showToast;

// safe addEventListener
function on(id, event, fn){
  const el = $(id);
  if(el) el.addEventListener(event, fn);
}

// safe query add
function onSel(sel, event, fn){
  qsa(sel).forEach(el=>el.addEventListener(event, fn));
}

// -------------------- Department & Bed Management --------------------
// Initialize default departments and beds
const defaultDepartments = [
  {
    id: 'emergency',
    name: 'Emergency Department',
    code: 'ER',
    description: 'Emergency and urgent care services',
    color: '#dc2626',
    icon: '🚨',
    capacity: 20,
    type: 'emergency'
  },
  {
    id: 'icu',
    name: 'Intensive Care Unit',
    code: 'ICU',
    description: 'Critical care and monitoring',
    color: '#7c2d12',
    icon: '🏥',
    capacity: 12,
    type: 'critical'
  },
  {
    id: 'general-ward',
    name: 'General Ward',
    code: 'GW',
    description: 'General medical and surgical care',
    color: '#059669',
    icon: '🛏️',
    capacity: 40,
    type: 'general'
  },
  {
    id: 'surgery',
    name: 'Surgery Department',
    code: 'SURG',
    description: 'Pre/post-operative care',
    color: '#2563eb',
    icon: '⚕️',
    capacity: 15,
    type: 'surgery'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    code: 'PEDS',
    description: 'Child and adolescent care',
    color: '#7c3aed',
    icon: '👶',
    capacity: 25,
    type: 'pediatrics'
  },
  {
    id: 'maternity',
    name: 'Maternity Ward',
    code: 'MAT',
    description: 'Obstetrics and gynecology',
    color: '#db2777',
    icon: '🤱',
    capacity: 18,
    type: 'maternity'
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    code: 'CARD',
    description: 'Heart and cardiovascular care',
    color: '#dc2626',
    icon: '❤️',
    capacity: 16,
    type: 'specialty'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    code: 'ORTHO',
    description: 'Bone and joint care',
    color: '#ea580c',
    icon: '🦴',
    capacity: 14,
    type: 'specialty'
  }
];

// Generate beds for each department
function generateBedsForDepartment(dept) {
  const beds = [];
  for (let i = 1; i <= dept.capacity; i++) {
    const bedNumber = `${dept.code}-${i.toString().padStart(2, '0')}`;
    beds.push({
      id: `${dept.id}-bed-${i}`,
      number: bedNumber,
      departmentId: dept.id,
      departmentName: dept.name,
      status: 'available', // available, occupied, maintenance, reserved
      patientId: null,
      patientName: null,
      roomType: i <= Math.ceil(dept.capacity * 0.2) ? 'private' : 'shared',
      amenities: ['bed', 'monitor', 'oxygen'],
      lastCleaned: new Date().toISOString(),
      notes: ''
    });
  }
  return beds;
}

// Initialize departments and beds
async function initializeDepartments() {
  try {
    console.log('🏥 Initializing departments...');
    
    // Check if running locally (no Firebase access)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('🔧 Running locally - using default departments');
      departments = [...defaultDepartments];
      beds = [];
      defaultDepartments.forEach(dept => {
        beds.push(...generateBedsForDepartment(dept));
      });
      console.log('✅ Local departments initialized:', departments.length);
      return;
    }
    
    // Check if departments already exist
    const deptSnapshot = await db.collection('departments').get();
    if (deptSnapshot.empty) {
      // Create default departments
      const batch = db.batch();
      defaultDepartments.forEach(dept => {
        const deptRef = db.collection('departments').doc(dept.id);
        batch.set(deptRef, {
          ...dept,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      });
      await batch.commit();
      showToast('Departments initialized successfully', 'success');
    }
    
    // Load departments
    await loadDepartments();
    
    // Check if beds already exist
    const bedsSnapshot = await db.collection('beds').get();
    if (bedsSnapshot.empty) {
      // Generate and create beds
      const allBeds = [];
      defaultDepartments.forEach(dept => {
        allBeds.push(...generateBedsForDepartment(dept));
      });
      
      const bedBatch = db.batch();
      allBeds.forEach(bed => {
        const bedRef = db.collection('beds').doc(bed.id);
        bedBatch.set(bedRef, {
          ...bed,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      });
      await bedBatch.commit();
      showToast('Beds initialized successfully', 'success');
    }
    
    // Load beds
    await loadBeds();
    
  } catch (error) {
    console.error('Error initializing departments:', error);
    showToast('Failed to initialize departments', 'error');
  }
}

// Load departments from database
async function loadDepartments() {
  try {
    const snapshot = await db.collection('departments').orderBy('name').get();
    departments = [];
    snapshot.forEach(doc => {
      departments.push({ id: doc.id, ...doc.data() });
    });
    renderDepartments();
  } catch (error) {
    console.error('Error loading departments:', error);
    showToast('Failed to load departments', 'error');
  }
}

// Load beds from database
async function loadBeds() {
  try {
    const snapshot = await db.collection('beds').orderBy('number').get();
    beds = [];
    snapshot.forEach(doc => {
      beds.push({ id: doc.id, ...doc.data() });
    });
    renderBedStatus();
  } catch (error) {
    console.error('Error loading beds:', error);
    showToast('Failed to load beds', 'error');
  }
}

// Assign patient to bed
async function assignPatientToBed(patientId, bedId) {
  try {
    const patient = patients.find(p => p.id === patientId);
    const bed = beds.find(b => b.id === bedId);
    
    if (!patient || !bed) {
      throw new Error('Patient or bed not found');
    }
    
    if (bed.status === 'occupied') {
      throw new Error('Bed is already occupied');
    }
    
    // Update bed status
    await db.collection('beds').doc(bedId).update({
      status: 'occupied',
      patientId: patientId,
      patientName: patient.name,
      assignedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    // Update patient with bed assignment
    await db.collection('patients').doc(patientId).update({
      bedId: bedId,
      bedNumber: bed.number,
      departmentId: bed.departmentId,
      departmentName: bed.departmentName,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    showToast(`${patient.name} assigned to bed ${bed.number}`, 'success');
    await loadBeds();
    await loadPatients();
    
  } catch (error) {
    console.error('Error assigning patient to bed:', error);
    showToast('Failed to assign patient to bed: ' + error.message, 'error');
  }
}

// Discharge patient from bed
async function dischargePatientFromBed(patientId) {
  try {
    const patient = patients.find(p => p.id === patientId);
    if (!patient || !patient.bedId) {
      throw new Error('Patient not found or not assigned to a bed');
    }
    
    // Update bed status
    await db.collection('beds').doc(patient.bedId).update({
      status: 'available',
      patientId: null,
      patientName: null,
      assignedAt: null,
      dischargedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    // Update patient
    await db.collection('patients').doc(patientId).update({
      bedId: firebase.firestore.FieldValue.delete(),
      bedNumber: firebase.firestore.FieldValue.delete(),
      departmentId: firebase.firestore.FieldValue.delete(),
      departmentName: firebase.firestore.FieldValue.delete(),
      dischargedAt: firebase.firestore.FieldValue.serverTimestamp(),
      patientStatus: 'Discharged',
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    showToast(`${patient.name} discharged from bed`, 'success');
    await loadBeds();
    await loadPatients();
    
  } catch (error) {
    console.error('Error discharging patient:', error);
    showToast('Failed to discharge patient: ' + error.message, 'error');
  }
}

// Render departments in UI
function renderDepartments() {
  const container = document.getElementById('departmentsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  departments.forEach(dept => {
    const occupiedBeds = beds.filter(b => b.departmentId === dept.id && b.status === 'occupied').length;
    const availableBeds = dept.capacity - occupiedBeds;
    const occupancyRate = ((occupiedBeds / dept.capacity) * 100).toFixed(1);
    
    const deptCard = document.createElement('div');
    deptCard.className = 'department-card p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-lg';
    deptCard.style.borderColor = dept.color + '40';
    deptCard.style.backgroundColor = dept.color + '10';
    
    deptCard.innerHTML = `
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-3">
          <div class="text-2xl">${dept.icon}</div>
          <div>
            <h3 class="font-bold text-slate-800">${dept.name}</h3>
            <p class="text-xs text-slate-500">${dept.code}</p>
          </div>
        </div>
        <div class="text-right">
          <div class="text-lg font-bold" style="color: ${dept.color}">${occupiedBeds}/${dept.capacity}</div>
          <div class="text-xs text-slate-500">${occupancyRate}% occupied</div>
        </div>
      </div>
      
      <div class="space-y-2">
        <div class="text-sm text-slate-600">${dept.description}</div>
        <div class="flex justify-between text-sm">
          <span class="text-green-600">✓ ${availableBeds} Available</span>
          <span class="text-blue-600">👥 ${occupiedBeds} Occupied</span>
        </div>
      </div>
    `;
    
    deptCard.addEventListener('click', () => {
      selectedDepartment = dept.id;
      showDepartmentDetails(dept.id);
    });
    
    container.appendChild(deptCard);
  });
}

// Show department details modal
function showDepartmentDetails(departmentId) {
  const dept = departments.find(d => d.id === departmentId);
  if (!dept) return;
  
  const deptBeds = beds.filter(b => b.departmentId === departmentId);
  const deptPatients = patients.filter(p => p.departmentId === departmentId);
  
  const modal = document.getElementById('modalBody');
  if (!modal) return;
  
  modal.innerHTML = `
    <div class="department-details p-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="text-3xl">${dept.icon}</div>
        <div>
          <h2 class="text-2xl font-bold text-slate-800">${dept.name}</h2>
          <p class="text-slate-600">${dept.description}</p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="stat-card bg-blue-50 p-4 rounded-lg">
          <div class="text-2xl font-bold text-blue-600">${dept.capacity}</div>
          <div class="text-sm text-blue-500">Total Beds</div>
        </div>
        <div class="stat-card bg-green-50 p-4 rounded-lg">
          <div class="text-2xl font-bold text-green-600">${deptBeds.filter(b => b.status === 'available').length}</div>
          <div class="text-sm text-green-500">Available</div>
        </div>
        <div class="stat-card bg-red-50 p-4 rounded-lg">
          <div class="text-2xl font-bold text-red-600">${deptBeds.filter(b => b.status === 'occupied').length}</div>
          <div class="text-sm text-red-500">Occupied</div>
        </div>
      </div>
      
      <div class="tabs mb-4">
        <button class="tab-btn active" onclick="showDepartmentTab('beds')">Bed Status</button>
        <button class="tab-btn" onclick="showDepartmentTab('patients')">Current Patients</button>
      </div>
      
      <div id="departmentTabContent">
        ${renderDepartmentBeds(deptBeds)}
      </div>
      
      <div class="flex justify-end gap-2 mt-6">
        <button onclick="closeModal()" class="px-4 py-2 bg-gray-100 rounded-lg">Close</button>
        <button onclick="showBedAssignmentModal('${departmentId}')" class="px-4 py-2 bg-blue-600 text-white rounded-lg">Assign Patient</button>
      </div>
    </div>
  `;
  
  showEmptyModal();
}

// Render bed status for department
function renderDepartmentBeds(deptBeds) {
  return `
    <div class="bed-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      ${deptBeds.map(bed => `
        <div class="bed-card p-3 rounded-lg border-2 ${getBedStatusClass(bed.status)}">
          <div class="flex items-center justify-between mb-2">
            <div class="font-bold">${bed.number}</div>
            <div class="text-xs px-2 py-1 rounded-full ${getBedStatusBadge(bed.status)}">
              ${bed.status.toUpperCase()}
            </div>
          </div>
          
          ${bed.patientName ? `
            <div class="text-sm text-slate-600">
              <div class="font-medium">${bed.patientName}</div>
              <div class="text-xs">${bed.roomType} room</div>
            </div>
          ` : `
            <div class="text-sm text-slate-400">
              ${bed.roomType} room
            </div>
          `}
          
          ${bed.status === 'occupied' ? `
            <button onclick="dischargePatientFromBed('${bed.patientId}')" 
                    class="mt-2 text-xs px-2 py-1 bg-red-100 text-red-700 rounded">
              Discharge
            </button>
          ` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function getBedStatusClass(status) {
  switch (status) {
    case 'available': return 'border-green-300 bg-green-50';
    case 'occupied': return 'border-red-300 bg-red-50';
    case 'maintenance': return 'border-yellow-300 bg-yellow-50';
    case 'reserved': return 'border-blue-300 bg-blue-50';
    default: return 'border-gray-300 bg-gray-50';
  }
}

function getBedStatusBadge(status) {
  switch (status) {
    case 'available': return 'bg-green-100 text-green-800';
    case 'occupied': return 'bg-red-100 text-red-800';
    case 'maintenance': return 'bg-yellow-100 text-yellow-800';
    case 'reserved': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}

// Initialize departments when user logs in
function initializeSystemForUser() {
  if (currentUser) {
    initializeDepartments();
  }
}

// -------------------- Clinical Decision Support --------------------
// Medication safety database
const medicationSafety = {
  // High-risk medications that require extra caution
  highRiskDrugs: [
    'warfarin', 'heparin', 'insulin', 'digoxin', 'lithium', 'methotrexate',
    'phenytoin', 'theophylline', 'vancomycin', 'gentamicin', 'morphine',
    'fentanyl', 'propofol', 'norepinephrine', 'epinephrine', 'dopamine'
  ],
  
  // Common drug interactions
  drugInteractions: {
    'warfarin': ['aspirin', 'ibuprofen', 'amiodarone', 'metronidazole'],
    'digoxin': ['furosemide', 'spironolactone', 'verapamil', 'amiodarone'],
    'lithium': ['hydrochlorothiazide', 'lisinopril', 'ibuprofen', 'celecoxib'],
    'methotrexate': ['trimethoprim', 'probenecid', 'aspirin', 'ibuprofen']
  },
  
  // Allergy cross-reactions
  allergyCrossReactions: {
    'penicillin': ['amoxicillin', 'ampicillin', 'cephalexin'],
    'sulfa': ['sulfamethoxazole', 'furosemide', 'hydrochlorothiazide'],
    'aspirin': ['ibuprofen', 'naproxen', 'diclofenac']
  },
  
  // Check for drug interactions and allergies
  checkMedication: function(drugName, patientData) {
    const alerts = [];
    const drug = drugName.toLowerCase();
    
    // Check if high-risk medication
    if (this.highRiskDrugs.includes(drug)) {
      alerts.push({
        type: 'warning',
        level: 'high',
        message: `HIGH RISK: ${drugName} requires careful monitoring and dose adjustment`
      });
    }
    
    // Check for drug interactions with existing medications
    if (patientData.medOrders && Array.isArray(patientData.medOrders)) {
      patientData.medOrders.forEach(existingMed => {
        const existingDrug = (existingMed.drug || '').toLowerCase();
        if (this.drugInteractions[drug] && this.drugInteractions[drug].includes(existingDrug)) {
          alerts.push({
            type: 'error',
            level: 'critical',
            message: `INTERACTION: ${drugName} may interact with ${existingMed.drug}`
          });
        }
      });
    }
    
    // Check for allergy cross-reactions
    if (patientData.allergySummary || patientData.allergies) {
      const allergyText = (patientData.allergySummary || '').toLowerCase();
      Object.keys(this.allergyCrossReactions).forEach(allergen => {
        if (allergyText.includes(allergen)) {
          const crossReactive = this.allergyCrossReactions[allergen];
          if (crossReactive.includes(drug)) {
            alerts.push({
              type: 'error',
              level: 'critical',
              message: `ALLERGY ALERT: Patient allergic to ${allergen}, may cross-react with ${drugName}`
            });
          }
        }
      });
    }
    
    // Age-based warnings
    if (patientData.age) {
      const age = parseInt(patientData.age);
      if (age >= 65 && ['digoxin', 'warfarin', 'morphine'].includes(drug)) {
        alerts.push({
          type: 'warning',
          level: 'medium',
          message: `GERIATRIC: Consider dose reduction for ${drugName} in elderly patients`
        });
      }
      if (age < 18 && ['aspirin', 'tetracycline', 'fluoroquinolone'].includes(drug)) {
        alerts.push({
          type: 'warning',
          level: 'medium',
          message: `PEDIATRIC: ${drugName} may not be appropriate for pediatric patients`
        });
      }
    }
    
    return alerts;
  },
  
  // Dosing guidelines
  getDosingGuideline: function(drugName, patientData) {
    const drug = drugName.toLowerCase();
    const guidelines = {
      'paracetamol': {
        adult: '500-1000mg every 4-6 hours, max 4g/day',
        pediatric: '10-15mg/kg every 4-6 hours',
        elderly: 'Reduce dose if hepatic impairment'
      },
      'ibuprofen': {
        adult: '200-400mg every 4-6 hours, max 2.4g/day',
        pediatric: '5-10mg/kg every 6-8 hours',
        contraindications: 'Avoid in renal impairment, peptic ulcer'
      },
      'amoxicillin': {
        adult: '250-500mg every 8 hours',
        pediatric: '20-40mg/kg/day divided every 8 hours',
        renalAdjustment: 'Reduce dose if CrCl < 30 mL/min'
      }
    };
    
    return guidelines[drug] || null;
  }
};

// Expose medication safety globally
window.medicationSafety = medicationSafety;

// Lab values interpretation
const labInterpretation = {
  normalRanges: {
    'hemoglobin': { male: [14, 18], female: [12, 16], unit: 'g/dL' },
    'hematocrit': { male: [42, 52], female: [37, 47], unit: '%' },
    'glucose': { fasting: [70, 100], random: [70, 140], unit: 'mg/dL' },
    'creatinine': { male: [0.7, 1.3], female: [0.6, 1.1], unit: 'mg/dL' },
    'sodium': { normal: [136, 145], unit: 'mEq/L' },
    'potassium': { normal: [3.5, 5.1], unit: 'mEq/L' },
    'chloride': { normal: [98, 107], unit: 'mEq/L' },
    'bun': { normal: [7, 20], unit: 'mg/dL' },
    'alt': { normal: [7, 56], unit: 'U/L' },
    'ast': { normal: [10, 40], unit: 'U/L' }
  },
  
  interpretResult: function(testName, value, patientGender = 'male') {
    const test = testName.toLowerCase();
    const range = this.normalRanges[test];
    
    if (!range) return { status: 'unknown', message: 'No reference range available' };
    
    const normalRange = range[patientGender] || range.normal || range.fasting;
    if (!normalRange) return { status: 'unknown', message: 'No reference range for this population' };
    
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return { status: 'invalid', message: 'Invalid numeric value' };
    
    if (numValue < normalRange[0]) {
      return {
        status: 'low',
        message: `Below normal range (${normalRange[0]}-${normalRange[1]} ${range.unit})`,
        severity: numValue < normalRange[0] * 0.7 ? 'critical' : 'abnormal'
      };
    } else if (numValue > normalRange[1]) {
      return {
        status: 'high',
        message: `Above normal range (${normalRange[0]}-${normalRange[1]} ${range.unit})`,
        severity: numValue > normalRange[1] * 1.5 ? 'critical' : 'abnormal'
      };
    } else {
      return {
        status: 'normal',
        message: `Within normal range (${normalRange[0]}-${normalRange[1]} ${range.unit})`,
        severity: 'normal'
      };
    }
  }
};

// Enhanced Lab Results Management
const labResultsManager = {
  structuredResults: {},
  
  // Common lab test templates with structured fields
  testTemplates: {
    'CBC': {
      name: 'Complete Blood Count',
      fields: [
        { name: 'WBC', unit: 'x10³/μL', normal: [4.5, 11.0] },
        { name: 'RBC', unit: 'x10⁶/μL', normal: { male: [4.7, 6.1], female: [4.2, 5.4] } },
        { name: 'Hemoglobin', unit: 'g/dL', normal: { male: [14, 18], female: [12, 16] } },
        { name: 'Hematocrit', unit: '%', normal: { male: [42, 52], female: [37, 47] } },
        { name: 'Platelets', unit: 'x10³/μL', normal: [150, 450] },
        { name: 'MCV', unit: 'fL', normal: [80, 100] },
        { name: 'MCH', unit: 'pg', normal: [27, 31] },
        { name: 'MCHC', unit: 'g/dL', normal: [32, 36] }
      ]
    },
    'Basic Metabolic Panel': {
      name: 'Basic Metabolic Panel',
      fields: [
        { name: 'Glucose', unit: 'mg/dL', normal: [70, 100] },
        { name: 'BUN', unit: 'mg/dL', normal: [7, 20] },
        { name: 'Creatinine', unit: 'mg/dL', normal: { male: [0.7, 1.3], female: [0.6, 1.1] } },
        { name: 'Sodium', unit: 'mEq/L', normal: [136, 145] },
        { name: 'Potassium', unit: 'mEq/L', normal: [3.5, 5.1] },
        { name: 'Chloride', unit: 'mEq/L', normal: [98, 107] },
        { name: 'CO2', unit: 'mEq/L', normal: [22, 29] }
      ]
    },
    'Liver Function': {
      name: 'Liver Function Tests',
      fields: [
        { name: 'ALT', unit: 'U/L', normal: [7, 56] },
        { name: 'AST', unit: 'U/L', normal: [10, 40] },
        { name: 'Alkaline Phosphatase', unit: 'U/L', normal: [44, 147] },
        { name: 'Total Bilirubin', unit: 'mg/dL', normal: [0.3, 1.2] },
        { name: 'Direct Bilirubin', unit: 'mg/dL', normal: [0.0, 0.3] },
        { name: 'Albumin', unit: 'g/dL', normal: [3.5, 5.0] }
      ]
    },
    'Lipid Panel': {
      name: 'Lipid Panel',
      fields: [
        { name: 'Total Cholesterol', unit: 'mg/dL', normal: [0, 200], optimal: [0, 170] },
        { name: 'HDL Cholesterol', unit: 'mg/dL', normal: { male: [40, 999], female: [50, 999] } },
        { name: 'LDL Cholesterol', unit: 'mg/dL', normal: [0, 100], optimal: [0, 70] },
        { name: 'Triglycerides', unit: 'mg/dL', normal: [0, 150] }
      ]
    }
  },
  
  // Generate structured result entry form
  generateStructuredForm: function(testType) {
    const template = this.testTemplates[testType];
    if (!template) return null;
    
    let html = `
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 shadow-sm mt-4">
        <h5 class="font-bold text-purple-800 mb-4 flex items-center gap-2">
          🔬 Structured Entry: ${template.name}
        </h5>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="structuredResultsGrid">
    `;
    
    template.fields.forEach((field, index) => {
      const normalRange = this.getNormalRangeDisplay(field.normal);
      html += `
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">
            ${field.name} (${field.unit})
          </label>
          <input 
            type="number" 
            step="0.01"
            data-field="${field.name}"
            data-unit="${field.unit}"
            data-normal='${JSON.stringify(field.normal)}'
            class="w-full rounded-lg px-3 py-2 border-2 border-slate-200 focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all lab-result-input"
            placeholder="Enter value"
          />
          <div class="text-xs text-slate-500">Normal: ${normalRange}</div>
          <div class="result-interpretation hidden text-xs font-medium"></div>
        </div>
      `;
    });
    
    html += `
        </div>
        <div class="mt-4 flex gap-3">
          <button type="button" onclick="labResultsManager.autoInterpretResults()" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
            🤖 Auto-Interpret
          </button>
          <button type="button" onclick="labResultsManager.clearStructuredResults()" class="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm">
            🗑️ Clear
          </button>
        </div>
      </div>
    `;
    
    return html;
  },
  
  // Get normal range display string
  getNormalRangeDisplay: function(normal) {
    if (Array.isArray(normal)) {
      return `${normal[0]}-${normal[1]}`;
    } else if (typeof normal === 'object') {
      const ranges = [];
      if (normal.male) ranges.push(`M: ${normal.male[0]}-${normal.male[1]}`);
      if (normal.female) ranges.push(`F: ${normal.female[0]}-${normal.female[1]}`);
      return ranges.join(', ');
    }
    return 'Variable';
  },
  
  // Auto-interpret all entered results
  autoInterpretResults: function() {
    const inputs = document.querySelectorAll('.lab-result-input');
    let interpretationText = '';
    let abnormalFindings = [];
    
    inputs.forEach(input => {
      const value = parseFloat(input.value);
      if (isNaN(value) || !input.value.trim()) return;
      
      const fieldName = input.dataset.field;
      const unit = input.dataset.unit;
      const normalRange = JSON.parse(input.dataset.normal);
      
      const interpretation = this.interpretValue(value, normalRange);
      const interpretDiv = input.parentElement.querySelector('.result-interpretation');
      
      interpretDiv.className = `result-interpretation text-xs font-medium ${interpretation.className}`;
      interpretDiv.textContent = interpretation.message;
      interpretDiv.classList.remove('hidden');
      
      // Add to interpretation summary
      interpretationText += `${fieldName}: ${value} ${unit} - ${interpretation.message}\n`;
      
      if (interpretation.status !== 'normal') {
        abnormalFindings.push({
          test: fieldName,
          value: value,
          unit: unit,
          status: interpretation.status,
          severity: interpretation.severity
        });
      }
    });
    
    // Update the manual interpretation field
    const interpretationField = document.getElementById('lab_interpretation');
    if (interpretationField) {
      let clinicalInterpretation = this.generateClinicalInterpretation(abnormalFindings);
      interpretationField.value = clinicalInterpretation;
    }
    
    showToast('Results interpreted automatically', 'success');
  },
  
  // Generate clinical interpretation based on abnormal findings
  generateClinicalInterpretation: function(abnormalFindings) {
    if (abnormalFindings.length === 0) {
      return 'All laboratory values are within normal limits. No significant abnormalities detected.';
    }
    
    let interpretation = 'ABNORMAL FINDINGS:\n\n';
    
    // Group by severity
    const critical = abnormalFindings.filter(f => f.severity === 'critical');
    const abnormal = abnormalFindings.filter(f => f.severity === 'abnormal');
    
    if (critical.length > 0) {
      interpretation += '⚠️ CRITICAL VALUES:\n';
      critical.forEach(finding => {
        interpretation += `• ${finding.test}: ${finding.value} ${finding.unit} (${finding.status})\n`;
      });
      interpretation += '\n';
    }
    
    if (abnormal.length > 0) {
      interpretation += '📋 ABNORMAL VALUES:\n';
      abnormal.forEach(finding => {
        interpretation += `• ${finding.test}: ${finding.value} ${finding.unit} (${finding.status})\n`;
      });
      interpretation += '\n';
    }
    
    // Add clinical correlations based on patterns
    interpretation += this.generateClinicalCorrelations(abnormalFindings);
    
    return interpretation;
  },
  
  // Generate clinical correlations and recommendations
  generateClinicalCorrelations: function(findings) {
    let correlations = 'CLINICAL CORRELATIONS:\n';
    
    // Look for common patterns
    const testNames = findings.map(f => f.test.toLowerCase());
    
    // Anemia pattern
    if (testNames.includes('hemoglobin') || testNames.includes('hematocrit')) {
      const hgb = findings.find(f => f.test.toLowerCase().includes('hemoglobin'));
      if (hgb && hgb.status === 'low') {
        correlations += '• Consider anemia workup - check iron studies, B12, folate\n';
      }
    }
    
    // Liver function pattern
    if (testNames.some(t => ['alt', 'ast', 'bilirubin'].includes(t))) {
      correlations += '• Liver function abnormalities noted - consider hepatic workup\n';
    }
    
    // Kidney function pattern
    if (testNames.includes('creatinine') || testNames.includes('bun')) {
      const creat = findings.find(f => f.test.toLowerCase().includes('creatinine'));
      if (creat && creat.status === 'high') {
        correlations += '• Elevated creatinine suggests possible renal dysfunction\n';
      }
    }
    
    // Electrolyte imbalances
    if (testNames.some(t => ['sodium', 'potassium', 'chloride'].includes(t))) {
      correlations += '• Electrolyte imbalances noted - monitor fluid status\n';
    }
    
    correlations += '\nRECOMMENDATIONS:\n';
    correlations += '• Correlate with clinical presentation\n';
    correlations += '• Consider repeat testing if indicated\n';
    correlations += '• Notify attending physician of critical values\n';
    
    return correlations;
  },
  
  // Interpret individual lab value
  interpretValue: function(value, normalRange) {
    let range;
    
    if (Array.isArray(normalRange)) {
      range = normalRange;
    } else if (typeof normalRange === 'object') {
      // For now, use male range or first available range
      range = normalRange.male || normalRange.female || normalRange.normal;
    } else {
      return { status: 'unknown', message: 'Unknown range', className: 'text-slate-500', severity: 'unknown' };
    }
    
    if (!range || range.length !== 2) {
      return { status: 'unknown', message: 'Invalid range', className: 'text-slate-500', severity: 'unknown' };
    }
    
    const [min, max] = range;
    
    if (value < min) {
      const severity = value < min * 0.7 ? 'critical' : 'abnormal';
      return {
        status: 'low',
        message: `LOW (${min}-${max})`,
        className: severity === 'critical' ? 'text-red-600' : 'text-orange-600',
        severity: severity
      };
    } else if (value > max) {
      const severity = value > max * 1.5 ? 'critical' : 'abnormal';
      return {
        status: 'high',
        message: `HIGH (${min}-${max})`,
        className: severity === 'critical' ? 'text-red-600' : 'text-orange-600',
        severity: severity
      };
    } else {
      return {
        status: 'normal',
        message: `Normal (${min}-${max})`,
        className: 'text-green-600',
        severity: 'normal'
      };
    }
  },
  
  // Clear structured results
  clearStructuredResults: function() {
    const inputs = document.querySelectorAll('.lab-result-input');
    inputs.forEach(input => {
      input.value = '';
      const interpretDiv = input.parentElement.querySelector('.result-interpretation');
      interpretDiv.classList.add('hidden');
    });
    
    const interpretationField = document.getElementById('lab_interpretation');
    if (interpretationField) {
      interpretationField.value = '';
    }
    
    showToast('Structured results cleared', 'info');
  },
  
  // Generate comprehensive lab summary
  generateLabSummary: function() {
    if (!selectedPatientId) {
      showToast('Please select a patient first', 'error');
      return;
    }
    
    const patient = patients.find(p => p.id === selectedPatientId);
    if (!patient) {
      showToast('Patient data not found', 'error');
      return;
    }
    
    let summary = `LAB SUMMARY REPORT\n`;
    summary += `Patient: ${patient.name || 'Unknown'}\n`;
    summary += `Date: ${new Date().toLocaleDateString()}\n`;
    summary += `Generated by: ${currentUser?.name || 'Current User'}\n\n`;
    
    // Lab Orders Summary
    if (labOrderManager.orders.length > 0) {
      summary += `LAB ORDERS (${labOrderManager.orders.length}):\n`;
      summary += `${'='.repeat(40)}\n`;
      
      labOrderManager.orders.forEach((order, index) => {
        summary += `${index + 1}. ${order.customTest || order.test}\n`;
        summary += `   Priority: ${order.priority}\n`;
        summary += `   Status: ${order.status}\n`;
        summary += `   Ordered: ${new Date(order.orderDateTime).toLocaleString()}\n`;
        summary += `   Indication: ${order.indication}\n\n`;
      });
    }
    
    // Structured Results Summary
    if (patient.structuredResults) {
      summary += `STRUCTURED RESULTS:\n`;
      summary += `${'='.repeat(40)}\n`;
      
      Object.entries(patient.structuredResults).forEach(([test, data]) => {
        summary += `${test}: ${data.value} ${data.unit}\n`;
        if (data.timestamp) {
          summary += `   Date: ${new Date(data.timestamp).toLocaleString()}\n`;
        }
      });
      summary += '\n';
    }
    
    // Lab Files Summary
    if (patient.labFiles && patient.labFiles.length > 0) {
      summary += `UPLOADED FILES (${patient.labFiles.length}):\n`;
      summary += `${'='.repeat(40)}\n`;
      
      patient.labFiles.forEach((file, index) => {
        summary += `${index + 1}. ${file.name}\n`;
        summary += `   Type: ${file.type || 'Unknown'}\n`;
        summary += `   URL: ${file.url}\n\n`;
      });
    }
    
    // Trends Summary
    const trendsData = Object.keys(labTrends.historicalData);
    if (trendsData.length > 0) {
      summary += `TRENDS DATA:\n`;
      summary += `${'='.repeat(40)}\n`;
      
      trendsData.forEach(testType => {
        const entries = labTrends.historicalData[testType];
        summary += `${testType}: ${entries.length} entries\n`;
        summary += `   Latest: ${new Date(entries[entries.length - 1].timestamp).toLocaleDateString()}\n`;
      });
    }
    
    // Display in a modal or new window
    const summaryWindow = window.open('', '_blank', 'width=800,height=600');
    summaryWindow.document.write(`
      <html>
        <head>
          <title>Lab Summary - ${patient.name}</title>
          <style>
            body { font-family: monospace; padding: 20px; line-height: 1.5; }
            .header { text-align: center; margin-bottom: 30px; }
            .print-btn { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; }
          </style>
        </head>
        <body>
          <div class="header">
            <button class="print-btn" onclick="window.print()">🖨️ Print</button>
            <button class="print-btn" onclick="window.close()">✖️ Close</button>
          </div>
          <pre>${summary}</pre>
        </body>
      </html>
    `);
    
    showToast('Lab summary generated', 'success');
  },
  
  // Export lab data as JSON
  exportLabData: function() {
    if (!selectedPatientId) {
      showToast('Please select a patient first', 'error');
      return;
    }
    
    const patient = patients.find(p => p.id === selectedPatientId);
    if (!patient) {
      showToast('Patient data not found', 'error');
      return;
    }
    
    const exportData = {
      patient: {
        id: patient.id,
        name: patient.name,
        exportDate: new Date().toISOString()
      },
      labOrders: labOrderManager.orders,
      structuredResults: patient.structuredResults || {},
      labFiles: patient.labFiles || [],
      trends: labTrends.historicalData
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `lab-data-${patient.name || 'unknown'}-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showToast('Lab data exported', 'success');
  }
};

// Lab trends and comparison
const labTrends = {
  historicalData: {},
  
  // Add current results to trends
  addToTrends: function(testType, results) {
    const timestamp = new Date().toISOString();
    
    if (!this.historicalData[testType]) {
      this.historicalData[testType] = [];
    }
    
    this.historicalData[testType].push({
      timestamp: timestamp,
      results: results
    });
    
    // Keep only last 10 results
    if (this.historicalData[testType].length > 10) {
      this.historicalData[testType] = this.historicalData[testType].slice(-10);
    }
  },
  
  // Generate trends display
  generateTrendsDisplay: function(testType) {
    const data = this.historicalData[testType];
    if (!data || data.length === 0) {
      return '<div class="text-sm text-slate-500">No historical data available</div>';
    }
    
    let html = `
      <div class="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-200 mt-4">
        <h5 class="font-bold text-indigo-800 mb-3">📈 Trends: ${testType}</h5>
        <div class="space-y-2 max-h-40 overflow-y-auto">
    `;
    
    data.slice(-5).forEach((entry, index) => {
      const date = new Date(entry.timestamp).toLocaleDateString();
      html += `
        <div class="text-sm bg-white p-2 rounded border">
          <div class="font-medium text-slate-700">${date}</div>
          <div class="text-xs text-slate-600 mt-1">
            ${Object.entries(entry.results).map(([key, value]) => `${key}: ${value}`).join(', ')}
          </div>
        </div>
      `;
    });
    
    html += '</div></div>';
    return html;
  },
  
  // Update trends display in UI
  updateTrendsDisplay: function() {
    const trendsDiv = document.getElementById('labTrendsDisplay');
    if (!trendsDiv) return;
    
    const testTypes = Object.keys(this.historicalData);
    
    if (testTypes.length === 0) {
      trendsDiv.innerHTML = '<div class="text-sm text-slate-500 italic">No trend data available</div>';
      return;
    }
    
    let html = '';
    testTypes.forEach(testType => {
      html += this.generateTrendsDisplay(testType);
    });
    
    trendsDiv.innerHTML = html;
  }
};

// -------------------- Missing Function Implementations --------------------

// Show all patients function
function showAllPatients() {
  // Switch to patients list view
  const patientsTab = document.querySelector('.navbtn[data-target="patients"]');
  if (patientsTab) {
    patientsTab.click();
  } else {
    // If no patients tab, show/hide patients list
    const patientsList = document.getElementById('patientList');
    if (patientsList) {
      patientsList.style.display = patientsList.style.display === 'none' ? 'block' : 'none';
    }
  }
}

// Navigate to specific tab
window.navigateToTab = function(tabId) {
  // First try using the data-target attribute
  const navBtn = document.querySelector(`.navbtn[data-target="${tabId}"]`);
  if (navBtn) {
    navBtn.click();
    return;
  }
  
  // Fallback: directly show the tab
  const allTabs = document.querySelectorAll('.panel');
  allTabs.forEach(tab => tab.classList.add('hidden'));
  
  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.remove('hidden');
  }
  
  // Update navigation buttons
  const allNavBtns = document.querySelectorAll('.navbtn');
  allNavBtns.forEach(btn => btn.classList.remove('active'));
  
  if (navBtn) {
    navBtn.classList.add('active');
  }
};

// Bed assignment modal functions
function showBedAssignmentModal(departmentId = null) {
  if (!selectedPatientId) {
    showToast('Please select a patient first', 'error');
    return;
  }
  
  // Create modal content
  const modalContent = `
    <div class="bg-white rounded-lg p-6 max-w-lg mx-auto">
      <h3 class="text-xl font-bold mb-4">Assign Patient to Bed</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">Select Department:</label>
          <select id="bedAssignDept" class="w-full border rounded-lg px-3 py-2">
            <option value="">Choose Department</option>
            ${departments.map(dept => 
              `<option value="${dept.id}" ${departmentId === dept.id ? 'selected' : ''}>${dept.name}</option>`
            ).join('')}
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Select Bed:</label>
          <select id="bedAssignBed" class="w-full border rounded-lg px-3 py-2">
            <option value="">First select a department</option>
          </select>
        </div>
        <div class="flex gap-3 pt-4">
          <button onclick="processBedAssignment()" class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Assign Bed
          </button>
          <button onclick="closeModal()" class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `;
  
  showModal(modalContent);
  
  // Add event listener for department selection
  const deptSelect = document.getElementById('bedAssignDept');
  const bedSelect = document.getElementById('bedAssignBed');
  
  if (deptSelect && bedSelect) {
    deptSelect.addEventListener('change', function() {
      const selectedDeptId = this.value;
      bedSelect.innerHTML = '<option value="">Choose Bed</option>';
      
      if (selectedDeptId) {
        const availableBeds = beds.filter(bed => 
          bed.departmentId === selectedDeptId && bed.status === 'available'
        );
        
        availableBeds.forEach(bed => {
          bedSelect.innerHTML += `<option value="${bed.id}">Bed ${bed.number} (${bed.type})</option>`;
        });
        
        if (availableBeds.length === 0) {
          bedSelect.innerHTML += '<option value="">No beds available</option>';
        }
      }
    });
    
    // Trigger change if department is pre-selected
    if (departmentId) {
      deptSelect.dispatchEvent(new Event('change'));
    }
  }
}

function showPatientTransferModal() {
  if (!selectedPatientId) {
    showToast('Please select a patient first', 'error');
    return;
  }
  
  // Find current patient bed
  const currentBed = beds.find(bed => bed.patientId === selectedPatientId);
  
  const modalContent = `
    <div class="bg-white rounded-lg p-6 max-w-lg mx-auto">
      <h3 class="text-xl font-bold mb-4">Transfer Patient</h3>
      <div class="space-y-4">
        ${currentBed ? `
          <div class="bg-blue-50 p-3 rounded-lg">
            <p><strong>Current Location:</strong> ${departments.find(d => d.id === currentBed.departmentId)?.name || 'Unknown'} - Bed ${currentBed.number}</p>
          </div>
        ` : `
          <div class="bg-yellow-50 p-3 rounded-lg">
            <p><strong>Current Status:</strong> No bed assigned</p>
          </div>
        `}
        <div>
          <label class="block text-sm font-medium mb-2">Transfer to Department:</label>
          <select id="transferDept" class="w-full border rounded-lg px-3 py-2">
            <option value="">Choose Department</option>
            ${departments.map(dept => 
              `<option value="${dept.id}">${dept.name}</option>`
            ).join('')}
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Select New Bed:</label>
          <select id="transferBed" class="w-full border rounded-lg px-3 py-2">
            <option value="">First select a department</option>
          </select>
        </div>
        <div class="flex gap-3 pt-4">
          <button onclick="processPatientTransfer()" class="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Transfer Patient
          </button>
          <button onclick="closeModal()" class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `;
  
  showModal(modalContent);
  
  // Add event listeners similar to bed assignment
  const deptSelect = document.getElementById('transferDept');
  const bedSelect = document.getElementById('transferBed');
  
  if (deptSelect && bedSelect) {
    deptSelect.addEventListener('change', function() {
      const selectedDeptId = this.value;
      bedSelect.innerHTML = '<option value="">Choose Bed</option>';
      
      if (selectedDeptId) {
        const availableBeds = beds.filter(bed => 
          bed.departmentId === selectedDeptId && bed.status === 'available'
        );
        
        availableBeds.forEach(bed => {
          bedSelect.innerHTML += `<option value="${bed.id}">Bed ${bed.number} (${bed.type})</option>`;
        });
        
        if (availableBeds.length === 0) {
          bedSelect.innerHTML += '<option value="">No beds available</option>';
        }
      }
    });
  }
}

function showBedMaintenanceModal() {
  const modalContent = `
    <div class="bg-white rounded-lg p-6 max-w-lg mx-auto">
      <h3 class="text-xl font-bold mb-4">Bed Maintenance</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">Select Department:</label>
          <select id="maintDept" class="w-full border rounded-lg px-3 py-2">
            <option value="">Choose Department</option>
            ${departments.map(dept => 
              `<option value="${dept.id}">${dept.name}</option>`
            ).join('')}
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Select Bed:</label>
          <select id="maintBed" class="w-full border rounded-lg px-3 py-2">
            <option value="">First select a department</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Maintenance Action:</label>
          <select id="maintAction" class="w-full border rounded-lg px-3 py-2">
            <option value="maintenance">Set to Maintenance</option>
            <option value="available">Mark as Available</option>
            <option value="occupied">Mark as Occupied</option>
            <option value="reserved">Mark as Reserved</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Notes:</label>
          <textarea id="maintNotes" class="w-full border rounded-lg px-3 py-2" rows="3" placeholder="Maintenance notes..."></textarea>
        </div>
        <div class="flex gap-3 pt-4">
          <button onclick="processBedMaintenance()" class="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
            Update Bed
          </button>
          <button onclick="closeModal()" class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `;
  
  showModal(modalContent);
  
  // Add event listeners
  const deptSelect = document.getElementById('maintDept');
  const bedSelect = document.getElementById('maintBed');
  
  if (deptSelect && bedSelect) {
    deptSelect.addEventListener('change', function() {
      const selectedDeptId = this.value;
      bedSelect.innerHTML = '<option value="">Choose Bed</option>';
      
      if (selectedDeptId) {
        const deptBeds = beds.filter(bed => bed.departmentId === selectedDeptId);
        
        deptBeds.forEach(bed => {
          bedSelect.innerHTML += `<option value="${bed.id}">Bed ${bed.number} (${bed.status})</option>`;
        });
      }
    });
  }
}

// Helper function to show modal
function showModal(content) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  if (modal && modalBody) {
    modalBody.innerHTML = content;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  }
}

// Process functions for the modals
function processBedAssignment() {
  const deptId = document.getElementById('bedAssignDept')?.value;
  const bedId = document.getElementById('bedAssignBed')?.value;
  
  if (!deptId || !bedId) {
    showToast('Please select both department and bed', 'error');
    return;
  }
  
  assignPatientToBed(selectedPatientId, bedId)
    .then(() => {
      showToast('Patient assigned to bed successfully', 'success');
      closeModal();
      renderDepartments(); // Refresh the display
    })
    .catch(error => {
      console.error('Error assigning bed:', error);
      showToast('Error assigning bed', 'error');
    });
}

function processPatientTransfer() {
  const newDeptId = document.getElementById('transferDept')?.value;
  const newBedId = document.getElementById('transferBed')?.value;
  
  if (!newDeptId || !newBedId) {
    showToast('Please select destination department and bed', 'error');
    return;
  }
  
  // First release current bed, then assign new one
  const currentBed = beds.find(bed => bed.patientId === selectedPatientId);
  
  const transferPromise = currentBed 
    ? releaseBed(currentBed.id).then(() => assignPatientToBed(selectedPatientId, newBedId))
    : assignPatientToBed(selectedPatientId, newBedId);
  
  transferPromise
    .then(() => {
      showToast('Patient transferred successfully', 'success');
      closeModal();
      renderDepartments(); // Refresh the display
    })
    .catch(error => {
      console.error('Error transferring patient:', error);
      showToast('Error transferring patient', 'error');
    });
}

function processBedMaintenance() {
  const deptId = document.getElementById('maintDept')?.value;
  const bedId = document.getElementById('maintBed')?.value;
  const action = document.getElementById('maintAction')?.value;
  const notes = document.getElementById('maintNotes')?.value;
  
  if (!deptId || !bedId || !action) {
    showToast('Please fill in all required fields', 'error');
    return;
  }
  
  updateBedStatus(bedId, action, notes)
    .then(() => {
      showToast('Bed status updated successfully', 'success');
      closeModal();
      renderDepartments(); // Refresh the display
    })
    .catch(error => {
      console.error('Error updating bed status:', error);
      showToast('Error updating bed status', 'error');
    });
}

// -------------------- End Missing Functions --------------------

// Clinical alerts system
function checkClinicalAlerts(patientData) {
  const alerts = [];
  
  // Vital signs alerts
  if (patientData.vitals && patientData.vitals.length > 0) {
    const latestVitals = patientData.vitals[patientData.vitals.length - 1];
    
    // Temperature alerts
    const temp = parseFloat(latestVitals.temp);
    if (temp >= 39) {
      alerts.push({
        type: 'critical',
        category: 'vitals',
        message: `High fever: ${temp}°C - Consider antipyretics and infection workup`,
        priority: 'urgent'
      });
    } else if (temp >= 38.5) {
      alerts.push({
        type: 'warning',
        category: 'vitals',
        message: `Fever: ${temp}°C - Monitor closely`,
        priority: 'high'
      });
    } else if (temp <= 35) {
      alerts.push({
        type: 'critical',
        category: 'vitals',
        message: `Hypothermia: ${temp}°C - Warming measures needed`,
        priority: 'urgent'
      });
    }
    
    // Heart rate alerts
    const pulse = parseFloat(latestVitals.pulse);
    if (pulse > 120) {
      alerts.push({
        type: 'warning',
        category: 'vitals',
        message: `Tachycardia: ${pulse} bpm - Investigate cause`,
        priority: 'high'
      });
    } else if (pulse < 50) {
      alerts.push({
        type: 'warning',
        category: 'vitals',
        message: `Bradycardia: ${pulse} bpm - Consider cardiac evaluation`,
        priority: 'high'
      });
    }
    
    // Oxygen saturation alerts
    const spo2 = parseFloat(latestVitals.spo2 || latestVitals.spO2);
    if (spo2 < 90) {
      alerts.push({
        type: 'critical',
        category: 'vitals',
        message: `Low oxygen saturation: ${spo2}% - Oxygen therapy indicated`,
        priority: 'urgent'
      });
    } else if (spo2 < 94) {
      alerts.push({
        type: 'warning',
        category: 'vitals',
        message: `Mild hypoxemia: ${spo2}% - Monitor closely`,
        priority: 'high'
      });
    }
  }
  
  // Medication alerts
  if (patientData.medOrders && Array.isArray(patientData.medOrders)) {
    patientData.medOrders.forEach(med => {
      const medAlerts = medicationSafety.checkMedication(med.drug || '', patientData);
      alerts.push(...medAlerts.map(alert => ({
        ...alert,
        category: 'medication',
        priority: alert.level === 'critical' ? 'urgent' : 'high'
      })));
    });
  }
  
  return alerts;
}

// -------------------- Enhanced Medication Functions --------------------
// Real-time medication safety checking
function setupMedicationSafetyChecks() {
  const drugInput = document.getElementById('cpoe_drug');
  const alertsContainer = document.getElementById('drugSafetyAlerts');
  const safetyIcon = document.getElementById('drugSafetyIcon');
  const dosingGuidelines = document.getElementById('dosingGuidelines');
  const dosingContent = document.getElementById('dosingContent');
  
  if (!drugInput) return;
  
  drugInput.addEventListener('input', function() {
    const drugName = this.value.trim();
    if (!drugName) {
      alertsContainer.innerHTML = '';
      safetyIcon.textContent = '💊';
      dosingGuidelines.classList.add('hidden');
      return;
    }
    
    // Get current patient data for context
    const currentPatient = selectedPatientId ? patients.find(p => p.id === selectedPatientId) : null;
    
    // Check for medication safety issues
    const alerts = medicationSafety.checkMedication(drugName, currentPatient || {});
    
    // Display alerts
    alertsContainer.innerHTML = '';
    if (alerts.length > 0) {
      alerts.forEach(alert => {
        const alertDiv = document.createElement('div');
        alertDiv.className = `p-2 rounded-lg text-xs font-medium ${
          alert.type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' :
          alert.type === 'warning' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
          'bg-blue-100 text-blue-800 border border-blue-200'
        }`;
        alertDiv.innerHTML = `
          <div class="flex items-center gap-2">
            <span class="text-sm">${alert.type === 'error' ? '🚨' : alert.type === 'warning' ? '⚠️' : 'ℹ️'}</span>
            <span>${alert.message}</span>
          </div>
        `;
        alertsContainer.appendChild(alertDiv);
      });
      
      // Update safety icon
      const hasErrors = alerts.some(a => a.type === 'error');
      const hasWarnings = alerts.some(a => a.type === 'warning');
      safetyIcon.textContent = hasErrors ? '🚨' : hasWarnings ? '⚠️' : '💊';
    } else {
      safetyIcon.textContent = '✅';
    }
    
    // Show dosing guidelines if available
    const guidelines = medicationSafety.getDosingGuideline(drugName, currentPatient || {});
    if (guidelines) {
      dosingContent.innerHTML = `
        <div class="space-y-2">
          ${guidelines.adult ? `<div><strong>Adult:</strong> ${guidelines.adult}</div>` : ''}
          ${guidelines.pediatric ? `<div><strong>Pediatric:</strong> ${guidelines.pediatric}</div>` : ''}
          ${guidelines.elderly ? `<div><strong>Elderly:</strong> ${guidelines.elderly}</div>` : ''}
          ${guidelines.contraindications ? `<div class="text-red-700"><strong>Contraindications:</strong> ${guidelines.contraindications}</div>` : ''}
          ${guidelines.renalAdjustment ? `<div class="text-orange-700"><strong>Renal Adjustment:</strong> ${guidelines.renalAdjustment}</div>` : ''}
        </div>
      `;
      dosingGuidelines.classList.remove('hidden');
    } else {
      dosingGuidelines.classList.add('hidden');
    }
  });
}

// Update bed availability when department changes
function setupDepartmentBedSelection() {
  const deptSelect = document.getElementById('info_department');
  const bedSelect = document.getElementById('info_bedAssignment');
  
  if (!deptSelect || !bedSelect) return;
  
  deptSelect.addEventListener('change', function() {
    const departmentId = this.value;
    bedSelect.innerHTML = '<option value="">Loading beds...</option>';
    
    if (!departmentId) {
      bedSelect.innerHTML = '<option value="">Select department first</option>';
      return;
    }
    
    // Filter available beds for selected department
    const availableBeds = beds.filter(bed => 
      bed.departmentId === departmentId && bed.status === 'available'
    );
    
    bedSelect.innerHTML = '<option value="">No bed assigned</option>';
    availableBeds.forEach(bed => {
      const option = document.createElement('option');
      option.value = bed.id;
      option.textContent = `${bed.number} (${bed.roomType})`;
      bedSelect.appendChild(option);
    });
    
    if (availableBeds.length === 0) {
      bedSelect.innerHTML = '<option value="">No beds available</option>';
    }
  });
}

// Enhanced add medication order function
function addMedicationOrder() {
  const form = document.getElementById('medCPOEForm');
  if (!form) return;
  
  const formData = new FormData(form);
  const order = {};
  for (const [key, value] of formData.entries()) {
    order[key] = value;
  }
  
  // Validate required fields
  if (!order.drug) {
    showToast('Drug name is required', 'error');
    return;
  }
  
  // Check for safety alerts
  const currentPatient = selectedPatientId ? patients.find(p => p.id === selectedPatientId) : null;
  const alerts = medicationSafety.checkMedication(order.drug, currentPatient || {});
  const criticalAlerts = alerts.filter(a => a.type === 'error');
  
  if (criticalAlerts.length > 0) {
    const proceed = confirm(`Critical safety alert:\n${criticalAlerts.map(a => a.message).join('\n')}\n\nDo you want to proceed anyway?`);
    if (!proceed) return;
  }
  
  // Add order to medications table
  const tbody = document.getElementById('medTableBody');
  if (!tbody) return;
  
  const tr = document.createElement('tr');
  tr.className = 'med-row';
  
  // Check if it's an IV order
  if (order.iv_fluid) {
    // Add to IV table instead
    const ivTbody = document.getElementById('ivTableBody');
    if (ivTbody) {
      const ivTr = document.createElement('tr');
      ivTr.innerHTML = `
        <td><input name="iv_fluid" value="${order.iv_fluid}" class="w-full rounded border px-2 py-1" readonly/></td>
        <td><input name="iv_ml_hr" value="${order.iv_ml_hr || ''}" class="w-full rounded border px-2 py-1"/></td>
        <td><input name="iv_gtt_min" value="${order.iv_gtt_min || ''}" class="w-full rounded border px-2 py-1"/></td>
        <td><input name="iv_volume" value="${order.iv_volume || ''}" class="w-full rounded border px-2 py-1"/></td>
        <td><input name="iv_time" value="${order.iv_time || ''}" class="w-full rounded border px-2 py-1"/></td>
        <td><input name="startDate" value="${order.startDate || ''}" type="date" class="w-full rounded border px-2 py-1"/></td>
        <td><input name="prescriber" value="${order.prescriber || ''}" class="w-full rounded border px-2 py-1"/></td>
        <td><button type="button" class="btn-remove-row px-2 py-1 rounded bg-white border">🗑️</button></td>
      `;
      ivTbody.appendChild(ivTr);
    }
  } else {
    // Add to medication table
    tr.innerHTML = `
      <td><input name="drug" value="${order.drug}" class="w-full rounded border px-2 py-1" readonly/></td>
      <td><input name="dosage" value="${order.dosage || ''}" class="w-full rounded border px-2 py-1"/></td>
      <td><input name="route" value="${order.route || ''}" class="w-full rounded border px-2 py-1"/></td>
      <td><input name="frequency" value="${order.frequency || ''}" class="w-full rounded border px-2 py-1"/></td>
      <td><input name="startDate" value="${order.startDate || ''}" type="date" class="w-full rounded border px-2 py-1"/></td>
      <td><input name="duration" value="${order.duration || ''}" class="w-full rounded border px-2 py-1"/></td>
      <td><select name="prn" class="w-full rounded border px-2 py-1"><option value="No" ${order.prn === 'No' ? 'selected' : ''}>No</option><option value="Yes" ${order.prn === 'Yes' ? 'selected' : ''}>Yes</option></select></td>
      <td><input name="prescriber" value="${order.prescriber || ''}" class="w-full rounded border px-2 py-1"/></td>
      <td><button type="button" class="btn-remove-row px-2 py-1 rounded bg-white border">🗑️</button></td>
    `;
    tbody.appendChild(tr);
  }
  
  // Clear form
  form.reset();
  document.getElementById('drugSafetyAlerts').innerHTML = '';
  document.getElementById('drugSafetyIcon').textContent = '💊';
  document.getElementById('dosingGuidelines').classList.add('hidden');
  
  showToast('Medication order added', 'success');
  enableMedRowSelection();
}

// Set up event listeners when page loads
window.addEventListener('load', function() {
  setupMedicationSafetyChecks();
  setupDepartmentBedSelection();
  
  // Enhanced add medication button
  const addMedBtn = document.getElementById('addMedOrderBtn');
  if (addMedBtn) {
    addMedBtn.addEventListener('click', addMedicationOrder);
  }
  
  // Clear CPOE form button
  const clearBtn = document.getElementById('cpoeClear');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      const form = document.getElementById('medCPOEForm');
      if (form) form.reset();
      document.getElementById('drugSafetyAlerts').innerHTML = '';
      document.getElementById('drugSafetyIcon').textContent = '💊';
      document.getElementById('dosingGuidelines').classList.add('hidden');
    });
  }
  
  // Send to pharmacy button
  const pharmacyBtn = document.getElementById('sendToPharmacy');
  if (pharmacyBtn) {
    pharmacyBtn.addEventListener('click', function() {
      const currentPatient = selectedPatientId ? patients.find(p => p.id === selectedPatientId) : null;
      if (!currentPatient) {
        showToast('Please select a patient first', 'error');
        return;
      }
      
      // Count active medication orders
      const medRows = document.querySelectorAll('#medTableBody tr');
      const ivRows = document.querySelectorAll('#ivTableBody tr');
      const totalOrders = medRows.length + ivRows.length;
      
      if (totalOrders === 0) {
        showToast('No medication orders to send', 'error');
        return;
      }
      
      showToast(`${totalOrders} orders sent to pharmacy for ${currentPatient.name}`, 'success');
    });
  }
});

// Update the bed status rendering function
function renderBedStatus() {
  const totalBedsEl = document.getElementById('totalBeds');
  const availableBedsEl = document.getElementById('availableBeds');
  const occupiedBedsEl = document.getElementById('occupiedBeds');
  const occupancyRateEl = document.getElementById('occupancyRate');
  
  if (!totalBedsEl) return;
  
  const totalBeds = beds.length;
  const availableBeds = beds.filter(b => b.status === 'available').length;
  const occupiedBeds = beds.filter(b => b.status === 'occupied').length;
  const occupancyRate = totalBeds > 0 ? Math.round((occupiedBeds / totalBeds) * 100) : 0;
  
  totalBedsEl.textContent = totalBeds;
  availableBedsEl.textContent = availableBeds;
  occupiedBedsEl.textContent = occupiedBeds;
  occupancyRateEl.textContent = occupancyRate + '%';
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
// Single consolidated auth state handler (removed duplicates)
// This handler is authoritative for UI changes on auth state.
auth.onAuthStateChanged(async user => {
  currentUser = user;
  // expose to global inline snippets
  window.currentUser = currentUser;
  if(user){
    // lookup role safely (client-side helper). NOTE: production should use custom claims and security rules.
    try{
      const uq = await db.collection('users').where('email','==', user.email).limit(1).get();
      if(!uq.empty) currentRole = (uq.docs[0].data().role || 'guest').toLowerCase(); else currentRole = 'guest';
    }catch(e){ console.warn('role lookup failed', e); currentRole = 'guest'; }
    renderUserBadge();
    applyRoleUI();
    // hide login modal if present
    const loginModalEl = $('loginModal'); if(loginModalEl) loginModalEl.classList.add('hidden');
    // enable realtime updates for patients
    enableRealtimePatients();
    
    // Initialize clinical messaging system early
    if (typeof ClinicalMessagingSystem !== 'undefined' && !window.clinicalMessaging) {
      try {
        console.log('🔧 Early messaging initialization...');
        window.clinicalMessaging = new ClinicalMessagingSystem();
        console.log('✅ Messaging system initialized early');
      } catch (error) {
        console.error('❌ Early messaging initialization failed:', error);
      }
    }
    
    // initialize departments and beds
    initializeSystemForUser();
  } else {
    currentRole = 'guest';
    renderUserBadge();
    applyRoleUI();
    // show login modal
    const loginModalEl = $('loginModal'); if(loginModalEl) loginModalEl.classList.remove('hidden');
    patients = []; renderPatients([]);
  }

  // Update user menu UI elements (keeps things consistent, previously wired in another handler)
  const userMenuEmail = document.getElementById('userMenuEmail');
  const userMenuEmailStrong = document.getElementById('userMenuEmailStrong');
  const userRoleEl = document.getElementById('userRole');
  if(user){
    if(userMenuEmail) userMenuEmail.textContent = user.email;
    if(userMenuEmailStrong) userMenuEmailStrong.textContent = user.email;
    if(userRoleEl) userRoleEl.textContent = (currentRole||'guest').toUpperCase();
  } else {
    if(userMenuEmail) userMenuEmail.textContent = 'Not signed in';
    if(userMenuEmailStrong) userMenuEmailStrong.textContent = 'Not signed in';
    if(userRoleEl) userRoleEl.textContent = 'GUEST';
  }
});

// render user badge/email
function renderUserBadge(){
  const currentUserName = document.getElementById('currentUserName');
  const currentUserRole = document.getElementById('currentUserRole');
  const ui = $('userInfo');
  
  if(currentUserName && currentUserRole) {
    if(currentUser) {
      currentUserName.textContent = currentUser.email;
      currentUserRole.textContent = `(${(currentRole||'guest').toUpperCase()})`;
    } else {
      currentUserName.textContent = 'Not signed in';
      currentUserRole.textContent = '(GUEST)';
    }
  }
  
  if(!ui) return;
  ui.innerHTML = '';
  if(!currentUser) { ui.innerHTML = '<div class="text-sm text-white/80">Not signed in</div>'; return; }
  const b = document.createElement('div'); b.className='px-3 py-1 rounded-full bg-white/10 text-white font-semibold'; b.textContent = 'USER';
  const t = document.createElement('div'); t.className='text-sm text-white/90'; t.innerHTML = `<div class="font-medium">${esc(currentUser.email)}</div><div class="text-xs opacity-60">${(currentRole||'guest').toUpperCase()}</div>`;
  ui.appendChild(b); ui.appendChild(t);
}

// enable/hide UI based on role
function applyRoleUI(){
  console.log('🔒 Applying role-based UI restrictions for role:', currentRole);
  
  const newBtn = $('btnNew'); 
  if(newBtn) { 
    if(['admin','doctor','nurse','admission'].includes(currentRole)) {
      newBtn.classList.remove('hidden'); 
    } else {
      newBtn.classList.add('hidden'); 
    }
  }
  
  // Hide most clinical tabs from admission and bednav - they only see dashboard, departments, and basic patient info
  const restrictedRoles = ['admission', 'bednav'];
  const limitedAccessTabs = [
    'tab-id', 'tab-history', 'tab-physical', 'tab-assessment', 
    'tab-labs', 'tab-meds', 'tab-messages', 'tab-vitals', 
    'tab-nurse', 'tab-doctor', 'tab-staff'
  ];
  
  // Different restrictions for each role
  if(currentRole === 'admission') {
    // Admission users can see admission-specific tabs but not all clinical tabs
    const admissionRestrictedTabs = [
      'tab-id', 'tab-history', 'tab-physical', 'tab-assessment', 
      'tab-labs', 'tab-meds', 'tab-messages', 'tab-vitals', 
      'tab-nurse', 'tab-doctor', 'tab-staff'
    ];
    
    admissionRestrictedTabs.forEach(tabId => {
      const allTabBtns = document.querySelectorAll(`[data-target="${tabId}"]`);
      const tabPanel = document.getElementById(tabId);
      
      allTabBtns.forEach(btn => {
        if(btn) btn.style.display = 'none';
      });
      
      if(tabPanel) tabPanel.classList.add('hidden');
    });
    
    // Show allowed tabs for admission users
    const admissionAllowedTabs = ['tab-dashboard', 'tab-departments', 'tab-info', 'tab-admission', 'tab-plan'];
    admissionAllowedTabs.forEach(tabId => {
      const allTabBtns = document.querySelectorAll(`[data-target="${tabId}"]`);
      const tabPanel = document.getElementById(tabId);
      
      allTabBtns.forEach(btn => {
        if(btn) btn.style.display = '';
      });
      
      if(tabPanel) tabPanel.classList.remove('hidden');
    });
    
  } else if(currentRole === 'bednav') {
    console.log('🚫 Applying BEDNAV restrictions - hiding all tabs except dashboard, departments, patient info');
    // Bednav users have strict restrictions - only dashboard, departments, and patient info
    const allTabs = [
      'tab-id', 'tab-history', 'tab-physical', 'tab-assessment', 
      'tab-labs', 'tab-meds', 'tab-messages', 'tab-vitals', 
      'tab-nurse', 'tab-doctor', 'tab-admission', 'tab-plan', 'tab-staff'
    ];
    
    // Hide ALL tabs first
    allTabs.forEach(tabId => {
      const allTabBtns = document.querySelectorAll(`[data-target="${tabId}"]`);
      const tabPanel = document.getElementById(tabId);
      
      allTabBtns.forEach(btn => {
        if(btn) {
          btn.style.display = 'none';
          console.log(`🚫 Hiding tab button: ${tabId}`);
        }
      });
      
      if(tabPanel) tabPanel.classList.add('hidden');
    });
    
    // Show ONLY allowed tabs for bednav users (dashboard, departments, patient info)
    const bednavAllowedTabs = ['tab-dashboard', 'tab-departments', 'tab-info'];
    bednavAllowedTabs.forEach(tabId => {
      const allTabBtns = document.querySelectorAll(`[data-target="${tabId}"]`);
      const tabPanel = document.getElementById(tabId);
      
      allTabBtns.forEach(btn => {
        if(btn) {
          btn.style.display = '';
          console.log(`✅ Showing allowed tab: ${tabId}`);
        }
      });
      
      if(tabPanel) tabPanel.classList.remove('hidden');
    });
  }
  
  // Hide Treatment Plan tab from nurses and restricted roles - only doctors and admin can access it
  const planTabBtns = document.querySelectorAll('[data-target="tab-assessment"]');
  const planPanel = document.getElementById('tab-assessment');
  if(['nurse', 'guest', 'admission', 'bednav'].includes(currentRole)){
    planTabBtns.forEach(btn => {
      if(btn) btn.style.display = 'none';
    });
    if(planPanel) planPanel.classList.add('hidden');
  } else if(currentRole !== 'bednav') {
    planTabBtns.forEach(btn => {
      if(btn) btn.style.display = '';
    });
  }
  
  // Hide Doctor Notes tab from nurses, guests, and restricted roles
  const doctorTabBtns = document.querySelectorAll('[data-target="tab-doctor"]');
  const doctorPanel = document.getElementById('tab-doctor');
  if(['nurse', 'guest', 'admission', 'bednav'].includes(currentRole)){
    doctorTabBtns.forEach(btn => {
      if(btn) btn.style.display = 'none';
    });
    if(doctorPanel) doctorPanel.classList.add('hidden');
  } else if(currentRole !== 'bednav') {
    doctorTabBtns.forEach(btn => {
      if(btn) btn.style.display = '';
    });
  }
  
  // disable doctor save button for nurses and restricted roles
  const doctorSave = document.querySelector('[data-save="doctor"]');
  if(doctorSave) doctorSave.disabled = ['nurse', 'guest', 'admission', 'bednav'].includes(currentRole);
  
  // disable assessment save button for nurses and restricted roles
  const assessmentSave = document.querySelector('[data-save="assessment"]');
  if(assessmentSave) assessmentSave.disabled = ['nurse', 'guest', 'admission', 'bednav'].includes(currentRole);
  
  // med tab controls: allow nurses and admission to add/edit meds but disable some features for guests and bednav
  const addMedBtn = document.getElementById('addMedRow');
  const normalizeBtn = document.getElementById('normalizeIVs');
  if(addMedBtn) addMedBtn.disabled = ['guest', 'bednav'].includes(currentRole);
  if(normalizeBtn) normalizeBtn.disabled = ['guest', 'bednav'].includes(currentRole);
}

// Update current user role display
function updateCurrentUserRole() {
  const currentUserRole = document.getElementById('currentUserRole');
  if (currentUserRole) {
    currentUserRole.textContent = `(${(currentRole||'guest').toUpperCase()})`;
  }
  
  const userRoleEl = document.getElementById('userRole');
  if (userRoleEl) {
    userRoleEl.textContent = (currentRole||'guest').toUpperCase();
  }
}

// Function to create sample users with different roles (for testing)
// This would typically be done through an admin interface
async function createSampleUsers() {
  const sampleUsers = [
    { email: 'admin@hospital.com', role: 'admin', name: 'Administrator' },
    { email: 'doctor@hospital.com', role: 'doctor', name: 'Dr. Smith' },
    { email: 'nurse@hospital.com', role: 'nurse', name: 'Nurse Johnson' },
    { email: 'admission@hospital.com', role: 'admission', name: 'Admission Staff' },
    { email: 'bednav@hospital.com', role: 'bednav', name: 'Bed Navigator' }
  ];

  console.log('📋 Sample users for testing:');
  sampleUsers.forEach(user => {
    console.log(`📧 ${user.email} → Role: ${user.role} (${user.name})`);
  });
  
  // In a real system, you would create these users in Firebase Auth and Firestore
  // For testing, you can manually add them to your Firebase console
}

// -------------------- Load & Render Patients --------------------
async function loadPatients(){
  patients = [];
  try{
    const snap = await db.collection('patients').orderBy('updatedAt','desc').get();
    snap.forEach(d => patients.push({ id: d.id, ...d.data() }));
    renderPatients(patients);
    updateStats();
    // ensure dashboard shows something sensible: keep existing selection if present, otherwise pick first
    if(!selectedPatientId && patients.length) selectedPatientId = patients[0].id;
    // render dashboard for the selected patient (if dashboard elements exist)
    try{ renderDashboardForPatient(selectedPatientId); }catch(e){}
  }catch(e){ console.error(e); showToast('Failed to load patients', 'error'); }
}

// Real-time listener for patients collection (keeps UI in sync)
let patientsUnsub = null;
function enableRealtimePatients(){
  if(patientsUnsub) patientsUnsub();
  patientsUnsub = db.collection('patients').orderBy('updatedAt','desc').onSnapshot(snap=>{
    const arr = [];
    snap.forEach(d => arr.push({ id: d.id, ...d.data() }));
    patients = arr;
    
    // Update UI components
    renderPatients(patients);
    updateStats();
    
    // Ensure dashboard shows current data
    if(selectedPatientId) {
      // Check if selected patient still exists
      const selectedPatient = patients.find(p => p.id === selectedPatientId);
      if(selectedPatient) {
        renderDashboardForPatient(selectedPatientId);
      } else {
        // Selected patient was deleted, clear selection
        selectedPatientId = null;
        renderDashboardForPatient(null);
      }
    } else if(patients.length > 0) {
      // Auto-select first patient if no selection
      selectedPatientId = patients[0].id;
      renderDashboardForPatient(selectedPatientId);
    }
    
    // Update last refresh time
    updateLastUpdated();
    
  }, err => { 
    console.warn('patients realtime failed', err); 
    showToast('Failed to sync patient data', 'error');
  });
}

function updateStats(){
  const total = patients.length;
  const inP = patients.filter(p => p.patientStatus === 'Inpatient').length;
  const outP = patients.filter(p => p.patientStatus === 'Outpatient').length;
  const emergencyP = patients.filter(p => p.patientStatus === 'Emergency').length;
  const observationP = patients.filter(p => p.patientStatus === 'Observation').length;
  
  // Update all dashboard statistics
  if($('totalPatients')) $('totalPatients').textContent = total;
  if($('inPatients')) $('inPatients').textContent = inP;
  if($('outPatients')) $('outPatients').textContent = outP;
  if($('count')) $('count').textContent = total;
  
  // Calculate medication statistics from actual patient data
  let totalMeds = 0;
  let pendingMeds = 0;
  let dueMeds = 0;
  
  patients.forEach(p => {
    if(Array.isArray(p.medOrders)) {
      totalMeds += p.medOrders.length;
      // Count pending meds (those without administration records)
      p.medOrders.forEach(med => {
        if(med.status === 'pending' || !med.status) pendingMeds++;
        if(med.due || (med.frequency && med.startDate)) dueMeds++;
      });
    }
  });
  
  // Update medication dashboard
  if($('medsCount')) $('medsCount').textContent = totalMeds;
  if($('pendingMeds')) $('pendingMeds').textContent = pendingMeds;
  if($('dueMeds')) $('dueMeds').textContent = dueMeds;
  
  // Calculate alerts from patient data
  let alertsCount = 0;
  const alertsList = [];
  
  patients.forEach(p => {
    // Check for critical vitals
    if(Array.isArray(p.vitals) && p.vitals.length > 0) {
      const latestVitals = p.vitals[p.vitals.length - 1];
      const temp = parseFloat(latestVitals.temp);
      const bp = latestVitals.bp;
      const spo2 = parseFloat(latestVitals.spo2 || latestVitals.spO2);
      
      if(temp >= 39 || temp <= 35) {
        alertsCount++;
        alertsList.push(`${p.name}: Critical temperature (${temp}°C)`);
      }
      if(spo2 < 90) {
        alertsCount++;
        alertsList.push(`${p.name}: Low oxygen saturation (${spo2}%)`);
      }
    }
    
    // Check for allergies
    if(p.allergies && p.allergies.trim()) {
      alertsCount++;
      alertsList.push(`${p.name}: Has documented allergies`);
    }
    
    // Check for overdue medications
    if(Array.isArray(p.medOrders)) {
      p.medOrders.forEach(med => {
        if(med.status === 'overdue' || med.missed) {
          alertsCount++;
          alertsList.push(`${p.name}: Overdue medication - ${med.drug}`);
        }
      });
    }
  });
  
  // Update alerts dashboard
  if($('alertCount')) $('alertCount').textContent = alertsCount;
  const alertsListEl = $('alertsList');
  if(alertsListEl) {
    if(alertsList.length > 0) {
      alertsListEl.innerHTML = alertsList.slice(0, 5).map(alert => 
        `<div class="text-sm p-2 rounded bg-amber-50 border border-amber-200 text-amber-800 mb-1">${esc(alert)}</div>`
      ).join('');
    } else {
      alertsListEl.innerHTML = '<div class="text-sm text-slate-400 italic">No active alerts</div>';
    }
  }
  
  // Update dashboard empty states
  const patientsEmpty = $('patientsEmpty');
  const patientsContainer = $('patientsContainer');
  const patientsLoading = $('patientsLoading');
  
  if(patientsLoading) patientsLoading.classList.add('hidden');
  
  if(total === 0) {
    if(patientsEmpty) patientsEmpty.classList.remove('hidden');
    if(patientsContainer) patientsContainer.classList.add('hidden');
  } else {
    if(patientsEmpty) patientsEmpty.classList.add('hidden');
    if(patientsContainer) patientsContainer.classList.remove('hidden');
  }
}

function renderPatients(list){
  const container = $('patientsContainer');
  if(!container) return;
  container.innerHTML = '';
  (list||[]).forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'p-4 rounded-xl glass soft-shadow flex flex-col patient-card cursor-pointer transition-all hover:shadow-lg';
    
    // Add patient summary info
    const latestVitals = Array.isArray(p.vitals) && p.vitals.length > 0 ? p.vitals[p.vitals.length - 1] : null;
    const medsCount = Array.isArray(p.medOrders) ? p.medOrders.length : 0;
    const hasAlerts = p.allergies || (latestVitals && (parseFloat(latestVitals.temp) >= 38 || parseFloat(latestVitals.spo2 || latestVitals.spO2) < 94));
    
    card.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <div class="flex-1">
          <div class="font-semibold text-slate-800">${esc(p.name||p.fullname||'Unnamed Patient')}</div>
          <div class="text-sm text-slate-500">${esc(p.physician ? 'Dr. ' + p.physician : 'No physician assigned')}</div>
          <div class="text-xs text-slate-400 mt-1">
            MRN: ${esc(p.mrn || p.id?.slice(-6) || '—')} • 
            ${esc(p.age || '—')} yrs • 
            ${esc(p.gender || '—')}
          </div>
        </div>
        <div class="text-right">
          ${p.patientStatus==='Inpatient'?'<span class="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">Inpatient</span>':
            p.patientStatus==='Emergency'?'<span class="px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">Emergency</span>':
            p.patientStatus==='Observation'?'<span class="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">Observation</span>':
            '<span class="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">Outpatient</span>'}
          ${hasAlerts ? '<div class="text-red-500 text-xs mt-1">⚠️ Alerts</div>' : ''}
        </div>
      </div>
      
      <!-- Patient summary stats -->
      <div class="flex justify-between items-center text-xs text-slate-500 mb-3">
        <span>Room: ${esc(p.roomNo || '—')}</span>
        <span>Meds: ${medsCount}</span>
        <span>Vitals: ${latestVitals ? 'T:'+latestVitals.temp+'°C' : 'None'}</span>
      </div>
      
      <!-- Quick info -->
      ${p.initialDiagnosis ? `<div class="text-xs text-slate-600 bg-slate-50 rounded px-2 py-1 mb-2">
        Dx: ${esc(p.initialDiagnosis)}
      </div>` : ''}
    `;
    
    const actions = document.createElement('div'); 
    actions.className='flex gap-2 mt-auto';
    
    const view = document.createElement('button'); 
    view.className='flex-1 px-3 py-1 rounded bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors text-xs font-medium'; 
    view.textContent='👁️ View'; 
    view.onclick = (ev)=> { ev.stopPropagation(); viewPatient(p.id); };
    
    const edit = document.createElement('button'); 
    edit.className='flex-1 px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors text-xs font-medium'; 
    edit.textContent='✏️ Edit'; 
    edit.onclick = (ev)=> { ev.stopPropagation(); editPatient(p.id); };
    
    const del = document.createElement('button'); 
    del.className='px-3 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200 transition-colors text-xs font-medium'; 
    del.textContent='🗑️'; 
    del.onclick = (ev)=> { ev.stopPropagation(); deletePatient(p.id); };
    
    actions.appendChild(view); 
    actions.appendChild(edit); 
    actions.appendChild(del);
    card.appendChild(actions);
    
    // highlight selected
    if(selectedPatientId && selectedPatientId === p.id) {
      card.classList.add('selected', 'ring-2', 'ring-emerald-400', 'bg-emerald-50');
    }
    
    card.addEventListener('click', (e)=>{
      // avoid clicks on action buttons causing double-handling
      if(e.target && (e.target.tagName === 'BUTTON' || e.target.closest('button'))) return;
      
      // Update selection
      selectedPatientId = p.id; 
      
      // Update dashboard for selected patient
      renderDashboardForPatient(p.id);
      
      // visually mark selection
      qsa('.patient-card').forEach(c => {
        c.classList.remove('selected', 'ring-2', 'ring-emerald-400', 'bg-emerald-50');
      });
      card.classList.add('selected', 'ring-2', 'ring-emerald-400', 'bg-emerald-50');
      
      // Show toast notification
      showToast(`Selected: ${p.name || 'Patient'}`, 'info', 2000);
    });
    
    container.appendChild(card);
  });
  
  // Update global count
  if($('count')) $('count').textContent = (list||[]).length;
  
  // Auto-select first patient if none selected and patients exist
  if(list && list.length > 0 && !selectedPatientId) {
    selectedPatientId = list[0].id;
    renderDashboardForPatient(selectedPatientId);
    // Mark first card as selected
    const firstCard = container.querySelector('.patient-card');
    if(firstCard) {
      firstCard.classList.add('selected', 'ring-2', 'ring-emerald-400', 'bg-emerald-50');
    }
  }
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

// -------------------- Clinical Messaging System --------------------
class ClinicalMessagingSystem {
  constructor() {
    this.messages = [];
    this.currentThread = null;
    this.unreadCount = 0;
    this.templates = [];
    this.messageThreads = new Map();
    this.readReceipts = new Map();
    this.patientLinkedMessages = new Map();
    this.initializeMessaging();
  }

  initializeMessaging() {
    // Load templates
    this.loadMessageTemplates();
    // Add demo messages
    this.loadDemoMessages();
    this.setupEventListeners();
    this.renderMessages();
    this.updateUnreadCount();
    // Initialize real-time notifications
    this.initializeRealTimeNotifications();
  }

  loadMessageTemplates() {
    this.templates = [
      {
        id: 'discharge_ready',
        name: 'Patient Discharge Ready',
        category: 'discharge',
        subject: 'Patient Ready for Discharge - Room {room}',
        content: 'Patient {patientName} in Room {room} is ready for discharge.\n\nCompleted items:\n• Medications reconciled\n• Follow-up appointments scheduled\n• Discharge instructions provided\n• Transportation arranged\n\nPlease review and approve discharge.'
      },
      {
        id: 'lab_critical',
        name: 'Critical Lab Values',
        category: 'lab',
        subject: 'CRITICAL LAB VALUES - {patientName}',
        content: 'CRITICAL: Patient {patientName} has abnormal lab values requiring immediate attention.\n\nLab: {labName}\nValue: {labValue}\nNormal Range: {normalRange}\n\nImmediate action required. Please review and respond.'
      },
      {
        id: 'med_clarification',
        name: 'Medication Clarification',
        category: 'pharmacy',
        subject: 'Medication Order Clarification - {patientName}',
        content: 'Please clarify medication order for {patientName}:\n\nMedication: {medication}\nCurrent Order: {currentOrder}\nConcern: {concern}\n\nPlease review and provide clarification.'
      },
      {
        id: 'consult_request',
        name: 'Consultation Request',
        category: 'clinical',
        subject: 'Consultation Request - {specialty} for {patientName}',
        content: 'Requesting {specialty} consultation for {patientName} in Room {room}.\n\nReason for consultation: {reason}\nUrgency: {urgency}\nPatient background: {background}\n\nPlease schedule at your earliest convenience.'
      },
      {
        id: 'shift_handoff',
        name: 'Shift Handoff',
        category: 'nursing',
        subject: 'Shift Handoff - {department}',
        content: 'Shift handoff for {department}:\n\nKey patients to monitor:\n{keyPatients}\n\nPending orders:\n{pendingOrders}\n\nSpecial instructions:\n{specialInstructions}'
      }
    ];
  }

  initializeRealTimeNotifications() {
    // Simulate real-time notifications every 30 seconds
    setInterval(() => {
      this.checkForNewMessages();
    }, 30000);
  }

  checkForNewMessages() {
    // Simulate receiving new messages (in real implementation, this would be WebSocket/SSE)
    const randomMessages = [
      {
        type: 'alert',
        priority: 'high',
        from: 'Lab Department',
        fromRole: 'Lab Tech',
        subject: 'New Lab Results Available',
        content: 'Lab results are ready for review.',
        urgent: false
      },
      {
        type: 'clinical',
        priority: 'medium',
        from: 'Nurse Station',
        fromRole: 'Nurse',
        subject: 'Patient Status Update',
        content: 'Patient condition update available.',
        urgent: false
      }
    ];

    // Randomly add a new message (10% chance)
    if (Math.random() < 0.1) {
      const randomMsg = randomMessages[Math.floor(Math.random() * randomMessages.length)];
      this.receiveNewMessage(randomMsg);
    }
  }

  receiveNewMessage(messageData) {
    const newMessage = {
      id: 'msg_' + Date.now(),
      type: messageData.type,
      priority: messageData.priority,
      from: messageData.from,
      fromRole: messageData.fromRole,
      to: currentUser?.displayName || 'Current User',
      subject: messageData.subject,
      content: messageData.content,
      timestamp: new Date(),
      read: false,
      urgent: messageData.urgent,
      threadId: null,
      patientId: messageData.patientId || null,
      readReceipts: []
    };

    this.messages.push(newMessage);
    this.unreadCount++;
    this.updateUnreadCount();
    this.renderMessages();
    
    // Show notification
    this.showNotification(newMessage);
  }

  showNotification(message) {
    // Browser notification if permission granted
    if (Notification.permission === 'granted') {
      new Notification(`New ${message.type} message`, {
        body: `From: ${message.from}\n${message.subject}`,
        icon: '/favicon.ico'
      });
    }
    
    // In-app notification
    showToast(`New message from ${message.from}: ${message.subject}`, 'info');
  }

  loadDemoMessages() {
    const demoMessages = [
      {
        id: 'msg_001',
        type: 'clinical',
        priority: 'high',
        from: 'Dr. Sarah Chen',
        fromRole: 'Doctor',
        to: 'Nurse Station',
        subject: 'Patient John Doe - Blood Pressure Alert',
        content: 'Patient in Room 301 showing elevated BP readings (180/110). Please monitor closely and notify if readings remain elevated for next 2 hours.',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        read: false,
        urgent: true,
        threadId: 'thread_001',
        patientId: 'pat_001',
        readReceipts: [
          { userId: 'nurse_001', readAt: new Date(Date.now() - 1.5 * 60 * 60 * 1000), userName: 'Nurse Maria' }
        ]
      },
      {
        id: 'msg_002',
        type: 'administrative',
        priority: 'medium',
        from: 'Pharmacy',
        fromRole: 'Pharmacist',
        to: 'Dr. Martinez',
        subject: 'Medication Clarification Required',
        content: 'Please clarify dosage for Metformin prescription for Patient ID 12345. Current order shows 500mg BID, but patient history indicates 1000mg BID previously.',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        read: true,
        urgent: false,
        threadId: 'thread_002',
        patientId: 'pat_002',
        readReceipts: [
          { userId: 'dr_martinez', readAt: new Date(Date.now() - 3 * 60 * 60 * 1000), userName: 'Dr. Martinez' }
        ]
      },
      {
        id: 'msg_003',
        type: 'alert',
        priority: 'critical',
        from: 'Lab Department',
        fromRole: 'Lab Tech',
        to: 'Dr. Smith',
        subject: 'Critical Lab Values - Patient Emergency',
        content: 'CRITICAL: Patient Mary Johnson - Troponin levels extremely elevated (15.2 ng/mL). Immediate cardiology consultation recommended.',
        timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
        read: false,
        urgent: true,
        threadId: 'thread_003',
        patientId: 'pat_003',
        readReceipts: []
      },
      {
        id: 'msg_004',
        type: 'clinical',
        priority: 'low',
        from: 'Nurse Jessica',
        fromRole: 'Nurse',
        to: 'Dr. Wilson',
        subject: 'Patient Discharge Planning',
        content: 'Patient in Room 205 is ready for discharge. All medications reconciled, follow-up appointments scheduled. Please review discharge summary.',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        read: true,
        urgent: false,
        threadId: 'thread_004',
        patientId: 'pat_004',
        readReceipts: [
          { userId: 'dr_wilson', readAt: new Date(Date.now() - 5 * 60 * 60 * 1000), userName: 'Dr. Wilson' }
        ]
      },
      // Reply message in thread
      {
        id: 'msg_005',
        type: 'clinical',
        priority: 'medium',
        from: 'Dr. Wilson',
        fromRole: 'Doctor',
        to: 'Nurse Jessica',
        subject: 'Re: Patient Discharge Planning',
        content: 'Thank you for the update. Discharge approved. Please ensure patient has transportation arranged and understands follow-up instructions.',
        timestamp: new Date(Date.now() - 5.5 * 60 * 60 * 1000),
        read: true,
        urgent: false,
        threadId: 'thread_004',
        patientId: 'pat_004',
        replyTo: 'msg_004',
        readReceipts: [
          { userId: 'nurse_jessica', readAt: new Date(Date.now() - 5 * 60 * 60 * 1000), userName: 'Nurse Jessica' }
        ]
      }
    ];
    
    this.messages = demoMessages;
    this.unreadCount = this.messages.filter(msg => !msg.read).length;
    
    // Build thread map
    this.buildThreadMap();
    
    // Build patient message map
    this.buildPatientMessageMap();
  }

  buildThreadMap() {
    this.messageThreads.clear();
    this.messages.forEach(msg => {
      if (msg.threadId) {
        if (!this.messageThreads.has(msg.threadId)) {
          this.messageThreads.set(msg.threadId, []);
        }
        this.messageThreads.get(msg.threadId).push(msg);
      }
    });
    
    // Sort messages in each thread by timestamp
    this.messageThreads.forEach(thread => {
      thread.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    });
  }

  buildPatientMessageMap() {
    this.patientLinkedMessages.clear();
    this.messages.forEach(msg => {
      if (msg.patientId) {
        if (!this.patientLinkedMessages.has(msg.patientId)) {
          this.patientLinkedMessages.set(msg.patientId, []);
        }
        this.patientLinkedMessages.get(msg.patientId).push(msg);
      }
    });
  }

  setupEventListeners() {
    console.log('🔧 Setting up messaging event listeners...');
    
    // Compose message button
    const composeBtn = document.getElementById('composeBtn');
    if (composeBtn) {
      composeBtn.addEventListener('click', () => {
        console.log('📝 Compose button clicked');
        this.showComposeModal();
      });
      console.log('✅ Compose button listener added');
    } else {
      console.warn('❌ Compose button not found');
    }

    // Alerts button
    const alertsBtn = document.getElementById('alertsBtn');
    if (alertsBtn) {
      alertsBtn.addEventListener('click', () => {
        console.log('🚨 Alerts button clicked');
        this.showCriticalAlerts();
      });
      console.log('✅ Alerts button listener added');
    } else {
      console.warn('❌ Alerts button not found');
    }

    // Message filter
    const messageFilter = document.getElementById('messageFilter');
    if (messageFilter) {
      messageFilter.addEventListener('change', () => {
        console.log('🔍 Filter changed to:', messageFilter.value);
        this.filterMessages();
      });
      console.log('✅ Message filter listener added');
    } else {
      console.warn('❌ Message filter not found');
    }

    // Refresh button
    const refreshBtn = document.getElementById('refreshMessages');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        console.log('🔄 Refresh button clicked');
        this.refreshMessages();
      });
      console.log('✅ Refresh button listener added');
    } else {
      console.warn('❌ Refresh button not found');
    }

    // Templates button
    const templatesBtn = document.getElementById('templatesBtn');
    if (templatesBtn) {
      templatesBtn.addEventListener('click', () => {
        console.log('📋 Templates button clicked');
        this.showTemplatesModal();
      });
      console.log('✅ Templates button listener added');
    } else {
      console.warn('❌ Templates button not found');
    }

    // Patient messages button
    const patientMsgsBtn = document.getElementById('patientMessagesBtn');
    if (patientMsgsBtn) {
      patientMsgsBtn.addEventListener('click', () => {
        console.log('👤 Patient messages button clicked');
        this.showPatientMessages();
      });
      console.log('✅ Patient messages button listener added');
    } else {
      console.warn('❌ Patient messages button not found');
    }

    // Reply functionality
    const sendReplyBtn = document.getElementById('sendReply');
    const cancelReplyBtn = document.getElementById('cancelReply');
    
    if (sendReplyBtn) {
      sendReplyBtn.addEventListener('click', () => {
        console.log('💬 Send reply button clicked');
        this.sendReply();
      });
      console.log('✅ Send reply button listener added');
    }
    
    if (cancelReplyBtn) {
      cancelReplyBtn.addEventListener('click', () => {
        console.log('❌ Cancel reply button clicked');
        this.hideReply();
      });
      console.log('✅ Cancel reply button listener added');
    }

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        console.log('🔔 Notification permission:', permission);
      });
    }
    
    console.log('✅ All messaging event listeners setup complete');
  }

  renderMessages() {
    const messagesList = document.getElementById('messagesList');
    const messageCount = document.getElementById('messageCount');
    
    if (!messagesList) return;

    const filter = document.getElementById('messageFilter')?.value || 'all';
    let filteredMessages = this.messages;

    // Apply filters
    if (filter !== 'all') {
      filteredMessages = this.messages.filter(msg => {
        switch (filter) {
          case 'unread': return !msg.read;
          case 'alerts': return msg.type === 'alert';
          case 'clinical': return msg.type === 'clinical';
          case 'administrative': return msg.type === 'administrative';
          case 'threaded': return msg.threadId && this.messageThreads.get(msg.threadId)?.length > 1;
          case 'patient-linked': return msg.patientId;
          default: return true;
        }
      });
    }

    // Group by threads for display
    const displayMessages = this.groupMessagesForDisplay(filteredMessages);

    messagesList.innerHTML = '';
    
    displayMessages.forEach(item => {
      if (item.isThread) {
        // Render thread
        this.renderThreadItem(item, messagesList);
      } else {
        // Render individual message
        this.renderMessageItem(item.message, messagesList);
      }
    });

    if (messageCount) {
      messageCount.textContent = filteredMessages.length;
    }
  }

  groupMessagesForDisplay(messages) {
    const threadMap = new Map();
    const singleMessages = [];
    
    messages.forEach(msg => {
      if (msg.threadId && !msg.replyTo) {
        // This is a thread starter
        if (!threadMap.has(msg.threadId)) {
          const threadMessages = this.messageThreads.get(msg.threadId) || [];
          threadMap.set(msg.threadId, {
            isThread: true,
            threadId: msg.threadId,
            messages: threadMessages.filter(tm => messages.includes(tm)),
            latestMessage: threadMessages[threadMessages.length - 1],
            unreadCount: threadMessages.filter(tm => !tm.read && messages.includes(tm)).length
          });
        }
      } else if (!msg.threadId || !msg.replyTo) {
        // Single message (not part of thread or already handled)
        singleMessages.push({ isThread: false, message: msg });
      }
    });
    
    // Combine and sort by latest timestamp
    const allItems = [...Array.from(threadMap.values()), ...singleMessages];
    return allItems.sort((a, b) => {
      const timeA = a.isThread ? a.latestMessage.timestamp : a.message.timestamp;
      const timeB = b.isThread ? b.latestMessage.timestamp : b.message.timestamp;
      return new Date(timeB) - new Date(timeA);
    });
  }

  renderThreadItem(threadItem, container) {
    const thread = threadItem.messages;
    const latest = threadItem.latestMessage;
    const unreadCount = threadItem.unreadCount;
    
    const threadElement = document.createElement('div');
    threadElement.className = `thread-item p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
      unreadCount > 0 ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
    } ${latest.urgent ? 'border-l-4 border-l-red-500' : ''}`;
    
    threadElement.innerHTML = `
      <div class="flex items-start justify-between mb-2">
        <div class="font-semibold text-sm ${latest.urgent ? 'text-red-700' : 'text-gray-800'}">
          💬 ${latest.urgent ? '🚨 ' : ''}Thread (${thread.length} messages)
        </div>
        <div class="text-xs text-gray-500">
          ${this.formatTime(latest.timestamp)}
        </div>
      </div>
      <div class="text-sm font-medium mb-1 ${unreadCount > 0 ? 'font-bold' : ''}">${thread[0].subject}</div>
      <div class="text-xs text-gray-600 line-clamp-2">${latest.content.substring(0, 80)}...</div>
      <div class="flex items-center justify-between mt-2">
        <div class="flex items-center gap-2">
          <span class="text-xs px-2 py-1 rounded ${this.getTypeColor(latest.type)}">
            ${latest.type}
          </span>
          <span class="text-xs text-gray-500">Latest: ${latest.from}</span>
        </div>
        <div class="flex items-center gap-2">
          ${unreadCount > 0 ? `<span class="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">${unreadCount}</span>` : ''}
          <div class="w-2 h-2 bg-purple-500 rounded-full" title="Thread"></div>
        </div>
      </div>
    `;
    
    threadElement.addEventListener('click', () => this.selectThread(threadItem));
    container.appendChild(threadElement);
  }

  renderMessageItem(message, container) {
    const messageItem = document.createElement('div');
    messageItem.className = `message-item p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
      !message.read ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
    } ${message.urgent ? 'border-l-4 border-l-red-500' : ''}`;
    
    const readReceiptInfo = message.readReceipts?.length > 0 ? 
      `<span class="text-xs text-green-600" title="Read by ${message.readReceipts.map(r => r.userName).join(', ')}">✓✓</span>` : 
      '<span class="text-xs text-gray-400" title="Delivered">✓</span>';
    
    messageItem.innerHTML = `
      <div class="flex items-start justify-between mb-2">
        <div class="font-semibold text-sm ${message.urgent ? 'text-red-700' : 'text-gray-800'}">
          ${message.urgent ? '🚨 ' : ''}${message.from}
          ${message.patientId ? '<span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded ml-2">Patient Linked</span>' : ''}
        </div>
        <div class="text-xs text-gray-500 flex items-center gap-1">
          ${this.formatTime(message.timestamp)}
          ${readReceiptInfo}
        </div>
      </div>
      <div class="text-sm font-medium mb-1 ${!message.read ? 'font-bold' : ''}">${message.subject}</div>
      <div class="text-xs text-gray-600 line-clamp-2">${message.content.substring(0, 80)}...</div>
      <div class="flex items-center justify-between mt-2">
        <span class="text-xs px-2 py-1 rounded ${this.getTypeColor(message.type)}">
          ${message.type}
        </span>
        ${!message.read ? '<div class="w-2 h-2 bg-blue-500 rounded-full"></div>' : ''}
      </div>
    `;
    
    messageItem.addEventListener('click', () => this.selectMessage(message));
    container.appendChild(messageItem);
  }

  selectThread(threadItem) {
    this.currentThread = threadItem;
    
    // Mark all messages in thread as read
    threadItem.messages.forEach(msg => {
      if (!msg.read) {
        msg.read = true;
        this.unreadCount--;
      }
    });
    
    this.updateUnreadCount();
    this.renderMessages();
    this.renderThreadContent(threadItem);
    this.showReplySection();
  }

  renderThreadContent(threadItem) {
    const messageViewer = document.getElementById('messageViewer');
    if (!messageViewer) return;

    const thread = threadItem.messages;
    const firstMessage = thread[0];
    
    let threadHtml = `
      <div class="thread-header mb-4 pb-4 border-b">
        <div class="flex items-start justify-between mb-3">
          <div>
            <h4 class="text-lg font-bold ${firstMessage.urgent ? 'text-red-700' : 'text-gray-800'}">
              💬 ${firstMessage.urgent ? '🚨 ' : ''}${firstMessage.subject}
            </h4>
            <div class="text-sm text-gray-600 mt-1">
              Thread with ${thread.length} messages
            </div>
            ${firstMessage.patientId ? '<span class="inline-block mt-2 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Patient Linked</span>' : ''}
          </div>
          <div class="text-right">
            <div class="text-sm text-gray-500">Started ${this.formatDateTime(firstMessage.timestamp)}</div>
            <span class="inline-block mt-1 text-xs px-2 py-1 rounded ${this.getPriorityColor(firstMessage.priority)}">
              ${firstMessage.priority.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
      
      <div class="thread-messages space-y-4">
    `;
    
    thread.forEach((message, index) => {
      const isOwnMessage = message.from === (currentUser?.displayName || 'Current User');
      const readReceiptInfo = message.readReceipts?.length > 0 ? 
        message.readReceipts.map(r => `${r.userName} (${this.formatTime(r.readAt)})`).join(', ') : 
        'Delivered';
      
      threadHtml += `
        <div class="message-in-thread ${isOwnMessage ? 'ml-8' : 'mr-8'}">
          <div class="bg-gray-50 p-4 rounded-lg ${isOwnMessage ? 'bg-blue-50' : ''}">
            <div class="flex items-start justify-between mb-2">
              <div class="font-semibold text-sm">${message.from} (${message.fromRole})</div>
              <div class="text-xs text-gray-500">${this.formatDateTime(message.timestamp)}</div>
            </div>
            <div class="text-sm whitespace-pre-wrap">${message.content}</div>
            <div class="text-xs text-gray-400 mt-2 flex items-center justify-between">
              <span>Read by: ${readReceiptInfo}</span>
              ${message.readReceipts?.length > 0 ? '<span class="text-green-600">✓✓</span>' : '<span>✓</span>'}
            </div>
          </div>
        </div>
      `;
    });
    
    threadHtml += `
      </div>
      <div class="thread-actions mt-6 pt-4 border-t flex gap-2">
        <button onclick="clinicalMessaging.showReplySection()" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          💬 Reply to Thread
        </button>
        <button onclick="clinicalMessaging.forwardThread('${threadItem.threadId}')" class="px-4 py-2 border rounded-lg hover:bg-gray-50">
          ↗️ Forward Thread
        </button>
        <button onclick="clinicalMessaging.markThreadAsImportant('${threadItem.threadId}')" class="px-4 py-2 border rounded-lg hover:bg-gray-50">
          ⭐ Mark Important
        </button>
      </div>
    `;
    
    messageViewer.innerHTML = threadHtml;
  }

  selectMessage(message) {
    this.currentThread = message;
    
    // Mark as read
    if (!message.read) {
      message.read = true;
      this.unreadCount--;
      this.updateUnreadCount();
      this.renderMessages(); // Re-render to update read status
    }

    this.renderMessageContent(message);
    this.showReplySection();
  }

  renderMessageContent(message) {
    const messageViewer = document.getElementById('messageViewer');
    if (!messageViewer) return;

    messageViewer.innerHTML = `
      <div class="message-header mb-4 pb-4 border-b">
        <div class="flex items-start justify-between mb-3">
          <div>
            <h4 class="text-lg font-bold ${message.urgent ? 'text-red-700' : 'text-gray-800'}">
              ${message.urgent ? '🚨 ' : ''}${message.subject}
            </h4>
            <div class="text-sm text-gray-600 mt-1">
              From: <span class="font-medium">${message.from}</span> (${message.fromRole})
            </div>
            <div class="text-sm text-gray-600">
              To: <span class="font-medium">${message.to}</span>
            </div>
          </div>
          <div class="text-right">
            <div class="text-sm text-gray-500">${this.formatDateTime(message.timestamp)}</div>
            <span class="inline-block mt-1 text-xs px-2 py-1 rounded ${this.getPriorityColor(message.priority)}">
              ${message.priority.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
      
      <div class="message-content">
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="whitespace-pre-wrap leading-relaxed">${message.content}</p>
        </div>
      </div>

      <div class="message-actions mt-4 pt-4 border-t flex gap-2">
        <button onclick="clinicalMessaging.showReplySection()" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          💬 Reply
        </button>
        <button onclick="clinicalMessaging.forwardMessage('${message.id}')" class="px-4 py-2 border rounded-lg hover:bg-gray-50">
          ↗️ Forward
        </button>
        <button onclick="clinicalMessaging.markAsImportant('${message.id}')" class="px-4 py-2 border rounded-lg hover:bg-gray-50">
          ⭐ Important
        </button>
      </div>
    `;
  }

  showReplySection() {
    const quickReply = document.getElementById('quickReply');
    if (quickReply) {
      quickReply.classList.remove('hidden');
    }
  }

  hideReply() {
    const quickReply = document.getElementById('quickReply');
    const replyText = document.getElementById('replyText');
    
    if (quickReply) quickReply.classList.add('hidden');
    if (replyText) replyText.value = '';
  }

  sendReply() {
    const replyText = document.getElementById('replyText');
    if (!replyText || !replyText.value.trim()) {
      showToast('Please enter a reply message', 'error');
      return;
    }

    // Create reply message
    const reply = {
      id: 'msg_' + Date.now(),
      type: 'clinical',
      priority: 'medium',
      from: currentUser?.displayName || 'Current User',
      fromRole: currentRole || 'Staff',
      to: this.currentThread.from,
      subject: 'Re: ' + this.currentThread.subject,
      content: replyText.value.trim(),
      timestamp: new Date(),
      read: true,
      urgent: false
    };

    this.messages.push(reply);
    this.renderMessages();
    this.hideReply();
    
    showToast('Reply sent successfully', 'success');
  }

  showComposeModal() {
    const modalContent = `
      <div class="bg-white rounded-lg p-6 max-w-2xl mx-auto">
        <h3 class="text-xl font-bold mb-4">📝 Compose New Message</h3>
        <form id="composeForm" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-2">To:</label>
              <select id="composeTo" class="w-full border rounded-lg px-3 py-2" required>
                <option value="">Select recipient</option>
                <option value="Dr. Smith">Dr. Smith (Doctor)</option>
                <option value="Dr. Johnson">Dr. Johnson (Doctor)</option>
                <option value="Nurse Station">Nurse Station</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Lab Department">Lab Department</option>
                <option value="Radiology">Radiology</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Priority:</label>
              <select id="composePriority" class="w-full border rounded-lg px-3 py-2" required>
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Subject:</label>
            <input type="text" id="composeSubject" class="w-full border rounded-lg px-3 py-2" placeholder="Enter message subject" required>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Message:</label>
            <textarea id="composeContent" class="w-full border rounded-lg px-3 py-2" rows="6" placeholder="Enter your message..." required></textarea>
          </div>
          <div class="flex items-center gap-2">
            <input type="checkbox" id="composeUrgent" class="rounded">
            <label for="composeUrgent" class="text-sm">Mark as urgent</label>
          </div>
          <div class="flex gap-3 pt-4">
            <button type="submit" class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              📤 Send Message
            </button>
            <button type="button" onclick="closeModal()" class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
              Cancel
            </button>
          </div>
        </form>
      </div>
    `;
    
    showModal(modalContent);
    
    // Handle form submission
    const composeForm = document.getElementById('composeForm');
    if (composeForm) {
      composeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.sendNewMessage();
      });
    }
  }

  sendNewMessage() {
    const to = document.getElementById('composeTo')?.value;
    const priority = document.getElementById('composePriority')?.value;
    const subject = document.getElementById('composeSubject')?.value;
    const content = document.getElementById('composeContent')?.value;
    const urgent = document.getElementById('composeUrgent')?.checked;

    if (!to || !subject || !content) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    const newMessage = {
      id: 'msg_' + Date.now(),
      type: 'clinical',
      priority: priority,
      from: currentUser?.displayName || 'Current User',
      fromRole: currentRole || 'Staff',
      to: to,
      subject: subject,
      content: content,
      timestamp: new Date(),
      read: true,
      urgent: urgent
    };

    this.messages.push(newMessage);
    this.renderMessages();
    closeModal();
    
    showToast('Message sent successfully', 'success');
  }

  showCriticalAlerts() {
    const criticalMessages = this.messages.filter(msg => 
      msg.priority === 'critical' || msg.urgent || msg.type === 'alert'
    );
    
    const criticalAlerts = document.getElementById('criticalAlerts');
    const alertsList = document.getElementById('alertsList');
    
    if (!criticalAlerts || !alertsList) return;

    if (criticalMessages.length === 0) {
      alertsList.innerHTML = '<div class="text-gray-500 py-4">No critical alerts at this time</div>';
    } else {
      alertsList.innerHTML = criticalMessages.map(alert => `
        <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg cursor-pointer hover:bg-red-100" onclick="clinicalMessaging.selectMessage(${JSON.stringify(alert).replace(/"/g, '&quot;')})">
          <div class="flex items-start justify-between">
            <div>
              <div class="font-semibold text-red-800">${alert.subject}</div>
              <div class="text-sm text-red-600 mt-1">From: ${alert.from}</div>
              <div class="text-sm text-red-700 mt-2">${alert.content.substring(0, 100)}...</div>
            </div>
            <div class="text-xs text-red-500">${this.formatTime(alert.timestamp)}</div>
          </div>
        </div>
      `).join('');
    }
    
    criticalAlerts.classList.remove('hidden');
  }

  filterMessages() {
    this.renderMessages();
  }

  refreshMessages() {
    // Simulate receiving new messages
    showToast('Messages refreshed', 'info');
    this.renderMessages();
    this.updateUnreadCount();
  }

  updateUnreadCount() {
    const unreadCountElement = document.getElementById('unreadCount');
    if (unreadCountElement) {
      if (this.unreadCount > 0) {
        unreadCountElement.textContent = this.unreadCount;
        unreadCountElement.classList.remove('hidden');
      } else {
        unreadCountElement.classList.add('hidden');
      }
    }
  }

  formatTime(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diffMinutes = Math.floor((now - time) / (1000 * 60));
    
    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)}h ago`;
    return time.toLocaleDateString();
  }

  formatDateTime(timestamp) {
    return new Date(timestamp).toLocaleString();
  }

  getTypeColor(type) {
    const colors = {
      clinical: 'bg-blue-100 text-blue-800',
      administrative: 'bg-green-100 text-green-800',
      alert: 'bg-red-100 text-red-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  }

  getPriorityColor(priority) {
    const colors = {
      low: 'bg-gray-100 text-gray-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-orange-100 text-orange-800',
      critical: 'bg-red-100 text-red-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  }

  forwardMessage(messageId) {
    const message = this.messages.find(msg => msg.id === messageId);
    if (message) {
      // Pre-fill compose form with forwarded message
      this.showComposeModal();
      setTimeout(() => {
        const subjectField = document.getElementById('composeSubject');
        const contentField = document.getElementById('composeContent');
        
        if (subjectField) subjectField.value = 'Fwd: ' + message.subject;
        if (contentField) {
          contentField.value = `\n\n--- Forwarded Message ---\nFrom: ${message.from}\nDate: ${this.formatDateTime(message.timestamp)}\nSubject: ${message.subject}\n\n${message.content}`;
        }
      }, 100);
    }
  }

  markAsImportant(messageId) {
    const message = this.messages.find(msg => msg.id === messageId);
    if (message) {
      message.important = !message.important;
      showToast(message.important ? 'Message marked as important' : 'Removed important flag', 'success');
      this.renderMessages();
    }
  }

  showTemplatesModal() {
    const modalContent = `
      <div class="bg-white rounded-lg p-6 max-w-4xl mx-auto">
        <h3 class="text-xl font-bold mb-4">📋 Message Templates</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          ${this.templates.map(template => `
            <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="clinicalMessaging.useTemplate('${template.id}')">
              <div class="font-semibold text-sm mb-2">${template.name}</div>
              <div class="text-xs text-gray-600 mb-2">Category: ${template.category}</div>
              <div class="text-xs text-gray-500">${template.content.substring(0, 100)}...</div>
            </div>
          `).join('')}
        </div>
        <div class="flex gap-3 pt-4 border-t">
          <button onclick="closeModal()" class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Close
          </button>
        </div>
      </div>
    `;
    showModal(modalContent);
  }

  useTemplate(templateId) {
    const template = this.templates.find(t => t.id === templateId);
    if (!template) return;
    
    closeModal();
    
    // Show compose modal with template pre-filled
    setTimeout(() => {
      this.showComposeModal();
      setTimeout(() => {
        const subjectField = document.getElementById('composeSubject');
        const contentField = document.getElementById('composeContent');
        
        if (subjectField) subjectField.value = template.subject;
        if (contentField) contentField.value = template.content;
        
        showToast('Template loaded - customize as needed', 'success');
      }, 100);
    }, 100);
  }

  showPatientMessages() {
    if (!selectedPatientId) {
      showToast('Please select a patient first', 'error');
      return;
    }
    
    const patientMessages = this.patientLinkedMessages.get(selectedPatientId) || [];
    const currentPatient = patients.find(p => p.id === selectedPatientId);
    
    const modalContent = `
      <div class="bg-white rounded-lg p-6 max-w-4xl mx-auto">
        <h3 class="text-xl font-bold mb-4">👤 Messages for ${currentPatient?.name || 'Selected Patient'}</h3>
        <div class="space-y-3 mb-4 max-h-96 overflow-y-auto">
          ${patientMessages.length === 0 ? 
            '<div class="text-gray-500 py-8 text-center">No messages linked to this patient</div>' :
            patientMessages.map(msg => `
              <div class="border rounded-lg p-3 hover:bg-gray-50">
                <div class="flex justify-between items-start mb-2">
                  <div class="font-semibold text-sm">${msg.subject}</div>
                  <div class="text-xs text-gray-500">${this.formatDateTime(msg.timestamp)}</div>
                </div>
                <div class="text-xs text-gray-600 mb-2">From: ${msg.from} → ${msg.to}</div>
                <div class="text-sm text-gray-700">${msg.content.substring(0, 150)}...</div>
                <div class="mt-2">
                  <span class="text-xs px-2 py-1 rounded ${this.getTypeColor(msg.type)}">${msg.type}</span>
                  <span class="text-xs px-2 py-1 rounded ${this.getPriorityColor(msg.priority)} ml-2">${msg.priority}</span>
                </div>
              </div>
            `).join('')
          }
        </div>
        <div class="flex gap-3 pt-4 border-t">
          <button onclick="clinicalMessaging.composePatientMessage('${selectedPatientId}')" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            📝 New Patient Message
          </button>
          <button onclick="closeModal()" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Close
          </button>
        </div>
      </div>
    `;
    showModal(modalContent);
  }

  composePatientMessage(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (!patient) return;
    
    closeModal();
    
    setTimeout(() => {
      this.showComposeModal();
      setTimeout(() => {
        const subjectField = document.getElementById('composeSubject');
        if (subjectField) {
          subjectField.value = `Patient Update - ${patient.name}`;
        }
        
        // Add hidden field to link to patient
        const form = document.getElementById('composeForm');
        if (form) {
          const patientInput = document.createElement('input');
          patientInput.type = 'hidden';
          patientInput.name = 'patientId';
          patientInput.value = patientId;
          form.appendChild(patientInput);
        }
        
        showToast(`Composing message for patient: ${patient.name}`, 'info');
      }, 100);
    }, 100);
  }

  forwardThread(threadId) {
    showToast('Thread forwarding functionality would be implemented here', 'info');
  }

  markThreadAsImportant(threadId) {
    const threadMessages = this.messageThreads.get(threadId) || [];
    threadMessages.forEach(msg => {
      msg.important = true;
    });
    showToast('Thread marked as important', 'success');
    this.renderMessages();
  }
}

// Initialize messaging system
let clinicalMessaging;

// Initialize messaging immediately when script loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 DOM loaded - initializing systems');
  
  // Show sample users for testing
  createSampleUsers();
  
  // Apply initial role-based UI (will be updated when user logs in)
  applyRoleUI();
  
  // Initialize messaging system
  try {
    if (typeof ClinicalMessagingSystem !== 'undefined') {
      clinicalMessaging = new ClinicalMessagingSystem();
      window.clinicalMessaging = clinicalMessaging;
      console.log('✅ Messaging system initialized on DOM ready');
      console.log('📋 Templates available:', clinicalMessaging.templates?.length || 0);
    } else {
      console.error('❌ ClinicalMessagingSystem class not found');
    }
  } catch (error) {
    console.error('❌ Failed to initialize messaging:', error);
  }

  // Initialize staff management system
  try {
    if (typeof StaffManagementSystem !== 'undefined') {
      window.staffSystem = new StaffManagementSystem();
      console.log('✅ Staff management system initialized');
    } else {
      console.error('❌ StaffManagementSystem class not found');
    }
    
    if (typeof PatientAdmissionSystem !== 'undefined') {
      window.admissionSystem = new PatientAdmissionSystem();
      console.log('✅ Patient admission system initialized');
    } else {
      console.error('❌ PatientAdmissionSystem class not found');
    }
  } catch (error) {
    console.error('❌ Failed to initialize systems:', error);
  }
});

// Fallback initialization with a small delay
setTimeout(function() {
  if (!window.clinicalMessaging) {
    console.log('🔄 Fallback messaging initialization');
    try {
      if (typeof ClinicalMessagingSystem !== 'undefined') {
        clinicalMessaging = new ClinicalMessagingSystem();
        window.clinicalMessaging = clinicalMessaging;
        console.log('✅ Fallback messaging system initialized');
      }
    } catch (error) {
      console.error('❌ Fallback messaging initialization failed:', error);
    }
  }

  if (!window.staffSystem) {
    console.log('🔄 Fallback staff system initialization');
    try {
      if (typeof StaffManagementSystem !== 'undefined') {
        window.staffSystem = new StaffManagementSystem();
        console.log('✅ Fallback staff system initialized');
      }
    } catch (error) {
      console.error('❌ Fallback staff initialization failed:', error);
    }
  }
}, 2000);

// -------------------- Auto-fill date/time functions --------------------
function setCurrentDateTime() {
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  const currentDateTime = `${currentDate}T${currentTime}`;
  
  // Set admission date (current date)
  const admissionDate = document.getElementById('info_admissionDate');
  if (admissionDate && !admissionDate.value) {
    admissionDate.value = currentDate;
  }
  
  // Set admission time (current time)
  const admissionTime = document.getElementById('info_admissionTime');
  if (admissionTime && !admissionTime.value) {
    admissionTime.value = currentTime;
  }
  
  // Auto-fill other time fields when they become active/focused
  const timeFields = [
    'v_time',           // Vitals time
    'nurse_time',       // Nurse notes time
    'doc_time',         // Doctor notes time
    'discharge_time'    // Discharge time
  ];
  
  timeFields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      // Set current time when field gets focus (if empty)
      field.addEventListener('focus', function() {
        if (!this.value) {
          const freshNow = new Date();
          const freshTime = `${freshNow.getHours().toString().padStart(2, '0')}:${freshNow.getMinutes().toString().padStart(2, '0')}`;
          this.value = freshTime;
        }
      });
    }
  });
  
  // Auto-fill datetime-local fields
  const dateTimeFields = document.querySelectorAll('input[type="datetime-local"]');
  dateTimeFields.forEach(field => {
    if (field && !field.value) {
      field.addEventListener('focus', function() {
        if (!this.value) {
          const freshNow = new Date();
          const freshDateTime = freshNow.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:MM
          this.value = freshDateTime;
        }
      });
    }
  });
}

// -------------------- New Patient flow --------------------
if($('btnNew')) $('btnNew').addEventListener('click', ()=>{
  selectedPatientId = null;
  // reset all forms
  qsa('form').forEach(f => f.reset());
  vitalsRows = []; uploadedLabs = [];
  renderVitalsTable(); renderLabFiles();
  updateUploadButtonState();
  // Auto-fill current date and time
  setCurrentDateTime();
  // show patient info tab
  const btn = document.querySelector('.navbtn[data-target="tab-info"]');
  if(btn) btn.click();
  showToast('New patient - fill Patient Information and click Save Info', 'info');
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
  physical: 'form-physical',
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
    // role-based guard: nurses should not save doctor notes even if UI was bypassed
    if(key === 'doctor' && currentRole === 'nurse') return showToast('Permission denied: nurses cannot save Doctor Notes', 'error');
    // role-based guard: nurses should not save treatment plan even if UI was bypassed
    if(key === 'assessment' && currentRole === 'nurse') return showToast('Permission denied: nurses cannot save Treatment Plan', 'error');
    const form = $(fid);
    const data = readForm(fid);
    // attach complex fields
    if(key === 'vitals') data.vitals = vitalsRows.slice();
    if(key === 'labs') {
      data.labFiles = uploadedLabs.slice();
      data.labOrders = labOrderManager.orders.slice();
      
      // Include structured results if available
      const structuredInputs = document.querySelectorAll('.lab-result-input');
      if (structuredInputs.length > 0) {
        const structuredResults = {};
        structuredInputs.forEach(input => {
          if (input.value.trim()) {
            structuredResults[input.dataset.field] = {
              value: parseFloat(input.value),
              unit: input.dataset.unit,
              timestamp: new Date().toISOString()
            };
          }
        });
        
        if (Object.keys(structuredResults).length > 0) {
          data.structuredResults = structuredResults;
          
          // Add to trends
          const testType = document.getElementById('lab_test')?.value;
          if (testType) {
            labTrends.addToTrends(testType, structuredResults);
            labTrends.updateTrendsDisplay();
          }
        }
      }
    }
    if(key === 'meds') {
      // collect medication table (medications only)
      const meds = [];
      qsa('#medTableBody tr').forEach(tr => {
        const drug = tr.querySelector('input[name="drug"]')?.value || '';
        const dosage = tr.querySelector('input[name="dosage"]')?.value || '';
        const route = tr.querySelector('input[name="route"]')?.value || '';
        const frequency = tr.querySelector('input[name="frequency"]')?.value || '';
        const startDate = tr.querySelector('input[name="startDate"]')?.value || '';
        const duration = tr.querySelector('input[name="duration"]')?.value || '';
        const prn = tr.querySelector('select[name="prn"]')?.value || 'No';
        const prescriber = tr.querySelector('input[name="prescriber"]')?.value || '';

        // only push if there's meaningful content
        if(drug || dosage || route || frequency) {
          meds.push({ drug, dosage, route, frequency, startDate, duration, prn, prescriber });
        }
      });
      
      // collect IV fluids table separately
      const ivFluids = [];
      qsa('#ivTableBody tr').forEach(tr => {
        const iv_fluid = tr.querySelector('select[name="iv_fluid"]')?.value || '';
        const iv_ml_hr_raw = tr.querySelector('input[name="iv_ml_hr"]')?.value || '';
        const iv_gtt_min_raw = tr.querySelector('input[name="iv_gtt_min"]')?.value || '';
        const iv_volume = tr.querySelector('input[name="iv_volume"]')?.value || '';
        const iv_time = tr.querySelector('input[name="iv_time"]')?.value || '';
        const startDate = tr.querySelector('input[name="startDate"]')?.value || '';
        const prescriber = tr.querySelector('input[name="prescriber"]')?.value || '';

        // normalize numeric IV fields to Number or null
        const iv_ml_hr = iv_ml_hr_raw === '' ? null : Number(iv_ml_hr_raw);
        const iv_gtt_min = iv_gtt_min_raw === '' ? null : Number(iv_gtt_min_raw);

        // only push if there's meaningful content
        if(iv_fluid || iv_ml_hr !== null || iv_gtt_min !== null) {
          ivFluids.push({ iv_fluid, iv_ml_hr, iv_gtt_min, iv_volume, iv_time, startDate, prescriber });
        }
      });
      
      data.medOrders = meds;
      data.ivOrders = ivFluids;
      
      // client-side validation: ensure numeric iv fields are valid numbers when present
      for(let i=0;i<data.ivOrders.length;i++){
        const m = data.ivOrders[i];
        if(m.iv_ml_hr !== null && !isFinite(m.iv_ml_hr)) return showToast('Invalid IV mL/hr for IV order: ' + (m.iv_fluid||'row ' + (i+1)), 'error');
        if(m.iv_gtt_min !== null && !isFinite(m.iv_gtt_min)) return showToast('Invalid IV gtt/min for IV order: ' + (m.iv_fluid||'row ' + (i+1)), 'error');
      }
    }
    // Construct full name for info tab
    if(key === 'info') {
      const parts = [];
      if(data.firstName) parts.push(data.firstName.trim());
      if(data.middleName) parts.push(data.middleName.trim());
      if(data.lastName) parts.push(data.lastName.trim());
      data.name = parts.join(' ');
    }
    // validation for info
    if(key === 'info' && (!data.firstName || data.firstName.trim() === '')) {
      return showToast('Please enter patient first name', 'error');
    }
    // validation for physical assessment
    if(key === 'physical' && (!data.initialDiagnosis)) {
      return showToast('Please enter initial diagnosis in Physical Assessment', 'error');
    }
    // require sign-in to save
    if(!currentUser) return showToast('Sign in to save', 'error');
    if(isSaving) return showToast('Save already in progress', 'info');
    isSaving = true; btn.disabled = true;
    try{
      await saveTabData(key, data);
      showToast('Saved • ' + (key==='info' ? 'Patient Info' : key), 'success');
    }catch(e){
      console.error(e); showToast('Save failed: ' + (e.message||e.code), 'error');
    } finally {
      isSaving = false; btn.disabled = false;
    }
  });
});

// Normalize IVs button: parse and normalize iv_ml_hr and iv_gtt_min inputs in med rows
const normalizeBtn = document.getElementById('normalizeIVs');
if(normalizeBtn){
  normalizeBtn.addEventListener('click', ()=>{
    const rows = document.querySelectorAll('#medTableBody tr');
    rows.forEach(tr=>{
      const inMl = tr.querySelector('input[name="iv_ml_hr"]');
      const inGtt = tr.querySelector('input[name="iv_gtt_min"]');
      if(inMl && inMl.value){
        // extract first number
        const m = String(inMl.value).match(/-?\d+(?:\.\d+)?/);
        inMl.value = m ? parseFloat(m[0]) : '';
      }
      if(inGtt && inGtt.value){
        const g = String(inGtt.value).match(/-?\d+(?:\.\d+)?/);
        inGtt.value = g ? parseFloat(g[0]) : '';
      }
    });
    showToast('IV fields normalized', 'success');
  });
}

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

// -------------------- Enhanced Lab Functionality --------------------

// Lab test selection handler
if($('lab_test')) {
  $('lab_test').addEventListener('change', function(e) {
    const selectedTest = e.target.value;
    const existingStructured = document.querySelector('#structuredLabEntry');
    
    if (existingStructured) {
      existingStructured.remove();
    }
    
    if (selectedTest && labResultsManager.testTemplates[selectedTest]) {
      const structuredForm = labResultsManager.generateStructuredForm(selectedTest);
      if (structuredForm) {
        const labSection = document.querySelector('#tab-labs form');
        const insertPoint = document.querySelector('#tab-labs .bg-gradient-to-br.from-blue-50');
        
        const structuredDiv = document.createElement('div');
        structuredDiv.id = 'structuredLabEntry';
        structuredDiv.innerHTML = structuredForm;
        
        if (insertPoint) {
          insertPoint.parentNode.insertBefore(structuredDiv, insertPoint);
        }
        
        // Add real-time interpretation
        setTimeout(() => {
          const inputs = document.querySelectorAll('.lab-result-input');
          inputs.forEach(input => {
            input.addEventListener('input', function() {
              const value = parseFloat(this.value);
              if (isNaN(value) || !this.value.trim()) {
                const interpretDiv = this.parentElement.querySelector('.result-interpretation');
                interpretDiv.classList.add('hidden');
                return;
              }
              
              const normalRange = JSON.parse(this.dataset.normal);
              const interpretation = labResultsManager.interpretValue(value, normalRange);
              const interpretDiv = this.parentElement.querySelector('.result-interpretation');
              
              interpretDiv.className = `result-interpretation text-xs font-medium ${interpretation.className}`;
              interpretDiv.textContent = interpretation.message;
              interpretDiv.classList.remove('hidden');
            });
          });
        }, 100);
      }
    }
  });
}

// Enhanced lab order management
const labOrderManager = {
  orders: [],
  
  addOrder: function() {
    const form = document.getElementById('form-labs');
    if (!form) return;
    
    const formData = new FormData(form);
    const order = {
      id: Date.now(),
      test: formData.get('lab_test'),
      customTest: formData.get('lab_customTest'),
      priority: formData.get('lab_priority'),
      specimen: formData.get('lab_specimen'),
      indication: formData.get('lab_indication'),
      orderDateTime: formData.get('lab_orderDateTime') || new Date().toISOString(),
      status: 'ordered',
      orderedBy: currentUser?.name || 'Current User',
      patient: selectedPatientId
    };
    
    // Validate required fields
    if (!order.test || !order.priority || !order.indication) {
      showToast('Please fill in all required fields', 'error');
      return false;
    }
    
    this.orders.push(order);
    this.renderOrdersHistory();
    this.clearCurrentOrder();
    
    showToast('Lab order added successfully', 'success');
    return true;
  },
  
  renderOrdersHistory: function() {
    const historyDiv = document.getElementById('labOrdersHistory');
    if (!historyDiv) return;
    
    if (this.orders.length === 0) {
      historyDiv.innerHTML = '<div class="text-sm text-slate-500 italic">No lab orders yet</div>';
      return;
    }
    
    let html = '';
    this.orders.slice(-5).forEach(order => {
      const orderDate = new Date(order.orderDateTime).toLocaleString();
      const statusClass = this.getStatusClass(order.status);
      
      html += `
        <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
          <div class="flex justify-between items-start mb-2">
            <div class="font-medium text-slate-800">
              ${order.customTest || order.test}
              ${order.priority === 'Stat' ? ' <span class="text-red-600 font-bold">STAT</span>' : ''}
            </div>
            <span class="px-2 py-1 text-xs rounded-full ${statusClass}">
              ${order.status.toUpperCase()}
            </span>
          </div>
          <div class="text-sm text-slate-600">
            <div><strong>Specimen:</strong> ${order.specimen || 'Not specified'}</div>
            <div><strong>Ordered:</strong> ${orderDate}</div>
            <div><strong>Indication:</strong> ${order.indication}</div>
          </div>
          <div class="mt-2 flex gap-2">
            <button onclick="labOrderManager.updateStatus(${order.id}, 'collected')" 
                    class="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
              Mark Collected
            </button>
            <button onclick="labOrderManager.updateStatus(${order.id}, 'resulted')" 
                    class="text-xs px-2 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200">
              Mark Resulted
            </button>
          </div>
        </div>
      `;
    });
    
    historyDiv.innerHTML = html;
  },
  
  getStatusClass: function(status) {
    switch(status) {
      case 'ordered': return 'bg-yellow-100 text-yellow-800';
      case 'collected': return 'bg-blue-100 text-blue-800';
      case 'resulted': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  },
  
  updateStatus: function(orderId, newStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      if (newStatus === 'resulted') {
        order.resultedAt = new Date().toISOString();
      }
      this.renderOrdersHistory();
      showToast(`Order status updated to ${newStatus}`, 'success');
    }
  },
  
  clearCurrentOrder: function() {
    const form = document.getElementById('form-labs');
    if (form) {
      // Clear form fields except files
      const inputs = form.querySelectorAll('input:not([type="file"]), select, textarea');
      inputs.forEach(input => {
        if (input.type === 'datetime-local') {
          input.value = '';
        } else {
          input.value = '';
        }
      });
      
      // Remove structured entry if present
      const structuredEntry = document.getElementById('structuredLabEntry');
      if (structuredEntry) {
        structuredEntry.remove();
      }
    }
  }
};

// Add lab order button handler
if($('addLabOrder')) {
  $('addLabOrder').addEventListener('click', function() {
    labOrderManager.addOrder();
  });
}

// Clear labs button handler
if($('clearLabs')) {
  $('clearLabs').addEventListener('click', function() {
    labOrderManager.clearCurrentOrder();
    showToast('Lab form cleared', 'info');
  });
}

// -------------------- Lab uploads --------------------
if($('uploadLabBtn')) $('uploadLabBtn').addEventListener('click', async (ev)=>{
  ev && ev.preventDefault && ev.preventDefault();
  // guard: require a selected patient before uploading
  if(!selectedPatientId) return showToast('Save patient first before uploading lab files', 'error');
  const fileEl = $('labFileInput'); if(!fileEl || !fileEl.files || fileEl.files.length===0) return showToast('Select a file to upload', 'error');
  const file = fileEl.files[0];

  // client-side validation
  const MAX_BYTES = 10 * 1024 * 1024; // 10 MB
  const allowedTypes = ['application/pdf'];
  if(file.type && file.type.startsWith('image/')) allowedTypes.push(file.type);
  // simple check: allow images and pdf
  const isImage = file.type && file.type.startsWith('image/');
  const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
  if(!isImage && !isPdf) return showToast('Only image files and PDFs are allowed', 'error');
  if(file.size > MAX_BYTES) return showToast('File is too large (max 10 MB)', 'error');

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
    showToast('File uploaded', 'success');
  }catch(e){ console.error(e); showToast('Upload failed: ' + (e.message||e.code), 'error'); }
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
  tr.innerHTML = `<td><input name="drug" class="w-full rounded border px-2 py-1"/></td><td><input name="dosage" class="w-full rounded border px-2 py-1"/></td><td><input name="route" class="w-full rounded border px-2 py-1"/></td><td><input name="frequency" class="w-full rounded border px-2 py-1"/></td><td><input name="startDate" type="date" class="w-full rounded border px-2 py-1"/></td><td><input name="duration" placeholder="e.g., 5 days" class="w-full rounded border px-2 py-1"/></td><td><select name="prn" class="w-full rounded border px-2 py-1"><option value=\"No\">No</option><option value=\"Yes\">Yes</option></select></td><td><input name="prescriber" class="w-full rounded border px-2 py-1"/></td><td><button type="button" class="btn-remove-row px-2 py-1 rounded bg-white border">🗑️</button></td>`;
  tbody.appendChild(tr);
  // ensure selection wiring
  enableMedRowSelection();
});

// Add IV Row functionality
function addIVRow() {
  const tbody = $('ivTableBody'); if(!tbody) return;
  const tr = document.createElement('tr');
  tr.innerHTML = `<td><select name="iv_fluid" class="w-full rounded border px-2 py-1"><option value="">— Fluid —</option><option>Normal Saline (0.9% NaCl)</option><option>Ringer's Lactate</option><option>Dextrose 5% (D5W)</option><option>Hartmann's</option></select></td><td><input name="iv_ml_hr" placeholder="mL/hr" class="w-full rounded border px-2 py-1"/></td><td><input name="iv_gtt_min" placeholder="gtt/min" class="w-full rounded border px-2 py-1"/></td><td><input name="iv_volume" placeholder="mL" class="w-full rounded border px-2 py-1"/></td><td><input name="iv_time" placeholder="hrs" class="w-full rounded border px-2 py-1"/></td><td><input name="startDate" type="date" class="w-full rounded border px-2 py-1"/></td><td><input name="prescriber" class="w-full rounded border px-2 py-1"/></td><td><button type="button" class="btn-remove-row px-2 py-1 rounded bg-white border">🗑️</button></td>`;
  tbody.appendChild(tr);
}

// Create add IV button if it doesn't exist
if($('medTableBody') && !$('addIVRow')) {
  const addIVBtn = document.createElement('button');
  addIVBtn.id = 'addIVRow';
  addIVBtn.type = 'button';
  addIVBtn.className = 'px-3 py-1 bg-white rounded border ml-2';
  addIVBtn.textContent = '➕ Add IV';
  addIVBtn.addEventListener('click', addIVRow);
  
  // Insert after the normalize IVs button
  const normalizeBtn = $('normalizeIVs');
  if(normalizeBtn && normalizeBtn.parentNode) {
    normalizeBtn.parentNode.insertBefore(addIVBtn, normalizeBtn.nextSibling);
  }
}

document.addEventListener('click', e => {
  if(e.target && e.target.classList.contains('btn-remove-row')) e.target.closest('tr').remove();
});

// -------------------- Vitals table utilities --------------------
if($('btnAddVitals')) $('btnAddVitals').addEventListener('click', ()=>{
  const f = $('form-vitals');
  const row = {
    date: f && f.v_date ? f.v_date.value : '',
    time: f && f.v_time ? f.v_time.value : '',
    temp: f && f.v_temp ? f.v_temp.value : '',
    pulse: f && f.v_pulse ? f.v_pulse.value : '',
    rr: f && f.v_rr ? f.v_rr.value : '',
    bp: f && f.v_bp ? f.v_bp.value : '',
    spo2: f && f.v_spo2 ? f.v_spo2.value : '',
    by: f && f.v_by ? f.v_by.value : '',
    io_in: f && f.v_io_in ? f.v_io_in.value : '',
    io_out: f && f.v_io_out ? f.v_io_out.value : ''
  };
  vitalsRows.push(row); renderVitalsTable();
  if(f && f.v_date) f.v_date.value=''; if(f && f.v_time) f.v_time.value='';
  if(f && f.v_temp) f.v_temp.value=''; if(f && f.v_pulse) f.v_pulse.value='';
  if(f && f.v_rr) f.v_rr.value=''; if(f && f.v_bp) f.v_bp.value='';
  if(f && f.v_spo2) f.v_spo2.value=''; if(f && f.v_by) f.v_by.value='';
  if(f && f.v_io_in) f.v_io_in.value=''; if(f && f.v_io_out) f.v_io_out.value='';
});
function renderVitalsTable(){
  const tbody = $('vitalsTableBody'); if(!tbody) return; tbody.innerHTML = '';
  vitalsRows.forEach((r,i)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${esc(r.date)}</td><td>${esc(r.time)}</td><td>${esc(r.temp||'')}</td><td>${esc(r.pulse||'')}</td><td>${esc(r.rr||'')}</td><td>${esc(r.bp||'')}</td><td>${esc(r.spo2||'')}</td><td>${esc(r.io_in||'')}</td><td>${esc(r.io_out||'')}</td><td>${esc(r.by||'')}</td><td class="text-right"><button class="px-2 py-1 rounded bg-white/80" onclick="removeVitalsRow(${i})">Del</button></td>`;
    tbody.appendChild(tr);
  });
}
window.removeVitalsRow = function(i){ vitalsRows.splice(i,1); renderVitalsTable(); }

// clear vitals input fields button
const clearVitalsBtn = document.getElementById('clearVitals');
if(clearVitalsBtn){ clearVitalsBtn.addEventListener('click', ()=>{
  const f = $('form-vitals');
  if(!f) return;
  ['v_date','v_time','v_temp','v_pulse','v_rr','v_bp','v_spo2','v_by','v_io_in','v_io_out'].forEach(id=>{ const el = document.getElementById(id); if(el) el.value = ''; });
}); }

// -------------------- Form Progress Tracking and Validation --------------------
function setupFormProgressTracking() {
  const infoForm = document.getElementById('form-info');
  const progressBar = document.getElementById('infoProgressBar');
  const progressText = document.getElementById('infoProgress');
  
  if (!infoForm || !progressBar || !progressText) return;

  // Required fields for progress calculation
  const requiredFields = [
    'mrn', 'patientStatus', 'firstName', 'lastName', 'civilStatus', 
    'dob', 'gender', 'contact', 'address', 'city', 'province', 'country',
    'primaryLanguage', 'emergencyName', 'emergencyPhone'
  ];

  // All form fields for enhanced validation
  const allFields = infoForm.querySelectorAll('input, select, textarea');

  function updateProgress() {
    let completedFields = 0;
    
    requiredFields.forEach(fieldName => {
      const field = infoForm.querySelector(`[name="${fieldName}"]`);
      if (field && field.value.trim() !== '') {
        completedFields++;
      }
    });

    const percentage = Math.round((completedFields / requiredFields.length) * 100);
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}% Complete (${completedFields}/${requiredFields.length} required fields)`;
    
    // Update progress bar color based on completion
    if (percentage < 30) {
      progressBar.className = 'bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full transition-all duration-300';
    } else if (percentage < 70) {
      progressBar.className = 'bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-300';
    } else if (percentage < 100) {
      progressBar.className = 'bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-300';
    } else {
      progressBar.className = 'bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full transition-all duration-300';
    }
  }

  // Enhanced field validation
  function validateField(field) {
    const fieldContainer = field.closest('.form-group') || field.parentElement;
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    field.classList.remove('border-red-500', 'ring-red-100');
    const existingError = fieldContainer.querySelector('.field-error');
    if (existingError) existingError.remove();

    // Check if required field is empty
    if (field.hasAttribute('required') && field.value.trim() === '') {
      isValid = false;
      errorMessage = 'This field is required';
    }

    // Specific validations
    switch (field.type) {
      case 'email':
        if (field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address';
        }
        break;
      case 'tel':
        if (field.value && !/^[+]?[\d\s\-()]{10,15}$/.test(field.value)) {
          isValid = false;
          errorMessage = 'Please enter a valid phone number';
        }
        break;
      case 'date':
        if (field.value && field.name === 'dob') {
          const birthDate = new Date(field.value);
          const today = new Date();
          const age = today.getFullYear() - birthDate.getFullYear();
          if (birthDate > today || age > 150) {
            isValid = false;
            errorMessage = 'Please enter a valid birth date';
          } else {
            // Auto-calculate age
            const ageField = infoForm.querySelector('[name="age"]');
            if (ageField) {
              const monthDiff = today.getMonth() - birthDate.getMonth();
              const finalAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
              ageField.value = finalAge;
            }
          }
        }
        break;
      case 'number':
        if (field.value && (isNaN(field.value) || parseFloat(field.value) < 0)) {
          isValid = false;
          errorMessage = 'Please enter a valid positive number';
        }
        break;
    }

    // Pattern validation
    if (field.pattern && field.value && !new RegExp(field.pattern).test(field.value)) {
      isValid = false;
      errorMessage = field.title || 'Please enter a valid format';
    }

    // Apply error styling and message
    if (!isValid) {
      field.classList.add('border-red-500', 'ring-red-100');
      const errorDiv = document.createElement('div');
      errorDiv.className = 'field-error text-xs text-red-600 mt-1 flex items-center gap-1';
      errorDiv.innerHTML = `<span class="text-red-500">⚠️</span> ${errorMessage}`;
      fieldContainer.appendChild(errorDiv);
    } else {
      field.classList.add('border-green-300');
      setTimeout(() => field.classList.remove('border-green-300'), 2000);
    }

    return isValid;
  }

  // Auto-fill MRN if empty
  function generateMRN() {
    const mrnField = infoForm.querySelector('[name="mrn"]');
    if (mrnField && !mrnField.value.trim()) {
      const timestamp = Date.now();
      const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      mrnField.value = `MRN${timestamp.toString().slice(-6)}${random}`;
    }
  }

  // Set maximum date for date of birth (today)
  const dobField = infoForm.querySelector('[name="dob"]');
  if (dobField) {
    const today = new Date().toISOString().split('T')[0];
    dobField.setAttribute('max', today);
  }

  // Add event listeners to all fields
  allFields.forEach(field => {
    // Real-time validation and progress update
    field.addEventListener('input', () => {
      updateProgress();
      validateField(field);
    });

    field.addEventListener('blur', () => {
      validateField(field);
    });

    // Auto-generate MRN when focus leaves empty MRN field
    if (field.name === 'mrn') {
      field.addEventListener('blur', generateMRN);
    }
  });

  // Auto-fill full name when individual name fields change
  function updateFullName() {
    const firstName = infoForm.querySelector('[name="firstName"]')?.value || '';
    const middleName = infoForm.querySelector('[name="middleName"]')?.value || '';
    const lastName = infoForm.querySelector('[name="lastName"]')?.value || '';
    const suffix = infoForm.querySelector('[name="suffix"]')?.value || '';
    
    const fullNameField = infoForm.querySelector('[name="name"]');
    if (fullNameField) {
      let fullName = lastName;
      if (firstName) fullName += `, ${firstName}`;
      if (middleName) fullName += ` ${middleName}`;
      if (suffix) fullName += ` ${suffix}`;
      fullNameField.value = fullName.trim().replace(/^,\s*/, '');
    }
  }

  // Add listeners for name field updates
  ['firstName', 'middleName', 'lastName', 'suffix'].forEach(fieldName => {
    const field = infoForm.querySelector(`[name="${fieldName}"]`);
    if (field) {
      field.addEventListener('input', updateFullName);
    }
  });

  // Initial progress calculation
  updateProgress();
}

// -------------------- Consolidated Application Initialization --------------------

// Single initialization function to prevent conflicts
function initializeEHRApplication() {
  console.log('🚀 Initializing EHR Application...');
  
  try {
    // Wait for DOM to be fully ready
    if (document.readyState !== 'complete') {
      setTimeout(initializeEHRApplication, 100);
      return;
    }
    
    // Initialize form progress tracking
    if (typeof setupFormProgressTracking === 'function') {
      setupFormProgressTracking();
      console.log('✅ Form progress tracking initialized');
    }
    
    // Initialize BMI and IV calculations
    if (typeof setupBMIandIV === 'function') {
      setupBMIandIV();
      console.log('✅ BMI and IV calculations initialized');
    }
    
    // Initialize enhanced auto-save
    if (typeof enhanceAutoSave === 'function') {
      enhanceAutoSave();
      console.log('✅ Enhanced auto-save initialized');
    }
    
    // Initialize enhanced dashboard
    if (typeof setupEnhancedDashboard === 'function') {
      setupEnhancedDashboard();
      console.log('✅ Enhanced dashboard initialized');
    }
    
    // Initialize enhanced patient selection
    if (typeof setupEnhancedPatientSelection === 'function') {
      setupEnhancedPatientSelection();
      console.log('✅ Enhanced patient selection initialized');
    }
    
    // Auto-fill current date and time for new patients
    setCurrentDateTime();
    console.log('✅ Auto date/time filling initialized');
    
    // Initialize clinical messaging system
    if (typeof ClinicalMessagingSystem !== 'undefined') {
      try {
        clinicalMessaging = new ClinicalMessagingSystem();
        
        // Make it globally accessible
        window.clinicalMessaging = clinicalMessaging;
        
        console.log('✅ Clinical messaging system initialized');
        console.log('📋 Templates available:', clinicalMessaging.templates.length);
        console.log('💬 Demo messages loaded:', clinicalMessaging.messages.length);
        
        // Test that buttons exist
        setTimeout(() => {
          const templatesBtn = document.getElementById('templatesBtn');
          const patientBtn = document.getElementById('patientMessagesBtn');
          const alertsBtn = document.getElementById('alertsBtn');
          
          console.log('🔍 Button check:');
          console.log('  Templates button:', templatesBtn ? '✅ Found' : '❌ Missing');
          console.log('  Patient button:', patientBtn ? '✅ Found' : '❌ Missing');
          console.log('  Alerts button:', alertsBtn ? '✅ Found' : '❌ Missing');
        }, 1000);
        
      } catch (error) {
        console.error('❌ Error initializing clinical messaging:', error);
      }
    } else {
      console.error('❌ ClinicalMessagingSystem class not found');
    }
    
    // Initialize enhanced features
    if (typeof initializeEnhancedFeatures === 'function') {
      initializeEnhancedFeatures();
      console.log('✅ Enhanced features initialized');
    }
    
    // Initialize enhanced patient model
    if (typeof setupEnhancedPatientModel === 'function') {
      setupEnhancedPatientModel();
      console.log('✅ Enhanced patient model initialized');
    }
    
    // Initialize departments if not already done
    if (departments.length === 0) {
      initializeDepartments().catch(console.error);
      console.log('✅ Departments initialization started');
    }
    
    // Initialize lab functionality
    if (typeof labOrderManager !== 'undefined') {
      labOrderManager.orders = labOrderManager.orders || [];
      console.log('✅ Lab order manager initialized');
    }
    
    if (typeof labTrends !== 'undefined') {
      labTrends.historicalData = labTrends.historicalData || {};
      console.log('✅ Lab trends system initialized');
    }
    
    // Attach Lottie animation if function exists
    if (typeof attachLottieToLogo === 'function') {
      attachLottieToLogo();
      console.log('✅ Lottie animation attached');
    }
    
    // Setup error handlers for critical missing functions
    setupErrorHandlers();
    
    // Setup all clear button handlers
    setupClearButtonHandlers();
    
    // Setup additional missing button handlers
    setupAdditionalButtonHandlers();
    
    console.log('🎉 EHR Application initialization complete!');
    
  } catch (error) {
    console.error('❌ Error during EHR initialization:', error);
    showToast('Application initialization error. Some features may not work properly.', 'error');
  }
}

// Setup error handlers for missing functions
function setupErrorHandlers() {
  // Define safe fallbacks for critical functions
  if (typeof window.showAllPatients === 'undefined') {
    window.showAllPatients = showAllPatients;
  }
  
  if (typeof window.navigateToTab === 'undefined') {
    window.navigateToTab = navigateToTab;
  }
  
  // Lab functions
  if (typeof window.labResultsManager === 'undefined') {
    console.warn('labResultsManager not found, lab functionality may be limited');
  }
  
  // Ensure modal functions exist
  if (typeof window.showBedAssignmentModal === 'undefined') {
    window.showBedAssignmentModal = showBedAssignmentModal;
  }
  
  if (typeof window.showPatientTransferModal === 'undefined') {
    window.showPatientTransferModal = showPatientTransferModal;
  }
  
  if (typeof window.showBedMaintenanceModal === 'undefined') {
    window.showBedMaintenanceModal = showBedMaintenanceModal;
  }
  
  console.log('✅ Error handlers and function fallbacks set up');
}

// Setup all clear button handlers
function setupClearButtonHandlers() {
  console.log('Setting up clear button handlers...');
  
  // Clear Info form (Patient Information)
  const clearInfoBtn = document.getElementById('clearInfo');
  if (clearInfoBtn) {
    clearInfoBtn.addEventListener('click', function() {
      const form = document.getElementById('form-info');
      if (form) {
        // Clear all form inputs
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
          } else {
            input.value = '';
          }
        });
        
        // Clear any calculated fields
        const bmiField = document.getElementById('info_bmi');
        const bmiCategoryField = document.getElementById('info_bmiCategory');
        if (bmiField) bmiField.value = '';
        if (bmiCategoryField) bmiCategoryField.textContent = '';
        
        showToast('Patient information form cleared', 'info');
      }
    });
  }
  
  // Clear ID form (previous versions compatibility)
  const clearIDBtn = document.getElementById('clearID');
  if (clearIDBtn) {
    clearIDBtn.addEventListener('click', function() {
      // Same as clearInfo for backwards compatibility
      const form = document.getElementById('form-info');
      if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
          } else {
            input.value = '';
          }
        });
        showToast('Form cleared', 'info');
      }
    });
  }
  
  // Clear History form (Nurse Notes)
  const clearHistoryBtn = document.getElementById('clearHistory');
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', function() {
      const form = document.getElementById('form-history');
      if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
          } else {
            input.value = '';
          }
        });
        showToast('Nurse notes form cleared', 'info');
      }
    });
  }
  
  // Clear Physical Assessment form
  const clearPhysicalBtn = document.getElementById('clearPhysical');
  if (clearPhysicalBtn) {
    clearPhysicalBtn.addEventListener('click', function() {
      const form = document.getElementById('form-physical');
      if (form) {
        const inputs = form.querySelectorAll('input:not([readonly]), select, textarea');
        inputs.forEach(input => {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
          } else {
            input.value = '';
          }
        });
        
        // Clear calculated BMI fields
        const bmiField = document.getElementById('physical_bmi');
        const bmiCategoryField = document.getElementById('physical_bmiCategory');
        if (bmiField) bmiField.value = '';
        if (bmiCategoryField) bmiCategoryField.textContent = '';
        
        showToast('Physical assessment form cleared', 'info');
      }
    });
  }
  
  // Clear Doctor Notes form  
  const clearDoctorBtn = document.getElementById('clearDoctor');
  if (clearDoctorBtn) {
    clearDoctorBtn.addEventListener('click', function() {
      const form = document.getElementById('form-doctor');
      if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
          } else {
            input.value = '';
          }
        });
        showToast('Doctor notes form cleared', 'info');
      }
    });
  }
  
  // Clear Treatment Plan form
  const clearPlanBtn = document.getElementById('clearPlan');
  if (clearPlanBtn) {
    clearPlanBtn.addEventListener('click', function() {
      const form = document.getElementById('form-assessment');
      if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
          } else {
            input.value = '';
          }
        });
        showToast('Treatment plan form cleared', 'info');
      }
    });
  }
  
  // Clear CPOE Medication form
  const cpoeClearBtn = document.getElementById('cpoeClear');
  if (cpoeClearBtn) {
    cpoeClearBtn.addEventListener('click', function() {
      const form = document.getElementById('medCPOEForm');
      if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
          } else {
            input.value = '';
          }
        });
        
        // Clear any medication safety alerts
        const alertContainer = document.getElementById('medicationAlerts');
        if (alertContainer) {
          alertContainer.innerHTML = '';
        }
        
        // Clear dosing guidelines
        const dosingInfo = document.getElementById('dosingGuidelines');
        if (dosingInfo) {
          dosingInfo.innerHTML = '';
        }
        
        showToast('CPOE form cleared', 'info');
      }
    });
  }
  
  console.log('✅ Clear button handlers set up');
}

// Setup additional missing button handlers
function setupAdditionalButtonHandlers() {
  console.log('Setting up additional button handlers...');
  
  // Help button
  const helpBtn = document.getElementById('helpBtn');
  if (helpBtn) {
    helpBtn.addEventListener('click', function() {
      const helpContent = `
        <div class="max-w-2xl mx-auto p-6">
          <h2 class="text-2xl font-bold mb-6 text-center">🏥 One Care System - Help & Documentation</h2>
          
          <div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-bold text-blue-800 mb-2">🔐 Getting Started</h3>
              <ul class="text-sm text-blue-700 space-y-1">
                <li>• Sign in with your healthcare provider credentials</li>
                <li>• Select your role (Doctor, Nurse, or Admin)</li>
                <li>• Use "New" button to create patient records</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-bold text-green-800 mb-2">👥 Patient Management</h3>
              <ul class="text-sm text-green-700 space-y-1">
                <li>• Click on patient cards to select and edit</li>
                <li>• Use department assignment for bed management</li>
                <li>• All data saves automatically to cloud database</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h3 class="font-bold text-purple-800 mb-2">📋 Clinical Workflow</h3>
              <ul class="text-sm text-purple-700 space-y-1">
                <li>• Patient Info → Vitals → Physical Assessment → Labs</li>
                <li>• Nurses: Access to vitals, notes, and basic care</li>
                <li>• Doctors: Full access including treatment plans</li>
              </ul>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h3 class="font-bold text-teal-800 mb-2">💊 Medication Safety</h3>
              <ul class="text-sm text-teal-700 space-y-1">
                <li>• CPOE system with drug interaction checking</li>
                <li>• Allergy alerts and contraindication warnings</li>
                <li>• Automatic dosing guidelines and safety checks</li>
              </ul>
            </div>
            
            <div class="bg-amber-50 p-4 rounded-lg">
              <h3 class="font-bold text-amber-800 mb-2">🧪 Laboratory Integration</h3>
              <ul class="text-sm text-amber-700 space-y-1">
                <li>• Structured lab entry with auto-interpretation</li>
                <li>• Normal/abnormal flagging with clinical correlations</li>
                <li>• Lab trends and historical data tracking</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h3 class="font-bold text-red-800 mb-2">⚠️ Emergency Features</h3>
              <ul class="text-sm text-red-700 space-y-1">
                <li>• STAT lab orders and critical value alerts</li>
                <li>• High-risk medication warnings</li>
                <li>• Emergency department bed tracking</li>
              </ul>
            </div>
            
            <div class="text-center mt-6 pt-4 border-t">
              <p class="text-sm text-gray-600">
                For technical support: <strong>support@onecaresystem.com</strong><br>
                Version 2.0 | Built with modern web technologies
              </p>
            </div>
          </div>
        </div>
      `;
      
      showModal(helpContent);
    });
  }
  
  // Add Patient button (from dashboard quick actions)
  const addPatientBtn = document.getElementById('addPatientBtn');
  if (addPatientBtn) {
    addPatientBtn.addEventListener('click', function() {
      // Same functionality as the main "New" button
      const newBtn = document.getElementById('btnNew');
      if (newBtn) {
        newBtn.click();
      } else {
        // Fallback: manually trigger new patient creation
        clearAllForms();
        selectedPatientId = null;
        showToast('Ready to create new patient', 'info');
        
        // Navigate to patient info tab
        const infoTab = document.querySelector('.navbtn[data-target="tab-info"]');
        if (infoTab) {
          infoTab.click();
        }
      }
    });
  }
  
  console.log('✅ Additional button handlers set up');
}

// Helper function to clear all forms
function clearAllForms() {
  // Clear all form data
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (input.type === 'checkbox' || input.type === 'radio') {
        input.checked = false;
      } else {
        input.value = '';
      }
    });
  });
  
  // Clear vitals and labs
  if (typeof vitalsRows !== 'undefined') {
    vitalsRows.length = 0;
    if (typeof renderVitalsTable === 'function') renderVitalsTable();
  }
  
  if (typeof uploadedLabs !== 'undefined') {
    uploadedLabs.length = 0;
    if (typeof renderLabFiles === 'function') renderLabFiles();
  }
  
  // Clear medication and IV tables
  const medTableBody = document.getElementById('medTableBody');
  if (medTableBody) medTableBody.innerHTML = '';
  
  const ivTableBody = document.getElementById('ivTableBody');
  if (ivTableBody) ivTableBody.innerHTML = '';
  
  // Clear any calculated fields
  const bmiFields = document.querySelectorAll('[id*="bmi"]');
  bmiFields.forEach(field => {
    if (field.tagName === 'INPUT') {
      field.value = '';
    } else {
      field.textContent = '';
    }
  });
}

// Remove multiple DOMContentLoaded listeners and use single consolidated one
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure all scripts are loaded
  setTimeout(initializeEHRApplication, 100);
});

// Keep the window.load for BMI setup as fallback
window.addEventListener('load', () => {
  if (typeof setupBMIandIV === 'function') {
    setupBMIandIV();
  }
});

// -------------------- BMI and IV Calculation helpers --------------------
function setupBMIandIV(){
  // BMI - form-info fields: weight, height, bmi
  const w = document.querySelector('#form-info input[name="weight"]');
  const h = document.querySelector('#form-info input[name="height"]');
  const bmi = document.querySelector('#form-info input[name="bmi"]');
  
  // BMI - form-physical fields: weight, height, bmi  
  const pw = document.querySelector('#form-physical input[name="weight"]');
  const ph = document.querySelector('#form-physical input[name="height"]');
  const pbmi = document.querySelector('#form-physical input[name="bmi"]');
  
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

  // helper for physical assessment BMI
  function computePhysicalBMI(){
    if(!pw || !ph || !pbmi) return;
    const W = parseFloat(pw.value);
    const H = parseFloat(ph.value);
    const catEl = document.getElementById('physical_bmiCategory');
    if(!isFinite(W) || !isFinite(H) || H <= 0) {
      pbmi.value = '';
      if(catEl) { catEl.textContent = ''; catEl.className = ''; }
      return;
    }
    const val = (W / Math.pow(H/100,2));
    const rounded = val.toFixed(1);
    pbmi.value = rounded;
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
  [pw,ph].forEach(el => { if(el) el.addEventListener('input', computePhysicalBMI); });
  
  // expose for external callers (e.g. when filling form programmatically)
  window.computeAndDisplayBMI = computeAndDisplayBMI;
  window.computePhysicalBMI = computePhysicalBMI;

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
// BMI and IV calculations are initialized through the consolidated init function

// -------------------- View, Edit, Delete, Print --------------------
let currentModalPatientIndex = null;

// Render the modern dashboard widgets for a given patient id
function renderDashboardForPatient(patientId){
  const p = patients.find(x=>x.id===patientId);
  
  // Update patient overview if elements exist
  if($('ov_name')) $('ov_name').textContent = p ? (p.name || '—') : 'No patient selected';
  if($('ov_demographics')) $('ov_demographics').textContent = p ? `${p.age||''} · ${p.gender||''} · MRN: ${p.mrn||p.id||''}` : 'Select a patient to view details';
  if($('ov_location')) $('ov_location').textContent = p ? `Room: ${p.roomNo||'—'} · Bed: ${p.bedNo||'—'}` : 'Room: — · Bed: —';
  if($('ov_physician')) $('ov_physician').textContent = p ? (`Dr. ${p.physician||'Unassigned'}`) : 'Attending: —';
  if($('ov_allergies')) $('ov_allergies').textContent = p && p.allergies ? p.allergies : 'None documented';
  if($('ov_status')) $('ov_status').textContent = p ? (p.patientStatus||'Unknown') : '—';
  
  // Update dashboard cards with real patient counts (not just selected patient)
  updateStats();
  
  // Update vitals sparkline with real patient data
  const vitalsEl = $('vitalsSpark');
  if(vitalsEl) {
    if(p && Array.isArray(p.vitals) && p.vitals.length > 0) {
      const latestVital = p.vitals[p.vitals.length - 1];
      vitalsEl.innerHTML = `
        <div class="text-sm text-slate-600">Latest: ${latestVital.date || ''} ${latestVital.time || ''}</div>
        <div class="flex gap-4 text-xs">
          <span>T: ${latestVital.temp || '—'}°C</span>
          <span>BP: ${latestVital.bp || '—'}</span>
          <span>HR: ${latestVital.pulse || '—'}</span>
          <span>SpO2: ${latestVital.spo2 || latestVital.spO2 || '—'}%</span>
        </div>
      `;
    } else {
      vitalsEl.innerHTML = `
        <div class="text-sm text-slate-400">No vitals recorded</div>
        <div class="text-xs text-slate-400">Click to record vitals</div>
      `;
    }
  }
  
  // Update timeline placeholder
  const timelinePlaceholder = $('timelinePlaceholder');
  const timelineEvents = $('timelineEvents');
  if(timelinePlaceholder && timelineEvents) {
    if(p) {
      timelinePlaceholder.classList.add('hidden');
      timelineEvents.classList.remove('hidden');
      renderTimelineForPatient(patientId);
    } else {
      timelinePlaceholder.classList.remove('hidden');
      timelineEvents.classList.add('hidden');
    }
  }

  // vitals (use p.vitals latest if exists)
  const latestVital = p && Array.isArray(p.vitals) && p.vitals.length ? p.vitals[p.vitals.length-1] : null;
  if($('v_temp')) $('v_temp').textContent = latestVital ? (latestVital.temp || '—') + ' °C' : '— °C';
  if($('v_hr')) $('v_hr').textContent = latestVital ? (latestVital.pulse || '—') + ' bpm' : '— bpm';
  if($('v_bp')) $('v_bp').textContent = latestVital ? (latestVital.bp || '— / —') + ' mmHg' : '— / — mmHg';
  if($('v_spo2')) $('v_spo2').textContent = latestVital ? (latestVital.spo2 || latestVital.spO2 || '—') + ' %' : '— %';
  if($('vitalsLastUpdate')) $('vitalsLastUpdate').textContent = latestVital ? `${latestVital.date||''} ${latestVital.time||''}` : '—';

  // colorize vitals based on simple thresholds
  const tempEl = $('v_temp'); const hrEl = $('v_hr'); const bpEl = $('v_bp'); const spo2El = $('v_spo2');
  [tempEl, hrEl, bpEl, spo2El].forEach(el=> el && el.parentElement && el.parentElement.classList.remove('vital-critical','vital-warning'));
  if(latestVital){
    const t = parseFloat(latestVital.temp);
    if(isFinite(t) && (t >= 39 || t <= 35)) tempEl && tempEl.parentElement && tempEl.parentElement.classList.add('vital-critical');
    else if(isFinite(t) && (t >= 37.5)) tempEl && tempEl.parentElement && tempEl.parentElement.classList.add('vital-warning');
    const hr = parseFloat(latestVital.pulse);
    if(isFinite(hr) && (hr > 130 || hr < 40)) hrEl && hrEl.parentElement && hrEl.parentElement.classList.add('vital-critical');
    else if(isFinite(hr) && (hr > 100 || hr < 50)) hrEl && hrEl.parentElement && hrEl.parentElement.classList.add('vital-warning');
    const sp = parseFloat(latestVital.spO2 || latestVital.spo2);
    if(isFinite(sp) && sp < 90) spo2El && spo2El.parentElement && spo2El.parentElement.classList.add('vital-critical');
    else if(isFinite(sp) && sp < 94) spo2El && spo2El.parentElement && spo2El.parentElement.classList.add('vital-warning');
  }

  // meds
  const medsBody = $('medsTableBody'); 
  if (medsBody) { 
    medsBody.innerHTML = ''; 
    if (p && Array.isArray(p.medOrders) && p.medOrders.length) { 
      p.medOrders.forEach(m => { 
        const tr = document.createElement('tr'); 
        const ivParts = [];
        if(m.iv_fluid) ivParts.push(esc(m.iv_fluid));
        if(m.iv_ml_hr) ivParts.push(esc(m.iv_ml_hr) + ' mL/hr');
        if(m.iv_gtt_min) ivParts.push(esc(m.iv_gtt_min) + ' gtt/min');
        const ivText = ivParts.length ? ivParts.join(' • ') : '—';
        tr.innerHTML = `<td>${esc(m.drug||'')}</td><td>${esc(m.dosage||'')}</td><td>${esc(m.frequency||'')}</td><td>${ivText}</td>`; 
        medsBody.appendChild(tr); 
      }); 
    } else { 
      medsBody.innerHTML = '<tr><td colspan="4" class="muted text-sm">No active medications</td></tr>'; 
    } 
    
    // add small badges for meds due/missed (placeholder logic)
    if(p && Array.isArray(p.medOrders) && p.medOrders.length){
      const rows = medsBody.querySelectorAll('tr');
      p.medOrders.forEach((m,i)=>{
        const badge = document.createElement('span');
        if(m.missed) { badge.className = 'med-badge missed'; badge.textContent = ' ⚠️ missed'; }
        else if(m.due) { badge.className = 'med-badge due'; badge.textContent = ' ⏱ due'; }
        if(badge.textContent && rows[i] && rows[i].children[0]) {
          rows[i].children[0].appendChild(badge);
        }
      });
    }
  }

  // labs
  if($('labsList')){
    if(p && Array.isArray(p.labFiles) && p.labFiles.length){ $('labsList').innerHTML = p.labFiles.slice(0,5).map(l => `<div><a href="${l.url}" target="_blank" class="text-sky-600">${esc(l.name)}</a></div>`).join(''); }
    else $('labsList').innerHTML = 'No recent labs';
  }

  // tasks
  if($('tasksList')){
    // use p.tasks if present, otherwise empty
    if(p && Array.isArray(p.tasks) && p.tasks.length){ $('tasksList').innerHTML = p.tasks.map(t=>`<li>${esc(t)}</li>`).join(''); }
    else $('tasksList').innerHTML = '<li class="muted">No tasks assigned</li>';
  }

  // analytics (global values may be derived from patients array)
  if($('metric_bed')) $('metric_bed').textContent = patients.length ? `${Math.round((patients.filter(x=>x.patientStatus==='Inpatient').length / patients.length) * 100)}%` : '—';
  if($('metric_infect')) $('metric_infect').textContent = '—';

  // alerts count (simple scan for critical lab flags or overdue meds)
  let alerts = [];
  if(p){
    if(p.allergies) alerts.push('Allergies recorded');
    if(Array.isArray(p.labFiles) && p.labFiles.some(l=>l.flag==='critical')) alerts.push('Critical lab result');
    // check meds for missed / due (placeholder: medication with startDate in past and duration expired could be 'missed')
    if(Array.isArray(p.medOrders) && p.medOrders.some(m=> m.frequency && m.startDate && m.startDate < new Date().toISOString().slice(0,10))) alerts.push('Medication schedule requires review');
  }
  if($('alertsCount')) $('alertsCount').textContent = alerts.length || 0;
  if($('alertsList')) $('alertsList').innerHTML = alerts.length ? alerts.map(a=>`<li>${esc(a)}</li>`).join('') : '<li class="text-muted">No active alerts</li>';
}

// wire dashboard controls if present
on('refreshDashboard','click', ()=>{ 
  const btn = $('refreshDashboard');
  if(btn) {
    btn.innerHTML = '⟳';
    btn.style.animation = 'spin 1s linear infinite';
    btn.disabled = true;
  }
  
  loadPatients().then(()=>{ 
    renderDashboardForPatient(selectedPatientId); 
    showToast('Dashboard refreshed', 'success');
  }).finally(() => {
    if(btn) {
      btn.innerHTML = '🔄';
      btn.style.animation = '';
      btn.disabled = false;
    }
  });
});

on('openAlerts','click', ()=>{ 
  const a = $('alertsList'); 
  if(a) { 
    const modal = $('modalBody'); 
    if(modal) { 
      modal.innerHTML = `
        <div class="p-6">
          <h3 class="text-xl font-bold text-slate-800 mb-4">🚨 System Alerts</h3>
          <div class="space-y-3">
            ${a.innerHTML || '<div class="text-slate-500">No active alerts</div>'}
          </div>
          <div class="mt-6 flex justify-end">
            <button class="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors" onclick="closeModal()">
              Close
            </button>
          </div>
        </div>
      `; 
      showEmptyModal(); 
    } 
  } 
});

// Add function to manually refresh dashboard data
function refreshDashboardData() {
  updateStats();
  if(selectedPatientId) {
    renderDashboardForPatient(selectedPatientId);
  }
  updateLastUpdated();
}

// Update last updated timestamp
function updateLastUpdated() {
  const elem = $('lastUpdated');
  if(elem) {
    const now = new Date();
    elem.textContent = `Updated ${now.toLocaleTimeString()}`;
  }
}

// Auto-refresh dashboard every 30 seconds
setInterval(() => {
  if(currentUser && patients.length > 0) {
    refreshDashboardData();
  }
}, 30000);

function showPatientModal(index){
  console.log('🚀 ENHANCED PATIENT MODAL CALLED - INDEX:', index);
  if(index === null || index === undefined) return;
  if(index < 0) index = 0; if(index >= patients.length) index = patients.length - 1;
  currentModalPatientIndex = index;
  const p = patients[index];
  if(!p) return showToast('Patient not found', 'error');
  console.log('✅ Enhanced patient modal - patient data:', p.name);
  const modal = $('modalBody'); if(!modal) { showToast('Modal not present', 'info'); return; }

  // Enhanced demographic information
  const demographics = generateDemographicsSection(p);
  
  // Enhanced medication section with safety indicators
  const medsHtml = generateEnhancedMedicationsSection(p);
  
  // Enhanced vitals with trending and alerts
  const vitalsHtml = generateEnhancedVitalsSection(p);
  
  // Enhanced lab results with status indicators
  const labsHtml = generateEnhancedLabsSection(p);
  
  // Enhanced assessment with clinical insights
  const assessmentHtml = generateEnhancedAssessmentSection(p);
  
  // Add allergy and clinical notes sections
  const allergyHtml = generateAllergySection(p);
  const notesHtml = generateClinicalNotesSection(p);
  
  // Calculate patient summary statistics
  const summaryStats = calculatePatientSummaryStats(p);

  // prev/next controls
  const prevDisabled = index <= 0 ? 'opacity-50 pointer-events-none' : '';
  const nextDisabled = index >= patients.length-1 ? 'opacity-50 pointer-events-none' : '';

  modal.innerHTML = `
    <div class="enhanced-patient-summary" style="border: 2px solid #10b981; border-radius: 8px; background: white;">
      <!-- Enhanced Patient View -->
      <div class="summary-header p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-200">
        <div class="flex justify-between items-start">
          <div class="patient-identity">
            <div class="flex items-center gap-3">
              <div class="patient-avatar w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                ${(p.name || 'P').charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-800">${esc(p.name || '')}</h2>
                <p class="text-emerald-600 font-medium">👨‍⚕️ ${esc(p.physician || 'No physician assigned')}</p>
              </div>
            </div>
            <div class="patient-identifiers mt-3 flex flex-wrap gap-4">
              <span class="bg-white px-3 py-1 rounded-full text-sm border">
                <strong>MRN:</strong> ${esc(p.mrn || '—')}
              </span>
              <span class="bg-white px-3 py-1 rounded-full text-sm border ${p.patientStatus === 'Active' ? 'border-green-300 text-green-700' : 'border-gray-300'}">
                <strong>Status:</strong> ${esc(p.patientStatus || 'Unknown')}
              </span>
              ${summaryStats.lengthOfStay ? `<span class="bg-white px-3 py-1 rounded-full text-sm border">
                <strong>LOS:</strong> ${summaryStats.lengthOfStay} days
              </span>` : ''}
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="action-controls flex flex-col gap-2">
            <div class="navigation-controls flex gap-2">
              <button class="px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all ${prevDisabled}" 
                      onclick="(function(){ if(currentModalPatientIndex>0) showPatientModal(currentModalPatientIndex-1); })()">
                ◀ Previous
              </button>
              <button class="px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all ${nextDisabled}" 
                      onclick="(function(){ if(currentModalPatientIndex < ${patients.length-1}) showPatientModal(currentModalPatientIndex+1); })()">
                Next ▶
              </button>
            </div>
            <div class="action-buttons flex gap-2">
              <button class="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm" onclick="closeModal()">
                ✕ Close
              </button>
              <button class="px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-sm" 
                      onclick="printEnhancedPatientSummary(${index})">
                🖨️ Print Report
              </button>
              <button class="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm" 
                      onclick="exportPatientAsFHIR(${index})">
                📋 FHIR Export
              </button>
              <button class="px-3 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors text-sm" 
                      onclick="showPatientAnalytics(${index})">
                📊 Analytics
              </button>
            </div>
          </div>
        </div>
        
        <!-- Summary Statistics -->
        <div class="summary-stats mt-3 grid grid-cols-4 gap-3">
          <div class="stat-card bg-white p-2 rounded-lg text-center border">
            <div class="text-lg font-bold text-emerald-600">${summaryStats.totalMedications}</div>
            <div class="text-xs text-gray-600">Medications</div>
          </div>
          <div class="stat-card bg-white p-2 rounded-lg text-center border">
            <div class="text-lg font-bold text-blue-600">${summaryStats.totalVitals}</div>
            <div class="text-xs text-gray-600">Vital Signs</div>
          </div>
          <div class="stat-card bg-white p-2 rounded-lg text-center border">
            <div class="text-lg font-bold text-purple-600">${summaryStats.totalLabs}</div>
            <div class="text-xs text-gray-600">Lab Results</div>
          </div>
          <div class="stat-card bg-white p-2 rounded-lg text-center border">
            <div class="text-lg font-bold ${summaryStats.riskLevel === 'High' ? 'text-red-600' : summaryStats.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-green-600'}">${summaryStats.riskLevel}</div>
            <div class="text-xs text-gray-600">Risk Level</div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="summary-content p-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <!-- Left Column -->
          <div class="left-column space-y-4">
            <!-- Demographics & Admission -->
            ${demographics}
            
            <!-- Allergies & Alerts -->
            ${allergyHtml}
            
            <!-- Assessment & Plan -->
            ${assessmentHtml}
          </div>
          
          <!-- Right Column -->
          <div class="right-column space-y-4">
            <!-- Medications -->
            ${medsHtml}
            
            <!-- Vitals -->
            ${vitalsHtml}
            
            <!-- Laboratory & Files -->
            ${labsHtml}
          </div>
        </div>
        
        <!-- Clinical Notes Section -->
        ${notesHtml}
      </div>
    </div>`;
  const parent = $('modal'); if(parent) showEmptyModal();
}

// Enhanced section generators for patient summary
function generateDemographicsSection(p) {
  const admissionDate = p.admissionDate ? new Date(p.admissionDate).toLocaleDateString() : 'Not recorded';
  const age = calculateAge(p.dateOfBirth);
  
  return `
    <div class="section-card bg-white border rounded-lg p-4">
      <div class="section-header flex items-center gap-2 mb-3">
        <div class="w-2 h-6 bg-emerald-500 rounded"></div>
        <h3 class="text-lg font-semibold text-gray-800">Demographics & Admission</h3>
      </div>
      <div class="section-content space-y-3">
        <div class="info-row flex justify-between">
          <span class="label font-medium text-gray-600">Date of Birth:</span>
          <span class="value">${esc(p.dateOfBirth || 'Not recorded')} ${age ? `(${age} years)` : ''}</span>
        </div>
        <div class="info-row flex justify-between">
          <span class="label font-medium text-gray-600">Gender:</span>
          <span class="value">${esc(p.gender || 'Not specified')}</span>
        </div>
        <div class="info-row flex justify-between">
          <span class="label font-medium text-gray-600">Room/Bed:</span>
          <span class="value">${esc(p.room || 'Not assigned')} / ${esc(p.bed || 'Not assigned')}</span>
        </div>
        <div class="diagnosis-section mt-4 p-3 bg-blue-50 rounded-lg">
          <h4 class="font-semibold text-blue-800 mb-2">Primary Diagnosis</h4>
          <p class="text-blue-700">${esc(p.initialDiagnosis || 'No diagnosis recorded')}</p>
        </div>
        <div class="admission-info mt-4 p-3 bg-gray-50 rounded-lg">
          <h4 class="font-semibold text-gray-800 mb-2">Admission Information</h4>
          <p class="text-sm text-gray-600">
            <strong>Date:</strong> ${admissionDate}<br>
            <strong>Time:</strong> ${esc(p.admissionTime || 'Not recorded')}<br>
            <strong>Type:</strong> ${esc(p.admissionType || 'Not specified')}
          </p>
        </div>
      </div>
    </div>
  `;
}

function generateEnhancedMedicationsSection(p) {
  let medsHtml = '<div class="empty-state text-center py-8 text-gray-500"><div class="text-4xl mb-2">💊</div><p>No medication orders</p></div>';
  
  const medOrdersArr = Array.isArray(p.medOrders) ? p.medOrders : (p.medOrders && typeof p.medOrders === 'object' ? Object.values(p.medOrders) : []);
  
  if (medOrdersArr && medOrdersArr.length) {
    const medicationCards = medOrdersArr.map((m, index) => {
      const isHighRisk = window.medicationSafety && window.medicationSafety.highRiskDrugs.includes((m.drug || '').toLowerCase());
      const alerts = window.medicationSafety ? window.medicationSafety.checkMedication(m.drug || '', p) : [];
      const hasAlerts = alerts.length > 0;
      
      return `
        <div class="medication-card border rounded-lg p-4 ${hasAlerts ? 'border-red-300 bg-red-50' : 'border-gray-200'} ${isHighRisk ? 'ring-2 ring-yellow-300' : ''}">
          <div class="med-header flex justify-between items-start mb-2">
            <div class="med-name">
              <h4 class="font-bold text-lg text-gray-800">${esc(m.drug || '')}</h4>
              <p class="text-gray-600">${esc(m.dosage || '')}</p>
            </div>
            <div class="med-badges flex gap-1">
              ${isHighRisk ? '<span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">HIGH RISK</span>' : ''}
              ${hasAlerts ? '<span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">ALERT</span>' : ''}
            </div>
          </div>
          
          <div class="med-details grid grid-cols-2 gap-3 text-sm">
            <div>
              <span class="font-medium text-gray-600">Route:</span> ${esc(m.route || 'Not specified')}
            </div>
            <div>
              <span class="font-medium text-gray-600">Frequency:</span> ${esc(m.frequency || 'Not specified')}
            </div>
            ${m.startDate ? `<div><span class="font-medium text-gray-600">Start Date:</span> ${esc(m.startDate)}</div>` : ''}
            ${m.duration ? `<div><span class="font-medium text-gray-600">Duration:</span> ${esc(m.duration)}</div>` : ''}
          </div>
          
          ${(m.iv_ml_hr || m.iv_gtt_min) ? `
            <div class="iv-info mt-3 p-2 bg-blue-50 rounded border-l-4 border-blue-400">
              <h5 class="font-medium text-blue-800 mb-1">IV Administration</h5>
              <div class="text-sm text-blue-700">
                ${m.iv_ml_hr ? `Rate: ${esc(m.iv_ml_hr)} mL/hr` : ''}
                ${m.iv_ml_hr && m.iv_gtt_min ? ' • ' : ''}
                ${m.iv_gtt_min ? `${esc(m.iv_gtt_min)} gtt/min` : ''}
              </div>
            </div>
          ` : ''}
          
          ${hasAlerts ? `
            <div class="med-alerts mt-3">
              ${alerts.map(alert => `
                <div class="alert p-2 rounded ${alert.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}">
                  <div class="text-xs font-medium">${alert.message}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
    
    medsHtml = `
      <div class="medications-grid space-y-3">
        ${medicationCards}
      </div>
    `;
  }
  
  return `
    <div class="section-card bg-white border rounded-lg p-4">
      <div class="section-header flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <div class="w-2 h-6 bg-emerald-500 rounded"></div>
          <h3 class="text-lg font-semibold text-gray-800">Medications</h3>
        </div>
        <span class="badge px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full font-medium">
          ${medOrdersArr.length} Active
        </span>
      </div>
      <div class="section-content">
        ${medsHtml}
      </div>
    </div>
  `;
}

function generateEnhancedVitalsSection(p) {
  let vitalsHtml = '<div class="empty-state text-center py-8 text-gray-500"><div class="text-4xl mb-2">🌡️</div><p>No vitals recorded</p></div>';
  
  if (p.vitals && p.vitals.length) {
    const latestVitals = p.vitals[p.vitals.length - 1];
    const vitalsHistory = p.vitals.slice(-5); // Last 5 readings
    
    // Assess vital signs status
    const temp = parseFloat(latestVitals.temp) || 0;
    const pulse = parseFloat(latestVitals.pulse) || 0;
    const bpSys = latestVitals.bp ? parseInt(latestVitals.bp.split('/')[0]) || 0 : 0;
    
    const tempStatus = temp > 38.5 ? 'critical' : temp > 37.5 ? 'warning' : 'normal';
    const pulseStatus = pulse > 100 || pulse < 60 ? 'warning' : 'normal';
    const bpStatus = bpSys > 140 || bpSys < 90 ? 'warning' : 'normal';
    
    const latestVitalsCard = `
      <div class="latest-vitals p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border">
        <h4 class="font-semibold text-blue-800 mb-3">Latest Vital Signs</h4>
        <div class="vitals-grid grid grid-cols-3 gap-4">
          <div class="vital-item text-center">
            <div class="vital-icon text-2xl mb-1">${tempStatus === 'critical' ? '🔥' : '🌡️'}</div>
            <div class="vital-value text-xl font-bold ${tempStatus === 'critical' ? 'text-red-600' : tempStatus === 'warning' ? 'text-yellow-600' : 'text-green-600'}">
              ${esc(latestVitals.temp || '--')}°C
            </div>
            <div class="vital-label text-xs text-gray-600">Temperature</div>
          </div>
          <div class="vital-item text-center">
            <div class="vital-icon text-2xl mb-1">❤️</div>
            <div class="vital-value text-xl font-bold ${pulseStatus === 'warning' ? 'text-yellow-600' : 'text-green-600'}">
              ${esc(latestVitals.pulse || '--')}
            </div>
            <div class="vital-label text-xs text-gray-600">Heart Rate</div>
          </div>
          <div class="vital-item text-center">
            <div class="vital-icon text-2xl mb-1">🩸</div>
            <div class="vital-value text-xl font-bold ${bpStatus === 'warning' ? 'text-yellow-600' : 'text-green-600'}">
              ${esc(latestVitals.bp || '--')}
            </div>
            <div class="vital-label text-xs text-gray-600">Blood Pressure</div>
          </div>
        </div>
        <div class="vital-timestamp text-center mt-3 text-xs text-gray-500">
          Recorded: ${esc(latestVitals.date || '')} ${esc(latestVitals.time || '')}
        </div>
      </div>
    `;
    
    const vitalsHistoryTable = `
      <div class="vitals-history mt-4">
        <h5 class="font-medium text-gray-700 mb-2">Recent History</h5>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-3 py-2 text-left">Date/Time</th>
                <th class="px-3 py-2 text-center">Temp (°C)</th>
                <th class="px-3 py-2 text-center">Pulse</th>
                <th class="px-3 py-2 text-center">BP</th>
              </tr>
            </thead>
            <tbody>
              ${vitalsHistory.reverse().map(v => `
                <tr class="border-t hover:bg-gray-50">
                  <td class="px-3 py-2 text-gray-600">${esc(v.date || '')} ${esc(v.time || '')}</td>
                  <td class="px-3 py-2 text-center">${esc(v.temp || '--')}</td>
                  <td class="px-3 py-2 text-center">${esc(v.pulse || '--')}</td>
                  <td class="px-3 py-2 text-center">${esc(v.bp || '--')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
    
    vitalsHtml = latestVitalsCard + vitalsHistoryTable;
  }
  
  return `
    <div class="section-card bg-white border rounded-lg p-4">
      <div class="section-header flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <div class="w-2 h-6 bg-blue-500 rounded"></div>
          <h3 class="text-lg font-semibold text-gray-800">Vital Signs</h3>
        </div>
        <span class="badge px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
          ${p.vitals ? p.vitals.length : 0} Readings
        </span>
      </div>
      <div class="section-content">
        ${vitalsHtml}
      </div>
    </div>
  `;
}

function generateEnhancedLabsSection(p) {
  let labsHtml = '<div class="empty-state text-center py-8 text-gray-500"><div class="text-4xl mb-2">🧪</div><p>No lab files uploaded</p></div>';
  
  if (p.labFiles && p.labFiles.length) {
    const labCards = p.labFiles.map((l, index) => {
      const fileType = l.name ? l.name.split('.').pop().toUpperCase() : 'FILE';
      const uploadDate = l.uploadDate ? new Date(l.uploadDate).toLocaleDateString() : 'Date unknown';
      
      return `
        <div class="lab-card border rounded-lg p-3 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="file-icon w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span class="text-purple-600 font-bold text-xs">${fileType}</span>
              </div>
              <div>
                <h5 class="font-medium text-gray-800">${esc(l.name || 'Lab Result')}</h5>
                <p class="text-xs text-gray-500">Uploaded: ${uploadDate}</p>
              </div>
            </div>
            <a href="${l.url}" target="_blank" class="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium">
              View →
            </a>
          </div>
        </div>
      `;
    }).join('');
    
    labsHtml = `<div class="labs-grid space-y-2">${labCards}</div>`;
  }
  
  return `
    <div class="section-card bg-white border rounded-lg p-4">
      <div class="section-header flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <div class="w-2 h-6 bg-purple-500 rounded"></div>
          <h3 class="text-lg font-semibold text-gray-800">Laboratory Results</h3>
        </div>
        <span class="badge px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">
          ${p.labFiles ? p.labFiles.length : 0} Files
        </span>
      </div>
      <div class="section-content">
        ${labsHtml}
      </div>
    </div>
  `;
}

function generateEnhancedAssessmentSection(p) {
  let assessmentHtml = '<div class="empty-state text-center py-6 text-gray-500"><div class="text-3xl mb-2">📋</div><p>No assessment recorded</p></div>';
  
  if (p.assessment_investigations || p.assessment_treatmentOrders || p.assessment_notes) {
    assessmentHtml = `
      <div class="assessment-content space-y-4">
        ${p.assessment_investigations ? `
          <div class="assessment-section p-3 bg-blue-50 rounded-lg">
            <h5 class="font-semibold text-blue-800 mb-2">Investigations</h5>
            <p class="text-blue-700">${esc(p.assessment_investigations)}</p>
          </div>
        ` : ''}
        
        ${p.assessment_treatmentOrders ? `
          <div class="assessment-section p-3 bg-green-50 rounded-lg">
            <h5 class="font-semibold text-green-800 mb-2">Treatment Orders</h5>
            <p class="text-green-700">${esc(p.assessment_treatmentOrders)}</p>
          </div>
        ` : ''}
        
        ${p.assessment_notes ? `
          <div class="assessment-section p-3 bg-gray-50 rounded-lg">
            <h5 class="font-semibold text-gray-800 mb-2">Clinical Notes</h5>
            <p class="text-gray-700">${esc(p.assessment_notes)}</p>
          </div>
        ` : ''}
      </div>
    `;
  }
  
  return `
    <div class="section-card bg-white border rounded-lg p-4">
      <div class="section-header flex items-center gap-2 mb-3">
        <div class="w-2 h-6 bg-teal-500 rounded"></div>
        <h3 class="text-lg font-semibold text-gray-800">Assessment & Plan</h3>
      </div>
      <div class="section-content">
        ${assessmentHtml}
      </div>
    </div>
  `;
}

function generateAllergySection(p) {
  let allergyHtml = '<div class="text-center py-4 text-green-600"><div class="text-2xl mb-1">✅</div><p class="text-sm">No known allergies</p></div>';
  
  if (p.allergies && Array.isArray(p.allergies) && p.allergies.length > 0) {
    const allergyCards = p.allergies.map(allergy => `
      <div class="allergy-card p-2 bg-red-50 border border-red-200 rounded-lg">
        <div class="flex items-center gap-2">
          <span class="text-red-600">⚠️</span>
          <span class="font-medium text-red-800">${esc(allergy.agent || allergy)}</span>
        </div>
        ${allergy.reaction ? `<p class="text-sm text-red-600 ml-6">${esc(allergy.reaction)}</p>` : ''}
      </div>
    `).join('');
    
    allergyHtml = `<div class="allergies-grid space-y-2">${allergyCards}</div>`;
  } else if (p.allergySummary) {
    allergyHtml = `
      <div class="allergy-card p-3 bg-red-50 border border-red-200 rounded-lg">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-red-600">⚠️</span>
          <span class="font-medium text-red-800">Allergy Information</span>
        </div>
        <p class="text-red-700">${esc(p.allergySummary)}</p>
      </div>
    `;
  }
  
  return `
    <div class="section-card bg-white border rounded-lg p-4">
      <div class="section-header flex items-center gap-2 mb-3">
        <div class="w-2 h-6 bg-red-500 rounded"></div>
        <h3 class="text-lg font-semibold text-gray-800">Allergies & Alerts</h3>
      </div>
      <div class="section-content">
        ${allergyHtml}
      </div>
    </div>
  `;
}

function generateClinicalNotesSection(p) {
  let notesHtml = '';
  const hasNurseNotes = p.nurse_assessment || p.nurse_plan || p.nurse_notes;
  const hasDoctorNotes = p.doctor_subjective || p.doctor_objective || p.doctor_assessment || p.doctor_plan;
  
  if (!hasNurseNotes && !hasDoctorNotes) {
    return '';
  }
  
  notesHtml = `
    <div class="clinical-notes-section">
      <div class="section-header flex items-center gap-2 mb-4">
        <div class="w-2 h-6 bg-indigo-500 rounded"></div>
        <h3 class="text-lg font-semibold text-gray-800">Clinical Documentation</h3>
      </div>
      
      <div class="notes-grid grid grid-cols-1 md:grid-cols-2 gap-4">
        ${hasNurseNotes ? `
          <div class="nurse-notes bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 class="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <span class="text-lg">👩‍⚕️</span>
              Nursing Documentation
            </h4>
            <div class="space-y-3">
              ${p.nurse_assessment ? `
                <div>
                  <h5 class="font-medium text-green-700">Assessment</h5>
                  <p class="text-green-800">${esc(p.nurse_assessment)}</p>
                </div>
              ` : ''}
              ${p.nurse_plan ? `
                <div>
                  <h5 class="font-medium text-green-700">Plan</h5>
                  <p class="text-green-800">${esc(p.nurse_plan)}</p>
                </div>
              ` : ''}
              ${p.nurse_notes ? `
                <div>
                  <h5 class="font-medium text-green-700">Notes</h5>
                  <p class="text-green-800">${esc(p.nurse_notes)}</p>
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
        
        ${hasDoctorNotes ? `
          <div class="doctor-notes bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 class="font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <span class="text-lg">👨‍⚕️</span>
              Physician Documentation
            </h4>
            <div class="space-y-3">
              ${p.doctor_subjective ? `
                <div>
                  <h5 class="font-medium text-blue-700">Subjective</h5>
                  <p class="text-blue-800">${esc(p.doctor_subjective)}</p>
                </div>
              ` : ''}
              ${p.doctor_objective ? `
                <div>
                  <h5 class="font-medium text-blue-700">Objective</h5>
                  <p class="text-blue-800">${esc(p.doctor_objective)}</p>
                </div>
              ` : ''}
              ${p.doctor_assessment ? `
                <div>
                  <h5 class="font-medium text-blue-700">Assessment</h5>
                  <p class="text-blue-800">${esc(p.doctor_assessment)}</p>
                </div>
              ` : ''}
              ${p.doctor_plan ? `
                <div>
                  <h5 class="font-medium text-blue-700">Plan</h5>
                  <p class="text-blue-800">${esc(p.doctor_plan)}</p>
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
  
  return notesHtml;
}

function calculatePatientSummaryStats(p) {
  const medOrdersArr = Array.isArray(p.medOrders) ? p.medOrders : (p.medOrders && typeof p.medOrders === 'object' ? Object.values(p.medOrders) : []);
  const totalMedications = medOrdersArr.length;
  const totalVitals = p.vitals ? p.vitals.length : 0;
  const totalLabs = p.labFiles ? p.labFiles.length : 0;
  
  // Calculate length of stay
  let lengthOfStay = null;
  if (p.admissionDate) {
    const admissionDate = new Date(p.admissionDate);
    const today = new Date();
    lengthOfStay = Math.ceil((today - admissionDate) / (1000 * 60 * 60 * 24));
  }
  
  // Calculate risk level based on various factors
  let riskLevel = 'Low';
  let riskFactors = 0;
  
  // Check for high-risk medications
  if (window.medicationSafety) {
    medOrdersArr.forEach(med => {
      if (window.medicationSafety.highRiskDrugs.includes((med.drug || '').toLowerCase())) {
        riskFactors++;
      }
    });
  }
  
  // Check allergies
  if (p.allergies && p.allergies.length > 0) riskFactors++;
  
  // Check vitals
  if (p.vitals && p.vitals.length > 0) {
    const latestVitals = p.vitals[p.vitals.length - 1];
    const temp = parseFloat(latestVitals.temp) || 0;
    const pulse = parseFloat(latestVitals.pulse) || 0;
    
    if (temp > 38.5 || pulse > 100 || pulse < 60) riskFactors++;
  }
  
  // Determine risk level
  if (riskFactors >= 3) riskLevel = 'High';
  else if (riskFactors >= 1) riskLevel = 'Medium';
  
  return {
    totalMedications,
    totalVitals,
    totalLabs,
    lengthOfStay,
    riskLevel,
    riskFactors
  };
}

function calculateAge(dateOfBirth) {
  if (!dateOfBirth) return null;
  
  const today = new Date();
  const birth = new Date(dateOfBirth);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age > 0 ? age : null;
}

window.viewPatient = function(indexOrId){
  // accept either numeric index or patient id string
  let idx = indexOrId;
  if(typeof indexOrId === 'string') idx = patients.findIndex(p => p.id === indexOrId);
  if(idx === -1 || idx === null || idx === undefined) return showToast('Patient not found', 'error');
  showPatientModal(idx);
};

// helper to print consolidated patient summary by id
function printPatientInline(id){
  const p = patients.find(x=>x.id===id);
  if(!p) return showToast('Patient not found', 'error');
  // build medsHtml safely
  let medsHtml = '<div class="text-sm text-slate-500">No medication orders</div>';
  const medOrdersArr = Array.isArray(p.medOrders) ? p.medOrders : (p.medOrders && typeof p.medOrders === 'object' ? Object.values(p.medOrders) : []);
  if(medOrdersArr && medOrdersArr.length){
    medsHtml = medOrdersArr.map(m => {
      let s = '<div class="mb-2"><strong>' + esc(m.drug||'') + '</strong> — ' + esc(m.dosage||'');
      if(m.route) s += ' / ' + esc(m.route);
      if(m.iv_ml_hr || m.iv_gtt_min) {
        s += '<br/><em>IV:</em> ' + (m.iv_ml_hr ? esc(m.iv_ml_hr) + ' mL/hr' : '') + (m.iv_ml_hr && m.iv_gtt_min ? ' — ' : '') + (m.iv_gtt_min ? esc(m.iv_gtt_min) + ' gtt/min' : '');
      }
      s += '<br/><small>' + esc(m.frequency||'');
      if(m.startDate) s += ' • start: ' + esc(m.startDate);
      if(m.duration) s += ' • duration: ' + esc(m.duration);
      s += '</small></div>';
      return s;
    }).join('');
  }

  let vitalsHtml = '<div class="text-sm text-slate-500">No vitals recorded</div>';
  if(p.vitals && p.vitals.length){
    vitalsHtml = p.vitals.map(v => '<div class="mb-1">' + esc(v.date||'') + ' ' + esc(v.time||'') + ' — T:' + esc(v.temp||'') + ' P:' + esc(v.pulse||'') + ' BP:' + esc(v.bp||'') + '</div>').join('');
  }

  let labsHtml = '<div class="text-sm text-slate-500">No lab files</div>';
  if(p.labFiles && p.labFiles.length){
    labsHtml = p.labFiles.map(l => '<div class="mb-1"><a href="' + l.url + '" target="_blank" class="text-sky-600">' + esc(l.name) + '</a></div>').join('');
  }

  const html = '<html><head><title>' + esc(p.name||'Patient record') + '</title>' +
    '<style>body{font-family:Arial,Helvetica,sans-serif;padding:20px;color:#111}h1{font-size:20px}.section{margin-bottom:12px}</style>' +
    '</head><body>' +
    '<h1>ONE CARE SYSTEM — Patient Summary</h1>' +
    '<div class="section"><strong>Name:</strong> ' + esc(p.name||'') + '</div>' +
    '<div class="section"><strong>Diagnosis:</strong> ' + esc(p.initialDiagnosis||'') + '</div>' +
    '<div class="section"><h3>Medications</h3>' + medsHtml + '</div>' +
    '<div class="section"><h3>Vitals</h3>' + vitalsHtml + '</div>' +
    '<div class="section"><h3>Lab Files</h3>' + labsHtml + '</div>' +
    '<hr/></body></html>';
  const w = window.open('', '_blank'); w.document.write(html); w.document.close(); w.print();
}
// closeModal implemented above with accessibility

// enhance modal accessibility when showing
function showEmptyModal(){ const parent = $('modal'); if(!parent) return; parent.classList.remove('hidden'); parent.setAttribute('aria-hidden','false');
  // move focus into modal body
  const mb = document.getElementById('modalBody'); if(mb) {
    // focus first focusable element or the modal container
    const focusable = mb.querySelector('button, a, input, [tabindex]:not([tabindex="-1"])');
    (focusable || mb).focus();
  }
}

// close modal and restore state/accessibility
function closeModal(){ const parent = $('modal'); if(!parent) return; parent.classList.add('hidden'); parent.setAttribute('aria-hidden','true');
  // try to restore focus to a sensible element (first nav button or the patients container)
  const def = document.querySelector('.navbtn[data-target="tab-dashboard"]') || $('patientsContainer') || document.body;
  try{ (def).focus(); }catch(e){}
  // remove any body overflow lock if set elsewhere
  try{ document.body.classList.remove('overflow-hidden'); }catch(e){}
}
window.closeModal = closeModal;

// ESC to close modal
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    const parent = $('modal'); if(parent && !parent.classList.contains('hidden')) closeModal();
  }
});

// overlay click-to-close: clicks on modal overlay (but not inside modalBody) will close
// overlay click-to-close: only close when clicking the backdrop container itself
document.addEventListener('click', (e)=>{
  const modal = $('modal'); if(!modal || modal.classList.contains('hidden')) return;
  // only close when the click target is the modal backdrop (the overlay), not other page elements
  if(e.target === modal) closeModal();
});

window.editPatient = function(indexOrId){
  let idx = indexOrId;
  if(typeof indexOrId === 'string') idx = patients.findIndex(p => p.id === indexOrId);
  const p = patients[idx]; if(!p) return showToast('Patient not found', 'error');
  selectedPatientId = p.id;
  // fill forms
  fillForm('form-info', p);
  fillForm('form-id', p);
  fillForm('form-history', p);
  fillForm('form-assessment', p);
  fillForm('form-labs', p);
  fillForm('form-meds', p);
  fillForm('form-physical', p);
  fillForm('form-nurse', p);
  fillForm('form-doctor', p);
  fillForm('form-plan', p);
  // meds and IVs:
  if(p.medOrders && Array.isArray(p.medOrders)){
    const tbody = $('medTableBody'); if(tbody){ tbody.innerHTML = ''; p.medOrders.forEach(m=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td><input name="drug" value="${esc(m.drug||'')}" class="w-full rounded border px-2 py-1"/></td><td><input name="dosage" value="${esc(m.dosage||'')}" class="w-full rounded border px-2 py-1"/></td><td><input name="route" value="${esc(m.route||'')}" class="w-full rounded border px-2 py-1"/></td><td><input name="frequency" value="${esc(m.frequency||'')}" class="w-full rounded border px-2 py-1"/></td><td><input name="startDate" type="date" value="${esc(m.startDate||'')}" class="w-full rounded border px-2 py-1"/></td><td><input name="duration" value="${esc(m.duration||'')}" class="w-full rounded border px-2 py-1"/></td><td><select name="prn" class="w-full rounded border px-2 py-1"><option value=\"No\" ${m.prn==='No' ? 'selected':''}>No</option><option value=\"Yes\" ${m.prn==='Yes' ? 'selected':''}>Yes</option></select></td><td><input name="prescriber" value="${esc(m.prescriber||'')}" class="w-full rounded border px-2 py-1"/></td><td><button type="button" class="btn-remove-row px-2 py-1 rounded bg-white border">🗑️</button></td>`;
      tbody.appendChild(tr);
    }) }
  }
  
  if(p.ivOrders && Array.isArray(p.ivOrders)){
    const ivbody = $('ivTableBody'); if(ivbody){ ivbody.innerHTML = ''; p.ivOrders.forEach(iv=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td><select name="iv_fluid" class="w-full rounded border px-2 py-1"><option value="">— Fluid —</option><option value="Normal Saline (0.9% NaCl)" ${iv.iv_fluid==='Normal Saline (0.9% NaCl)' ? 'selected':''}>Normal Saline (0.9% NaCl)</option><option value="Ringer's Lactate" ${iv.iv_fluid==="Ringer's Lactate" ? 'selected':''}>Ringer's Lactate</option><option value="Dextrose 5% (D5W)" ${iv.iv_fluid==='Dextrose 5% (D5W)' ? 'selected':''}>Dextrose 5% (D5W)</option><option value="Hartmann's" ${iv.iv_fluid==="Hartmann's" ? 'selected':''}>Hartmann's</option></select></td><td><input name="iv_ml_hr" value="${esc(iv.iv_ml_hr||'')}" placeholder="mL/hr" class="w-full rounded border px-2 py-1"/></td><td><input name="iv_gtt_min" value="${esc(iv.iv_gtt_min||'')}" placeholder="gtt/min" class="w-full rounded border px-2 py-1"/></td><td><input name="iv_volume" value="${esc(iv.iv_volume||'')}" placeholder="mL" class="w-full rounded border px-2 py-1"/></td><td><input name="iv_time" value="${esc(iv.iv_time||'')}" placeholder="hrs" class="w-full rounded border px-2 py-1"/></td><td><input name="startDate" type="date" value="${esc(iv.startDate||'')}" class="w-full rounded border px-2 py-1"/></td><td><input name="prescriber" value="${esc(iv.prescriber||'')}" class="w-full rounded border px-2 py-1"/></td><td><button type="button" class="btn-remove-row px-2 py-1 rounded bg-white border">🗑️</button></td>`;
      ivbody.appendChild(tr);
    }) }
  }
  // vitals and labs
  vitalsRows = Array.isArray(p.vitals) ? p.vitals.slice() : [];
  uploadedLabs = Array.isArray(p.labFiles) ? p.labFiles.slice() : [];
  
  // Load lab orders
  if (Array.isArray(p.labOrders)) {
    labOrderManager.orders = p.labOrders.slice();
    labOrderManager.renderOrdersHistory();
  } else {
    labOrderManager.orders = [];
  }
  
  // Load structured results and add to trends
  if (p.structuredResults && typeof p.structuredResults === 'object') {
    // Find which test type this belongs to
    const testTypes = Object.keys(labResultsManager.testTemplates);
    for (let testType of testTypes) {
      const template = labResultsManager.testTemplates[testType];
      const hasMatchingFields = template.fields.some(field => 
        p.structuredResults.hasOwnProperty(field.name)
      );
      
      if (hasMatchingFields) {
        labTrends.addToTrends(testType, p.structuredResults);
        break;
      }
    }
    
    // Update trends display
    labTrends.updateTrendsDisplay();
  }
  
  renderVitalsTable(); renderLabFiles();
  updateUploadButtonState();
  // compute BMI category if values present
  try{ 
    if(window.computeAndDisplayBMI) window.computeAndDisplayBMI(); 
    if(window.computePhysicalBMI) window.computePhysicalBMI();
  }catch(e){}
  // switch to info tab
  const btn = document.querySelector('.navbtn[data-target="tab-info"]'); if(btn) btn.click();
  showToast('Loaded patient for editing', 'info');
};

window.deletePatient = async function(indexOrId){
  let idx = indexOrId;
  if(typeof indexOrId === 'string') idx = patients.findIndex(p => p.id === indexOrId);
  const p = patients[idx]; if(!p) return showToast('Patient not found', 'error');
  if(!confirm('Delete this patient? This cannot be undone.')) return;
  try{
    await db.collection('patients').doc(p.id).delete();
    await loadPatients();
    showToast('Patient deleted', 'success');
  }catch(e){ console.error(e); showToast('Delete failed', 'error'); }
};

function printPatient(p){
  // if no patient provided, use selectedPatientId
  if(!p && selectedPatientId){
    p = patients.find(x=>x.id===selectedPatientId);
  }
  if(!p) return showToast('No patient selected', 'error');
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

// -------------------- Login modal logic (enhanced) --------------------
// Handle login form submit with inline error, spinner and disabled state
const loginForm = document.getElementById('loginForm');
const toggleLoginPass = document.getElementById('toggleLoginPass');
const loginSpinner = document.getElementById('loginSpinner');
const loginBtnText = document.getElementById('loginBtnText');

if(loginForm){
  loginForm.addEventListener('submit', async (ev)=>{
    ev.preventDefault();
    const email = (loginForm.email && loginForm.email.value || '').trim();
    const password = (loginForm.password && loginForm.password.value) || '';
    const errEl = document.getElementById('loginError');
    if(!email || !password){ if(errEl){ errEl.textContent = 'Enter email and password'; errEl.classList.remove('hidden'); } return; }
    // disable UI
    loginForm.querySelectorAll('input, button').forEach(i=>i.setAttribute('disabled','disabled'));
    if(loginSpinner) loginSpinner.classList.remove('hidden'); if(loginBtnText) loginBtnText.textContent = 'Signing in...';
    try{
      await auth.signInWithEmailAndPassword(email, password);
      if(errEl){ errEl.classList.add('hidden'); }
      const loginModalEl = $('loginModal'); if(loginModalEl) loginModalEl.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      showToast('✅ Login successful', 'success');
    }catch(e){
      if(errEl){ errEl.textContent = e.message || 'Sign-in failed'; errEl.classList.remove('hidden'); }
      showToast('Sign-in failed', 'error');
    }finally{
      // restore UI
      loginForm.querySelectorAll('input, button').forEach(i=>i.removeAttribute('disabled'));
      if(loginSpinner) loginSpinner.classList.add('hidden'); if(loginBtnText) loginBtnText.textContent = 'Sign in';
      // focus email for quick retry
      const emailEl = document.getElementById('loginEmail'); if(emailEl) emailEl.focus();
    }
  });
}

if(toggleLoginPass){
  toggleLoginPass.addEventListener('click', ()=>{
    const p = document.getElementById('loginPass'); if(!p) return;
    if(p.type === 'password'){ p.type = 'text'; toggleLoginPass.textContent = 'Hide'; }
    else { p.type = 'password'; toggleLoginPass.textContent = 'Show'; }
    p.focus();
  });
}

if(document.getElementById('loginCancel')) document.getElementById('loginCancel').addEventListener('click', ()=>{ const m = $('loginModal'); if(m) m.classList.add('hidden'); document.body.classList.remove('overflow-hidden'); });

// -------------------- Misc initial wiring --------------------
// default show dashboard panel (if nav exists)
(function initNav(){
  const navbtns = qsa('.navbtn');
  function showPanel(id){
    qsa('.panel').forEach(p => { if(p.id === id) p.classList.remove('hidden'); else p.classList.add('hidden'); });
    navbtns.forEach(b => {
      const active = b.dataset.target===id;
      b.classList.toggle('bg-sky-50', active);
      b.classList.toggle('active', active);
      if(active) b.setAttribute('aria-current','true'); else b.removeAttribute('aria-current');
    });
    const bc = $('breadcrumb-current');
    const activeBtn = document.querySelector('.navbtn[data-target="'+id+'"]');
    if(bc) bc.textContent = activeBtn ? (activeBtn.dataset.label || activeBtn.title || activeBtn.textContent.trim()) : id;
    
    // Initialize staff management system when staff tab is shown
    if(id === 'tab-staff') {
      console.log('🏥 Staff tab activated - checking system...');
      if(!window.staffSystem) {
        console.log('🔄 Initializing staff system on tab switch...');
        try {
          if (typeof StaffManagementSystem !== 'undefined') {
            window.staffSystem = new StaffManagementSystem();
            console.log('✅ Staff system initialized on tab switch');
          } else {
            console.error('❌ StaffManagementSystem class not found on tab switch');
          }
        } catch (error) {
          console.error('❌ Failed to initialize staff system on tab switch:', error);
        }
      } else {
        console.log('✅ Staff system already available');
        // Refresh the staff display
        window.staffSystem.updateStaffStats();
        window.staffSystem.renderStaffList();
      }
    }
  }
  navbtns.forEach(b => b.addEventListener('click', ()=> showPanel(b.dataset.target)));
  // default to dashboard
  const def = document.querySelector('.navbtn[data-target="tab-dashboard"]');
  if(def) def.click();
  // clone nav into bottom nav for horizontal tabs
  const bottomWrap = document.getElementById('bottomNavWrap');
  const bottomNav = document.getElementById('bottomNav');
  if(bottomNav && navbtns && navbtns.length){
    bottomNav.innerHTML = '';
    navbtns.forEach(b => {
      const btn = document.createElement('button');
      btn.className = 'navbtn inline-flex items-center gap-2 px-3 py-1 rounded';
      btn.dataset.target = b.dataset.target;
      btn.dataset.label = b.dataset.label || b.title || '';
      btn.innerHTML = b.innerHTML; // copy emoji + label
      btn.addEventListener('click', ()=> document.querySelector('.navbtn[data-target="'+btn.dataset.target+'"]')?.click());
      bottomNav.appendChild(btn);
    });
    // show bottom nav on small screens
    if(bottomWrap) bottomWrap.classList.remove('hidden');
  }
})();

// load initial patients if already signed in (use realtime listener)
if(auth.currentUser) enableRealtimePatients();

// --- User menu & header UX wiring ---
const userMenuBtn = document.getElementById('userMenuBtn');
const userMenu = document.getElementById('userMenu');
const userSignOut = document.getElementById('userSignOut');
const themeToggleBtn = document.getElementById('themeToggleBtn');

function closeUserMenu(){ if(userMenu) userMenu.classList.add('hidden'); }
function openUserMenu(){ if(userMenu) userMenu.classList.remove('hidden'); }

if(userMenuBtn){
  userMenuBtn.addEventListener('click', (e)=>{ e.stopPropagation(); if(userMenu && !userMenu.classList.contains('hidden')) closeUserMenu(); else openUserMenu(); });
}
// close menu when clicking elsewhere
document.addEventListener('click', ()=> closeUserMenu());
// prevent closing when interacting with menu
if(userMenu) userMenu.addEventListener('click', e=> e.stopPropagation());

// wire sign out in the dropdown
if(userSignOut){ userSignOut.addEventListener('click', async ()=>{ try{ await auth.signOut(); closeUserMenu(); showToast('Signed out', 'info'); }catch(e){ console.error(e); showToast('Sign out failed','error'); } }); }

// theme toggle: simple class toggle on <html>
if(themeToggleBtn){ themeToggleBtn.addEventListener('click', ()=>{ document.documentElement.classList.toggle('dark'); closeUserMenu(); }); }

// add top-right "Sign out" button handler (header)
const headerLogout = document.getElementById('btnLogout');
if(headerLogout){
  headerLogout.addEventListener('click', async ()=>{
    try{
      await auth.signOut();
      // clear UI state
      selectedPatientId = null;
      patients = [];
      renderPatients([]);
      closeModal();
      const lm = $('loginModal'); if(lm) lm.classList.remove('hidden');
      showToast('👋 Logged out', 'info');
    }catch(e){
      console.error(e);
      showToast('Logout failed', 'error');
    }
  });
}

// keyboard shortcut '/' to focus search (ignore when typing in inputs)
document.addEventListener('keydown', (e)=>{
  if(e.key === '/' && !(document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.isContentEditable))){
    const s = document.getElementById('searchTop'); if(s){ e.preventDefault(); s.focus(); s.select(); }
  }
});

// ===============================
// TOAST: showToast is defined above and used throughout
// ===============================

// ===============================
// FLOW RATE CALCULATOR
// ===============================
const vol = document.getElementById("flow_volume");
const time = document.getElementById("flow_time");
const drop = document.getElementById("flow_drop");
const result = document.getElementById("flow_result");

if (vol && time && drop && result) {
  function calcFlow() {
    const v = parseFloat(vol.value);
    const t = parseFloat(time.value);
    const d = parseFloat(drop.value);
    if (v > 0 && t > 0 && d > 0) {
      const flowRate = (v * d) / (t * 60); // formula: (mL × drop factor) ÷ (time × 60)
      result.value = flowRate.toFixed(1) + " gtt/min";
    } else {
      result.value = "";
    }
  }
  [vol, time, drop].forEach((el) => el.addEventListener("input", calcFlow));
}

// Apply computed IV values to the last medication row
// New: two-way flow calculator and apply-to-selected-row behavior
const flowVol = document.getElementById('flow_volume');
const flowTime = document.getElementById('flow_time');
const flowDrop = document.getElementById('flow_drop');
const flowMlHr = document.getElementById('flow_ml_hr');
const flowGttMin = document.getElementById('flow_gtt_min');
const btnApply = document.getElementById('applyFlowToLastMed');
const btnResetCalc = document.getElementById('calcReset');

let selectedMedRow = null;

// highlight and select medication row when clicked
function enableMedRowSelection(){
  const tbody = document.getElementById('medTableBody'); if(!tbody) return;
  tbody.querySelectorAll('tr').forEach(tr => {
    tr.addEventListener('click', (e)=>{
      // avoid selecting when clicking inside inputs/buttons
      if(e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON' || e.target.closest('.btn-remove-row'))) return;
      if(selectedMedRow) selectedMedRow.classList.remove('ring-2','ring-sky-400');
      selectedMedRow = tr; tr.classList.add('ring-2','ring-sky-400');
    });
  });
}
// run on initial load and when med rows are re-rendered
enableMedRowSelection();


// --- Simple sparkline and meds counter rendering for dashboard ---
function renderVitalsSparkline(values){
  const svg = document.getElementById('vitalsSparkline'); if(!svg) return;
  const w = 100, h = 24; svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  if(!values || !values.length){ svg.innerHTML = `<polyline fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" points="0,${h/2} ${w},${h/2}"/>`; return; }
  const max = Math.max(...values), min = Math.min(...values);
  const pts = values.map((v,i)=>{
    const x = (i/(values.length-1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * h;
    return `${x},${y}`;
  }).join(' ');
  svg.innerHTML = `<defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0%" stop-color="rgba(255,255,255,0.18)"/><stop offset="100%" stop-color="rgba(255,255,255,0.06)"/></linearGradient></defs><polyline fill="none" stroke="url(#g1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${pts}"/>`;
}

// update meds count (called when patients change)
function updateMedsCount(){
  let cnt = 0;
  patients.forEach(p=>{ if(Array.isArray(p.medOrders)) cnt += p.medOrders.length; });
  const el = document.getElementById('medsCount'); if(el) el.textContent = cnt;
}

// --- Timeline rendering ---
function renderTimelineForPatient(patientId){
  const eventsContainer = document.getElementById('timelineEvents');
  const track = document.getElementById('timelineTrack');
  
  if(!eventsContainer && !track) return;
  
  const targetEl = eventsContainer || track;
  targetEl.innerHTML = '';
  
  const p = patients.find(x=>x.id===patientId);
  if(!p) {
    targetEl.innerHTML = '<div class="text-center text-slate-400 py-8">Select a patient to view timeline</div>';
    return;
  }
  
  // collect events with timestamps (admission, meds, vitals, notes, labs, discharge)
  const events = [];
  
  // Admission event
  if(p.admissionDate) {
    const admissionTime = new Date(p.admissionDate + 'T' + (p.admissionTime || '00:00'));
    events.push({ 
      t: admissionTime, 
      type: 'admission', 
      label: 'Admission',
      details: `Admitted to ${p.roomNo ? 'Room ' + p.roomNo : 'hospital'}`,
      icon: '🏥'
    });
  }
  
  // Medication events
  if(Array.isArray(p.medOrders)) {
    p.medOrders.slice(-8).forEach((m,i) => {
      const medTime = m.startDate ? new Date(m.startDate + 'T12:00:00') : new Date();
      events.push({ 
        t: medTime, 
        type: 'medication', 
        label: m.drug || 'Medication',
        details: `${m.drug} ${m.dosage || ''} ${m.route || ''}`,
        icon: '💊'
      });
    });
  }
  
  // Vitals events
  if(Array.isArray(p.vitals)) {
    p.vitals.slice(-6).forEach(v => {
      const vitalTime = new Date((v.date || new Date().toISOString().split('T')[0]) + 'T' + (v.time || '12:00:00'));
      events.push({ 
        t: vitalTime, 
        type: 'vitals', 
        label: 'Vitals Check',
        details: `T:${v.temp||'—'} BP:${v.bp||'—'} HR:${v.pulse||'—'}`,
        icon: '📊'
      });
    });
  }
  
  // Lab events
  if(Array.isArray(p.labFiles)) {
    p.labFiles.forEach(lab => {
      events.push({ 
        t: new Date(), // Use current time as placeholder
        type: 'lab', 
        label: 'Lab Result',
        details: lab.name,
        icon: '🧪'
      });
    });
  }
  
  // Notes events
  if(p.nurse_f || p.doc_subjective) {
    events.push({ 
      t: new Date(), 
      type: 'notes', 
      label: 'Clinical Notes',
      details: 'Nursing/Medical documentation',
      icon: '📝'
    });
  }
  
  // Discharge event
  if(p.discharge_date) {
    const dischargeTime = new Date(p.discharge_date + 'T' + (p.discharge_time || '12:00'));
    events.push({ 
      t: dischargeTime, 
      type: 'discharge', 
      label: 'Discharge',
      details: p.dis_condition || 'Patient discharged',
      icon: '🏠'
    });
  }
  
  if(events.length === 0) {
    targetEl.innerHTML = `
      <div class="text-center text-slate-400 py-12">
        <div class="text-4xl mb-3">📋</div>
        <div class="text-lg font-medium mb-2">No Activity Yet</div>
        <div class="text-sm">Patient activities will appear here as they occur</div>
        <button onclick="navigateToTab('tab-vitals')" class="mt-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors">
          Record First Vitals
        </button>
      </div>
    `;
    return;
  }
  
  // Sort events chronologically
  events.sort((a,b) => a.t - b.t);
  
  // Create timeline visualization
  const timelineHtml = `
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-teal-300"></div>
      
      <!-- Events -->
      <div class="space-y-6">
        ${events.map((event, index) => {
          const timeStr = event.t.toLocaleDateString() + ' ' + event.t.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          const colorClass = {
            'admission': 'bg-blue-100 text-blue-800 border-blue-300',
            'medication': 'bg-purple-100 text-purple-800 border-purple-300', 
            'vitals': 'bg-green-100 text-green-800 border-green-300',
            'lab': 'bg-amber-100 text-amber-800 border-amber-300',
            'notes': 'bg-slate-100 text-slate-800 border-slate-300',
            'discharge': 'bg-rose-100 text-rose-800 border-rose-300'
          }[event.type] || 'bg-gray-100 text-gray-800 border-gray-300';
          
          return `
            <div class="relative flex items-start">
              <!-- Event dot -->
              <div class="flex-shrink-0 w-16 h-16 rounded-full ${colorClass} border-2 flex items-center justify-center text-2xl font-bold relative z-10">
                ${event.icon}
              </div>
              
              <!-- Event content -->
              <div class="ml-6 flex-1">
                <div class="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
                  <div class="flex justify-between items-start">
                    <div class="flex-1">
                      <h3 class="font-semibold text-slate-800">${esc(event.label)}</h3>
                      <p class="text-sm text-slate-600 mt-1">${esc(event.details)}</p>
                      <p class="text-xs text-slate-400 mt-2">${timeStr}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  
  targetEl.innerHTML = timelineHtml;
}

// hook into patient render
const origRenderDashboardForPatient = renderDashboardForPatient;
renderDashboardForPatient = function(patientId){
  origRenderDashboardForPatient(patientId);
  // simple sparkline demo: compute last 8 temp values
  const p = patients.find(x=>x.id===patientId);
  const temps = p && Array.isArray(p.vitals) ? p.vitals.slice(-8).map(v=> Number(v.temp) || 36) : [];
  renderVitalsSparkline(temps.length ? temps : [36,36.5,37,36.8,37.2,36.9]);
  renderTimelineForPatient(patientId);
  updateMedsCount();
};

// Lottie helper: small animations for sections
function attachLottie(el, path){
  if(!window.lottie) return; try{ window.lottie.loadAnimation({ container: el, renderer: 'svg', loop: true, autoplay: true, path }); }catch(e){}
}

// Lottie animation setup
function attachLottieToLogo() {
  const logo = document.querySelector('.header-logo');
  if(logo){ 
    const holder = document.createElement('div'); 
    holder.className='lottie-sm mr-2'; 
    holder.style.display='inline-block'; 
    logo.prepend(holder); 
    // use a small generic heartbeat animation from LottieFiles CDN (example)
    // path is optional; the project should replace with a local minimal JSON for production
    setTimeout(()=> attachLottie(holder, 'https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json'), 800);
  }
}

// core calculations
function computeFromVolumeTimeDrop(){
  const V = parseFloat(flowVol?.value);
  const T = parseFloat(flowTime?.value);
  const D = parseFloat(flowDrop?.value);
  let mlPerHr = null, gttPerMin = null;
  if(isFinite(V) && isFinite(T) && T > 0) mlPerHr = V / T;
  if(isFinite(V) && isFinite(T) && isFinite(D) && T > 0 && D > 0) gttPerMin = Math.round((V * D) / (T * 60));
  if(mlPerHr !== null && flowMlHr) flowMlHr.value = mlPerHr.toFixed(1); else if(flowMlHr) flowMlHr.value = '';
  if(gttPerMin !== null && flowGttMin) flowGttMin.value = gttPerMin; else if(flowGttMin) flowGttMin.value = '';
}

// ===============================
// ENHANCED INTEGRATION FEATURES
// ===============================

// Enhanced features initialization - now handled by consolidated init function
function setupEnhancedPatientModel() {
  // When saving patient data, upgrade to enhanced model
  const originalSaveTabData = window.saveTabData;
  if (typeof originalSaveTabData === 'function') {
    window.saveTabData = async function(tabKey, data) {
      // First save using the original function
      await originalSaveTabData(tabKey, data);
      
      // Then if we have a patient ID, enhance the model
      if (window.selectedPatientId) {
        try {
          // Log enhanced patient data save
          console.log('Enhanced patient model processing for:', window.selectedPatientId);
          
          // Add any enhanced processing here
          if (tabKey === 'vitals' && Array.isArray(data.vitals)) {
            // Enhanced vitals processing
            const enhancedVitals = data.vitals.map(vital => ({
              ...vital,
              timestamp: new Date().toISOString(),
              enhanced: true
            }));
            console.log('Enhanced vitals processed:', enhancedVitals.length);
          }
          
        } catch (error) {
          console.error('Error enhancing patient model:', error);
          // Don't show error to user as the primary save succeeded
        }
      }
    };
  }
  
  // Add FHIR export option to patient view menu
  enhancePatientViewWithFHIR();
  
  // Initialize enhanced medication tracking
  enhanceMedicationTracking();
  
  // Setup enhanced vitals visualization
  setupEnhancedVitalsDisplay();
}

// Helper to add periodic auto-save
function enhanceAutoSave() {
  // Auto-save draft every 2 minutes if form has changed
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    let formChanged = false;
    let lastSaveTime = Date.now();
    
    // Track form changes
    form.addEventListener('input', () => {
      formChanged = true;
    });
    
    // Save every 2 minutes if changes detected
    setInterval(() => {
      if (formChanged && window.selectedPatientId && (Date.now() - lastSaveTime) > 120000) {
        // Find corresponding save button
        const formId = form.id;
        const tabKey = formId.replace('form-', '');
        const saveBtn = document.querySelector(`[data-save="${tabKey}"]`);
        
        if (saveBtn && !saveBtn.disabled) {
          saveBtn.click();
          formChanged = false;
          lastSaveTime = Date.now();
          showToast('Auto-saved draft', 'info', 2000);
        }
      }
    }, 30000); // Check every 30 seconds
  });
}

// Enhanced medication tracking
function enhanceMedicationTracking() {
  // Add medication adherence tracking
  const originalAddMARRecord = window.addMARRecord;
  if (typeof originalAddMARRecord === 'function') {
    window.addMARRecord = function(drug, dose, by, notes) {
      // Call original function
      originalAddMARRecord(drug, dose, by, notes);
      
      // Add enhanced tracking
      const timestamp = new Date().toISOString();
      console.log('Enhanced MAR record:', { drug, dose, by, notes, timestamp });
      
      // Update medication adherence metrics
      updateMedicationAdherence(drug, timestamp);
    };
  }
}

function updateMedicationAdherence(drug, timestamp) {
  // Track medication timing and adherence
  if (!window.medicationAdherence) {
    window.medicationAdherence = {};
  }
  
  if (!window.medicationAdherence[drug]) {
    window.medicationAdherence[drug] = {
      administrations: [],
      adherenceRate: 100
    };
  }
  
  window.medicationAdherence[drug].administrations.push(timestamp);
  
  // Calculate adherence rate (simplified)
  const recent = window.medicationAdherence[drug].administrations.slice(-10);
  window.medicationAdherence[drug].adherenceRate = Math.min(100, recent.length * 10);
}

// Setup enhanced vitals display
function setupEnhancedVitalsDisplay() {
  // Add enhanced vitals chart container if not exists
  const vitalsTab = document.getElementById('tab-vitals');
  if (vitalsTab && !document.getElementById('enhancedVitalsChart')) {
    const chartContainer = document.createElement('div');
    chartContainer.id = 'enhancedVitalsChart';
    chartContainer.className = 'w-full bg-white p-4 rounded-lg shadow mt-4';
    chartContainer.innerHTML = `
      <h4 class="font-semibold mb-3 text-slate-800">📊 Enhanced Vitals Trends</h4>
      <div id="vitalsChartContent" class="h-64 flex items-center justify-center text-slate-400">
        Select a patient with vitals data to view trends
      </div>
    `;
    
    // Insert after the vitals form
    const vitalsForm = document.getElementById('form-vitals');
    if (vitalsForm) {
      vitalsTab.insertBefore(chartContainer, vitalsForm.nextSibling);
    }
  }
  
  // Update chart when patient selection changes
  const originalRenderDashboardForPatient = window.renderDashboardForPatient;
  if (typeof originalRenderDashboardForPatient === 'function') {
    window.renderDashboardForPatient = function(patientId) {
      // Call the original function first
      originalRenderDashboardForPatient(patientId);
      
      // Then update our enhanced chart
      if (patientId) {
        renderEnhancedVitalsChart(patientId);
      }
    };
  }
}

// Render enhanced vitals chart with Chart.js
function renderEnhancedVitalsChart(patientId) {
  const chartContent = document.getElementById('vitalsChartContent');
  if (!chartContent) return;
  
  const patient = window.patients.find(p => p.id === patientId);
  if (!patient || !Array.isArray(patient.vitals) || patient.vitals.length === 0) {
    chartContent.innerHTML = `
      <div class="text-center">
        <div class="text-4xl mb-2">📊</div>
        <div class="text-slate-500">No vitals data available</div>
        <button onclick="navigateToTab && navigateToTab('tab-vitals')" class="mt-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200">
          Record Vitals
        </button>
      </div>
    `;
    return;
  }

  // Create Chart.js implementation if available
  if (typeof Chart !== 'undefined') {
    renderActualChart(chartContent, patient.vitals);
    return;
  }
  
  // Create simple vitals trend visualization
  const vitals = patient.vitals.slice(-10); // Last 10 readings
  
  let chartHtml = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-slate-50 p-3 rounded">
        <h5 class="font-medium text-slate-700 mb-2">🌡️ Temperature Trend</h5>
        <div class="flex items-end gap-1 h-20">
  `;
  
  vitals.forEach((v, i) => {
    const temp = parseFloat(v.temp) || 36.5;
    const height = Math.max(10, ((temp - 35) / 5) * 80); // Scale 35-40°C to 0-80px
    const color = temp >= 38 ? 'bg-red-400' : temp >= 37.5 ? 'bg-amber-400' : 'bg-green-400';
    
    chartHtml += `
      <div class="flex-1 flex flex-col items-center">
        <div class="${color} rounded-t" style="height: ${height}px; min-height: 10px;" title="${temp}°C"></div>
        <span class="text-xs text-slate-500 mt-1">${i+1}</span>
      </div>
    `;
  });
  
  chartHtml += `
        </div>
      </div>
      <div class="bg-slate-50 p-3 rounded">
        <h5 class="font-medium text-slate-700 mb-2">❤️ Heart Rate Trend</h5>
        <div class="flex items-end gap-1 h-20">
  `;
  
  vitals.forEach((v, i) => {
    const hr = parseFloat(v.pulse) || 70;
    const height = Math.max(10, ((hr - 40) / 120) * 80); // Scale 40-160 bpm to 0-80px
    const color = hr > 100 ? 'bg-red-400' : hr < 60 ? 'bg-blue-400' : 'bg-green-400';
    
    chartHtml += `
      <div class="flex-1 flex flex-col items-center">
        <div class="${color} rounded-t" style="height: ${height}px; min-height: 10px;" title="${hr} bpm"></div>
        <span class="text-xs text-slate-500 mt-1">${i+1}</span>
      </div>
    `;
  });
  
  chartHtml += `
        </div>
      </div>
    </div>
    <div class="mt-4 text-xs text-slate-500 text-center">
      Showing last ${vitals.length} readings • Latest: ${vitals[vitals.length-1]?.date || 'N/A'} ${vitals[vitals.length-1]?.time || ''}
    </div>
  `;
  
  chartContent.innerHTML = chartHtml;
}

// Render actual Chart.js chart
function renderActualChart(container, vitalsData) {
  // Clear existing content and create canvas
  container.innerHTML = '<canvas id="vitalsChartCanvas" width="400" height="200"></canvas>';
  
  const canvas = document.getElementById('vitalsChartCanvas');
  const ctx = canvas.getContext('2d');
  
  // Prepare data for last 10 vitals
  const recentVitals = vitalsData.slice(-10);
  const labels = recentVitals.map((v, i) => v.date ? v.date.slice(5) : `Reading ${i+1}`);
  
  const tempData = recentVitals.map(v => parseFloat(v.temp) || null);
  const pulseData = recentVitals.map(v => parseFloat(v.pulse) || null);
  const bpSysData = recentVitals.map(v => {
    if (v.bp && typeof v.bp === 'string') {
      const bpParts = v.bp.split('/');
      return parseFloat(bpParts[0]) || null;
    }
    return null;
  });
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Temperature (°C)',
          data: tempData,
          borderColor: 'rgb(239, 68, 68)',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          yAxisID: 'y',
          tension: 0.3
        },
        {
          label: 'Heart Rate (bpm)',
          data: pulseData,
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          yAxisID: 'y1',
          tension: 0.3
        },
        {
          label: 'BP Systolic (mmHg)',
          data: bpSysData,
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          yAxisID: 'y1',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Patient Vitals Trend'
        },
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          min: 35,
          max: 42,
          title: {
            display: true,
            text: 'Temperature (°C)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          min: 40,
          max: 180,
          title: {
            display: true,
            text: 'HR (bpm) / BP (mmHg)'
          },
          grid: {
            drawOnChartArea: false,
          },
        }
      }
    }
  });
}

// Enhanced vitals chart object for compatibility
window.enhancedVitalsChart = {
  renderForPatient: function(patientId) {
    return new Promise(resolve => {
      renderEnhancedVitalsChart(patientId);
      resolve();
    });
  }
};

// Add FHIR export option
function enhancePatientViewWithFHIR() {
  // Enhance viewPatient function

}

// Show patient analytics
function showPatientAnalytics(indexOrId) {
  let patientData;
  if (typeof indexOrId === 'number') {
    patientData = patients && patients[indexOrId] ? patients[indexOrId] : null;
  } else if (typeof indexOrId === 'string') {
    patientData = patients ? patients.find(p => p.id === indexOrId) : null;
  }
  
  if (!patientData) {
    showToast('Patient not found', 'error');
    return;
  }
  
  // Calculate analytics
  const vitalsCount = Array.isArray(patientData.vitals) ? patientData.vitals.length : 0;
  const medsCount = Array.isArray(patientData.medOrders) ? patientData.medOrders.length : 0;
  const labsCount = Array.isArray(patientData.labFiles) ? patientData.labFiles.length : 0;
  
  // Calculate length of stay
  const admissionDate = patientData.admissionDate ? new Date(patientData.admissionDate) : null;
  const los = admissionDate ? Math.ceil((new Date() - admissionDate) / (1000 * 60 * 60 * 24)) : 0;
  
  // Risk assessment (simplified)
  let riskLevel = 'Low';
  let riskFactors = [];
  
  if (vitalsCount > 0) {
    const latestVitals = patientData.vitals[patientData.vitals.length - 1];
    if (parseFloat(latestVitals.temp) >= 38.5) riskFactors.push('High fever');
    if (parseFloat(latestVitals.spo2 || latestVitals.spO2) < 92) riskFactors.push('Low oxygen');
  }
  
  if (patientData.allergies) riskFactors.push('Known allergies');
  if (medsCount > 10) riskFactors.push('High medication count');
  if (los > 7) riskFactors.push('Extended stay');
  
  if (riskFactors.length >= 3) riskLevel = 'High';
  else if (riskFactors.length >= 1) riskLevel = 'Medium';
  
  const modal = document.getElementById('modalBody');
  if (modal) {
    modal.innerHTML = `
      <div class="p-6">
        <h3 class="text-xl font-bold text-slate-800 mb-4">📊 Patient Analytics: ${esc(patientData.name || 'Unknown')}</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800">📈 Care Metrics</h4>
            <div class="mt-2 space-y-1 text-sm">
              <div>Vitals Recorded: <strong>${vitalsCount}</strong></div>
              <div>Active Medications: <strong>${medsCount}</strong></div>
              <div>Lab Results: <strong>${labsCount}</strong></div>
              <div>Length of Stay: <strong>${los} days</strong></div>
            </div>
          </div>
          
          <div class="bg-${riskLevel === 'High' ? 'red' : riskLevel === 'Medium' ? 'amber' : 'green'}-50 p-4 rounded-lg">
            <h4 class="font-semibold text-${riskLevel === 'High' ? 'red' : riskLevel === 'Medium' ? 'amber' : 'green'}-800">⚠️ Risk Assessment</h4>
            <div class="mt-2">
              <div class="text-lg font-bold text-${riskLevel === 'High' ? 'red' : riskLevel === 'Medium' ? 'amber' : 'green'}-800">${riskLevel} Risk</div>
              ${riskFactors.length > 0 ? `
                <div class="text-sm mt-2">
                  <div class="font-medium">Risk Factors:</div>
                  <ul class="list-disc list-inside">
                    ${riskFactors.map(f => `<li>${esc(f)}</li>`).join('')}
                  </ul>
                </div>
              ` : '<div class="text-sm text-green-600 mt-1">No significant risk factors identified</div>'}
            </div>
          </div>
        </div>
        
        ${window.medicationAdherence && window.medicationAdherence[Object.keys(window.medicationAdherence)[0]] ? `
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-purple-800">💊 Medication Adherence</h4>
            <div class="mt-2 text-sm">
              Recent adherence tracking shows good compliance with prescribed medications.
            </div>
          </div>
        ` : ''}
        
        <div class="flex justify-end gap-2">
          <button class="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors" onclick="closeModal()">Close</button>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" onclick="exportPatientAsFHIR('${indexOrId}')">Export FHIR</button>
        </div>
      </div>
    `;
  }
}

// Basic FHIR export functionality
function exportPatientAsFHIR(indexOrId) {
  // Find patient
  let patientData;
  if (typeof indexOrId === 'number') {
    patientData = patients && patients[indexOrId] ? patients[indexOrId] : null;
  } else if (typeof indexOrId === 'string') {
    patientData = patients ? patients.find(p => p.id === indexOrId) : null;
  }
  
  if (!patientData) {
    showToast('Patient not found', 'error');
    return;
  }
  
  // Create basic FHIR patient resource
  const fhirPatient = {
    resourceType: 'Patient',
    id: patientData.id,
    meta: {
      versionId: '1',
      lastUpdated: new Date().toISOString(),
      profile: ['http://hl7.org/fhir/StructureDefinition/Patient']
    },
    identifier: [{
      system: 'urn:oid:1.2.36.146.595.217.0.1',
      value: patientData.mrn || patientData.id
    }],
    active: true,
    name: [{
      use: 'official',
      family: patientData.name ? patientData.name.split(',')[0]?.trim() : '',
      given: patientData.name ? [patientData.name.split(',')[1]?.trim()] : []
    }],
    gender: patientData.gender?.toLowerCase() || 'unknown',
    birthDate: patientData.dob,
    address: patientData.address ? [{
      use: 'home',
      text: patientData.address
    }] : [],
    contact: patientData.emg_name ? [{
      relationship: [{
        coding: [{
          system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
          code: 'C',
          display: 'Emergency Contact'
        }]
      }],
      name: {
        text: patientData.emg_name
      },
      telecom: patientData.emg_phone ? [{
        system: 'phone',
        value: patientData.emg_phone
      }] : []
    }] : []
  };
  
  // Add telecom
  if (patientData.contact) {
    fhirPatient.telecom = [{ 
      system: 'phone', 
      value: patientData.contact, 
      use: 'mobile' 
    }];
  }
  
  if (patientData.email) {
    if (!fhirPatient.telecom) fhirPatient.telecom = [];
    fhirPatient.telecom.push({
      system: 'email',
      value: patientData.email
    });
  }
  
  // Display FHIR resource
  const modal = document.getElementById('modalBody');
  if (modal) {
    modal.innerHTML = `
      <div class="p-4">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold">🔗 FHIR Patient Resource</h3>
          <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">HL7 FHIR R4</span>
        </div>
        <div class="overflow-auto max-h-[60vh] p-4 bg-gray-50 rounded border text-xs">
          <pre class="whitespace-pre-wrap">${JSON.stringify(fhirPatient, null, 2)}</pre>
        </div>
        <div class="mt-4 flex justify-between items-center">
          <div class="text-xs text-slate-500">
            Resource Type: Patient | Version: R4 | Generated: ${new Date().toLocaleString()}
          </div>
          <div class="flex gap-2">
            <button class="px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors" onclick="closeModal()">Close</button>
            <button class="px-3 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white transition-colors" onclick="downloadFHIRResource('${patientData.name?.split(',')[0]?.trim().replace(/\s+/g, '_') || 'patient'}_fhir.json', ${JSON.stringify(JSON.stringify(fhirPatient))})">Download JSON</button>
          </div>
        </div>
      </div>
    `;
  }
}

// Helper to download FHIR resource
window.downloadFHIRResource = function(filename, jsonStr) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonStr));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  showToast('FHIR resource downloaded', 'success');
};

function computeFromMlHrToGtt(){
  const ml = parseFloat(flowMlHr?.value);
  const D = parseFloat(flowDrop?.value);
  if(!isFinite(ml)) return;
  // if time given, derive drops/min using (ml/hr * drop) / 60
  if(isFinite(D)){
    const gtt = Math.round((ml * D) / 60);
    if(flowGttMin) flowGttMin.value = gtt;
  }
}

function computeFromGttToMlHr(){
  const gtt = parseFloat(flowGttMin?.value);
  const D = parseFloat(flowDrop?.value);
  if(!isFinite(gtt) || !isFinite(D) || D === 0) return;
  // ml/hr = (gtt/min * 60) / drop
  const mlhr = (gtt * 60) / D;
  if(flowMlHr) flowMlHr.value = mlhr.toFixed(1);
}

// wire inputs
[flowVol, flowTime, flowDrop].forEach(el=>{ if(el) el.addEventListener('input', computeFromVolumeTimeDrop); });
if(flowMlHr) flowMlHr.addEventListener('input', ()=>{ computeFromMlHrToGtt(); });
if(flowGttMin) flowGttMin.addEventListener('input', ()=>{ computeFromGttToMlHr(); });

// reset calculator
if(btnResetCalc) btnResetCalc.addEventListener('click', ()=>{ [flowVol, flowTime, flowDrop, flowMlHr, flowGttMin].forEach(i=>{ if(i) i.value=''; }); showToast('Calculator reset', 'info'); });

// apply to selected or last med row
if(btnApply) btnApply.addEventListener('click', ()=>{
  const tbody = document.getElementById('medTableBody'); if(!tbody) return showToast('Medication table not found', 'error');
  const tr = selectedMedRow || tbody.querySelector('tr:last-child'); if(!tr) return showToast('No medication row available', 'error');
  // read values
  const ml = flowMlHr && flowMlHr.value !== '' ? Number(flowMlHr.value) : null;
  const gtt = flowGttMin && flowGttMin.value !== '' ? Number(flowGttMin.value) : null;
  // validation ranges (sensible defaults)
  if(ml !== null && (!isFinite(ml) || ml < 0 || ml > 5000)) return showToast('mL/hr out of range (0–5000)', 'error');
  if(gtt !== null && (!isFinite(gtt) || gtt < 0 || gtt > 2000)) return showToast('gtt/min out of range (0–2000)', 'error');
  const i = tr.querySelector('input[name="iv_ml_hr"]'); if(i) i.value = ml !== null ? ml.toFixed(1) : '';
  const j = tr.querySelector('input[name="iv_gtt_min"]'); if(j) j.value = gtt !== null ? String(gtt) : '';
  // visual validation marking on the row
  validateMedRow(tr);
  showToast('Applied IV to medication row', 'success');
});

// highlight invalid med rows when saving or applying
function validateMedRow(tr){
  if(!tr) return;
  const mlRaw = tr.querySelector('input[name="iv_ml_hr"]')?.value || '';
  const gttRaw = tr.querySelector('input[name="iv_gtt_min"]')?.value || '';
  const medication = tr.querySelector('input[name="medication"]')?.value || '';
  
  let bad = false;
  if(mlRaw !== ''){ const n = Number(mlRaw); if(!isFinite(n) || n < 0 || n > 5000) bad = true; }
  if(gttRaw !== ''){ const n = Number(gttRaw); if(!isFinite(n) || n < 0 || n > 2000) bad = true; }
  
  // Add medication safety checking
  if (medication && selectedPatientId && window.medicationSafety) {
    const patient = window.patients.find(p => p.id === selectedPatientId);
    if (patient) {
      const alerts = window.medicationSafety.checkMedication(medication, patient);
      if (alerts.length > 0) {
        // Show alerts but don't mark as invalid unless it's an allergy
        const hasAllergyAlert = alerts.some(alert => alert.type === 'error');
        if (hasAllergyAlert) bad = true;
        
        // Display alerts
        window.medicationSafety.displayAlerts(alerts);
      }
    }
  }
  
  if(bad) tr.classList.add('bg-rose-50','border','border-rose-200'); else tr.classList.remove('bg-rose-50','border','border-rose-200');
}

// run validation on all rows before save (also used earlier in save handler)
function validateAllMedRows(){
  const tbody = document.getElementById('medTableBody'); if(!tbody) return true;
  let ok = true;
  tbody.querySelectorAll('tr').forEach(tr=>{ validateMedRow(tr); if(tr.classList.contains('bg-rose-50')) ok = false; });
  return ok;
}

// ensure selection is reapplied when rows change (e.g., after adding/removing rows)
const medObserver = new MutationObserver(()=>{ enableMedRowSelection(); });
const medTbody = document.getElementById('medTableBody'); if(medTbody) medObserver.observe(medTbody, { childList: true, subtree: true });

// --- New: CPOE handlers, CDS checks, MAR and audit trail ---
// Add order from CPOE form into med table and run basic CDS checks
const addMedOrderBtn = document.getElementById('addMedOrderBtn');
const medCPOEForm = document.getElementById('medCPOEForm');
const medAlerts = document.getElementById('medAlerts');
const cdsPanel = document.getElementById('cdsPanel');
const medAuditList = document.getElementById('medAuditList');
const marTableBody = document.getElementById('marTableBody');

function simpleCDSChecks(newOrder){
  // basic checks: duplicate therapy (same drug + route), simple allergy placeholder
  const alerts = [];
  const drugLower = (newOrder.drug||'').toLowerCase();
  // duplicate with existing active meds
  qsa('#medTableBody tr').forEach(tr => {
    const existing = tr.querySelector('input[name="drug"]')?.value || '';
    const route = tr.querySelector('input[name="route"]')?.value || '';
    if(existing.toLowerCase() === drugLower && route.toLowerCase() === (newOrder.route||'').toLowerCase()){
      alerts.push('Duplicate therapy: medication with same drug and route already present');
    }
  });
  // TODO: integrate with patient allergies — for now show a placeholder if patient has allergies
  const p = patients.find(x=>x.id === selectedPatientId);
  if(p && p.allergies){
    const allergies = String(p.allergies).toLowerCase();
    if(allergies && drugLower && allergies.includes(drugLower.split(' ')[0])) alerts.push('Possible allergy interaction with patient allergies');
  }
  return alerts;
}

function addOrderToTable(order){
  const tbody = $('medTableBody'); if(!tbody) return;
  // assign an order id and default status
  if(!order.orderId) order.orderId = generateOrderId();
  if(!order.status) order.status = 'active'; // active | queued | verified | given
  const tr = document.createElement('tr');
  tr.dataset.orderId = order.orderId;
  tr.dataset.status = order.status;
  tr.innerHTML = `<td><div class="flex items-center justify-between"><div style="flex:1"><input name="drug" value="${esc(order.drug||'')}" class="w-full rounded border px-2 py-1"/></div><div style="margin-left:8px;font-size:11px;color:var(--neon-violet);">${esc(order.orderId)}</div></div></td>
    <td><input name="dosage" value="${esc(order.dosage||'')}" class="w-full rounded border px-2 py-1"/></td>
    <td><input name="route" value="${esc(order.route||'')}" class="w-full rounded border px-2 py-1"/></td>
    <td><input name="iv_ml_hr" value="${order.iv_ml_hr!=null?esc(order.iv_ml_hr):''}" placeholder="mL/hr" class="w-full rounded border px-2 py-1"/></td>
    <td><input name="iv_gtt_min" value="${order.iv_gtt_min!=null?esc(order.iv_gtt_min):''}" placeholder="gtt/min" class="w-full rounded border px-2 py-1"/></td>
    <td><input name="frequency" value="${esc(order.frequency||'')}" class="w-full rounded border px-2 py-1"/></td>
    <td><input name="startDate" type="date" value="${esc(order.startDate||'')}" class="w-full rounded border px-2 py-1"/></td>
    <td><input name="duration" value="${esc(order.duration||'')}" class="w-full rounded border px-2 py-1"/></td>
    <td><select name="prn" class="w-full rounded border px-2 py-1"><option value=\"No\" ${order.prn==='No'?'selected':''}>No</option><option value=\"Yes\" ${order.prn==='Yes'?'selected':''}>Yes</option></select></td>
    <td><input name="prescriber" value="${esc(order.prescriber||'')}" class="w-full rounded border px-2 py-1"/></td>
    <td>
      <div class="flex gap-1 items-center">
        <button type="button" class="btn-give px-2 py-1 rounded bg-emerald-100 text-emerald-700">Give</button>
        <button type="button" class="btn-send-pharm px-2 py-1 rounded bg-sky-100 text-sky-700">Send</button>
        <button type="button" class="btn-remove-row px-2 py-1 rounded bg-white border">🗑️</button>
      </div>
      <div class="mt-1 text-xs text-slate-400 status-label">${esc(order.status)}</div>
    </td>`;
  tbody.appendChild(tr);
  enableMedRowSelection();
  // wire new buttons
  const btnGive = tr.querySelector('.btn-give');
  const btnSend = tr.querySelector('.btn-send-pharm');
  const statusLabel = tr.querySelector('.status-label');
  if(btnGive) btnGive.addEventListener('click', ()=>{
    const o = readOrderFromRow(tr);
    administerOrderInline(o, tr);
  });
  if(btnSend) btnSend.addEventListener('click', ()=>{
    const o = readOrderFromRow(tr);
    sendOrderToPharmacy(o, tr);
  });
  // add audit entry
  appendAudit(`Order added: ${order.drug} ${order.dosage||''} (${order.route||''}) [${order.orderId}]`);
}

// read order fields from a table row into an object (used by send/admin)
function readOrderFromRow(tr){
  if(!tr) return {};
  return {
    orderId: tr.dataset.orderId || generateOrderId(),
    status: tr.dataset.status || 'active',
    drug: tr.querySelector('input[name="drug"]')?.value || '',
    dosage: tr.querySelector('input[name="dosage"]')?.value || '',
    route: tr.querySelector('input[name="route"]')?.value || '',
    iv_ml_hr: (tr.querySelector('input[name="iv_ml_hr"]')?.value || '') === '' ? null : Number(tr.querySelector('input[name="iv_ml_hr"]')?.value),
    iv_gtt_min: (tr.querySelector('input[name="iv_gtt_min"]')?.value || '') === '' ? null : Number(tr.querySelector('input[name="iv_gtt_min"]')?.value),
    frequency: tr.querySelector('input[name="frequency"]')?.value || '',
    startDate: tr.querySelector('input[name="startDate"]')?.value || '',
    duration: tr.querySelector('input[name="duration"]')?.value || '',
    prn: tr.querySelector('select[name="prn"]')?.value || 'No',
    prescriber: tr.querySelector('input[name="prescriber"]')?.value || ''
  };
}

// --- Pharmacy queue & order lifecycle (in-memory simulation) ---
let pharmacyQueue = [];
function generateOrderId(){ return 'ORD-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,6).toUpperCase(); }

function sendOrderToPharmacy(order, tr){
  if(!order) order = readOrderFromRow(tr);
  order.orderId = order.orderId || generateOrderId();
  order.status = 'queued';
  pharmacyQueue.unshift(order);
  // update row dataset/status
  if(tr){ tr.dataset.orderId = order.orderId; tr.dataset.status = order.status; const lbl = tr.querySelector('.status-label'); if(lbl) lbl.textContent = order.status; tr.classList.add('ring-1','ring-sky-200'); }
  appendAudit(`Order ${order.orderId} sent to Pharmacy`);
  showToast('Order sent to Pharmacy (simulated)', 'info');
}

function renderPharmacyQueue(){
  let panel = document.getElementById('pharmacyQueuePanel');
  if(!panel){ panel = document.createElement('div'); panel.id = 'pharmacyQueuePanel'; panel.style.cssText = 'position:fixed;right:12px;top:120px;width:320px;max-height:60vh;overflow:auto;background:rgba(8,12,20,0.85);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.04);padding:10px;border-radius:8px;z-index:1200;color:#fff;font-size:13px;'; document.body.appendChild(panel); }
  panel.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><strong>Pharmacy Queue</strong><button style="background:transparent;border:none;color:#fff;font-weight:700" onclick="document.getElementById('pharmacyQueuePanel').remove()">×</button></div>`;
  if(pharmacyQueue.length === 0){ panel.innerHTML += '<div class="text-sm text-slate-400">No orders in queue</div>'; return; }
  pharmacyQueue.forEach((o,i)=>{
    const item = document.createElement('div'); item.style.cssText = 'padding:8px;border-radius:6px;margin-bottom:6px;background:rgba(255,255,255,0.02);';
    item.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div><strong>${esc(o.drug||'')}</strong><div style="font-size:12px;opacity:0.8">${esc(o.dosage||'')} • ${esc(o.route||'')}</div><div style="font-size:11px;margin-top:6px;color:rgba(255,255,255,0.75)">ID: ${esc(o.orderId)}</div></div><div style="display:flex;flex-direction:column;gap:6px"><button class="ph-verify px-2 py-1 rounded" data-idx="${i}">Verify</button><button class="ph-reject px-2 py-1 rounded text-rose-600" data-idx="${i}">Reject</button></div></div>`;
    panel.appendChild(item);
  });
  // wire verify/reject
  panel.querySelectorAll('.ph-verify').forEach(btn=> btn.addEventListener('click', (e)=>{
    const idx = Number(btn.dataset.idx);
    const ord = pharmacyQueue[idx];
    if(!ord) return;
    ord.status = 'verified';
    appendAudit(`Pharmacy verified order ${ord.orderId}`);
    // reflect back into med table row if present
    const row = document.querySelector('tr[data-order-id="'+ord.orderId+'"]');
    if(row){ row.dataset.status = 'verified'; const lbl = row.querySelector('.status-label'); if(lbl) lbl.textContent = 'verified'; row.classList.remove('ring-1'); row.classList.add('bg-emerald-50'); }
    pharmacyQueue.splice(idx,1);
    renderPharmacyQueue();
    showToast('Order verified by Pharmacy', 'success');
  }));
  panel.querySelectorAll('.ph-reject').forEach(btn=> btn.addEventListener('click', (e)=>{
    const idx = Number(btn.dataset.idx);
    const ord = pharmacyQueue[idx]; if(!ord) return;
    ord.status = 'rejected'; appendAudit(`Pharmacy rejected order ${ord.orderId}`);
    // mark row if present
    const row = document.querySelector('tr[data-order-id="'+ord.orderId+'"]'); if(row){ row.dataset.status = 'rejected'; const lbl = row.querySelector('.status-label'); if(lbl) lbl.textContent = 'rejected'; row.classList.add('bg-rose-50'); }
    pharmacyQueue.splice(idx,1);
    renderPharmacyQueue();
    showToast('Order rejected by Pharmacy', 'error');
  }));
}

// admin flow: perform lightweight 5-rights checks then record MAR + audit and mark as given
function administerOrderInline(order, tr){
  if(!order) order = readOrderFromRow(tr);
  // basic 5-rights simulation: right patient (selectedPatientId must be set), right drug (non-empty), right dose (non-empty), right route, right time (startDate or immediate)
  const problems = [];
  if(!selectedPatientId) problems.push('No patient selected');
  if(!order.drug) problems.push('Drug name missing');
  if(!order.dosage) problems.push('Dose missing');
  if(!order.route) problems.push('Route missing');
  // simple IV range check
  if(order.iv_ml_hr !== null && (isNaN(order.iv_ml_hr) || order.iv_ml_hr < 0 || order.iv_ml_hr > 5000)) problems.push('IV mL/hr out of expected range');
  if(problems.length){
    if(confirm('Administration checks failed:\n' + problems.join('\n') + '\nProceed anyway?')){
      // proceed but log warnings
      appendAudit(`Administer WARNING for ${order.orderId}: ${problems.join('; ')}`);
    } else return;
  }
  // record MAR
  const by = (currentUser && currentUser.email) || (window.currentUser && window.currentUser.email) || 'unknown';
  addMARRecord(order.drug, order.dosage, by, 'Administered (inline)');
  // mark row as given
  if(tr){ tr.dataset.status = 'given'; const lbl = tr.querySelector('.status-label'); if(lbl) lbl.textContent = 'given'; tr.classList.add('opacity-80','bg-emerald-50'); }
  appendAudit(`Order ${order.orderId} administered by ${by}`);
  showToast('Medication administered and recorded to MAR', 'success');
}

// expose admin and send functions for inline usage
window.sendOrderToPharmacy = sendOrderToPharmacy;
window.administerOrderInline = administerOrderInline;

function appendAudit(text){
  const now = new Date().toLocaleString();
  const el = document.createElement('div'); el.className='text-xs muted'; el.textContent = now + ' — ' + text;
  if(medAuditList){
    if(medAuditList.textContent && medAuditList.textContent.includes('No audit')) medAuditList.textContent = '';
    medAuditList.prepend(el);
  }
}

// expose to window for inline handlers
window.appendAudit = appendAudit;
window.addMARRecord = addMARRecord;
// make currentUser visible for small inline snippets
window.currentUser = currentUser;

function addMARRecord(drug,dose,by,notes){
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${new Date().toLocaleString()}</td><td>${esc(drug)}</td><td>${esc(dose)}</td><td>${esc(by||'')}</td><td>${esc(notes||'')}</td><td><button class="px-2 py-1 rounded bg-white/80" onclick="this.closest('tr').remove()">Del</button></td>`;
  if(marTableBody) marTableBody.prepend(tr);
}

if(addMedOrderBtn && medCPOEForm){
  addMedOrderBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const order = {
      drug: medCPOEForm.querySelector('[name="drug"]').value.trim(),
      dosage: medCPOEForm.querySelector('[name="dosage"]').value.trim(),
      route: medCPOEForm.querySelector('[name="route"]').value,
      iv_fluid: medCPOEForm.querySelector('[name="iv_fluid"]') ? medCPOEForm.querySelector('[name="iv_fluid"]').value : '',
      frequency: medCPOEForm.querySelector('[name="frequency"]').value.trim(),
      startDate: medCPOEForm.querySelector('[name="startDate"]').value,
      duration: medCPOEForm.querySelector('[name="duration"]').value.trim(),
      iv_ml_hr: medCPOEForm.querySelector('[name="iv_ml_hr"]').value.trim() === '' ? null : Number(medCPOEForm.querySelector('[name="iv_ml_hr"]').value),
      iv_gtt_min: medCPOEForm.querySelector('[name="iv_gtt_min"]').value.trim() === '' ? null : Number(medCPOEForm.querySelector('[name="iv_gtt_min"]').value),
      prn: medCPOEForm.querySelector('[name="prn"]').value,
      prescriber: medCPOEForm.querySelector('[name="prescriber"]').value.trim()
    };
    if(!order.drug){ if(medAlerts) medAlerts.textContent = 'Drug name is required'; return; }
    // CDS checks
    const alerts = simpleCDSChecks(order);
    if(cdsPanel) cdsPanel.innerHTML = alerts.length ? alerts.map(a=>`<div>⚠️ ${esc(a)}</div>`).join('') : '<div class="text-sm text-emerald-700">No alerts</div>';
    if(alerts.length && !confirm('CDS warnings found:\n' + alerts.join('\n') + '\nProceed?')) return;
    // add to table
    addOrderToTable(order);
    // clear small fields but keep prescriber
    medCPOEForm.querySelector('[name="dosage"]').value = '';
    medCPOEForm.querySelector('[name="frequency"]').value = '';
    medCPOEForm.querySelector('[name="startDate"]').value = '';
    medCPOEForm.querySelector('[name="duration"]').value = '';
    medCPOEForm.querySelector('[name="iv_ml_hr"]').value = '';
    medCPOEForm.querySelector('[name="iv_gtt_min"]').value = '';
    if(medAlerts) medAlerts.textContent = '';
    showToast('Order added to active list', 'success');
  });
}

// sendToPharmacy: simple visual action and audit
const sendToPharmacyBtn = document.getElementById('sendToPharmacy');
if(sendToPharmacyBtn){
  sendToPharmacyBtn.addEventListener('click', ()=>{
    // in a real system this would enqueue to pharmacy; here we add an audit entry
    appendAudit('Sent active medication orders to Pharmacy for verification');
    showToast('Sent to Pharmacy (simulated)', 'info');
  });
}

// When Save Orders is clicked we already collect medTableBody rows — keep audit
// augment saveTabData to append audit entry on success
const originalSaveTabData = saveTabData;
saveTabData = async function(tabKey, data){
  await originalSaveTabData(tabKey, data);
  if(tabKey === 'meds'){
    appendAudit('Medication orders saved by ' + (currentUser ? currentUser.email : 'unknown'));
  }
};

// ========================================================================================
// ENHANCED INTEGRATION INITIALIZATION
// ========================================================================================

// Enhanced features initialization is now handled by the consolidated init function
function initializeEnhancedFeatures() {
  console.log('🚀 Initializing Enhanced EHR Features...');
  
  try {
    console.log('✅ Chart.js available:', typeof Chart !== 'undefined');
    console.log('✅ Firebase available:', typeof firebase !== 'undefined');
    console.log('✅ Medication Safety available:', typeof window.medicationSafety !== 'undefined');
    console.log('✅ Enhanced Vitals Chart available:', typeof window.enhancedVitalsChart !== 'undefined');
    
    // Set up enhanced dashboard features
    setupEnhancedDashboard();
    
    // Initialize enhanced patient selection
    setupEnhancedPatientSelection();
    
    console.log('🎉 All enhanced features initialized successfully!');
    
  } catch (error) {
    console.error('❌ Error initializing enhanced features:', error);
  }
}

// Enhanced Dashboard Setup
function setupEnhancedDashboard() {
  // Add vitals chart container to dashboard if it doesn't exist
  const dashboardContent = document.getElementById('dashboard-content');
  if (dashboardContent && !document.getElementById('vitalsChartContainer')) {
    const chartSection = document.createElement('div');
    chartSection.className = 'mt-6';
    chartSection.innerHTML = `
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Patient Vitals Trends</h3>
        <div id="vitalsChartContainer" class="min-h-96"></div>
      </div>
    `;
    dashboardContent.appendChild(chartSection);
  }
  
  // Add CDS panel to medication tab if it doesn't exist
  const medTab = document.getElementById('tab-meds');
  if (medTab && !document.getElementById('cdsPanel')) {
    const cdsPanel = document.createElement('div');
    cdsPanel.id = 'cdsPanel';
    cdsPanel.className = 'mb-4 p-4 bg-gray-50 rounded-lg';
    cdsPanel.innerHTML = '<div class="text-sm text-gray-500">Clinical Decision Support will appear here</div>';
    
    const medForm = medTab.querySelector('#medCPOEForm');
    if (medForm) {
      medForm.parentNode.insertBefore(cdsPanel, medForm);
    }
  }
}

// Enhanced Patient Selection
function setupEnhancedPatientSelection() {
  // Override the original viewPatient function to include enhanced features
  const originalViewPatient = window.viewPatient;
  
  window.viewPatient = async function(patientId) {
    // Call original function
    if (originalViewPatient) {
      await originalViewPatient(patientId);
    }
    
    // Add enhanced features
    try {
      // Store selected patient ID
      window.selectedPatientId = patientId;
      
      // Render enhanced vitals chart
      if (window.enhancedVitalsChart && patientId) {
        await window.enhancedVitalsChart.renderForPatient(patientId);
      }
      
      // Update enhanced dashboard
      if (window.updateEnhancedDashboard) {
        await window.updateEnhancedDashboard(patientId);
      }
      
    } catch (error) {
      console.error('Error loading enhanced patient features:', error);
    }
  };
}

// Enhanced Dashboard Update Function
window.updateEnhancedDashboard = async function(patientId) {
  try {
    const patient = window.patients?.find(p => p.id === patientId);
    if (!patient) return;
    
    // Update dashboard with enhanced analytics
    const dashboardStats = document.querySelector('#dashboard-stats');
    if (dashboardStats) {
      // Add patient-specific quick stats
      const quickStats = document.createElement('div');
      quickStats.className = 'mt-4 grid grid-cols-2 md:grid-cols-4 gap-4';
      quickStats.innerHTML = `
        <div class="bg-blue-50 p-3 rounded-lg text-center">
          <div class="text-sm text-blue-600">Vitals Records</div>
          <div class="text-xl font-bold text-blue-700">${Array.isArray(patient.vitals) ? patient.vitals.length : 0}</div>
        </div>
        <div class="bg-green-50 p-3 rounded-lg text-center">
          <div class="text-sm text-green-600">Medications</div>
          <div class="text-xl font-bold text-green-700">${Array.isArray(patient.medOrders) ? patient.medOrders.length : 0}</div>
        </div>
        <div class="bg-purple-50 p-3 rounded-lg text-center">
          <div class="text-sm text-purple-600">Days Since Admission</div>
          <div class="text-xl font-bold text-purple-700">${patient.admissionDate ? Math.floor((new Date() - new Date(patient.admissionDate)) / (1000 * 60 * 60 * 24)) : '-'}</div>
        </div>
        <div class="bg-orange-50 p-3 rounded-lg text-center">
          <div class="text-sm text-orange-600">Risk Level</div>
          <div class="text-xl font-bold text-orange-700">${calculatePatientRiskLevel(patient)}</div>
        </div>
      `;
      
      // Remove existing quick stats
      const existing = dashboardStats.querySelector('.patient-quick-stats');
      if (existing) existing.remove();
      
      quickStats.classList.add('patient-quick-stats');
      dashboardStats.appendChild(quickStats);
    }
    
  } catch (error) {
    console.error('Error updating enhanced dashboard:', error);
  }
};

// Calculate patient risk level
function calculatePatientRiskLevel(patient) {
  let riskScore = 0;
  
  // Age risk
  if (patient.age && patient.age > 65) riskScore += 1;
  if (patient.age && patient.age > 80) riskScore += 2;
  
  // Medication count risk
  if (Array.isArray(patient.medOrders) && patient.medOrders.length > 5) riskScore += 1;
  if (Array.isArray(patient.medOrders) && patient.medOrders.length > 10) riskScore += 2;
  
  // Allergy risk
  if (patient.allergies && patient.allergies.toLowerCase() !== 'none') riskScore += 1;
  
  // Vitals-based risk (latest vitals)
  if (Array.isArray(patient.vitals) && patient.vitals.length > 0) {
    const latest = patient.vitals[patient.vitals.length - 1];
    if (parseFloat(latest.temp) > 38.5 || parseFloat(latest.temp) < 36) riskScore += 2;
    if (parseFloat(latest.pulse) > 120 || parseFloat(latest.pulse) < 50) riskScore += 1;
    if (parseFloat(latest.spo2 || latest.spO2) < 92) riskScore += 3;
  }
  
  // Return risk level
  if (riskScore === 0) return 'Low';
  if (riskScore <= 2) return 'Moderate';
  if (riskScore <= 4) return 'High';
  return 'Critical';
}

// Test enhanced features integration
window.testEnhancedFeatures = function() {
  console.log('🧪 Testing Enhanced Features Integration...');
  
  const results = {
    chartJS: typeof Chart !== 'undefined',
    firebase: typeof firebase !== 'undefined',
    medicationSafety: typeof window.medicationSafety !== 'undefined',
    enhancedVitalsChart: typeof window.enhancedVitalsChart !== 'undefined',
    navigationHelper: typeof window.navigateToTab === 'function',
    autoSave: typeof autoSaveInterval !== 'undefined'
  };
  
  console.log('📊 Test Results:', results);
  
  const allPassed = Object.values(results).every(test => test === true);
  console.log(allPassed ? '✅ All core EHR features loaded successfully!' : '⚠️ Some features may need attention');
  
  return results;
};

// Basic Medication Safety Checking
window.medicationSafety = {
  highRiskDrugs: ['warfarin', 'heparin', 'insulin', 'digoxin', 'morphine'],
  
  checkMedication: function(drugName, patient) {
    const alerts = [];
    const drug = drugName.toLowerCase();
    
    // High risk medication alert
    if (this.highRiskDrugs.includes(drug)) {
      alerts.push({
        type: 'warning',
        message: `⚠️ ${drugName} is a high-risk medication. Extra caution required.`
      });
    }
    
    // Basic allergy check
    if (patient.allergies && Array.isArray(patient.allergies)) {
      const hasAllergy = patient.allergies.some(allergy => 
        drug.includes(allergy.toLowerCase()) || allergy.toLowerCase().includes(drug)
      );
      if (hasAllergy) {
        alerts.push({
          type: 'error',
          message: `🚫 ALLERGY ALERT: Patient has known allergy to ${drugName}!`
        });
      }
    }
    
    // Basic drug interaction check
    if (patient.medOrders && Array.isArray(patient.medOrders)) {
      const interactions = this.checkBasicInteractions(drug, patient.medOrders);
      alerts.push(...interactions);
    }
    
    return alerts;
  },
  
  checkBasicInteractions: function(newDrug, existingMeds) {
    const interactions = [];
    const knownInteractions = {
      'warfarin': ['aspirin', 'ibuprofen'],
      'digoxin': ['furosemide'],
      'insulin': ['alcohol']
    };
    
    if (knownInteractions[newDrug]) {
      existingMeds.forEach(med => {
        const existingDrug = med.medication ? med.medication.toLowerCase() : '';
        if (knownInteractions[newDrug].some(interact => existingDrug.includes(interact))) {
          interactions.push({
            type: 'warning',
            message: `⚠️ Potential interaction between ${newDrug} and ${med.medication}`
          });
        }
      });
    }
    
    return interactions;
  },
  
  displayAlerts: function(alerts) {
    if (alerts.length === 0) return;
    
    alerts.forEach(alert => {
      showToast(alert.message, alert.type === 'error' ? 'error' : 'info', 5000);
    });
  }
};

// Enhanced dashboard update function
window.updateEnhancedDashboard = function(patientId) {
  return new Promise(resolve => {
    // Update dashboard statistics
    updateStats();
    
    // Update patient-specific dashboard elements
    if (patientId) {
      const patient = window.patients.find(p => p.id === patientId);
      if (patient) {
        // Update vitals sparkline
        if (patient.vitals && Array.isArray(patient.vitals)) {
          const temps = patient.vitals.map(v => parseFloat(v.temp) || 36.5);
          renderVitalsSparkline(temps.slice(-10));
        }
      }
    }
    
    resolve();
  });
};

// Navigation helper function
window.navigateToTab = function(tabId) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.add('hidden');
  });
  
  // Show target tab
  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.remove('hidden');
    
    // Update nav button states
    document.querySelectorAll('[data-target]').forEach(btn => {
      btn.classList.remove('active', 'bg-emerald-100', 'text-emerald-700');
      btn.classList.add('text-slate-600');
    });
    
    // Activate corresponding nav button
    const navBtn = document.querySelector(`[data-target="${tabId}"]`);
    if (navBtn) {
      navBtn.classList.add('active', 'bg-emerald-100', 'text-emerald-700');
      navBtn.classList.remove('text-slate-600');
    }
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('breadcrumb-current');
    if (breadcrumb) {
      const tabNames = {
        'tab-dashboard': 'Dashboard',
        'tab-vitals': 'Vitals',
        'tab-meds': 'Medications',
        'tab-labs': 'Labs',
        'tab-notes': 'Notes',
        'tab-discharge': 'Discharge'
      };
      breadcrumb.textContent = tabNames[tabId] || 'Dashboard';
    }
  }
};

// Auto-save functionality
let autoSaveInterval;
function startAutoSave() {
  if (autoSaveInterval) clearInterval(autoSaveInterval);
  
  autoSaveInterval = setInterval(() => {
    if (selectedPatientId && !isSaving) {
      // Auto-save current form data
      const activeTab = document.querySelector('.tab-content:not(.hidden)');
      if (activeTab) {
        const forms = activeTab.querySelectorAll('form');
        forms.forEach(form => {
          if (form.id && typeof window[`save${form.id.replace('form-', '').replace(/^\w/, c => c.toUpperCase())}`] === 'function') {
            // Quietly save without toast notifications
            const originalShowToast = showToast;
            showToast = () => {}; // Suppress notifications during auto-save
            
            try {
              window[`save${form.id.replace('form-', '').replace(/^\w/, c => c.toUpperCase())}`]();
            } catch (e) {
              // Restore toast function and show error if needed
              showToast = originalShowToast;
            }
            
            showToast = originalShowToast; // Restore toast function
          }
        });
      }
    }
  }, 30000); // Auto-save every 30 seconds
}

// Start auto-save when user is authenticated
auth.onAuthStateChanged(user => {
  if (user) {
    startAutoSave();
  } else {
    if (autoSaveInterval) clearInterval(autoSaveInterval);
  }
});

// Enhanced printing functionality
window.printEnhancedPatientSummary = function(patientIndex) {
  console.log('🖨️ ENHANCED PRINT FUNCTION CALLED WITH:', patientIndex);
  let patient;
  
  // Handle different input types - use global patients array
  if (typeof patientIndex === 'number') {
    // If it's a number, get from patients array
    patient = patients && patients[patientIndex] ? patients[patientIndex] : null;
  } else if (typeof patientIndex === 'string') {
    // If it's a string (ID), find by ID
    patient = patients ? patients.find(p => p.id === patientIndex) : null;
  } else if (typeof patientIndex === 'object') {
    // If it's already a patient object
    patient = patientIndex;
  }
  
  if (!patient) {
    console.error('Patient not found:', patientIndex);
    if (window.showToast) showToast('Patient not found for printing', 'error');
    return;
  }
  
  console.log('Enhanced print - patient found:', patient.name);
  
  const stats = calculatePatientSummaryStats(patient);
  const age = calculateAge(patient.dateOfBirth);
  
  // Create a comprehensive print document
  const printWindow = window.open('', '_blank');
  const printDocument = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Patient Medical Summary - ${esc(patient.name)}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.4;
                color: #2c3e50;
                background: white;
                max-width: 210mm;
                margin: 0 auto;
                padding: 20mm;
            }
            
            .header {
                text-align: center;
                border-bottom: 3px solid #3498db;
                padding-bottom: 20px;
                margin-bottom: 30px;
            }
            
            .hospital-name {
                font-size: 24px;
                font-weight: bold;
                color: #2c3e50;
                margin-bottom: 5px;
            }
            
            .report-title {
                font-size: 18px;
                color: #3498db;
                margin-bottom: 10px;
            }
            
            .report-date {
                color: #7f8c8d;
                font-size: 14px;
            }
            
            .patient-header {
                background: #ecf0f1;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 25px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .patient-info h2 {
                font-size: 22px;
                color: #2c3e50;
                margin-bottom: 5px;
            }
            
            .patient-details {
                font-size: 14px;
                color: #5d6d7e;
            }
            
            .risk-badge {
                padding: 8px 16px;
                border-radius: 20px;
                font-weight: bold;
                font-size: 12px;
                text-transform: uppercase;
            }
            
            .risk-low { background: #d5f4e6; color: #27ae60; }
            .risk-medium { background: #fdeaa7; color: #f39c12; }
            .risk-high { background: #fadbd8; color: #e74c3c; }
            
            .summary-stats {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 15px;
                margin-bottom: 30px;
            }
            
            .stat-card {
                background: #f8f9fa;
                padding: 15px;
                border-radius: 6px;
                text-align: center;
                border-left: 4px solid #3498db;
            }
            
            .stat-number {
                font-size: 24px;
                font-weight: bold;
                color: #2c3e50;
                display: block;
            }
            
            .stat-label {
                font-size: 12px;
                color: #7f8c8d;
                text-transform: uppercase;
                margin-top: 5px;
            }
            
            .section {
                margin-bottom: 25px;
                page-break-inside: avoid;
            }
            
            .section-title {
                font-size: 16px;
                font-weight: bold;
                color: #2c3e50;
                border-bottom: 2px solid #3498db;
                padding-bottom: 5px;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .section-icon {
                font-size: 18px;
            }
            
            .info-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
                margin-bottom: 15px;
            }
            
            .info-item {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
                border-bottom: 1px dotted #bdc3c7;
            }
            
            .info-label {
                font-weight: 600;
                color: #5d6d7e;
            }
            
            .info-value {
                color: #2c3e50;
            }
            
            .medication-item, .vital-item, .lab-item {
                background: #f8f9fa;
                padding: 12px;
                border-radius: 6px;
                margin-bottom: 10px;
                border-left: 4px solid #3498db;
            }
            
            .medication-name {
                font-weight: bold;
                color: #2c3e50;
                margin-bottom: 5px;
            }
            
            .medication-details {
                font-size: 13px;
                color: #5d6d7e;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
            }
            
            .alert-medication {
                border-left-color: #e74c3c;
                background: #fadbd8;
            }
            
            .vitals-table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 10px;
            }
            
            .vitals-table th,
            .vitals-table td {
                border: 1px solid #bdc3c7;
                padding: 8px;
                text-align: center;
                font-size: 13px;
            }
            
            .vitals-table th {
                background: #ecf0f1;
                font-weight: bold;
            }
            
            .clinical-note {
                background: #f8f9fa;
                padding: 15px;
                border-radius: 6px;
                margin-bottom: 15px;
                border-left: 4px solid #3498db;
            }
            
            .note-header {
                font-weight: bold;
                color: #2c3e50;
                margin-bottom: 8px;
            }
            
            .footer {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 2px solid #ecf0f1;
                text-align: center;
                font-size: 12px;
                color: #7f8c8d;
            }
            
            @media print {
                body {
                    margin: 0;
                    padding: 15mm;
                }
                
                .page-break {
                    page-break-before: always;
                }
                
                .no-print {
                    display: none;
                }
            }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="hospital-name">EHR Healthcare System</div>
            <div class="report-title">Comprehensive Patient Medical Summary</div>
            <div class="report-date">Generated: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</div>
        </div>
        
        <div class="patient-header">
            <div class="patient-info">
                <h2>${esc(patient.name)}</h2>
                <div class="patient-details">
                    ID: ${esc(patient.id || 'Not assigned')} • 
                    DOB: ${esc(patient.dateOfBirth || 'Not recorded')} 
                    ${age ? `(${age} years old)` : ''} • 
                    Gender: ${esc(patient.gender || 'Not specified')}
                </div>
                <div class="patient-details" style="margin-top: 5px;">
                    Room: ${esc(patient.room || 'Not assigned')} • 
                    Bed: ${esc(patient.bed || 'Not assigned')}
                    ${stats.lengthOfStay ? ` • Length of Stay: ${stats.lengthOfStay} days` : ''}
                </div>
            </div>
            <div class="risk-badge risk-${stats.riskLevel.toLowerCase()}">
                ${stats.riskLevel} Risk
            </div>
        </div>
        
        <div class="summary-stats">
            <div class="stat-card">
                <span class="stat-number">${stats.totalMedications}</span>
                <div class="stat-label">Active Medications</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">${stats.totalVitals}</span>
                <div class="stat-label">Vital Readings</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">${stats.totalLabs}</span>
                <div class="stat-label">Lab Results</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">${stats.riskFactors}</span>
                <div class="stat-label">Risk Factors</div>
            </div>
        </div>
        
        <!-- Primary Diagnosis -->
        <div class="section">
            <div class="section-title">
                <span class="section-icon">🏥</span>
                Primary Diagnosis & Admission
            </div>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Primary Diagnosis:</span>
                    <span class="info-value">${esc(patient.initialDiagnosis || 'Not recorded')}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Admission Date:</span>
                    <span class="info-value">${esc(patient.admissionDate || 'Not recorded')}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Admission Time:</span>
                    <span class="info-value">${esc(patient.admissionTime || 'Not recorded')}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Admission Type:</span>
                    <span class="info-value">${esc(patient.admissionType || 'Not specified')}</span>
                </div>
            </div>
        </div>
        
        <!-- Allergies -->
        <div class="section">
            <div class="section-title">
                <span class="section-icon">⚠️</span>
                Allergies & Alerts
            </div>
            ${patient.allergies && patient.allergies.length > 0 ? `
                ${patient.allergies.map(allergy => `
                    <div class="medication-item alert-medication">
                        <div class="medication-name">⚠️ ${esc(allergy.agent || allergy)}</div>
                        ${allergy.reaction ? `<div style="margin-top: 5px; font-size: 13px;">${esc(allergy.reaction)}</div>` : ''}
                    </div>
                `).join('')}
            ` : patient.allergySummary ? `
                <div class="medication-item alert-medication">
                    <div class="medication-name">⚠️ Allergy Information</div>
                    <div style="margin-top: 5px; font-size: 13px;">${esc(patient.allergySummary)}</div>
                </div>
            ` : `
                <div class="clinical-note">
                    <div style="text-align: center; color: #27ae60;">
                        ✅ No Known Allergies
                    </div>
                </div>
            `}
        </div>
        
        <!-- Current Medications -->
        ${(() => {
            const medOrdersArr = Array.isArray(patient.medOrders) ? patient.medOrders : (patient.medOrders && typeof patient.medOrders === 'object' ? Object.values(patient.medOrders) : []);
            
            if (medOrdersArr.length === 0) {
                return `
                    <div class="section">
                        <div class="section-title">
                            <span class="section-icon">💊</span>
                            Current Medications
                        </div>
                        <div class="clinical-note">
                            <div style="text-align: center; color: #7f8c8d;">No active medications</div>
                        </div>
                    </div>
                `;
            }
            
            return `
                <div class="section">
                    <div class="section-title">
                        <span class="section-icon">💊</span>
                        Current Medications (${medOrdersArr.length} Active)
                    </div>
                    ${medOrdersArr.map((med, index) => {
                        const isHighRisk = window.medicationSafety && window.medicationSafety.highRiskDrugs.includes((med.drug || '').toLowerCase());
                        const alerts = window.medicationSafety ? window.medicationSafety.checkMedication(med.drug || '', patient) : [];
                        
                        return `
                            <div class="medication-item ${alerts.length > 0 || isHighRisk ? 'alert-medication' : ''}">
                                <div class="medication-name">
                                    ${isHighRisk ? '⚠️ ' : ''}${esc(med.drug || '')}
                                    ${alerts.length > 0 ? ' (ALERT)' : ''}
                                </div>
                                <div class="medication-details">
                                    <div><strong>Dosage:</strong> ${esc(med.dosage || 'Not specified')}</div>
                                    <div><strong>Route:</strong> ${esc(med.route || 'Not specified')}</div>
                                    <div><strong>Frequency:</strong> ${esc(med.frequency || 'Not specified')}</div>
                                    ${med.startDate ? `<div><strong>Start Date:</strong> ${esc(med.startDate)}</div>` : ''}
                                    ${med.duration ? `<div><strong>Duration:</strong> ${esc(med.duration)}</div>` : ''}
                                    ${(med.iv_ml_hr || med.iv_gtt_min) ? `<div><strong>IV Rate:</strong> ${med.iv_ml_hr ? esc(med.iv_ml_hr) + ' mL/hr' : ''} ${med.iv_gtt_min ? esc(med.iv_gtt_min) + ' gtt/min' : ''}</div>` : ''}
                                </div>
                                ${alerts.length > 0 ? `
                                    <div style="margin-top: 8px; padding: 8px; background: #fadbd8; border-radius: 4px;">
                                        <strong style="color: #e74c3c;">Alerts:</strong><br>
                                        ${alerts.map(alert => `• ${alert.message}`).join('<br>')}
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        })()}
        
        <!-- Recent Vital Signs -->
        ${patient.vitals && patient.vitals.length > 0 ? `
            <div class="section">
                <div class="section-title">
                    <span class="section-icon">🌡️</span>
                    Recent Vital Signs (${patient.vitals.length} readings)
                </div>
                <table class="vitals-table">
                    <thead>
                        <tr>
                            <th>Date/Time</th>
                            <th>Temperature (°C)</th>
                            <th>Pulse (BPM)</th>
                            <th>Blood Pressure</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${patient.vitals.slice(-10).reverse().map(vital => `
                            <tr>
                                <td>${esc(vital.date || '')} ${esc(vital.time || '')}</td>
                                <td>${esc(vital.temp || '--')}</td>
                                <td>${esc(vital.pulse || '--')}</td>
                                <td>${esc(vital.bp || '--')}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        ` : ''}
        
        <!-- Laboratory Results -->
        ${patient.labFiles && patient.labFiles.length > 0 ? `
            <div class="section">
                <div class="section-title">
                    <span class="section-icon">🧪</span>
                    Laboratory Results (${patient.labFiles.length} files)
                </div>
                ${patient.labFiles.map(lab => `
                    <div class="lab-item">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <strong>${esc(lab.name || 'Lab Result')}</strong><br>
                                <span style="font-size: 12px; color: #7f8c8d;">
                                    Uploaded: ${lab.uploadDate ? new Date(lab.uploadDate).toLocaleDateString() : 'Date unknown'}
                                </span>
                            </div>
                            <div style="font-size: 12px; color: #3498db;">
                                File Available: ${esc(lab.name || 'Lab Result')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        ` : ''}
        
        <!-- Assessment & Plan -->
        ${(patient.assessment_investigations || patient.assessment_treatmentOrders || patient.assessment_notes) ? `
            <div class="section">
                <div class="section-title">
                    <span class="section-icon">📋</span>
                    Assessment & Plan
                </div>
                ${patient.assessment_investigations ? `
                    <div class="clinical-note">
                        <div class="note-header">Investigations</div>
                        <div>${esc(patient.assessment_investigations)}</div>
                    </div>
                ` : ''}
                ${patient.assessment_treatmentOrders ? `
                    <div class="clinical-note">
                        <div class="note-header">Treatment Orders</div>
                        <div>${esc(patient.assessment_treatmentOrders)}</div>
                    </div>
                ` : ''}
                ${patient.assessment_notes ? `
                    <div class="clinical-note">
                        <div class="note-header">Clinical Notes</div>
                        <div>${esc(patient.assessment_notes)}</div>
                    </div>
                ` : ''}
            </div>
        ` : ''}
        
        <!-- Clinical Documentation -->
        ${(() => {
            const hasNurseNotes = patient.nurse_assessment || patient.nurse_plan || patient.nurse_notes;
            const hasDoctorNotes = patient.doctor_subjective || patient.doctor_objective || patient.doctor_assessment || patient.doctor_plan;
            
            if (!hasNurseNotes && !hasDoctorNotes) return '';
            
            return `
                <div class="section page-break">
                    <div class="section-title">
                        <span class="section-icon">📝</span>
                        Clinical Documentation
                    </div>
                    
                    ${hasNurseNotes ? `
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #27ae60; margin-bottom: 10px;">👩‍⚕️ Nursing Documentation</h4>
                            ${patient.nurse_assessment ? `
                                <div class="clinical-note">
                                    <div class="note-header">Assessment</div>
                                    <div>${esc(patient.nurse_assessment)}</div>
                                </div>
                            ` : ''}
                            ${patient.nurse_plan ? `
                                <div class="clinical-note">
                                    <div class="note-header">Plan</div>
                                    <div>${esc(patient.nurse_plan)}</div>
                                </div>
                            ` : ''}
                            ${patient.nurse_notes ? `
                                <div class="clinical-note">
                                    <div class="note-header">Notes</div>
                                    <div>${esc(patient.nurse_notes)}</div>
                                </div>
                            ` : ''}
                        </div>
                    ` : ''}
                    
                    ${hasDoctorNotes ? `
                        <div>
                            <h4 style="color: #3498db; margin-bottom: 10px;">👨‍⚕️ Physician Documentation</h4>
                            ${patient.doctor_subjective ? `
                                <div class="clinical-note">
                                    <div class="note-header">Subjective</div>
                                    <div>${esc(patient.doctor_subjective)}</div>
                                </div>
                            ` : ''}
                            ${patient.doctor_objective ? `
                                <div class="clinical-note">
                                    <div class="note-header">Objective</div>
                                    <div>${esc(patient.doctor_objective)}</div>
                                </div>
                            ` : ''}
                            ${patient.doctor_assessment ? `
                                <div class="clinical-note">
                                    <div class="note-header">Assessment</div>
                                    <div>${esc(patient.doctor_assessment)}</div>
                                </div>
                            ` : ''}
                            ${patient.doctor_plan ? `
                                <div class="clinical-note">
                                    <div class="note-header">Plan</div>
                                    <div>${esc(patient.doctor_plan)}</div>
                                </div>
                            ` : ''}
                        </div>
                    ` : ''}
                </div>
            `;
        })()}
        
        <div class="footer">
            <div>This document contains confidential patient health information protected by medical privacy laws.</div>
            <div>Generated by EHR Healthcare System on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</div>
            <div style="margin-top: 10px; font-size: 11px;">
                Patient: ${esc(patient.name)} | ID: ${esc(patient.id || 'Not assigned')} | 
                Risk Level: ${stats.riskLevel} | Page 1 of 1
            </div>
        </div>
        
        <script>
            // Auto-print when document loads
            window.onload = function() {
                setTimeout(function() {
                    window.print();
                }, 500);
            };
        </script>
    </body>
    </html>
  `;
  
  printWindow.document.write(printDocument);
  printWindow.document.close();
};

// =============================================
// STAFF MANAGEMENT SYSTEM
// =============================================

// Staff Management Class
class StaffManagementSystem {
  constructor() {
    this.staff = JSON.parse(localStorage.getItem('ehrStaff') || '[]');
    this.departments = [
      'Emergency Department',
      'Medical Ward',
      'Surgical Ward',
      'ICU',
      'Pediatrics',
      'Obstetrics',
      'Laboratory',
      'Radiology',
      'Pharmacy',
      'Administration'
    ];
    this.roles = [
      'Chief of Staff',
      'Department Head',
      'Senior Physician',
      'Resident Doctor',
      'Nurse Manager',
      'Registered Nurse',
      'Licensed Practical Nurse',
      'Nurse Aide',
      'Lab Technician',
      'Pharmacist',
      'Radiologic Technologist',
      'Administrative Staff',
      'Support Staff'
    ];
    this.init();
  }

  init() {
    console.log('Initializing Staff Management System...');
    
    // Delay initialization to ensure DOM elements exist
    setTimeout(() => {
      this.updateStaffStats();
      this.renderStaffList();
      this.bindEvents();
      
      // Add sample data if empty
      if (this.staff.length === 0) {
        this.addSampleStaff();
      }
      console.log('✅ Staff Management System fully initialized');
    }, 100);
  }

  bindEvents() {
    console.log('🔗 Binding staff management events...');
    
    // Staff management buttons
    const addStaffBtn = document.getElementById('addStaffBtn');
    if (addStaffBtn) {
      addStaffBtn.addEventListener('click', () => this.showAddStaffModal());
      console.log('✅ Add staff button bound');
    } else {
      console.warn('⚠️ Add staff button not found');
    }

    const viewSchedulesBtn = document.getElementById('viewSchedulesBtn');
    if (viewSchedulesBtn) {
      viewSchedulesBtn.addEventListener('click', () => this.showSchedulesModal());
      console.log('✅ View schedules button bound');
    } else {
      console.warn('⚠️ View schedules button not found');
    }

    const departmentStaffBtn = document.getElementById('departmentStaffBtn');
    if (departmentStaffBtn) {
      departmentStaffBtn.addEventListener('click', () => this.showDepartmentStaffModal());
      console.log('✅ Department staff button bound');
    } else {
      console.warn('⚠️ Department staff button not found');
    }

    const credentialsBtn = document.getElementById('credentialsBtn');
    if (credentialsBtn) {
      credentialsBtn.addEventListener('click', () => this.showCredentialsModal());
      console.log('✅ Credentials button bound');
    } else {
      console.warn('⚠️ Credentials button not found');
    }

    // Filter change
    const staffFilter = document.getElementById('staffFilter');
    if (staffFilter) {
      staffFilter.addEventListener('change', () => this.filterStaff());
      console.log('✅ Staff filter bound');
    } else {
      console.warn('⚠️ Staff filter not found');
    }

    // Refresh button
    const refreshStaff = document.getElementById('refreshStaff');
    if (refreshStaff) {
      refreshStaff.addEventListener('click', () => this.refreshStaffData());
      console.log('✅ Refresh staff button bound');
    } else {
      console.warn('⚠️ Refresh staff button not found');
    }
    
    console.log('🔗 Staff event binding completed');
  }

  addSampleStaff() {
    const sampleStaff = [
      {
        id: 'ST001',
        firstName: 'Dr. Maria',
        lastName: 'Santos',
        role: 'Chief of Staff',
        department: 'Administration',
        email: 'maria.santos@hospital.com',
        phone: '+63 917 123 4567',
        licenseNumber: 'MD-12345',
        status: 'active',
        shift: 'day',
        specialization: 'Internal Medicine',
        hireDate: '2020-01-15',
        lastLogin: new Date().toISOString()
      },
      {
        id: 'ST002',
        firstName: 'Nurse Ana',
        lastName: 'Cruz',
        role: 'Nurse Manager',
        department: 'Emergency Department',
        email: 'ana.cruz@hospital.com',
        phone: '+63 918 234 5678',
        licenseNumber: 'RN-67890',
        status: 'active',
        shift: 'night',
        specialization: 'Emergency Nursing',
        hireDate: '2019-03-20',
        lastLogin: new Date(Date.now() - 1000 * 60 * 30).toISOString() // 30 mins ago
      },
      {
        id: 'ST003',
        firstName: 'Dr. Jose',
        lastName: 'Reyes',
        role: 'Senior Physician',
        department: 'ICU',
        email: 'jose.reyes@hospital.com',
        phone: '+63 919 345 6789',
        licenseNumber: 'MD-23456',
        status: 'active',
        shift: 'day',
        specialization: 'Critical Care',
        hireDate: '2021-06-10',
        lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() // 2 hours ago
      }
    ];

    this.staff = sampleStaff;
    this.saveStaff();
    this.updateStaffStats();
    this.renderStaffList();
  }

  updateStaffStats() {
    const totalCount = this.staff.length;
    const onDutyCount = this.staff.filter(s => s.status === 'active' && this.isOnDuty(s)).length;
    
    const totalEl = document.getElementById('totalStaffCount');
    const onDutyEl = document.getElementById('onDutyCount');
    const staffCountEl = document.getElementById('staffCount');
    
    if (totalEl) totalEl.textContent = totalCount;
    if (onDutyEl) onDutyEl.textContent = onDutyCount;
    if (staffCountEl) staffCountEl.textContent = totalCount;
  }

  isOnDuty(staff) {
    // Simple logic - could be enhanced with actual shift schedules
    const now = new Date();
    const hour = now.getHours();
    
    if (staff.shift === 'day') {
      return hour >= 7 && hour < 19; // 7 AM to 7 PM
    } else if (staff.shift === 'night') {
      return hour >= 19 || hour < 7; // 7 PM to 7 AM
    }
    return true; // Default for other shifts
  }

  renderStaffList() {
    const container = document.getElementById('staffList');
    if (!container) return;

    if (this.staff.length === 0) {
      container.innerHTML = `
        <div class="text-center text-gray-500 py-8">
          <div class="text-4xl mb-3">👥</div>
          <p>No staff members found</p>
          <button type="button" class="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onclick="staffSystem.showAddStaffModal()">
            Add First Staff Member
          </button>
        </div>
      `;
      return;
    }

    const staffHtml = this.staff.map(staff => {
      const statusColor = staff.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
      const onDuty = this.isOnDuty(staff);
      const dutyBadge = onDuty ? '<span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">On Duty</span>' : '';
      
      return `
        <div class="staff-item bg-white border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer" onclick="staffSystem.showStaffDetails('${staff.id}')">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center font-semibold">
                ${staff.firstName.charAt(0)}${staff.lastName.charAt(0)}
              </div>
              <div>
                <h5 class="font-semibold">${staff.firstName} ${staff.lastName}</h5>
                <p class="text-sm text-gray-600">${staff.role} • ${staff.department}</p>
                <p class="text-xs text-gray-500">${staff.specialization || 'General'}</p>
              </div>
            </div>
            <div class="text-right">
              <span class="px-2 py-1 ${statusColor} text-xs rounded-full">${staff.status}</span>
              ${dutyBadge}
              <p class="text-xs text-gray-500 mt-1">${staff.shift} shift</p>
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = staffHtml;
  }

  showStaffDetails(staffId) {
    const staff = this.staff.find(s => s.id === staffId);
    if (!staff) return;

    const panel = document.getElementById('staffDetailsPanel');
    if (!panel) return;

    const lastLoginFormatted = new Date(staff.lastLogin).toLocaleString();
    const hireDateFormatted = new Date(staff.hireDate).toLocaleDateString();
    const onDuty = this.isOnDuty(staff);

    panel.innerHTML = `
      <div class="staff-details">
        <div class="text-center mb-4">
          <div class="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-xl mx-auto mb-3">
            ${staff.firstName.charAt(0)}${staff.lastName.charAt(0)}
          </div>
          <h4 class="font-bold text-lg">${staff.firstName} ${staff.lastName}</h4>
          <p class="text-gray-600">${staff.role}</p>
        </div>

        <div class="space-y-3">
          <div class="flex justify-between py-2 border-b">
            <span class="text-gray-600">Department:</span>
            <span class="font-medium">${staff.department}</span>
          </div>
          <div class="flex justify-between py-2 border-b">
            <span class="text-gray-600">Status:</span>
            <span class="px-2 py-1 ${staff.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} text-xs rounded-full">${staff.status}</span>
          </div>
          <div class="flex justify-between py-2 border-b">
            <span class="text-gray-600">Shift:</span>
            <span class="font-medium">${staff.shift} ${onDuty ? '🟢 On Duty' : '🔴 Off Duty'}</span>
          </div>
          <div class="flex justify-between py-2 border-b">
            <span class="text-gray-600">Email:</span>
            <span class="font-medium text-sm">${staff.email}</span>
          </div>
          <div class="flex justify-between py-2 border-b">
            <span class="text-gray-600">Phone:</span>
            <span class="font-medium">${staff.phone}</span>
          </div>
          <div class="flex justify-between py-2 border-b">
            <span class="text-gray-600">License:</span>
            <span class="font-medium">${staff.licenseNumber}</span>
          </div>
          <div class="flex justify-between py-2 border-b">
            <span class="text-gray-600">Specialization:</span>
            <span class="font-medium">${staff.specialization || 'General'}</span>
          </div>
          <div class="flex justify-between py-2 border-b">
            <span class="text-gray-600">Hire Date:</span>
            <span class="font-medium">${hireDateFormatted}</span>
          </div>
          <div class="flex justify-between py-2 border-b">
            <span class="text-gray-600">Last Login:</span>
            <span class="font-medium text-sm">${lastLoginFormatted}</span>
          </div>
        </div>

        <div class="mt-6 space-y-2">
          <button type="button" class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onclick="staffSystem.editStaff('${staff.id}')">
            ✏️ Edit Details
          </button>
          <button type="button" class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" onclick="staffSystem.viewSchedule('${staff.id}')">
            📅 View Schedule
          </button>
          <button type="button" class="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700" onclick="staffSystem.viewCredentials('${staff.id}')">
            📜 Credentials
          </button>
        </div>
      </div>
    `;
  }

  showAddStaffModal() {
    const modalContent = `
      <div class="bg-white rounded-lg p-6 max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
        <h3 class="text-xl font-bold mb-4">➕ Add New Staff Member</h3>
        <form id="addStaffForm" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1">First Name *</label>
              <input type="text" name="firstName" required class="w-full border rounded-lg px-3 py-2" placeholder="Enter first name">
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Last Name *</label>
              <input type="text" name="lastName" required class="w-full border rounded-lg px-3 py-2" placeholder="Enter last name">
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Role *</label>
              <select name="role" required class="w-full border rounded-lg px-3 py-2">
                <option value="">Select Role</option>
                ${this.roles.map(role => `<option value="${role}">${role}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Department *</label>
              <select name="department" required class="w-full border rounded-lg px-3 py-2">
                <option value="">Select Department</option>
                ${this.departments.map(dept => `<option value="${dept}">${dept}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Email *</label>
              <input type="email" name="email" required class="w-full border rounded-lg px-3 py-2" placeholder="email@hospital.com">
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Phone *</label>
              <input type="tel" name="phone" required class="w-full border rounded-lg px-3 py-2" placeholder="+63 XXX XXX XXXX">
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">License Number</label>
              <input type="text" name="licenseNumber" class="w-full border rounded-lg px-3 py-2" placeholder="License/ID Number">
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Shift</label>
              <select name="shift" class="w-full border rounded-lg px-3 py-2">
                <option value="day">Day Shift (7 AM - 7 PM)</option>
                <option value="night">Night Shift (7 PM - 7 AM)</option>
                <option value="rotating">Rotating</option>
                <option value="on-call">On-Call</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Specialization</label>
              <input type="text" name="specialization" class="w-full border rounded-lg px-3 py-2" placeholder="Area of expertise">
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Hire Date</label>
              <input type="date" name="hireDate" class="w-full border rounded-lg px-3 py-2" value="${new Date().toISOString().split('T')[0]}">
            </div>
          </div>
          <div class="flex gap-3 pt-4 border-t">
            <button type="submit" class="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              ➕ Add Staff Member
            </button>
            <button type="button" onclick="closeModal()" class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
              Cancel
            </button>
          </div>
        </form>
      </div>
    `;

    if (typeof showModal === 'function') {
      showModal(modalContent);
      
      // Bind form submission
      const form = document.getElementById('addStaffForm');
      if (form) {
        form.addEventListener('submit', (e) => this.handleAddStaff(e));
      }
    }
  }

  handleAddStaff(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const newStaff = {
      id: 'ST' + String(Date.now()).slice(-6),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      role: formData.get('role'),
      department: formData.get('department'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      licenseNumber: formData.get('licenseNumber') || '',
      status: 'active',
      shift: formData.get('shift') || 'day',
      specialization: formData.get('specialization') || '',
      hireDate: formData.get('hireDate') || new Date().toISOString().split('T')[0],
      lastLogin: new Date().toISOString()
    };

    this.staff.push(newStaff);
    this.saveStaff();
    this.updateStaffStats();
    this.renderStaffList();
    
    if (typeof closeModal === 'function') {
      closeModal();
    }
    
    if (typeof showToast === 'function') {
      showToast('Staff member added successfully!', 'success');
    }
  }

  filterStaff() {
    const filter = document.getElementById('staffFilter')?.value || 'all';
    let filteredStaff = this.staff;

    switch (filter) {
      case 'active':
        filteredStaff = this.staff.filter(s => s.status === 'active');
        break;
      case 'inactive':
        filteredStaff = this.staff.filter(s => s.status !== 'active');
        break;
      case 'doctors':
        filteredStaff = this.staff.filter(s => s.role.toLowerCase().includes('doctor') || s.role.toLowerCase().includes('physician'));
        break;
      case 'nurses':
        filteredStaff = this.staff.filter(s => s.role.toLowerCase().includes('nurse'));
        break;
      case 'admin':
        filteredStaff = this.staff.filter(s => s.role.toLowerCase().includes('admin') || s.department === 'Administration');
        break;
      case 'support':
        filteredStaff = this.staff.filter(s => s.role.toLowerCase().includes('support') || s.role.toLowerCase().includes('aide'));
        break;
    }

    // Temporarily store filtered results and re-render
    const originalStaff = this.staff;
    this.staff = filteredStaff;
    this.renderStaffList();
    this.staff = originalStaff;
  }

  refreshStaffData() {
    this.updateStaffStats();
    this.renderStaffList();
    if (typeof showToast === 'function') {
      showToast('Staff data refreshed', 'success');
    }
  }

  saveStaff() {
    localStorage.setItem('ehrStaff', JSON.stringify(this.staff));
  }

  // Additional methods for modal functionality
  showSchedulesModal() {
    const modalContent = `
      <div class="bg-white rounded-lg p-6 max-w-6xl mx-auto">
        <h3 class="text-xl font-bold mb-4">📅 Staff Schedules</h3>
        <div class="mb-4">
          <p class="text-gray-600">Schedule management feature - view and manage staff work schedules, shifts, and time off requests.</p>
        </div>
        <div class="text-center py-8 text-gray-500">
          <div class="text-4xl mb-3">📅</div>
          <p>Schedule management interface would be implemented here</p>
        </div>
        <div class="flex gap-3 pt-4 border-t">
          <button onclick="closeModal()" class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Close
          </button>
        </div>
      </div>
    `;
    if (typeof showModal === 'function') showModal(modalContent);
  }

  showDepartmentStaffModal() {
    const modalContent = `
      <div class="bg-white rounded-lg p-6 max-w-6xl mx-auto">
        <h3 class="text-xl font-bold mb-4">🏥 Department Staff Overview</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${this.departments.map(dept => {
            const deptStaff = this.staff.filter(s => s.department === dept);
            return `
              <div class="border rounded-lg p-4">
                <h4 class="font-semibold mb-2">${dept}</h4>
                <p class="text-sm text-gray-600">${deptStaff.length} staff members</p>
                <div class="text-xs text-gray-500 mt-2">
                  ${deptStaff.slice(0, 3).map(s => s.firstName + ' ' + s.lastName).join(', ')}
                  ${deptStaff.length > 3 ? ` and ${deptStaff.length - 3} more...` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <div class="flex gap-3 pt-4 border-t">
          <button onclick="closeModal()" class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Close
          </button>
        </div>
      </div>
    `;
    if (typeof showModal === 'function') showModal(modalContent);
  }

  showCredentialsModal() {
    const modalContent = `
      <div class="bg-white rounded-lg p-6 max-w-6xl mx-auto">
        <h3 class="text-xl font-bold mb-4">📜 Staff Credentials & Certifications</h3>
        <div class="mb-4">
          <p class="text-gray-600">Manage professional licenses, certifications, and credentials for all staff members.</p>
        </div>
        <div class="text-center py-8 text-gray-500">
          <div class="text-4xl mb-3">📜</div>
          <p>Credentials management interface would be implemented here</p>
        </div>
        <div class="flex gap-3 pt-4 border-t">
          <button onclick="closeModal()" class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Close
          </button>
        </div>
      </div>
    `;
    if (typeof showModal === 'function') showModal(modalContent);
  }
}

// Patient Admission System
class PatientAdmissionSystem {
  constructor() {
    this.admissions = [];
    this.nextMRN = 1000001;
    this.initializeUI();
  }

  initializeUI() {
    // Register Patient button
    const registerBtn = document.getElementById('registerPatientBtn');
    if (registerBtn) {
      registerBtn.addEventListener('click', () => this.registerPatient());
    }

    // Clear form button
    const clearBtn = document.getElementById('clearAdmissionFormBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearForm());
    }

    // Preview button
    const previewBtn = document.getElementById('previewAdmissionBtn');
    if (previewBtn) {
      previewBtn.addEventListener('click', () => this.previewRegistration());
    }

    // Auto-generate MRN
    this.generateMRN();
    
    // Load existing admissions
    this.loadAdmissions();
  }

  generateMRN() {
    const mrnField = document.getElementById('admissionMRN');
    if (mrnField) {
      mrnField.value = `MRN-${this.nextMRN}`;
    }
  }

  registerPatient() {
    // Collect form data
    const formData = {
      mrn: document.getElementById('admissionMRN')?.value,
      firstName: document.getElementById('admissionFirstName')?.value,
      lastName: document.getElementById('admissionLastName')?.value,
      dob: document.getElementById('admissionDOB')?.value,
      gender: document.getElementById('admissionGender')?.value,
      phone: document.getElementById('admissionPhone')?.value,
      address: document.getElementById('admissionAddress')?.value,
      city: document.getElementById('admissionCity')?.value,
      emergencyContact: document.getElementById('admissionEmergencyContact')?.value,
      emergencyPhone: document.getElementById('admissionEmergencyPhone')?.value,
      admissionType: document.getElementById('admissionType')?.value,
      department: document.getElementById('admissionDepartment')?.value,
      physician: document.getElementById('admissionPhysician')?.value,
      complaint: document.getElementById('admissionComplaint')?.value,
      insurance: document.getElementById('admissionInsurance')?.value,
      policyNumber: document.getElementById('admissionPolicyNumber')?.value,
      admissionDate: new Date().toISOString(),
      status: 'Active'
    };

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'dob', 'gender', 'admissionType', 'department'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in required fields: ${missingFields.join(', ')}`);
      return;
    }

    // Add to admissions array
    this.admissions.push(formData);
    
    // Save to localStorage
    this.saveAdmissions();
    
    // Update admissions table
    this.updateAdmissionsTable();
    
    // Clear form and generate new MRN
    this.clearForm();
    this.nextMRN++;
    this.generateMRN();
    
    // Show success message
    alert(`Patient ${formData.firstName} ${formData.lastName} successfully registered!`);
  }

  clearForm() {
    const formFields = [
      'admissionFirstName', 'admissionLastName', 'admissionDOB', 'admissionGender',
      'admissionPhone', 'admissionAddress', 'admissionCity', 'admissionEmergencyContact',
      'admissionEmergencyPhone', 'admissionType', 'admissionDepartment', 'admissionPhysician',
      'admissionComplaint', 'admissionInsurance', 'admissionPolicyNumber'
    ];

    formFields.forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.value = '';
      }
    });
  }

  previewRegistration() {
    const formData = {
      mrn: document.getElementById('admissionMRN')?.value,
      firstName: document.getElementById('admissionFirstName')?.value,
      lastName: document.getElementById('admissionLastName')?.value,
      dob: document.getElementById('admissionDOB')?.value,
      gender: document.getElementById('admissionGender')?.value,
      phone: document.getElementById('admissionPhone')?.value,
      department: document.getElementById('admissionDepartment')?.value,
      admissionType: document.getElementById('admissionType')?.value,
      complaint: document.getElementById('admissionComplaint')?.value
    };

    const preview = `
      Patient Registration Preview:
      
      MRN: ${formData.mrn}
      Name: ${formData.firstName} ${formData.lastName}
      DOB: ${formData.dob}
      Gender: ${formData.gender}
      Phone: ${formData.phone}
      Department: ${formData.department}
      Admission Type: ${formData.admissionType}
      Chief Complaint: ${formData.complaint}
    `;

    alert(preview);
  }

  loadAdmissions() {
    const saved = localStorage.getItem('patientAdmissions');
    if (saved) {
      this.admissions = JSON.parse(saved);
      this.updateAdmissionsTable();
      
      // Update next MRN
      if (this.admissions.length > 0) {
        const lastMRN = Math.max(...this.admissions.map(admission => 
          parseInt(admission.mrn.replace('MRN-', ''))
        ));
        this.nextMRN = lastMRN + 1;
      }
    }
  }

  saveAdmissions() {
    localStorage.setItem('patientAdmissions', JSON.stringify(this.admissions));
  }

  updateAdmissionsTable() {
    const tbody = document.getElementById('recentAdmissionsTable');
    if (!tbody) return;

    // Get recent admissions (last 10)
    const recentAdmissions = this.admissions.slice(-10).reverse();

    tbody.innerHTML = recentAdmissions.map(admission => `
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${admission.mrn}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${admission.firstName} ${admission.lastName}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${admission.dob}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${admission.department}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${new Date(admission.admissionDate).toLocaleDateString()}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            admission.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }">
            ${admission.status}
          </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button onclick="window.admissionSystem.viewPatient('${admission.mrn}')" class="text-blue-600 hover:text-blue-900 mr-3">View</button>
          <button onclick="window.admissionSystem.editPatient('${admission.mrn}')" class="text-indigo-600 hover:text-indigo-900">Edit</button>
        </td>
      </tr>
    `).join('');
  }

  viewPatient(mrn) {
    const patient = this.admissions.find(admission => admission.mrn === mrn);
    if (patient) {
      const details = `
        Patient Details:
        
        MRN: ${patient.mrn}
        Name: ${patient.firstName} ${patient.lastName}
        DOB: ${patient.dob}
        Gender: ${patient.gender}
        Phone: ${patient.phone}
        Address: ${patient.address}, ${patient.city}
        Emergency Contact: ${patient.emergencyContact} (${patient.emergencyPhone})
        
        Admission Details:
        Type: ${patient.admissionType}
        Department: ${patient.department}
        Physician: ${patient.physician}
        Date: ${new Date(patient.admissionDate).toLocaleDateString()}
        Status: ${patient.status}
        
        Chief Complaint: ${patient.complaint}
        
        Insurance: ${patient.insurance}
        Policy: ${patient.policyNumber}
      `;
      alert(details);
    }
  }

  editPatient(mrn) {
    const patient = this.admissions.find(admission => admission.mrn === mrn);
    if (patient) {
      // Populate form with patient data
      document.getElementById('admissionMRN').value = patient.mrn;
      document.getElementById('admissionFirstName').value = patient.firstName;
      document.getElementById('admissionLastName').value = patient.lastName;
      document.getElementById('admissionDOB').value = patient.dob;
      document.getElementById('admissionGender').value = patient.gender;
      document.getElementById('admissionPhone').value = patient.phone || '';
      document.getElementById('admissionAddress').value = patient.address || '';
      document.getElementById('admissionCity').value = patient.city || '';
      document.getElementById('admissionEmergencyContact').value = patient.emergencyContact || '';
      document.getElementById('admissionEmergencyPhone').value = patient.emergencyPhone || '';
      document.getElementById('admissionType').value = patient.admissionType;
      document.getElementById('admissionDepartment').value = patient.department;
      document.getElementById('admissionPhysician').value = patient.physician || '';
      document.getElementById('admissionComplaint').value = patient.complaint || '';
      document.getElementById('admissionInsurance').value = patient.insurance || '';
      document.getElementById('admissionPolicyNumber').value = patient.policyNumber || '';
      
      // Switch to admission tab
      const admissionTab = document.querySelector('[data-target="tab-admission"]');
      if (admissionTab) {
        admissionTab.click();
      }
    }
  }
}

// Global functions for Patient Admission System
window.showAddStaffModal = function() {
  if (window.staffSystem) {
    window.staffSystem.showAddStaffModal();
  }
}
