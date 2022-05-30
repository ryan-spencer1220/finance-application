import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwvZpBpGXhij61_tlNbd7tZ3wtc2TuMeg",
  authDomain: "mymoney-5b0d8.firebaseapp.com",
  projectId: "mymoney-5b0d8",
  storageBucket: "mymoney-5b0d8.appspot.com",
  messagingSenderId: "426649961332",
  appId: "1:426649961332:web:d60b1ceff756bf3a73a221",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initilize Service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
