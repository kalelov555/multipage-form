// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbwnBKQCPcAXZRTHv4DumqLYBLxzmOtZ0",
  authDomain: "multipage-form-second.firebaseapp.com",
  projectId: "multipage-form-second",
  storageBucket: "multipage-form-second.appspot.com",
  messagingSenderId: "456952398472",
  appId: "1:456952398472:web:fe3cccef9965f87205153d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
