import { db } from './../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { CategoryTypes } from '../types/CategoryTypes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getItemsFromFirebase = async (
  category: CategoryTypes,
  userId: string,
): Promise<any[]> => {
  try {
    if (!category) {
      throw new Error('Category is not defined.');
    }

    const categoryRef = collection(db, 'users', userId, 'categories', category, 'products');

    const snapshot = await getDocs(categoryRef);

    if (snapshot.empty) {
      toast.warn('Brak danych w kolekcji produktów.');
      return [];
    }

    const items = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
      };
    });

    return items;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`Błąd przy pobieraniu przedmiotów:${error.message}`);
      return [];
    }
  }
};
