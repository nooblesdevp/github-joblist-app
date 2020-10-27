import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA32rPtT78Lid7h0pobpcaAcDBGQUBsM54",
  authDomain: "joblist-github-app.firebaseapp.com",
  databaseURL: "https://joblist-github-app.firebaseio.com",
  projectId: "joblist-github-app",
  storageBucket: "joblist-github-app.appspot.com",
  messagingSenderId: "377279870510",
  appId: "1:377279870510:web:3b667e0c050803d05851bf",
  measurementId: "G-P1SFKZB1BT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
