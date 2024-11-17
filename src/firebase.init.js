// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWZM3JHHsg0sF2pS1aj0z6ZaKbYJsF4Xc",
  authDomain: "dragon-news-6c9b1.firebaseapp.com",
  projectId: "dragon-news-6c9b1",
  storageBucket: "dragon-news-6c9b1.firebasestorage.app",
  messagingSenderId: "646775171472",
  appId: "1:646775171472:web:8e7a5e5c81d7dfa3f7eb15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)