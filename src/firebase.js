import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB8LqE-NWGNFM7IS1tAAirxE5oJW1MgEe4",
    authDomain: "job-portal-c713b.firebaseapp.com",
    projectId: "job-portal-c713b",
    storageBucket: "job-portal-c713b.appspot.com",
    messagingSenderId: "958747274774",
    appId: "1:958747274774:web:620aef9a0414856a354f37"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();


export default db;