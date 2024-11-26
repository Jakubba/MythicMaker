import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const getItemsFromFirebase = async (
  category: string,
): Promise<any[]> => {
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    const userId = currentUser.uid;

    const categoriesRef = collection(db, 'users', userId, 'categories');
    const categoryRef = collection(categoriesRef, category, 'products');

    const snapshot = await getDocs(categoryRef);

    if (snapshot.empty) {
      console.warn('Brak danych w kolekcji produktów.');
      return [];
    }

    const items = snapshot.docs
      .map((doc) => {
        const data = doc.data();
        if (!data || !data.name || !data.stats) {
          console.warn(`Niepełne dane w produkcie o ID: ${doc.id}`, data);
          return null;
        }

        return {
          id: doc.id,
          ...data,
        };
      })
      .filter((item) => item !== null);

    const ids = items.map((item) => item.id);
    const uniqueIds = new Set(ids);
    if (uniqueIds.size !== ids.length) {
      console.warn('Duplikaty ID w danych:', ids);
    }

    const formattedItems = items.map((item) => ({
      ...item,
      weapons: Array.isArray(item.weapons) ? item.weapons : [],
      spells: Array.isArray(item.spells) ? item.spells : [],
      equipment: Array.isArray(item.equipment) ? item.equipment : [],
    }));

    console.log('Dane z Firebase:', formattedItems);

    return formattedItems;
  } catch (error) {
    console.error('Błąd przy pobieraniu przedmiotów:', error);
    return [];
  }
};
