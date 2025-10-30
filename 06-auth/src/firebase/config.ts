// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByjQWPzWsmbF9eWO1G9El4sxNT4dnZxRM",
    authDomain: "astro-authentication-9dd97.firebaseapp.com",
    projectId: "astro-authentication-9dd97",
    storageBucket: "astro-authentication-9dd97.firebasestorage.app",
    messagingSenderId: "791814558143",
    appId: "1:791814558143:web:ac5563b2e2394a2e64910a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'es';
export const  firebase={
    app,auth
}