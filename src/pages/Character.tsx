import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../AuthProvider';
import { db, storage } from './../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import Weapons from '../components/Weapons';
import Equipment from '../components/Equipment';
import Wizards from '../components/Wizards';
import plus from './../assets/icons/icon-plus.png';
import minus from './../assets/icons/icon-minus.png';
import { stats, tabs } from './../constans/descCharakter';

const Character = () => {
  const { logout, currentUser } = useAuth();
  const [showListItems, setShowListItems] = useState(false);
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
    imageURL: '',
    notes: '',
    skillsNotes: '',
    personalityTraits: '',
    weakness: '',
    weapons: [],
    spells: [],
    equipment: [],
  });

  const [activeTab, setActiveTab] = useState('description');
  const [personalTab, setPersonalTab] = useState('description');
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadCharacterData = async () => {
      if (!currentUser) {
        return;
      }

      try {
        const docSnap = await getDoc(doc(db, 'users', currentUser.uid));
        if (docSnap.exists()) {
          setCharacterData(docSnap.data());
        } else {
          console.log('Brak danych postaci.');
        }
      } catch (error) {
        console.error('Nie udało się załadować danych postaci:', error);
        alert('Nie udało się załadować danych postaci.');
      }
    };

    loadCharacterData();
  }, [currentUser]);

  useEffect(() => {
    const saveCharacterData = async () => {
      if (currentUser) {
        try {
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (
            !docSnap.exists() ||
            JSON.stringify(docSnap.data()) !== JSON.stringify(characterData)
          ) {
            await setDoc(docRef, characterData);
          }
        } catch (error) {
          console.error('Failed to save character data:', error);
        }
      }
    };
    saveCharacterData();
  }, [characterData, currentUser]);

  useEffect(() => {
    const uploadImage = async () => {
      if (image) {
        const imageRef = ref(storage, `images/${currentUser.uid}/${file.name}`);
        try {
          await uploadBytes(imageRef, image);
          const imageURL = await getDownloadURL(imageRef);
          setCharacterData((prevData) => ({ ...prevData, imageURL }));
        } catch (error) {
          console.error('Failed to upload image:', error);
        }
      }
    };
    uploadImage();
  }, [image, currentUser]);

  const handleLogout = async () => {
    try {
      if (currentUser) {
        await setDoc(doc(db, 'users', currentUser.uid), characterData);
      }
      logout();
      navigate('/login');
    } catch (error) {
      alert('Failed to save character data before logout.');
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

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error('No file selected.');
      return;
    }

    if (!currentUser) {
      console.error('User is not authenticated.');
      alert('Musisz być zalogowany, aby przesłać plik.');
      return;
    }

    const storageRef = ref(storage, `images/${currentUser.uid}/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const fileURL = await getDownloadURL(storageRef);
      console.log('File uploaded successfully:', fileURL);

      setCharacterData((prevData) => ({ ...prevData, imageURL: fileURL }));

      await setDoc(doc(db, 'users', currentUser.uid), {
        ...characterData,
        imageURL: fileURL,
      });
    } catch (error) {
      if (error.code === 'storage/unauthorized') {
        alert('Nie masz uprawnień do przesyłania plików.');
      }
      console.error('Error uploading file:', error);
    }
  };

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
      <div className="flex flex-col h-screen lg:flex-row">
        <div className="flex flex-col w-full h-full p-4 bg-slate-500 lg:w-1/2">
          <h1 className="mb-5 text-3xl text-center text-neutral-100">
            Witaj, {currentUser?.email || 'graczu'}!
          </h1>
          <div className="flex w-full">
            <div className="relative w-1/2 mb-2 bg-slate-600">
              {characterData.imageURL && (
                <img
                  src={characterData.imageURL}
                  alt="Uploaded"
                  className="absolute h-full w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain z-[100]"
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
          </div>
        </div>
        <div className="flex flex-col w-full h-full p-4 bg-slate-600 lg:w-1/2">
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
                name="notes"
                value={characterData.notes}
                onChange={handleInputChange}
                className="w-full h-full mt-4 min-h-40"
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
                  className="w-full h-40 mb-5"
                  placeholder="Umiejętności"
                />
                <textarea
                  name="personalityTraits"
                  value={characterData.personalityTraits}
                  onChange={handleInputChange}
                  className="w-full h-40 mb-5"
                  placeholder="Cechy osobowości"
                />
                <textarea
                  name="weakness"
                  value={characterData.weakness}
                  onChange={handleInputChange}
                  className="w-full h-40 mb-5"
                  placeholder="Słabości"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
