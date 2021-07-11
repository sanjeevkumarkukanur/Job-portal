import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhmw5bV1i_uYluTdpWcPn7zWtasYRqGIw",
  authDomain: "job-portal-cb7ab.firebaseapp.com",
  projectId: "job-portal-cb7ab",
  storageBucket: "job-portal-cb7ab.appspot.com",
  messagingSenderId: "635431163762",
  appId: "1:635431163762:web:0ef0501ac34bcc8beb2feb",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
