// CharacterTabs.js
import React from 'react';
import plus from './../assets/icons/icon-plus.png';
import minus from './../assets/icons/icon-minus.png';
import { stats, TabEnum } from './../constans/descCharakter';

export const CharacterStats = ({
  activeTab,
  setActiveTab,
  characterTabs,
  characterData,
  handleInputChange,
  handleStatChange,
  displayInputValue,
}) => {
  return (
    <div className="flex flex-wrap">
      {characterTabs.map((tab) => (
        <button
          className={`px-font-semibold block w-max border border-gray-600 px-4 py-2 uppercase text-white ${
            activeTab === tab.id ? 'bg-yellow-600' : 'bg-slate-500'
          } hover:bg-slate-400 active:bg-slate-300`}
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
      {activeTab === TabEnum.DESCRIPTION ? (
        <textarea
          name="description"
          value={characterData.description}
          onChange={handleInputChange}
          className="w-full h-40 p-4 text-white bg-gray-600 border rounded resize-none border-slate-600 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
          placeholder="Opis postaci..."
        />
      ) : activeTab === TabEnum.STATS ? (
        <table className="w-full border-10 bg-slate-500">
          <tbody>
            {stats.map(({ name, label }) => (
              <tr className="flex items-center mt-2 mb-2" key={name}>
                <th className="w-[150px] text-white">{label}</th>
                <td className="flex w-[250px]">
                  <button
                    className="h-[50px] w-[50px] opacity-50 hover:opacity-100"
                    onClick={() => handleStatChange(name, -1)}
                  >
                    <img src={minus} className="h-[100%] w-[100%] object-contain" alt="Decrease" />
                  </button>
                  <input
                    className="w-[80px] bg-transparent text-center text-lg text-white"
                    type="text"
                    name={name}
                    value={displayInputValue(name)}
                    onChange={handleInputChange}
                  />
                  <button
                    className="h-[50px] w-[50px] opacity-50 hover:opacity-100"
                    onClick={() => handleStatChange(name, 1)}
                  >
                    <img src={plus} className="h-[100%] w-[100%] object-contain" alt="Increase" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};
