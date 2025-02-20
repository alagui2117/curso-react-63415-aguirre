import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDbOx0SLiOsdtNJMwGGxhYs6KwSxNGk5xI",
    authDomain: "react-course-ef740.firebaseapp.com",
    databaseURL: "https://react-course-ef740-default-rtdb.firebaseio.com",
    projectId: "react-course-ef740",
    storageBucket: "react-course-ef740.firebasestorage.app",
    messagingSenderId: "894641192533",
    appId: "1:894641192533:web:105b223463b7d523265edc"
};

const configFirebase = initializeApp(firebaseConfig);
export  default configFirebase