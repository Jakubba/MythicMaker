import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const deleteItemFromFirebase = async (category, itemId) => {
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    const userId = currentUser.uid;

    const itemRef = doc(
      db,
      'users',
      userId,
      'categories',
      category,
      'products',
      itemId,
    );

    await deleteDoc(itemRef);

    console.log(`Przedmiot o ID ${itemId} usunięty z kategorii: ${category}`);
  } catch (error) {
    console.error('Błąd przy usuwaniu przedmiotu:', error);
    throw error;
  }
};
