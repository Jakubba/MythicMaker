import React, { useState, useEffect } from 'react';
import { addItemToFirebase } from '../services/addItemToFirebase';
import { deleteItemFromFirebase } from '../services/deleteItemFromFirebase';
import { getItemsFromFirebase } from '../services/getItemsFromFirebase';
import ItemList from './ItemList';
import { i } from 'vite/dist/node/types.d-aGj9QkWt';

const ItemsSection = ({ title, itemsData }) => {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    addItemToFirebase(item);
    setIsModalOpen(false);
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await deleteItemFromFirebase(itemId);
      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);
    } catch (error) {
      console.error('Błąd przy usuwaniu przedmiotu:', error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const loadItems = async () => {
      try {
        const savedItems = await getItemsFromFirebase();
        setItems(savedItems || []);
      } catch (error) {
        console.error('Błąd przy ładowaniu przedmiotów:', error);
      }
    };

    loadItems();
  }, []);

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
          {items?.length === 0 ? (
            <p>Nie dodałeś jeszcze żadnych przedmiotów.</p>
          ) : (
            items.map(({ image, name, stats, id }, index) => (
              <li
                key={id} // Use 'id' if available
                className="flex items-center p-2 space-x-4 rounded-md bg-slate-50"
              >
                <img src={image} alt={name} className="w-16 h-16" />
                <div>
                  <p className="text-xl font-medium">{name}</p>
                  <p className="text-base font-semibold">
                    Siła: {stats?.strength || 'Brak danych'}
                  </p>
                  <p className="text-base">
                    Moc: {stats?.power || 'Brak danych'}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveItem(id)}
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
        onClose={toggleModal}
        items={itemsData}
        onAddItem={handleAddItem}
      />
    </section>
  );
};

export default ItemsSection;
