import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { arrayRemove } from 'firebase/firestore';

export const deleteItemFromFirebase = async (category: string, item: Item) => {
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    const userId = currentUser.uid;
    const userRef = doc(db, 'users', userId);

    await updateDoc(userRef, {
      [category]: arrayRemove(item),
    });

    console.log(`Item removed from category ${category}:`, item);
  } catch (error) {
    console.error('Error removing item from Firebase:', error);
    throw error;
  }
};
