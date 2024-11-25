import React, { useState, useEffect } from 'react';
import { addItemToFirebase } from '../services/addItemToFirebase';
import { deleteItemFromFirebase } from '../services/deleteItemFromFirebase';
import { getItemsFromFirebase } from '../services/getItemsFromFirebase';
import ItemList from './ItemList';

const ItemsSection = ({ title, itemsData, category }) => {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItem = async (item) => {
    try {
      console.log('Dodawanie przedmiotu:', item);

      let itemId;
      if (category === 'weapons') {
        itemId = await addItemToFirebase(item, 'weapons');
      } else if (category === 'spells') {
        itemId = await addItemToFirebase(item, 'spells');
      } else if (category === 'equipment') {
        itemId = await addItemToFirebase(item, 'equipment');
      }

      const newItem = { ...item, id: itemId };

      setItems((prevItems) => {
        return [...prevItems, newItem];
      });

      console.log('Stan po dodaniu:', newItem);

      setIsModalOpen(false);
    } catch (error) {
      console.error('Błąd przy dodawaniu przedmiotu:', error);
    }
  };

  useEffect(() => {
    // const loadItems = async () => {
    //   try {
    //     const savedItems = await getItemsFromFirebase(category);
    //     setItems(savedItems || []); // Update the state with the fetched items
    //   } catch (error) {
    //     console.error('Błąd przy ładowaniu przedmiotów:', error);
    //   }
    // };
    const loadItems = async () => {
      try {
        const savedItems = await getItemsFromFirebase(category);
        if (!savedItems || !Array.isArray(savedItems)) {
          console.error(
            'Oczekiwano tablicy przedmiotów, ale otrzymano:',
            savedItems,
          );
          setItems([]);
        } else {
          setItems(savedItems);
        }
      } catch (error) {
        console.error('Błąd przy ładowaniu przedmiotów:', error);
        setItems([]);
      }
    };

    loadItems();
  }, [category]); // Re-run whenever category changes

  const handleRemoveItem = async (itemId) => {
    try {
      await deleteItemFromFirebase(itemId, category);
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Błąd przy usuwaniu przedmiotu:', error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <section className="mt-2">
      <button
        onClick={toggleModal}
        className="p-2 mb-4 text-white bg-blue-500 rounded"
      >
        Dodaj przedmiot
      </button>

      <div>
        <h3>{title}</h3>

        <ul>
          {items.map((item, index) => {
            if (!item || !item.id || !item.stats) {
              console.error('Nieprawidłowy przedmiot:', item);
              return null; // Pomijamy nieprawidłowy przedmiot
            }

            const uniqueKey = item.id || `item-${index}`;
            return (
              <li
                key={uniqueKey}
                className="flex items-center p-2 space-x-4 rounded-md bg-slate-50"
              >
                <img
                  src={item.image || '/placeholder.jpg'}
                  alt={item.name || 'Nieznany przedmiot'}
                  className="w-16 h-16"
                />
                <div>
                  <p className="text-xl font-medium">
                    {item.name || 'Brak nazwy'}
                  </p>
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
            );
          })}
        </ul>
      </div>

      <ItemList
        isOpen={isModalOpen}
        onClose={toggleModal}
        items={itemsData || []}
        onAddItem={handleAddItem}
      />
    </section>
  );
};

export default ItemsSection;
