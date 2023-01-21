// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmaxp4oc567buJcdzBTp7vypE1NB6cAxc",
  authDomain: "madca3-3ab34.firebaseapp.com",
  projectId: "madca3-3ab34",
  storageBucket: "madca3-3ab34.appspot.com",
  messagingSenderId: "926325584407",
  appId: "1:926325584407:web:84e9f09b76ff3d7a612252",
  measurementId: "G-GJSRMN08ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);