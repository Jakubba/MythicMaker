import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const addItemToFirestore = async (item) => {
  try {
    await addDoc(collection(db, 'items'), item);
    console.log('Przedmiot dodany do Firestore!');
  } catch (e) {
    console.error('Błąd przy dodawaniu przedmiotu: ', e);
  }
};

export const getItemsFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'items'));
    const itemsList = querySnapshot.docs.map((doc) => doc.data());
    return itemsList;
  } catch (e) {
    console.error('Błąd przy pobieraniu przedmiotów: ', e);
  }
};
