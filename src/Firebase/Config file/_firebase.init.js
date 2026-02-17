// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHxJ7Faa-Np2dj31I1NGFUKKJqKeoSBnI",
  authDomain: "ict-seba.firebaseapp.com",
  projectId: "ict-seba",
  storageBucket: "ict-seba.firebasestorage.app",
  messagingSenderId: "245926852565",
  appId: "1:245926852565:web:7f6e479d55347613306f5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
