import { db } from './../firebase/firebase';
import { doc, getDoc, DocumentSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NoteData {
  content: string;
}

export const getNotesFromFirebase = async (): Promise<string> => {
  try {
    const docRef = doc(db, 'categories', 'notes');

    const docSnap: DocumentSnapshot = await getDoc(docRef);

    return docSnap.exists() ? (docSnap.data() as NoteData).content : '';
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`Błąd przy pobieraniu notatek:${error.message}`);

      return '';
    }
  }
};
