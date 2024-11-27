import { db } from '../firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

interface Item {
  id: string;
  name: string;
  [key: string]: any;
}

export const addItemToFirebase = async (
  item: Item,
  category: string,
): Promise<string> => {
  try {
    if (!item.name) {
      throw new Error('Item must have a name');
    }

    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    const userId = currentUser.uid;
    const userRef = doc(db, 'users', userId);

    await updateDoc(userRef, {
      [category]: arrayUnion(item),
    });

    console.log(`Item added to category ${category}:`, item);
    return item.id;
  } catch (error) {
    console.error('Error adding item to Firebase:', error);
    throw error;
  }
};
