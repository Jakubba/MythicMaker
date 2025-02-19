import { db } from './../firebase/firebase';
import { doc, setDoc, getDoc, DocumentSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NoteData {
  content: string;
}

export const saveNotesToFirebase = async (notes: string): Promise<string | undefined> => {
  try {
    const docRef = doc(db, 'categories', 'notes');

    await setDoc(docRef, { content: notes });

    const docSnap: DocumentSnapshot = await getDoc(docRef);

    return docSnap.exists() ? (docSnap.data() as NoteData).content : '';
  } catch (error) {
    toast.error(`Błąd przy zapisywaniu notatek:${error.message}`);
    return undefined;
  }
};
