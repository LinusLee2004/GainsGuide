// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCtoP1MG_5P9HIXdU4i7CV3EmtEIajAUK4",
  authDomain: "gainsguide-73109.firebaseapp.com",
  projectId: "gainsguide-73109",
  storageBucket: "gainsguide-73109.firebasestorage.app",
  messagingSenderId: "957542546931",
  appId: "1:957542546931:web:7f3a4e064573e542ede686",
  measurementId: "G-9WMYY5V4VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);