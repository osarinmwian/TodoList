import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import  "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCxwKbB8YKux2R3RG7k8K1iqKXS3pzY0o",
  authDomain: "todoapp.firebaseapp.com",
  projectId: "todoapp",
  storageBucket: "todoapp.appspot.com",
  messagingSenderId: "274875377254",
  appId: "1:274875377254:web:d9784b7a0e7703d885afa7",
  measurementId: "G-T8HK22S3RE"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;


