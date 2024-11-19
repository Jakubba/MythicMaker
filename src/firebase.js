import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDKmny9s8Wspx5Fgbq2AjyPoLCv4DQUAB4',
  authDomain: 'mythicmaker-d599b.firebaseapp.com',
  projectId: 'mythicmaker-d599b',
  storageBucket: 'mythicmaker-d599b.appspot.com',
  messagingSenderId: '477094378171',
  appId: '1:477094378171:web:61d09d041074986c02479e',
  measurementId: 'G-80PYR1XPLM',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, db, storage };
