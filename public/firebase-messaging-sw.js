 // Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDCbwuMyt_2reRaQoNMAwLTwCXSy4i55ss",
    authDomain: "tfg1-e0f0e.firebaseapp.com",
    projectId: "tfg1-e0f0e",
    storageBucket: "tfg1-e0f0e.appspot.com",
    messagingSenderId: "510352133225",
    appId: "1:510352133225:web:bede1322f778c6169fa6f8",
    databaseURL: "https://tfg1-e0f0e-default-rtdb.europe-west1.firebasedatabase.app/"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = 'Tienes notificiaciones nuevas';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });
 //const app = firebase.initializeApp(firebaseConfig);


