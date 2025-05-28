// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNj_Yxd4M7uB-6ZWq4JRDLlw18WMpq2Fc",
  authDomain: "clone-2028f.firebaseapp.com",
  projectId: "clone-2028f",
  storageBucket: "clone-2028f.firebasestorage.app",
  messagingSenderId: "12194236956",
  appId: "1:12194236956:web:3421336cb2a71cd90a6dd9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
