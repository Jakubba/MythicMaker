import React, { useState } from 'react';
import ItemList from './ItemList';
import torches from './../assets/image/ekwipunek/torches.png';
import {equipmentItems} from './../constans/equipmentItems';

const Equipment = () => {
  const [items, setItems] = useState([]);

  
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <h2>Ekwipunek</h2>
      <ItemList items={equipmentItems}} onAddItem={handleAddItem} />
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
