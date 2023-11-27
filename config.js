// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseApp = require('firebase/app')
const firestore = require('firebase/firestore')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4v5a8MFcdCBNzjZ3FxoVDXF67Z3bINP4",
  authDomain: "docsy-daabf.firebaseapp.com",
  projectId: "docsy-daabf",
  storageBucket: "docsy-daabf.appspot.com",
  messagingSenderId: "949661262609",
  appId: "1:949661262609:web:e085099683bfefbbdf62b0",
  measurementId: "G-ZRXCNR7VW2"
};

// Initialize Firebase
const app = firebaseApp.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = firestore.getFirestore();
const User = firestore.collection(db, "Users");
module.exports = User;

