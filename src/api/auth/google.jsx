// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxB-3rIlcIChkrSlxs8QcpbtVWhqxnY4w",
  authDomain: "neuratwin-4cd7c.firebaseapp.com",
  projectId: "neuratwin-4cd7c",
  storageBucket: "neuratwin-4cd7c.appspot.com",
  messagingSenderId: "14874590838",
  appId: "1:14874590838:web:a3f1ba534425639158e957",
  measurementId: "G-GQ9NC46H8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
