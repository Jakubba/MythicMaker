import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Characteristics } from '../types/interface';

export const saveCharacteristicsToFirebase = async (
  userId: string,
  characteristics: Characteristics,
): Promise<void> => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    console.log('Preparing to save data for user ID:', userId);
    console.log('Characteristics:', characteristics);

    const docRef = doc(db, 'users', userId);

    await setDoc(docRef, { characteristics }, { merge: true });

    console.log('Cechy postaci zapisane pomyślnie.');
  } catch (error) {
    console.error('Błąd przy zapisywaniu cech postaci:', error);
  }
};
