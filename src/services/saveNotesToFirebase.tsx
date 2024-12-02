import { db } from '../firebase';
import { doc, setDoc, getDoc, DocumentSnapshot } from 'firebase/firestore';

interface NoteData {
  content: string;
}

export const saveNotesToFirebase = async (
  notes: string,
): Promise<string | undefined> => {
  try {
    const docRef = doc(db, 'categories', 'notes');

    await setDoc(docRef, { content: notes });

    const docSnap: DocumentSnapshot = await getDoc(docRef);

    return docSnap.exists() ? (docSnap.data() as NoteData).content : '';
  } catch (error) {
    console.error('Błąd przy zapisywaniu notatek:', error);
    return undefined;
  }
};
