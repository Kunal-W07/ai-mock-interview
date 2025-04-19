import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW_he2p1ZdzGJPDyOa7YnJ6l0bt2U20_s",
  authDomain: "prepwise-cf4a1.firebaseapp.com",
  projectId: "prepwise-cf4a1",
  storageBucket: "prepwise-cf4a1.firebasestorage.app",
  messagingSenderId: "794903105828",
  appId: "1:794903105828:web:e023f93be20e9be945e3b1",
  measurementId: "G-9LLK1K8T3F"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);