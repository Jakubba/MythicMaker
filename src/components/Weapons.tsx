import React from 'react';
import { weaponsItems } from '../constans/weaponsItems';
import ItemsSection from './ItemsSection';

const Weapons = () => {
  return <ItemsSection title="Twoja broń i tarcze" itemsData={weaponsItems} />;
};

export default Weapons;
