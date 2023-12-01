// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-68286.firebaseapp.com",
  projectId: "blog-68286",
  storageBucket: "blog-68286.appspot.com",
  messagingSenderId: "931827368742",
  appId: "1:931827368742:web:f88aaf6fe96d07fd8f37e7",
  measurementId: "G-647R9R3ZE7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
