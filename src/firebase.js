import firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyA6vUuD40o21iaL26DyBSzduJPkFPD4f8I',
  authDomain: 'slack-clone-b82ac.firebaseapp.com',
  projectId: 'slack-clone-b82ac',
  storageBucket: 'slack-clone-b82ac.appspot.com',
  messagingSenderId: '385459134658',
  appId: '1:385459134658:web:d7d239241207225a67db5b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
