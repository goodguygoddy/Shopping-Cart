import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBP05cE590ZKrZzqUei0S95UcU0vCFKAOM",
  authDomain: "whitepandatask.firebaseapp.com",
  databaseURL: "https://whitepandatask.firebaseio.com",
  projectId: "whitepandatask",
  storageBucket: "whitepandatask.appspot.com",
  messagingSenderId: "842643443371",
  appId: "1:842643443371:web:5fccb873f9eb8063a9f1ee",
  measurementId: "G-WW72HCX8XR"
};
firebase.initializeApp(firebaseConfig);
// firebase.firestore(); // We don't need this anymore because we create firestore in index.js

export default firebase;
