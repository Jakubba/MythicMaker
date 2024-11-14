import React, { useState, useEffect } from 'react';
import { weaponsItems } from '../constans/weaponsItems';
import {
  addItemToFirestore,
  getItemsFromFirestore,
} from './../firebase-function';
import ItemList from './../components/ItemList';

const Weapons = () => {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    addItemToFirestore(item);
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const loadItems = async () => {
      const savedItems = await getItemsFromFirestore();
      setItems(savedItems);
    };

    loadItems();
  }, []);

  return (
    <section>
      <button
        onClick={toggleModal}
        className="p-2 mb-4 text-white bg-blue-500 rounded"
      >
        Dodaj przedmiot
      </button>

      <div>
        <h3>Twoja broń i tarcze</h3>
        <ul>
          {items.length === 0 ? (
            <p>Nie dodałeś jeszcze żadnych przedmiotów.</p>
          ) : (
            items.map(({ image, name, stats }, index) => (
              <li key={index} className="flex items-center space-x-4">
                <img src={image} alt={name} className="w-16 h-16" />
                <div>
                  <p>{name}</p>
                  <p>Siła: {stats.strength}</p>
                  <p>Moc: {stats.power}</p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      <ItemList
        isOpen={isModalOpen}
        onClose={toggleModal}
        items={weaponsItems}
        onAddItem={handleAddItem}
      />
    </section>
  );
};

export default Weapons;
