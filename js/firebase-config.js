// Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDlsb0dJOfCKuCL979G6eB8eueG9s6T_78",
  authDomain: "wemen-454112.firebaseapp.com",
  projectId: "wemen-454112",
  storageBucket: "wemen-454112.firebasestorage.app",
  messagingSenderId: "242745090697",
  appId: "1:242745090697:web:81bb57891f0b1021be5c58",
  measurementId: "G-6YFHZCL7G7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Enable anonymous authentication
auth.useDeviceLanguage();

// Set persistence to local
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .catch((error) => {
        console.error("Firebase persistence error:", error);
    });

// Export services for use in other files
window.auth = auth;
window.db = db;
window.storage = storage;
