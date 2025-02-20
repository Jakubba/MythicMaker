import React, { useState } from 'react';
import { initialCharacterData, CharacterData } from './../constans/initialCharacterData';
import { tabs, TabEnum } from './../constans/descCharakter';
import Weapons from '../components/Weapons';
import Equipment from '../components/Equipment';
import Wizards from '../components/Wizards';
export const CharacterBackpack = () => {
  const [characterData, setCharacterData] = useState<CharacterData>(initialCharacterData);
  const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.DESCRIPTION);
  const processValue = (name, value) => {
    const hasKeyword = name.includes('level') || name.includes('health');
    const isStatName = stats.some((stat) => stat.name === name);
    if (hasKeyword || isStatName) {
      return isNaN(value) ? 0 : Number(value);
    }
    return value;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = processValue(name, value);

    setCharacterData((prevData) => ({ ...prevData, [name]: newValue }));
  };
  return (
    <div className="flex h-full w-full flex-col p-4 lg:w-1/2">
      <div className="flex flex-wrap">
        {tabs.slice(2).map((tab) => (
          <button
            className={`px-font-semibold block border border-gray-600 px-4 py-2 uppercase text-white ${activeTab === tab.id ? 'bg-yellow-600' : 'bg-slate-500'} hover:bg-slate-400 active:bg-slate-300`}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {activeTab === 'weapons' && <Weapons />}
        {activeTab === 'wizards' && <Wizards />}
        {activeTab === 'equipment' && <Equipment />}
        {activeTab === 'notes' && (
          <textarea
            name="notes"
            value={characterData.notes}
            onChange={handleInputChange}
            className="mt-4 h-full min-h-40 w-full resize-none bg-gray-600 p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="Notatki ..."
            style={{ resize: 'none' }}
          />
        )}
        {activeTab === 'characteristics' && (
          <div className="mt-4">
            <textarea
              name="skillsNotes"
              value={characterData.skillsNotes}
              onChange={handleInputChange}
              className="mb-5 h-40 w-full resize-none bg-gray-600 p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="Umiejętności"
            />
            <textarea
              name="personalityTraits"
              value={characterData.personalityTraits}
              onChange={handleInputChange}
              className="mb-5 h-40 w-full resize-none bg-gray-600 p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="Cechy osobowości"
            />
            <textarea
              name="weakness"
              value={characterData.weakness}
              onChange={handleInputChange}
              className="mb-5 h-40 w-full resize-none bg-gray-600 p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="Słabości"
            />
          </div>
        )}
      </div>
    </div>
  );
};
