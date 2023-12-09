// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
//import { useDataStore } from '../store/datosUser.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCbwuMyt_2reRaQoNMAwLTwCXSy4i55ss",
  authDomain: "tfg1-e0f0e.firebaseapp.com",
  projectId: "tfg1-e0f0e",
  storageBucket: "tfg1-e0f0e.appspot.com",
  messagingSenderId: "510352133225",
  appId: "1:510352133225:web:bede1322f778c6169fa6f8",
  databaseURL: "https://tfg1-e0f0e-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
//Inicialize Auth
const auth = getAuth(app);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

////const store = useDataStore();

let tokenMessaging = '';

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});
getToken(messaging, { vapidKey: 'BAURg_lDgE3qsPlRKVr3VaGDHj5t5Xe1Gg_n0BN-9EYG8AyNXwAsqBuoHNt86AtjJvSpSXww77Tbry4rpuRTKuU' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    //console.log("token is: ",currentToken)
    //store.setfirebaseMessaging(currentToken);
    tokenMessaging = currentToken;
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

export {app, db, auth, collection, getDocs, setDoc, doc, database, messaging, tokenMessaging}