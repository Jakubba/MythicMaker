import { auth, db } from './../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { CreateUserParams } from '../types/interface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const createUser = async ({ email, password, profile }: CreateUserParams) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userData = {
      email,
      createdAt: new Date(),
      ...profile,
      weapons: [],
      spells: [],
      equipment: [],
    };

    await setDoc(doc(db, 'users', user.uid), userData);

    return user;
  } catch (error) {
    toast.error(`Error creating user:${error.message}`);
    throw error;
  }
};
