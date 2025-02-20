import { db } from './../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Characteristics } from '../types/interface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveCharacteristicsToFirebase = async (
  userId: string,
  characteristics: Characteristics,
): Promise<void> => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const docRef = doc(db, 'users', userId);

    await setDoc(docRef, { characteristics }, { merge: true });
  } catch (error) {
    toast.error(`Błąd przy zapisywaniu cech postaci:${error.message}`);
  }
};
