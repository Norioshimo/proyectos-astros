import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyByjQWPzWsmbF9eWO1G9El4sxNT4dnZxRM",
  authDomain: "astro-authentication-9dd97.firebaseapp.com",
  projectId: "astro-authentication-9dd97",
  storageBucket: "astro-authentication-9dd97.firebasestorage.app",
  messagingSenderId: "791814558143",
  appId: "1:791814558143:web:ac5563b2e2394a2e64910a"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "es";
const firebase = {
  app,
  auth
};

export { firebase as f };
