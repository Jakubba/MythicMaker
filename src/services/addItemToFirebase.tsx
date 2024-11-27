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
    // Logowanie danych wejściowych
    console.log('Attempting to add item:', item);
    console.log('Category:', category);

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

    // Logowanie ID użytkownika i referencji do dokumentu
    console.log('User authenticated. UserID:', userId);
    console.log('Document reference for user:', userRef.path);

    // Dodanie przedmiotu do odpowiedniej kategorii w bazie danych
    await updateDoc(userRef, {
      [category]: arrayUnion(item), // Dodanie przedmiotu do tablicy w kategorii
    });

    console.log(`Item added to category "${category}" for user ${userId}:`, item);

    return item.id;
  } catch (error) {
    console.error('Error adding item to Firebase:', error);
    throw error;
  }
};
