// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMHhMKs1SE_AGaPz6XOdDRlJjabyr24WY",
  authDomain: "padoc-dd156.firebaseapp.com",
  databaseURL: "https://padoc-dd156-default-rtdb.firebaseio.com",
  projectId: "padoc-dd156",
  storageBucket: "padoc-dd156.appspot.com",
  messagingSenderId: "877350512655",
  appId: "1:877350512655:web:e3a7b5d248739714621b7a",
  measurementId: "G-BK402VDNGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

var provider = new firebase.auth.GoogleAuthProvider();

export default function Ggsignin(provider){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}