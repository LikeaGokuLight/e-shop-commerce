import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";



const config = {
    apiKey: "AIzaSyCg0QAwUH86nC6174KTaGYNIfVBAKPgiug",
    authDomain: "e-shop-commerce-db.firebaseapp.com",
    projectId: "e-shop-commerce-db",
    storageBucket: "e-shop-commerce-db.appspot.com",
    messagingSenderId: "818428640135",
    appId: "1:818428640135:web:3afb0bc36de3faff3df122",
    measurementId: "G-9MWXMMMZBJ"
};
// Initialize Firebase
firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;