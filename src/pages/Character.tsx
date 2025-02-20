import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../context/AuthProvider';
import { db, storage } from './../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import Weapons from '../components/Weapons';
import Equipment from '../components/Equipment';
import Wizards from '../components/Wizards';
import plus from './../assets/icons/icon-plus.png';
import minus from './../assets/icons/icon-minus.png';
import { stats, tabs, TabType, TabEnum } from './../constans/descCharakter';
import characterImg from '../assets/image/mur2.jpeg';
import { initialCharacterData, CharacterData } from './../constans/initialCharacterData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Character = () => {
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();
  const [characterData, setCharacterData] = useState<CharacterData>(initialCharacterData);
  const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.DESCRIPTION);
  const [personalTab, setPersonalTab] = useState<TabEnum>(TabEnum.DESCRIPTION);
  const [image, setImage] = useState(null);
  const characterTabs: TabType[] = tabs.slice(2);

  useEffect(() => {
    const loadCharacterData = async () => {
      if (!currentUser) {
        return;
      }

      try {
        const docSnap = await getDoc(doc(db, 'users', currentUser.uid));
        if (docSnap.exists()) {
          setCharacterData(docSnap.data());
        }
      } catch (error) {
        toast.error(`Nie udało się załadować danych postaci:${error.message}`);
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
          toast.error(`Failed to save character data:${error.message}`);
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
          toast.error(`Failed to upload image:${error.message}`);
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
      toast.success('Failed to save character data before logout.');
    }
  };

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

  const handleStatChange = (stat, delta) => {
    setCharacterData((prevData) => ({
      ...prevData,
      [stat]: Math.max(prevData[stat] + delta, 0),
    }));
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      toast.error(`No file selected.`);
      return;
    }

    const storageRef = ref(storage, `images/${currentUser.uid}/${file.name}`);

    try {
      await uploadBytes(storageRef, file);

      const fileURL = await getDownloadURL(storageRef);

      setCharacterData((prevData) => ({ ...prevData, imageURL: fileURL }));

      await setDoc(doc(db, 'users', currentUser.uid), {
        ...characterData,
        imageURL: fileURL,
      });
    } catch (error) {
      toast.error(`Error during file upload:${error.message}`);
      if (error.code === 'storage/unauthorized') {
        toast.success('Nie masz uprawnień do przesyłania plików.');
      } else {
        toast.success('Wystąpił błąd podczas przesyłania pliku.');
      }
    }
  };
  const displayInputValue = (name: string): number | string => {
    const value = characterData[name as keyof typeof characterData];

    return isNaN(Number(value)) ? 0 : value;
  };

  return (
    <div className="relative bg-cardGradient">
      <img
        className="absolute left-0 top-0 z-0 h-full w-full object-cover opacity-70"
        src={characterImg}
        alt=""
      />
      <div className="relative z-10 flex justify-end p-2">
        <button
          onClick={handleLogout}
          className="rounded bg-white px-4 py-2 font-bold text-gray-800 hover:bg-gray-800 hover:text-white"
        >
          Wyloguj
        </button>
      </div>
      <div className="relative z-10 mx-auto flex h-screen max-w-[1600px] flex-col lg:flex-row">
        <div className="flex h-full w-full flex-col p-4 lg:w-1/2">
          <h1 className="mb-5 bg-gray-600 py-4 text-center font-tertiaryFont text-3xl font-semibold uppercase text-neutral-100">
            Witaj {currentUser?.email || 'graczu'}
          </h1>
          <div className="mb-4 flex w-full flex-wrap">
            <div className="relative aspect-square max-h-[380px] w-1/2">
              {characterData.imageURL && (
                <img
                  src={characterData.imageURL}
                  alt="Uploaded"
                  className="z-12 absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-cover md:object-contain"
                />
              )}
              <input
                className="peer absolute bottom-[10px] right-[10px] z-20 w-max cursor-pointer p-2 opacity-0"
                type="file"
                id="fileInput"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="fileInput"
                className="absolute bottom-[10px] right-[10px] cursor-pointer bg-gray-800 p-2 text-white peer-hover:bg-gray-100 peer-hover:text-gray-600"
              >
                Obraz
              </label>
            </div>
            <div className="w-1/2 justify-center">
              <table className="w-full max-w-full">
                <tbody>
                  {['name', 'race', 'age', 'class', 'level'].map((field) => (
                    <tr key={field} className="mb-6 rounded rounded-r-lg">
                      <th className="bg-gray-600 px-4 py-2 text-left text-xl capitalize text-white">
                        {field}
                      </th>
                      <td className="text-xl">
                        <input
                          className="h-2-full box-border w-full rounded-r-lg border border-slate-500 bg-gray-600 p-2 text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
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
            {characterTabs.map((tab) => (
              <button
                className={`px-font-semibold block border border-gray-600 px-4 py-2 uppercase text-white ${
                  activeTab === tab.id ? 'bg-yellow-600' : 'bg-slate-500'
                } hover:bg-slate-400 active:bg-slate-300`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
            {personalTab === 'description' ? (
              <textarea
                name="description"
                value={characterData.description}
                onChange={handleInputChange}
                className="h-40 w-full resize-none rounded border border-slate-600 bg-gray-600 bg-transparent p-4 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                placeholder="Opis postaci..."
              />
            ) : (
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
                          <img
                            src={minus}
                            className="h-[100%] w-[100%] object-contain"
                            alt="Decrease"
                          />
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
                          <img
                            src={plus}
                            className="h-[100%] w-[100%] object-contain"
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
                className="mt-4 h-full min-h-40 w-full resize-none bg-gray-600 bg-transparent p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
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
                  className="mb-5 h-40 w-full resize-none bg-gray-600 bg-transparent p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="Umiejętności"
                />
                <textarea
                  name="personalityTraits"
                  value={characterData.personalityTraits}
                  onChange={handleInputChange}
                  className="mb-5 h-40 w-full resize-none bg-gray-600 bg-transparent p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="Cechy osobowości"
                />
                <textarea
                  name="weakness"
                  value={characterData.weakness}
                  onChange={handleInputChange}
                  className="mb-5 h-40 w-full resize-none bg-gray-600 bg-transparent p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
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
