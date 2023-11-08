// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCbwuMyt_2reRaQoNMAwLTwCXSy4i55ss",
  authDomain: "tfg1-e0f0e.firebaseapp.com",
  projectId: "tfg1-e0f0e",
  storageBucket: "tfg1-e0f0e.appspot.com",
  messagingSenderId: "510352133225",
  appId: "1:510352133225:web:bede1322f778c6169fa6f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {app, db}