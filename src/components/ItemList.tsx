import React, { useState } from 'react';
const ItemList = ({ isOpen, onClose, items, onAddItem }) => {
  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-3/4 p-4 bg-white rounded shadow-lg">
        <button
          onClick={onClose}
          className="absolute p-2 text-white text-2xl bg-red-500 rounded-full top-2 right-2 w-[50px] h-[50px]"
          aria-label="Close button"
          aria-hidden="true"
        >
          X
        </button>

        <h3 className="mb-4 text-xl">Wybierz przedmiot do dodania</h3>

        <ul className="flex flex-wrap w-full max-h-[80vh] overflow-y-auto">
          {items.map((item, index) => (
            <li
              key={index}
              className="relative w-[100%] lg:calc-25-minus-20 m-[10px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-contain h-[250px]  w-auto m-auto mb-8 "
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 ">
                <p className="text-sm text-gray-700">
                  Siła: {item.stats.strength}
                </p>
                <p className="text-sm text-gray-700">Moc: {item.stats.power}</p>
                <button
                  onClick={() => onAddItem(item)}
                  className="py-1 mt-2 text-white bg-emerald-800 rounded-full w-[100%]"
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
