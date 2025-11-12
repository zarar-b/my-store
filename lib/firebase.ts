// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-5XQB85nrzeKpHZYibx2Iwb_2iT4zFq0",
  authDomain: "my-store-c5a1a.firebaseapp.com",
  projectId: "my-store-c5a1a",
  storageBucket: "my-store-c5a1a.firebasestorage.app",
  messagingSenderId: "936594844833",
  appId: "1:936594844833:web:8dffba6e2676efac7e14e0",
  measurementId: "G-KWXR7KF22Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
