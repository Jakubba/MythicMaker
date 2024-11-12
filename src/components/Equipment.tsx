import React, { useState } from 'react';
import ItemList from './ItemList';
import torches from './../assets/image/ekwipunek/torches.png';

const Equipment = () => {
  const [items, setItems] = useState([]);

  const availableItems = [
    {
      id: 1,
      name: 'Torch',
      image: torches,
      stats: { strength: 0, power: 0 },
    },
  ];

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <h2>Ekwipunek</h2>
      <ItemList items={availableItems} onAddItem={handleAddItem} />
      <div>
        <h3>Twoje ekwipunek</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Equipment;
