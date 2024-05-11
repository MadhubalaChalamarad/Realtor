// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnE3PcVQbsDrJhdrP17kmvxT5RZmk5_eQ",
  authDomain: "realtor-1f714.firebaseapp.com",
  projectId: "realtor-1f714",
  storageBucket: "realtor-1f714.appspot.com",
  messagingSenderId: "897766701935",
  appId: "1:897766701935:web:4460416f9426182090869a",
  measurementId: "G-SC8PTDTN2G",
  databaseURL: "https://app-19a2e-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
