import React from 'react';
import { wizardsItems } from '../constans/wizardItems';
import ItemsSection from './ItemsSection/ItemsSection';

const Wizards = () => {
  return (
    <ItemsSection title="Twoje magiczne przedmioty" itemsData={wizardsItems} category="spells" />
  );
};

export default Wizards;
