import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export const deleteItemFromFirebase = async (category, itemId) => {
  try {
    const itemRef = doc(db, 'categories', category, 'products', itemId);

    await deleteDoc(itemRef);

    console.log(`Przedmiot o ID ${itemId} usunięty z kategorii: ${category}`);
  } catch (error) {
    console.error('Błąd przy usuwaniu przedmiotu:', error);
    throw error;
  }
};
