import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8nkLQuf1oYraiXpNgMjJBJeAoUW_psL8",
    authDomain: "task-manager-react-f0a9b.firebaseapp.com",
    projectId: "task-manager-react-f0a9b",
    storageBucket: "task-manager-react-f0a9b.appspot.com",
    messagingSenderId: "1009660311009",
    appId: "1:1009660311009:web:a721c755e47655b3234ea0",
    measurementId: "G-JFQKCBY1KP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };