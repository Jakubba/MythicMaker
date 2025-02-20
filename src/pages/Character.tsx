import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../context/AuthProvider';
import { db, storage } from './../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import plus from './../assets/icons/icon-plus.png';
import minus from './../assets/icons/icon-minus.png';
import { stats, tabs, TabType, TabEnum } from './../constans/descCharakter';
import characterImg from '../assets/image/mur2.jpeg';
import { initialCharacterData, CharacterData } from './../constans/initialCharacterData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CharacterBackpack } from './CharacterBackpack';
import { CharacterProfile } from './CharacterProfile';
import { CharacterStats } from './CharacterStats';

const Character = () => {
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();
  const [characterData, setCharacterData] = useState<CharacterData>(initialCharacterData);
  const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.DESCRIPTION);
  const [personalTab, setPersonalTab] = useState<TabEnum>(TabEnum.DESCRIPTION);
  const [image, setImage] = useState(null);
  const characterTabs: TabType[] = tabs.slice(0, 2);

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
        toast.error(`Nie udało się załadować danych postaci:${error.messege}`);
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
          toast.error(`Failed to save character data:${error.messege}`);
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
          toast.error(`Failed to upload image:${error.messege}`);
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
      [stat]: Math.max((prevData[stat] || 0) + delta, 0),
    }));
  };

  const displayInputValue = (name: string): number | string => {
    const value = characterData[name as keyof typeof characterData];

    return isNaN(Number(value)) ? 0 : value;
  };

  return (
    <div className="relative bg-cardGradient">
      <img
        className="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-70"
        src={characterImg}
        alt=""
      />
      <div className="relative z-10 flex justify-end p-2">
        <button
          onClick={handleLogout}
          className="px-4 py-2 font-bold text-gray-800 bg-white rounded hover:bg-gray-800 hover:text-white"
        >
          Wyloguj
        </button>
      </div>
      <div className="relative z-10 mx-auto flex h-screen max-w-[1600px] flex-col lg:flex-row">
        <div className="flex flex-col w-full h-full p-4 lg:w-1/2">
          <h1 className="py-4 mb-5 text-3xl font-semibold text-center uppercase bg-gray-600 font-tertiaryFont text-neutral-100">
            Witaj {currentUser?.email || 'graczu'}
          </h1>
          <CharacterProfile characterData={characterData} setCharacterData={setCharacterData} />
          <CharacterStats
            characterData={characterData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleStatChange={handleStatChange}
            characterTabs={characterTabs}
            handleInputChange={handleInputChange}
            displayInputValue={displayInputValue}
          />
        </div>
        <CharacterBackpack />
      </div>
    </div>
  );
};

export default Character;
