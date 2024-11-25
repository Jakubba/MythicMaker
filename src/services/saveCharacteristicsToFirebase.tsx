import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

export const saveCharacteristicsToFirebase = async (
  userId,
  characteristics,
) => {
  try {
    const docRef = doc(db, 'characters', userId);

    await setDoc(docRef, { characteristics }, { merge: true });

    console.log('Cechy postaci zapisane pomyślnie.');
  } catch (error) {
    console.error('Błąd przy zapisywaniu cech postaci:', error);
  }
};
