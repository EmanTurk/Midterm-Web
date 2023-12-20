

// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



// Initialize Firebase


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUZmwoAH6aKaXaKBnHmUcK3tIQXOFac-0",
  authDomain: "glimmix-login.firebaseapp.com",
  projectId: "glimmix-login",
  storageBucket: "glimmix-login.appspot.com",
  messagingSenderId: "473609473908",
  appId: "1:473609473908:web:f057c9da494c52d12aa621",
  measurementId: "G-DWBS6HCCLG"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);