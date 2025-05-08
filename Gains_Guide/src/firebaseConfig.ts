
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyCtoP1MG_5P9HIXdU4i7CV3EmtEIajAUK4",
  authDomain: "gainsguide-73109.firebaseapp.com",
  projectId: "gainsguide-73109",
  storageBucket: "gainsguide-73109.firebasestorage.app",
  messagingSenderId: "957542546931",
  appId: "1:957542546931:web:7f3a4e064573e542ede686",
  measurementId: "G-9WMYY5V4VX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);