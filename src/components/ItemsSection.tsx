import React, { useState, useEffect } from 'react';
import { addItemToFirebase } from '../services/addItemToFirebase';
import { deleteItemFromFirebase } from '../services/deleteItemFromFirebase';
import { getItemsFromFirebase } from '../services/getItemsFromFirebase';
import ItemList from './ItemList';
import { getAuth } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import { Item, ItemsSectionProps } from '../types/interface';

const DEFAULT_IMAGE = '/placeholder.jpg';
const DEFAULT_STATS = { strength: 0, power: 0 };

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
        image: item.image || DEFAULT_IMAGE,
        stats: item.stats || DEFAULT_STATS,
      };

      await addItemToFirebase(newItem, category);

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

        if (!userId) {
          console.error('User not authenticated.');
          return;
        }

        const fetchedItems = await getItemsFromFirebase(
          selectedCategory,
          userId,
        );

        if (fetchedItems) {
          setItems(fetchedItems);
        }
      } catch (error) {
        console.error('Błąd przy ładowaniu przedmiotów:', error);
      }
    };

    if (selectedCategory) {
      loadItems();
    }
  }, [selectedCategory]);

  return (
    <section className="mt-2">
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-2 mb-4 font-semibold text-white uppercase bg-gray-800 hover:bg-gray-500"
      >
        Dodaj przedmiot
      </button>

      <div>
        <h3 className="p-2 text-xl font-semibold text-white bg-gray-500 w-max">
          {title}
        </h3>
        <ul className="mt-4">
          {!items?.length ? (
            <p>Brak przedmiotów w tej kategorii.</p>
          ) : (
            items.map((item) => (
              <li
                key={item.id}
                className="flex items-center w-full p-3 mb-2 bg-gray-300"
              >
                <img
                  src={item.image || '/placeholder.jpg'}
                  alt={item.name || 'Nieznany przedmiot'}
                  className="object-contain w-16 h-16 mx-4 mix-blend-multiply"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-medium">{item.name}</p>
                  <p className="text-base font-semibold">
                    Siła: {item.stats?.strength || 0}
                  </p>
                  <p className="text-base font-semibold">
                    Moc: {item.stats?.power || 0}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="block p-2 ml-auto text-white bg-gray-800 hover:bg-gray-600"
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
        items={itemsData}
        onAddItem={(item) => handleAddItem(item, selectedCategory)}
      />
    </section>
  );
};

export default ItemsSection;
