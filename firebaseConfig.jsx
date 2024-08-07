// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7MMQUJFokgPGIBmWGz-M0dWlbwVCs-NY",
  authDomain: "ready-up-63871.firebaseapp.com",
  projectId: "ready-up-63871",
  storageBucket: "ready-up-63871.appspot.com",
  messagingSenderId: "250257032045",
  appId: "1:250257032045:web:ed7dbcbf991ef2adcb9064",
  measurementId: "G-QS4N7ZSVVY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
