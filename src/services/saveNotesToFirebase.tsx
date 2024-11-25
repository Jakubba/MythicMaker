import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

export const saveNotesToFirebase = async (notes) => {
  try {
    const docRef = doc(db, 'categories', 'notes');

    await setDoc(docRef, { content: notes });

    console.log('Notatki zapisane pomyślnie.');
  } catch (error) {
    console.error('Błąd przy zapisywaniu notatek:', error);
  }
};
