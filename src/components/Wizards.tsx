import React from 'react';
import { wizardsItems } from '../constans/wizardItems';
import ItemsSection from './ItemsSection';

const Wizards = () => {
  return (
    <ItemsSection title="Twoje magiczne przedmioty" itemsData={wizardsItems} />
  );
};

export default Wizards;
