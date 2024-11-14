import React, { useState } from 'react';
const ItemList = ({ isOpen, onClose, items, onAddItem }) => {
  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-3/4 p-4 bg-white rounded shadow-lg">
        <button
          onClick={onClose}
          className="absolute p-2 text-white bg-red-500 rounded-full top-2 right-2"
          aria-label="Close button"
          aria-hidden="true"
        >
          X
        </button>

        <h3 className="mb-4 text-xl">Wybierz przedmiot do dodania</h3>

        <ul className="grid grid-cols-3 gap-4">
          {items.map((item, index) => (
            <li key={index} className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain w-full h-full mb-2"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-75">
                <p className="text-sm text-gray-700">
                  Siła: {item.stats.strength}
                </p>
                <p className="text-sm text-gray-700">Moc: {item.stats.power}</p>
                <button
                  onClick={() => onAddItem(item)}
                  className="py-1 mt-2 text-white bg-green-500 rounded-full"
                  aria-label="Dodaj element"
                >
                  + Dodaj
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ItemList;
