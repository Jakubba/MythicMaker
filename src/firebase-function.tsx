import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const addItemToFirestore = async (item, category) => {
  try {
    const categoryRef = firebase
      .firestore()
      .collection('categories')
      .doc(category);
    await categoryRef.collection('products').add(item);
    console.log(`Przedmiot dodany do kategorii: ${category}`);
  } catch (error) {
    console.error('Błąd przy dodawaniu przedmiotu:', error);
  }
};

export const getItemsFromFirestore = async (category) => {
  try {
    const categoryRef = firebase
      .firestore()
      .collection('categories')
      .doc(category);
    const snapshot = await categoryRef.collection('products').get();
    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return items;
  } catch (error) {
    console.error('Błąd przy pobieraniu przedmiotów:', error);
    return [];
  }
};

export const deleteItemFromFirestore = async (category, itemId) => {
  try {
    const categoryRef = firebase
      .firestore()
      .collection('categories')
      .doc(category);
    await categoryRef.collection('products').doc(itemId).delete();
    console.log(`Przedmiot usunięty z kategorii: ${category}`);
  } catch (error) {
    console.error('Błąd przy usuwaniu przedmiotu:', error);
  }
};

export const saveNotesToFirestore = async (notes) => {
  try {
    const docRef = firebase.firestore().collection('categories').doc('notes');
    await docRef.set({ content: notes });
    console.log('Notatki zapisane pomyślnie.');
  } catch (error) {
    console.error('Błąd przy zapisywaniu notatek:', error);
  }
};

export const getNotesFromFirestore = async () => {
  try {
    const docRef = firebase.firestore().collection('categories').doc('notes');
    const doc = await docRef.get();
    return doc.exists ? doc.data().content : '';
  } catch (error) {
    console.error('Błąd przy pobieraniu notatek:', error);
    return '';
  }
};

export const saveCharacteristicsToFirestore = async (characteristics) => {
  try {
    const docRef = firebase
      .firestore()
      .collection('categories')
      .doc('characteristics');
    await docRef.set(characteristics);
    console.log('Cechy postaci zapisane pomyślnie.');
  } catch (error) {
    console.error('Błąd przy zapisywaniu cech postaci:', error);
  }
};

export const getCharacteristicsFromFirestore = async () => {
  try {
    const docRef = firebase
      .firestore()
      .collection('categories')
      .doc('characteristics');
    const doc = await docRef.get();
    return doc.exists ? doc.data() : { field1: '', field2: '', field3: '' };
  } catch (error) {
    console.error('Błąd przy pobieraniu cech postaci:', error);
    return { field1: '', field2: '', field3: '' };
  }
};
