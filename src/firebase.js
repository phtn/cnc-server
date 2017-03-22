import * as firebase from 'firebase'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAmP8DMo4zq8HXROwfyxmEVjvmdKY3rWsE",
  authDomain: "swordfish-e3643.firebaseapp.com",
  databaseURL: "https://swordfish-e3643.firebaseio.com",
  storageBucket: "swordfish-e3643.appspot.com",
  messagingSenderId: "1006429554309"
};
firebase.initializeApp(config);

let db = firebase.database()
let auth = firebase.auth()

export default db