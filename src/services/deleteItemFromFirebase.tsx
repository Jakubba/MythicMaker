import { CategoryTypes } from '../types/CategoryTypes';
import { db } from './../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { arrayRemove } from 'firebase/firestore';
import { Item } from '../types/interface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const deleteItemFromFirebase = async (category: CategoryTypes, item: Item) => {
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    const userId = currentUser.uid;
    const userRef = doc(db, 'users', userId);

    await updateDoc(userRef, {
      [category]: arrayRemove(item),
    });
  } catch (error) {
    toast.error(`Error removing item from Firebase:${error.message}`);
    throw error;
  }
};
