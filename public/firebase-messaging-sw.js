importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCYdDarZvNQdmJoZ11K5RqW9qUtpGDYLHU",
  authDomain: "notificationapp-3e898.firebaseapp.com",
  databaseURL: "https://notificationapp-3e898.firebaseio.com",
  projectId: "notificationapp-3e898",
  storageBucket: "notificationapp-3e898.appspot.com",
  messagingSenderId: "179822322762",
  appId: "1:179822322762:web:6505e1055320d683c9b2b3",
  measurementId: "G-QPXTTHKBRL"
};

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();