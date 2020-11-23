import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLR668S7Z26QbvijGFSafwI97hm2GfKXY",
  authDomain: "instagram-clone-a6e70.firebaseapp.com",
  databaseURL: "https://instagram-clone-a6e70.firebaseio.com",
  projectId: "instagram-clone-a6e70",
  storageBucket: "instagram-clone-a6e70.appspot.com",
  messagingSenderId: "1029223752843",
  appId: "1:1029223752843:web:2e054dbf6963ab10dde08e",
  measurementId: "G-95HG467QM6",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
