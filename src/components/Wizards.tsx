import React, { useState } from 'react';
import ItemList from './ItemList';
import { wizardsItems } from '../constans/wizardItems';

const Wizards = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((prevItems) => {
      const exists = prevItems.some(
        (prevItem) => prevItem.id === item.id || prevItem.name === item.name,
      );

      if (exists) {
        return prevItems;
      }

      return [...prevItems, item];
    });
  };

  return (
    <div>
      <h2>Zaklęcia</h2>
      <ItemList items={wizardsItems} onAddItem={handleAddItem} />
      <div>
        <h3>Twoje zaklęcia</h3>
        <ul>
          {items.map(({ image, name }, index) => (
            <li key={index}>
              <img src={image} alt={name} className="w-16 h-16" />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wizards;
