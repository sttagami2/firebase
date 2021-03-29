import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/firebase-storage";

var firebaseConfig = {
  apiKey: "AIzaSyCmgusZubeJbpJNOl54K1qkA3Kofz1Q73I",
  authDomain: "distribution-site-8962b.firebaseapp.com",
  projectId: "distribution-site-8962b",
  storageBucket: "distribution-site-8962b.appspot.com",
  messagingSenderId: "317118153145",
  appId: "1:317118153145:web:f32f96b1ab6403f30c3668",
  measurementId: "G-P2JH0HQL6R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;