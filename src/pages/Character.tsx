import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../AuthProvider';
import { db } from './../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import Weapons from '../components/Weapons';
import Equipment from '../components/Equipment';
import Wizards from '../components/Wizards';
import plus from './../assets/icons/icon-plus.png';
import minus from './../assets/icons/icon-minus.png';
import wizard1 from './../assets/image/zaklecia/wizards1.png';
import wizard2 from './../assets/image/zaklecia/wiazard2.png';
import torches from './../assets/image/ekwipunek/torches.png';

const Character = () => {
  const { logout, currentUser } = useAuth();
  const [showPop, setShowPop] = useState(false);
  const navigate = useNavigate();

  const [characterData, setCharacterData] = useState({
    name: '',
    race: '',
    age: '',
    class: '',
    level: '',
    description: '',
    health: 0,
    strength: 0,
    dexterity: 0,
    endurance: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });

  const [activeTab, setActiveTab] = useState('description');
  const [personalTab, setPersonalTab] = useState('description');
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadCharacterData = async () => {
      if (currentUser) {
        try {
          const docSnap = await getDoc(doc(db, 'characters', currentUser.uid));
          if (docSnap.exists()) {
            setCharacterData(docSnap.data());
          } else {
            console.log('No character data found.');
          }
        } catch (error) {
          console.error('Failed to load character data:', error);
          alert('Failed to load character data.');
        }
      }
    };
    loadCharacterData();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      if (currentUser) {
        await handleSaveData();
      }
      logout();
      navigate('/login');
    } catch (error) {
      alert('Failed to save character data before logout.');
    }
  };
  const handleSaveData = async () => {
    if (currentUser) {
      try {
        await setDoc(doc(db, 'characters', currentUser.uid), characterData);
        alert('Dane zostały zapisane!');
      } catch (error) {
        alert('Failed to save character data.');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharacterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStatChange = (stat, delta) => {
    setCharacterData((prevData) => ({
      ...prevData,
      [stat]: Math.max(prevData[stat] + delta, 0),
    }));
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };
  const tabs = [
    { id: 'description', label: 'Opis' },
    { id: 'stats', label: 'Statystki' },
    { id: 'weapons', label: 'Bronie' },
    { id: 'wizards', label: 'Zaklęcia' },
    { id: 'equipment', label: 'Ekwipunek' },
    { id: 'notes', label: 'Notatki' },
    { id: 'characteristics', label: 'Cechy postaci' },
  ];

  const stats = [
    { name: 'health', label: 'Punkty życia' },
    { name: 'strength', label: 'Siła' },
    { name: 'dexterity', label: 'Zręczność' },
    { name: 'endurance', label: 'Kondycja' },
    { name: 'intelligence', label: 'Inteligencja' },
    { name: 'wisdom', label: 'Mądrość' },
    { name: 'charisma', label: 'Charyzma' },
  ];

  return (
    <div>
      <div className="flex justify-end p-2 bg-slate-600">
        <button
          onClick={handleLogout}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Wyloguj
        </button>
      </div>
      <div className="flex h-screen">
        <div className="flex flex-col w-1/2 h-full p-4 bg-slate-500">
          <h1 className="mb-5 text-3xl text-center text-neutral-100">
            Witaj, {currentUser?.email}!
          </h1>
          <div className="flex w-full">
            <div className="relative w-1/2 mb-2 bg-slate-600">
              {image && (
                <img
                  src={image}
                  alt="Uploaded"
                  style={{
                    position: 'absolute',
                    objectFit: 'contain',
                    height: '100%',
                    width: '100%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 100,
                  }}
                />
              )}
              <input
                className="absolute w-max p-2 rounded top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
            <div className="justify-center w-1/2">
              <table>
                <tbody>
                  {['name', 'race', 'age', 'class', 'level'].map((field) => (
                    <tr key={field}>
                      <th className="px-4 py-4 text-xl text-left text-white capitalize">
                        {field}
                      </th>
                      <td className="p-2 text-xl ">
                        <input
                          className="w-full p-2 border rounded bg-slate-600 border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                          type="text"
                          name={field}
                          value={characterData[field]}
                          onChange={handleInputChange}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            {tabs.slice(0, 2).map((tab) => (
              <button
                className="p-2 text-white bg-slate-600 hover:bg-slate-700 active:bg-slate-800"
                key={tab.id}
                onClick={() => setPersonalTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
            {personalTab === 'description' ? (
              <textarea
                name="description"
                value={characterData.description}
                onChange={handleInputChange}
                className="w-full h-40"
                placeholder="Opis postaci..."
              />
            ) : (
              <table className="w-full border border-solid border-slate-600 border-10">
                <tbody>
                  {stats.map(({ name, label }) => (
                    <tr className="flex items-center mt-2 mb-2" key={name}>
                      <th className="w-[150px] text-xl">{label}</th>
                      <td className="flex w-[250px]">
                        <button
                          className="w-[50px] h-[50px] opacity-50 hover:opacity-100"
                          onClick={() => handleStatChange(name, -1)}
                        >
                          <img
                            src={minus}
                            className="w-[100%] h-[100%] object-contain"
                            alt="Decrease"
                          />
                        </button>
                        <input
                          className="w-[80px] text-lg text-center bg-transparent text-white "
                          type="text"
                          name={name}
                          value={characterData[name]}
                          onChange={handleInputChange}
                        />
                        <button
                          className="w-[50px] h-[50px] opacity-50 hover:opacity-100"
                          onClick={() => handleStatChange(name, 1)}
                        >
                          <img
                            src={plus}
                            className="w-[100%] h-[100%] object-contain"
                            alt="Increase"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <button
              className="block p-2 mt-2 ml-auto font-bold text-white bg-blue-900 rounded hover:bg-gray-700 active:bg-gray-800"
              onClick={handleSaveData}
            >
              Zapisz
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-full p-4 bg-slate-600">
          <div className="flex">
            {tabs.slice(2).map((tab) => (
              <button
                className="block p-2 border border-gray-600 bg-slate-500 hover:bg-slate-400 active:bg-slate-300"
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
                className="w-full h-full mt-4 min-h-40"
                placeholder="Notatki ..."
                style={{ resize: 'none' }}
              />
            )}
            {activeTab === 'characteristics' && (
              <div className="mt-4">
                {['Umiejętności', 'Cechy osobowości', 'Słabości'].map(
                  (label) => (
                    <textarea
                      key={label}
                      className="w-full h-40 mb-5"
                      placeholder={label}
                      style={{ resize: 'none' }}
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;