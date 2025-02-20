import React from 'react';
import { weaponsItems } from '../constans/weaponsItems';
import ItemsSection from './ItemsSection/ItemsSection';

const Weapons = () => {
  return <ItemsSection title="Twoja broń i tarcze" itemsData={weaponsItems} category="weapons" />;
};

export default Weapons;
