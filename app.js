// Firebase init
const firebaseConfig = {
  apiKey: "AIzaSyAojqcg_UGpamJjTJHb6H-BRoVF5mDZgrU",
  authDomain: "one-care-system.firebaseapp.com",
  projectId: "one-care-system",
  storageBucket: "one-care-system.appspot.com",
  messagingSenderId: "982635756225",
  appId: "1:982635756225:web:c664f162b735b56703f240",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

auth.onAuthStateChanged((user) => {
  const modal = document.getElementById("loginModal");
  if (user) {
    if (modal) modal.classList.add("hidden");
  } else {
    if (modal) modal.classList.remove("hidden");
  }
});

// LOGIN LOGIC
document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;
  try {
    await auth.signInWithEmailAndPassword(email, pass);
  } catch (e) {
    document.getElementById("loginError").textContent = e.message;
    document.getElementById("loginError").classList.remove("hidden");
  }
});
document.getElementById("loginCancel").addEventListener("click", () => {
  document.getElementById("loginModal").classList.add("hidden");
});

// DARK MODE TOGGLE
document.getElementById("darkToggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// Simple breadcrumb update
document.querySelectorAll(".navbtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("breadcrumb-current").textContent = btn.textContent.trim();
  });
});
