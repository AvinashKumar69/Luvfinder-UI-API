// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCHOLBWz1JNBMaoh7263DjYIWA4VbGJd8",
    authDomain: "luvfinderuiapi.firebaseapp.com",
    projectId: "luvfinderuiapi",
    storageBucket: "luvfinderuiapi.appspot.com",
    messagingSenderId: "12281950372",
    appId: "1:12281950372:web:48306d8d1ebab61975f631",
    measurementId: "G-2W983KKTE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);