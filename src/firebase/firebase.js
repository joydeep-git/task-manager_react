import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqjbAwURDXMOQ7Jlev-Aa-nRrlSEenczY",
  authDomain: "task-manager-dc2b1.firebaseapp.com",
  projectId: "task-manager-dc2b1",
  storageBucket: "task-manager-dc2b1.appspot.com",
  messagingSenderId: "120620046354",
  appId: "1:120620046354:web:fdb136ed11b732b576e0cb",
  measurementId: "G-8GE3X9REQC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
