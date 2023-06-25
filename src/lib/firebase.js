import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDn8LG6MsuuYU-wU-UvuteuFF5a5T2SajE",
  authDomain: "appfirebasetrial.firebaseapp.com",
  projectId: "appfirebasetrial",
  storageBucket: "appfirebasetrial.appspot.com",
  messagingSenderId: "461689899942",
  appId: "1:461689899942:web:c10091e84755229dee1d67",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
