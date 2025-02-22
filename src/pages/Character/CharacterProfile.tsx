import React from 'react';
import { storage } from '../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import { CharacterProfileProps } from './Character.types';

const auth = getAuth();

const CHARACTER_FIELDS = ['name', 'race', 'age', 'class', 'level'];

export const CharacterProfile: React.FC<CharacterProfileProps> = ({
  characterData,
  setCharacterData,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharacterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      toast.error(`No file selected.`);
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      toast.error('Musisz być zalogowany, aby przesyłać pliki.');
      return;
    }

    // Tworzenie unikalnej nazwy pliku
    const uniqueFileName = `${uuidv4()}_${file.name}`;
    const storageRef = ref(storage, `images/${user.uid}/${uniqueFileName}`);

    try {
      await uploadBytes(storageRef, file);
      const fileURL = await getDownloadURL(storageRef);

      setCharacterData((prevData) => ({ ...prevData, imageURL: fileURL }));

      toast.success('Obraz przesłany pomyślnie!');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error(`Błąd przesyłania pliku: ${error.message}`);
    }
  };

  return (
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
            {CHARACTER_FIELDS.map((field) => (
              <tr key={field} className="mb-6 rounded rounded-r-lg">
                <th className="bg-gray-600 px-4 py-2 text-left text-xl capitalize text-white">
                  {field}
                </th>
                <td className="text-xl">
                  <input
                    className="h-2-full box-border w-full rounded-r-lg border border-slate-500 bg-gray-600 p-2 text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                    type="text"
                    name={field}
                    value={characterData[field] || ''}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
