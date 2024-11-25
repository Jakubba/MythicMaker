import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export const getNotesFromFirebase = async () => {
  try {
    const docRef = doc(db, 'categories', 'notes');

    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? docSnap.data().content : '';
  } catch (error) {
    console.error('Błąd przy pobieraniu notatek:', error);

    return '';
  }
};
