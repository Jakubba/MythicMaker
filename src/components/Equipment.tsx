import React from 'react';
import { equipmentItems } from '../constans/equipmentItems';
import ItemsSection from './ItemsSection';

const EquipmentItems = () => {
  return <ItemsSection title="Twój ekwipunek" itemsData={equipmentItems} />;
};

export default EquipmentItems;
