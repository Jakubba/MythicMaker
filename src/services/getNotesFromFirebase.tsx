import { db } from '../firebase';
import { doc, getDoc, DocumentSnapshot } from 'firebase/firestore';

interface NoteData {
  content: string;
}

export const getNotesFromFirebase = async (): Promise<string> => {
  try {
    const docRef = doc(db, 'categories', 'notes');

    const docSnap: DocumentSnapshot = await getDoc(docRef);

    return docSnap.exists() ? (docSnap.data() as NoteData).content : '';
  } catch (error) {
    console.error('Błąd przy pobieraniu notatek:', error);

    return '';
  }
};
