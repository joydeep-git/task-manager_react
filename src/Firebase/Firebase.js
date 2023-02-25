import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDWSkjoRl3OemDlwRY1bHHbWDVKbL9dFl8",
    authDomain: "task-manager-react-169bb.firebaseapp.com",
    databaseURL: "https://task-manager-react-169bb-default-rtdb.firebaseio.com",
    projectId: "task-manager-react-169bb",
    storageBucket: "task-manager-react-169bb.appspot.com",
    messagingSenderId: "767302129551",
    appId: "1:767302129551:web:c855969e48219d9d75ddfa",
    measurementId: "G-NZ4M696FSY"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };