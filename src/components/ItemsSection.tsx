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

  // Handle adding an item to Firebase
  const handleAddItem = async (item: Item, category: string) => {
    try {
      const itemId = uuidv4();
      const newItem = {
        ...item,
        id: itemId,
        image: item.image || '/placeholder.jpg',
        stats: item.stats || { strength: 0, power: 0 },
      };

      await addItemToFirebase(newItem, category);
      setItems((prevItems) => [...prevItems, newItem]);
      setIsModalOpen(false); // Close modal after adding item
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  // Handle removing an item from Firebase
  const handleRemoveItem = async (itemId: string) => {
    try {
      await deleteItemFromFirebase(itemId, selectedCategory);
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  // Handle changing the category
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Load items when the category changes
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
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error loading items:', error);
      }
    };

    loadItems();
  }, [selectedCategory]);

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
          {items.map((item) => (
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
          ))}
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
