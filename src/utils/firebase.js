// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth }from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBONcjbr_Heo3QrXgd7b0XqtPSycXro18k",
  authDomain: "ab-netflix-gpt.firebaseapp.com",
  projectId: "ab-netflix-gpt",
  storageBucket: "ab-netflix-gpt.appspot.com",
  messagingSenderId: "689462478301",
  appId: "1:689462478301:web:286b2d5bd87c8d86dea234",
  measurementId: "G-8JBFHFR1FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();