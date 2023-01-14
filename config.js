

const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyCkckZa1WCkNDgBSdCxMo0XllCXnCw0eDI",
    authDomain: "jobtask-9aeae.firebaseapp.com",
    projectId: "jobtask-9aeae",
    storageBucket: "jobtask-9aeae.appspot.com",
    messagingSenderId: "349192263619",
    appId: "1:349192263619:web:a986ba19129abd57330f76"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;

