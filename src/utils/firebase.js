// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb7UxyZBioJ0bva8JIVqeAqLm-ifxIMFw",
  authDomain: "streamai-9c42c.firebaseapp.com",
  projectId: "streamai-9c42c",
  storageBucket: "streamai-9c42c.firebasestorage.app",
  messagingSenderId: "676906370220",
  appId: "1:676906370220:web:b4fbb71bbf14a4241e8b09",
  measurementId: "G-V6QVJPMSWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();