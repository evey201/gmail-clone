import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMjZj7bWASx_w5hTdRDF4BrdN_GYI5cME",
    authDomain: "clone-6070c.firebaseapp.com",
    projectId: "clone-6070c",
    storageBucket: "clone-6070c.appspot.com",
    messagingSenderId: "99985847828",
    appId: "1:99985847828:web:d00da2f206698a989e5901",
    measurementId: "G-6N1W813BZ5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {db, auth, provider};