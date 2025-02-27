import React from 'react';
import { ItemListProps } from '../../types/interface';

const ItemList: React.FC<ItemListProps> = ({ isOpen, onClose, items, onAddItem }) => {
  if (!isOpen) return null;

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative max-h-[90vh] w-3/4 overflow-y-auto rounded bg-white p-4 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 h-[50px] w-[50px] rounded-full bg-red-500 p-2 text-2xl text-white"
          aria-label="Zamknij okno"
        >
          X
        </button>

        <h3 className="mb-4 text-xl font-bold text-gray-900">Wybierz przedmiot do dodania</h3>

        <ul className="flex flex-wrap justify-start gap-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="relative w-full rounded-lg bg-gray-100 p-4 shadow-md md:w-[calc(25%-1rem)]"
            >
              <img
                src={item.image || '/placeholder.jpg'}
                alt={item.name || 'Nieznany przedmiot'}
                className="mb-4 h-[200px] w-full rounded object-contain"
              />

              <div className="flex flex-col items-start">
                <p className="text-sm font-semibold text-gray-700">
                  {item.name || 'Nieznany przedmiot'}
                </p>
                <p className="text-sm text-gray-700">Siła: {item.stats?.strength || 0}</p>
                <p className="text-sm text-gray-700">Moc: {item.stats?.power || 0}</p>
              </div>

              <button
                onClick={() => onAddItem(item)}
                className="mt-4 w-full rounded bg-emerald-600 py-2 text-white hover:bg-emerald-700"
                aria-label={`Dodaj przedmiot ${item.name}`}
              >
                + Dodaj
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ItemList;
