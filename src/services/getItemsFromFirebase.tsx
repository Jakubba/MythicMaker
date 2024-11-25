import { db } from '../firebase';
import { doc, collection, getDocs } from 'firebase/firestore';

// export const getItemsFromFirebase = async (category) => {
//   try {
//     const categoryRef = doc(db, 'categories', category);

//     const productsCollectionRef = collection(categoryRef, 'products');

//     const snapshot = await getDocs(productsCollectionRef);

//     const items = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     return items;
//   } catch (error) {
//     console.error('Błąd przy pobieraniu przedmiotów:', error);

//     return [];
//   }
// };

export const getItemsFromFirebase = async (category) => {
  try {
    const categoryRef = doc(db, 'categories', category);
    const productsCollectionRef = collection(categoryRef, 'products');
    const snapshot = await getDocs(productsCollectionRef);

    console.log(
      'Dane z Firebase:',
      snapshot.docs.map((doc) => doc.data()),
    );

    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const ids = items.map((item) => item.id);
    const uniqueIds = new Set(ids);
    if (uniqueIds.size !== ids.length) {
      console.warn('Duplikaty ID w danych:', ids);
    }

    return items;
  } catch (error) {
    console.error('Błąd przy pobieraniu przedmiotów:', error);
    return [];
  }
};
