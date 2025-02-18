import { db } from './../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { Item } from '../types/interface';
import { CategoryTypes } from '../types/CategoryTypes';

export const addItemToFirebase = async (
  item: Item,
  category: CategoryTypes,
): Promise<void> => {
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    const userId = currentUser.uid;

    if (!category) {
      throw new Error('Category not provided');
    }

    const categoryRef = collection(
      db,
      'users',
      userId,
      'categories',
      category,
      'products',
    );

    await addDoc(categoryRef, item);

    console.log(
      `Item added to category "${category}" for user ${userId}:`,
      item,
    );
  } catch (error) {
    console.error('Error adding item to Firebase:', error);
  }
};
