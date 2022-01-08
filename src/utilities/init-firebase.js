import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBeAX6gJ4knyNX0GtFI8g6qoq4zd3im-iQ",
    authDomain: "triviacloud.firebaseapp.com",
    databaseURL: "https://triviacloud-default-rtdb.firebaseio.com",
    projectId: "triviacloud",
    storageBucket: "triviacloud.appspot.com",
    messagingSenderId: "1044834595489",
    appId: "1:1044834595489:web:06a4803193bf9fea6336e0",
    measurementId: "G-PJDQBTMV8Q"
}

 const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app

