// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ed511.firebaseapp.com",
  projectId: "mern-estate-ed511",
  storageBucket: "mern-estate-ed511.firebasestorage.app",
  messagingSenderId: "986768023694",
  appId: "1:986768023694:web:a978635af601af2c4269df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
