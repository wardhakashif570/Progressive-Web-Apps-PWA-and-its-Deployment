import firebase from 'firebase';

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
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}