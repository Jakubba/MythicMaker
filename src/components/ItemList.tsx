import React from 'react';

const ItemList = ({ isOpen, onClose, items, onAddItem }) => {
  if (!isOpen) return null;

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-3/4 p-4 bg-white rounded shadow-lg max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute p-2 text-white text-2xl bg-red-500 rounded-full top-2 right-2 w-[50px] h-[50px]"
          aria-label="Zamknij okno"
        >
          X
        </button>

        <h3 className="mb-4 text-xl font-bold text-gray-900">
          Wybierz przedmiot do dodania
        </h3>

        <ul className="flex flex-wrap justify-start gap-4">
          {items.map((item) => (
            <li
              key={item.id} 
              className="relative w-full md:w-[calc(25%-1rem)] bg-gray-100 rounded-lg shadow-md p-4"
            >
              <img
                src={item.image || '/placeholder.jpg'}
                alt={item.name || 'Nieznany przedmiot'}
                className="object-contain w-full h-[200px] mb-4 rounded"
              />

              <div className="flex flex-col items-start">
                <p className="text-sm font-semibold text-gray-700">
                  {item.name || 'Nieznany przedmiot'}
                </p>
                <p className="text-sm text-gray-700">
                  Siła: {item.stats?.strength || 0}
                </p>
                <p className="text-sm text-gray-700">
                  Moc: {item.stats?.power || 0}
                </p>
              </div>

              <button
                onClick={() => onAddItem(item)}
                className="w-full py-2 mt-4 text-white rounded bg-emerald-600 hover:bg-emerald-700"
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
