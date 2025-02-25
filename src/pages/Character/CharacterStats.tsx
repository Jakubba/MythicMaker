import React from 'react';
import plus from './../../assets/icons/icon-plus.png';
import minus from './../../assets/icons/icon-minus.png';
import { stats, TabEnum } from '../../constans/descCharakter';
import { CharacterStatsProps } from './Character.types';

export const CharacterStats: React.FC<CharacterStatsProps> = ({
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
          className="h-40 w-full resize-none rounded border border-slate-600 bg-gray-600 p-4 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
          placeholder="Opis postaci..."
        />
      ) : activeTab === TabEnum.STATS ? (
        <table className="border-10 w-full bg-slate-500">
          <tbody>
            {stats.map(({ name, label }) => (
              <tr className="mb-2 mt-2 flex items-center" key={name}>
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
