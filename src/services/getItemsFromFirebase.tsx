import { db } from '../firebase';
import { doc, collection, getDocs } from 'firebase/firestore';

export const getItemsFromFirebase = async (category: string) => {
  try {
    // Referencja do dokumentu kategorii
    const categoryRef = doc(db, 'categories', category);

    // Referencja do kolekcji produktów w danej kategorii
    const productsCollectionRef = collection(categoryRef, 'products');
    const snapshot = await getDocs(productsCollectionRef);

    // Sprawdzamy, czy w ogóle mamy dane w kolekcji
    if (snapshot.empty) {
      console.warn('Brak danych w kolekcji produktów.');
      return []; // Zwracamy pustą tablicę, jeśli brak danych
    }

    // Przetwarzamy dane z snapshotu
    const items = snapshot.docs
      .map((doc) => {
        const data = doc.data();
        if (!data || !data.name || !data.stats) {
          console.warn(`Niepełne dane w produkcie o ID: ${doc.id}`, data);
          return null; // Zwracamy null, jeśli dane są niekompletne
        }

        return {
          id: doc.id,
          ...data,
        };
      })
      .filter((item) => item !== null); // Filtrujemy null-e

    // Sprawdzanie unikalności ID
    const ids = items.map((item) => item.id);
    const uniqueIds = new Set(ids);
    if (uniqueIds.size !== ids.length) {
      console.warn('Duplikaty ID w danych:', ids);
    }

    // Jeśli nie ma jeszcze danych w tablicach (np. weapons, spells, equipment), przypisujemy puste tablice
    const formattedItems = items.map((item) => ({
      ...item,
      weapons: item.weapons || [],
      spells: item.spells || [],
      equipment: item.equipment || [],
    }));

    // Wyświetlamy dane przedmiotów w konsoli
    console.log('Dane z Firebase:', formattedItems);

    return formattedItems;
  } catch (error) {
    console.error('Błąd przy pobieraniu przedmiotów:', error);
    return [];
  }
};
