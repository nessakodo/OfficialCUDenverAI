import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY!,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID!,
    appId: process.env.REACT_APP_FIREBASE_APP_ID!,
  };
  
console.log(process.env.REACT_APP_FIREBASE_API_KEY)

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const login = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);