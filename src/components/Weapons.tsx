// src/components/Weapons.js
import React, { useState, useEffect } from 'react';
import {
  addItemToFirestore,
  getItemsFromFirestore,
} from './../firebase-function';
import ItemList from './../components/ItemList';

const Weapons = () => {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const availableItems = [
    {
      id: 1,
      name: 'Weapon',
      image: '/src/assets/image/wapons/pngegg.png',
      stats: { strength: 1, power: 3 },
    },
    {
      id: 2,
      name: 'Shield',
      image: '/src/assets/image/wapons/shield.png',
      stats: { strength: 2, power: 1 },
    },
    {
      id: 3,
      name: 'Amulet of Health',
      image: '/src/assets/image/wapons/amulet-of-health.jpeg',
      stats: { strength: 0, power: 2 },
    },
    {
      id: 4,
      name: 'Axe of Gold',
      image: '/src/assets/image/wapons/axe-gold.jpeg',
      stats: { strength: 3, power: 4 },
    },
    {
      id: 5,
      name: 'Dagger',
      image: '/src/assets/image/wapons/dagger.jpeg',
      stats: { strength: 1, power: 2 },
    },
    {
      id: 6,
      name: 'Axe of Griffin',
      image: '/src/assets/image/wapons/axe-griffin-saddlebag.png',
      stats: { strength: 2, power: 3 },
    },
    {
      id: 7,
      name: 'Basilisk Dagger',
      image: '/src/assets/image/wapons/basilisk-dagger.png',
      stats: { strength: 1, power: 3 },
    },
    {
      id: 8,
      name: 'Gauntles of Eldrith',
      image: '/src/assets/image/wapons/gauntles-of-eldrith-ferocity.png',
      stats: { strength: 0, power: 5 },
    },
    {
      id: 9,
      name: 'Redsmith Hammer',
      image: '/src/assets/image/wapons/redsmith-hammer.png',
      stats: { strength: 4, power: 3 },
    },
    {
      id: 10,
      name: 'Vorpal Sword',
      image: '/src/assets/image/wapons/vorpal-sword.jpeg',
      stats: { strength: 5, power: 5 },
    },
  ];

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
    <div>
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
            items.map((item, index) => (
              <li key={index} className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16" />
                <div>
                  <p>{item.name}</p>
                  <p>Siła: {item.stats.strength}</p>
                  <p>Moc: {item.stats.power}</p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      <ItemList
        isOpen={isModalOpen}
        onClose={toggleModal}
        items={availableItems}
        onAddItem={handleAddItem}
      />
    </div>
  );
};

export default Weapons;
