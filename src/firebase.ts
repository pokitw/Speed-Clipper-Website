import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2XpbApXvhqPsk-FPcOM2KXV5d9VQvt8s",
  authDomain: "speed-clipper.firebaseapp.com",
  projectId: "speed-clipper",
  storageBucket: "speed-clipper.firebasestorage.app",
  messagingSenderId: "683417036830",
  appId: "1:683417036830:web:42f8ab22c2b2b7e03de60f",
  measurementId: "G-CYHJB77L59"
};

// Check if Firebase config has required fields
const isValidConfig = firebaseConfig && 
  Object.keys(firebaseConfig).length > 0 && 
  Object.values(firebaseConfig).every(value => value !== undefined && value !== null && value !== '');

let db = null;

if (isValidConfig) {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  } catch (error) {
    console.warn('Firebase initialization failed:', error);
  }
}

export { db };