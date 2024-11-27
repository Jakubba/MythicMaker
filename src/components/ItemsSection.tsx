import React, { useState, useEffect } from 'react';
import { addItemToFirebase } from '../services/addItemToFirebase';
import { deleteItemFromFirebase } from '../services/deleteItemFromFirebase';
import { getItemsFromFirebase } from '../services/getItemsFromFirebase';
import ItemList from './ItemList';
import { getAuth } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';

interface Stats {
  strength: number;
  power: number;
}

interface Item {
  id: string;
  name: string;
  image?: string;
  stats?: Stats;
}

interface ItemsSectionProps {
  title: string;
  itemsData: Item[];
  category: string;
}

const ItemsSection = ({ title, itemsData, category }: ItemsSectionProps) => {
  const [items, setItems] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(category);

  const handleAddItem = async (item: Item, category: string) => {
    try {
      if (!item.name || typeof item.name !== 'string') {
        throw new Error(
          'Invalid item: "name" is required and must be a string.',
        );
      }

      const itemId = uuidv4();
      const newItem = {
        ...item,
        id: itemId,
        image: item.image || '/placeholder.jpg',
        stats: item.stats || { strength: 0, power: 0 },
      };

      // Add item to Firebase
      await addItemToFirebase(newItem, category);

      // Update state with new item
      setItems((prevItems) => [...prevItems, newItem]);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleRemoveItem = async (itemId: string) => {
    try {
      await deleteItemFromFirebase(itemId, selectedCategory);
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const loadItems = async () => {
      try {
        const auth = getAuth();
        const userId = auth.currentUser?.uid;

        console.log('Pobrany userId:', userId);

        if (!userId) {
          console.error('User not authenticated.');
          return;
        }

        const fetchedItems = await getItemsFromFirebase(
          selectedCategory,
          userId,
        );
        console.log('Pobrane przedmioty w useEffect:', fetchedItems);

        if (fetchedItems) {
          setItems(fetchedItems);
        }
      } catch (error) {
        console.error('Error loading items:', error);
      }
    };

    loadItems();
  }, [selectedCategory]); // Dependency array for loading items based on category change

  return (
    <section className="mt-2">
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-2 mb-4 text-white bg-blue-500 rounded"
      >
        Dodaj przedmiot
      </button>

      <div>
        <h3>{title}</h3>
        <ul className="mt-4">
          {items.length === 0 ? (
            <p>Brak przedmiotów w tej kategorii.</p>
          ) : (
            items.map((item) => (
              <li
                key={item.id}
                className="flex items-center p-2 space-x-4 rounded-md bg-slate-50"
              >
                <img
                  src={item.image || '/placeholder.jpg'}
                  alt={item.name || 'Nieznany przedmiot'}
                  className="w-16 h-16"
                />
                <div>
                  <p className="text-xl font-medium">{item.name}</p>
                  <p className="text-base font-semibold">
                    Siła: {item.stats?.strength || 0}
                  </p>
                  <p className="text-base">Moc: {item.stats?.power || 0}</p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-2 ml-auto text-white bg-red-500 rounded"
                >
                  Usuń produkt
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      <ItemList
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={itemsData} // Assuming `itemsData` is passed correctly as props
        onAddItem={(item) => handleAddItem(item, selectedCategory)}
      />
    </section>
  );
};

export default ItemsSection;
