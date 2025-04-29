import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC9F5kC3JAGMgngyNvZZ0hZZLKfnlhJTDs",
    authDomain: "afforgadgetable.firebaseapp.com",
    projectId: "afforgadgetable",
    storageBucket: "afforgadgetable.firebasestorage.app",
    messagingSenderId: "734738217644",
    appId: "1:734738217644:web:83d19d32ca7a2920db7d09",
    measurementId: "G-92P8TPM7EJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
