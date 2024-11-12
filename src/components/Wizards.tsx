import React, { useState } from 'react';
import ItemList from './ItemList';
import wizard1 from './../assets/image/zaklecia/wizards1.png';
import wizard2 from './../assets/image/zaklecia/wiazard2.png';

const Wizards = () => {
  const [items, setItems] = useState([]);

  const availableItems = [
    {
      id: 1,
      name: 'Fireball',
      image: wizard1,
      stats: { strength: 0, power: 5 },
    },
    {
      id: 2,
      name: 'Ice Shield',
      image: wizard2,
      stats: { strength: 2, power: 2 },
    },
  ];

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <h2>Zaklęcia</h2>
      <ItemList items={availableItems} onAddItem={handleAddItem} />
      <div>
        <h3>Twoje zaklęcia</h3>
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

export default Wizards;
