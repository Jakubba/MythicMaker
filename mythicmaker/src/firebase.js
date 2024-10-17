// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; // Firestore
import { getAuth } from 'firebase/auth'; // Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKmny9s8Wspx5Fgbq2AjyPoLCv4DQUAB4',
  authDomain: 'mythicmaker-d599b.firebaseapp.com',
  projectId: 'mythicmaker-d599b',
  storageBucket: 'mythicmaker-d599b.appspot.com',
  messagingSenderId: '477094378171',
  appId: '1:477094378171:web:61d09d041074986c02479e',
  measurementId: 'G-80PYR1XPLM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);
