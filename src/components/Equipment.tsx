import React from 'react';
import { equipmentItems } from '../constans/equipmentItems';
import ItemsSection from './ItemsSection/ItemsSection';

const EquipmentItems = () => {
  return <ItemsSection title="Twój ekwipunek" itemsData={equipmentItems} category="equipment" />;
};

export default EquipmentItems;
