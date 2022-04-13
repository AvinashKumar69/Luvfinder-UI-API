import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDCHOLBWz1JNBMaoh7263DjYIWA4VbGJd8",
    authDomain: "luvfinderuiapi.firebaseapp.com",
    projectId: "luvfinderuiapi",
    storageBucket: "luvfinderuiapi.appspot.com",
    messagingSenderId: "12281950372",
    appId: "1:12281950372:web:48306d8d1ebab61975f631",
    measurementId: "G-2W983KKTE7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);