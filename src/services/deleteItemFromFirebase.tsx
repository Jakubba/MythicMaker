export enum Categories {
  SPELLS = 'spells',
  WEAPONS = 'weapons',
  ITEMS = 'items',
}

export type CategoryTypes =
  | Categories.SPELLS
  | Categories.WEAPONS
  | Categories.ITEMS;

import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { arrayRemove } from 'firebase/firestore';
import { Item } from '../types/interface';

export const deleteItemFromFirebase = async (
  category: CategoryTypes,
  item: Item,
) => {
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;

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
