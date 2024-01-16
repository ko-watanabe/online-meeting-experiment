// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAujp7a2_M9L0yGBXVfCQFk9nlyhKPXq-4",
  authDomain: "online-meeting-app-ece3f.firebaseapp.com",
  projectId: "online-meeting-app-ece3f",
  storageBucket: "online-meeting-app-ece3f.appspot.com",
  messagingSenderId: "525592394247",
  appId: "1:525592394247:web:6cff7aa44d31da4b73c8a2",
  measurementId: "G-2NEEG3CT7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);