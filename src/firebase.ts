// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD53w2JX_qEnZ4WEaxe52_bAN6gBw6i2Cg",
  authDomain: "multiple-forms-9b5df.firebaseapp.com",
  projectId: "multiple-forms-9b5df",
  storageBucket: "multiple-forms-9b5df.appspot.com",
  messagingSenderId: "744422153126",
  appId: "1:744422153126:web:072a1e877afbfd7e510d67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
