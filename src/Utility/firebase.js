// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Ow5NeuGcCW6_RMc-XYpvLQDq6kAjbKs",
  authDomain: "clone-528f5.firebaseapp.com",
  projectId: "clone-528f5",
  storageBucket: "clone-528f5.firebasestorage.app",
  messagingSenderId: "212293944926",
  appId: "1:212293944926:web:11ee594eb903f3789cd6cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = app.firestore();
export const db = getFirestore(app);
