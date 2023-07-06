import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4_GVhBtorOy_DxITVEHsvThF41RtdbFY",
  authDomain: "task-manager-react-3960b.firebaseapp.com",
  projectId: "task-manager-react-3960b",
  storageBucket: "task-manager-react-3960b.appspot.com",
  messagingSenderId: "225499404225",
  appId: "1:225499404225:web:1982a35cb58a60b12a0140",
  measurementId: "G-0YVDMPZS2B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
