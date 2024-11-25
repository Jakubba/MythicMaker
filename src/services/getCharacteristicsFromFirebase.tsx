import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export const getCharacteristicsFromFirebase = async () => {
  try {
    const docRef = doc(db, 'categories', 'characteristics');

    const docSnap = await getDoc(docRef);

    return docSnap.exists()
      ? docSnap.data()
      : { field1: '', field2: '', field3: '' };
  } catch (error) {
    console.error('Błąd przy pobieraniu cech postaci:', error);

    return { field1: '', field2: '', field3: '' };
  }
};
