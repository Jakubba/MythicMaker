import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../AuthProvider';
import charakter from './../assets/image/charakter.png';
import plus from './../assets/icons/icon-plus.png';
import minus from './../assets/icons/icon-minus.png';
import weapon from './../assets/image/wapons/pngegg.png';
import shield from './../assets/image/wapons/shield.png';
import wizard1 from './../assets/image/zaklecia/wizards1.png';
import wizard2 from './../assets/image/zaklecia/wiazard2.png';
import torches from './../assets/image/ekwipunek/torches.png';

const Character = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handlePersonalTab = (tabId: string) => {
    const allTabs = document.querySelectorAll('.tab-personal');
    allTabs.forEach((tab) => {
      tab.classList.add('hidden');
    });
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.remove('hidden');
    }
  };
  const handleActiveTab = (tabId: string) => {
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach((tab) => {
      tab.classList.add('hidden');
    });
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.remove('hidden');
    }
  };

  const handlePlus = () => {
    console.log('plus');
  };

  const handleMinus = () => {
    console.log('minus');
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Wyloguj
        </button>
      </div>
      <div className="flex h-[100vh] w-[100%]">
        <div className="flex flex-col h-[100%] w-[50%] bg-slate-500">
          <h1 className="mb-2 text-3xl text-neutral-100">
            Witaj, RudraShadow33!
          </h1>
          <div className="flex">
            <div className="h-[100%] w-[50%] border-gray-600 rounded-md overflow-hidden">
              <img src={charakter} alt="image charakter" />
            </div>
            <table className="w-[50%] ">
              <tbody>
                <tr className="bg-slate-600 h-[auto] w-[100%]">
                  <th className="text-base">Imie</th>
                  <td>
                    <input
                      type="text"
                      className="border border-gray-400 bg-slate-600"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Rasa</th>
                  <td>
                    <input
                      type="text"
                      className="border border-gray-400 bg-slate-600"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Wiek</th>
                  <td>
                    <input
                      type="text"
                      className="border border-gray-400 bg-slate-600"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Klasa</th>
                  <td>
                    <input
                      type="text"
                      className="border border-gray-400 bg-slate-600"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Poziom</th>
                  <td>
                    <input
                      type="text"
                      className="border border-gray-400 bg-slate-600"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div>
              <button
                onClick={() => handlePersonalTab('description')}
                className="px-4 py-2 text-xl border border-gray-400 tab"
              >
                Opis
              </button>
              <button
                onClick={() => handlePersonalTab('stats')}
                className="px-4 py-2 text-xl border border-gray-400 tab"
              >
                Statystki
              </button>
            </div>
            <div
              className="flex flex-col border border-gray-400 tab-personal"
              id="description"
            >
              <textarea
                className="w-[100%] h-[50vh] border border-gray-300 rounded-md p-2 bg-transparent"
                style={{ resize: 'none' }}
              ></textarea>
              <button className="px-4 py-2 text-xl border border-gray-400 w-max ml-[auto]">
                Zapisz
              </button>
            </div>
            <div
              className="hidden border border-gray-400 tab-personal"
              id="stats"
            >
              <table>
                <tbody>
                  <tr>
                    <th className="p-2 text-base">Punkty życia</th>
                    <th className="flex p-2">
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handlePlus}
                      >
                        <img src={plus} alt="plus" />
                      </button>
                      <input type="text" />
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handleMinus}
                      >
                        <img src={minus} alt="minus" />
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th className="p-2 text-base">Siła</th>
                    <th className="flex p-2">
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handlePlus}
                      >
                        <img src={plus} alt="plus" />
                      </button>
                      <input type="text" />
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handleMinus}
                      >
                        <img src={minus} alt="minus" />
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th className="p-2 text-base">Zręczność</th>
                    <th className="flex p-2">
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handlePlus}
                      >
                        <img src={plus} alt="plus" />
                      </button>
                      <input type="text" />
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handleMinus}
                      >
                        <img src={minus} alt="minus" />
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th className="p-2 text-base">Kondycja</th>
                    <th className="flex p-2">
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handlePlus}
                      >
                        <img src={plus} alt="plus" />
                      </button>
                      <input type="text" />
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handleMinus}
                      >
                        <img src={minus} alt="minus" />
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th className="p-2 text-base">Inteligencja</th>
                    <th className="flex p-2">
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handlePlus}
                      >
                        <img src={plus} alt="plus" />
                      </button>
                      <input type="text" />
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handleMinus}
                      >
                        <img src={minus} alt="minus" />
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th className="p-2 text-base">Mądrość</th>
                    <th className="flex p-2">
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handlePlus}
                      >
                        <img src={plus} alt="plus" />
                      </button>
                      <input type="text" />
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handleMinus}
                      >
                        <img src={minus} alt="minus" />
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th className="p-2 text-base">Charyzma</th>
                    <th className="flex p-2">
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handlePlus}
                      >
                        <img src={plus} alt="plus" />
                      </button>
                      <input type="text" />
                      <button
                        className="w-[25px] h-[25px] bg-thirdColor flex justify-center items-center"
                        onClick={handleMinus}
                      >
                        <img src={minus} alt="minus" />
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
              <button className="block py-2 text-xl border border-gray-400 ml-[auto] mr-2 p-2">
                Zapisz
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[100%] w-[50%] bg-slate-600 ">
          <div className="flex h-max">
            <button
              onClick={() => handleActiveTab('weapons')}
              className="p-2 text-xl text-white border border-gray-400"
            >
              Bronie
            </button>
            <button
              onClick={() => handleActiveTab('wizards')}
              className="p-2 text-xl text-white border border-gray-400"
            >
              Zaklęcia
            </button>
            <button
              onClick={() => handleActiveTab('equipment')}
              className="p-2 text-xl text-white border border-gray-400"
            >
              Ekwipunek
            </button>
            <button
              onClick={() => handleActiveTab('notes')}
              className="p-2 text-xl text-white border border-gray-400"
            >
              Notatki
            </button>
            <button
              onClick={() => handleActiveTab('characteristics')}
              className="p-2 text-xl text-white border border-gray-400"
            >
              Cechy postaci
            </button>
          </div>
          <div>
            <div id="weapons" className="tab-content">
              <ul className="grid grid-cols-5 gap-2 grid-row-[auto] p-2">
                <li className="p-2 border rounded-md w-max h-[100%] bg-slate-50">
                  <div className="h-[100px] w-[100px]">
                    <img
                      src={weapon}
                      alt=""
                      className="h-[100%] w-[100%] object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">Siła +2</p>
                    <p className="text-sm text-gray-700">Zręczność +2</p>
                    <p className="text-sm text-gray-700">Obrazenia +2</p>
                  </div>
                </li>
                <li className="p-2 border rounded-md w-max  h-[100%] bg-slate-50">
                  <div className="h-[100px] w-[100px]">
                    <img
                      src={shield}
                      alt=""
                      className="h-[100%] w-[100%] object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">Siła +2</p>
                    <p className="text-sm text-gray-700">Zręczność +2</p>
                    <p className="text-sm text-gray-700">Obrazenia +2</p>
                  </div>
                </li>
                <li className="p-2 cursor-pointer rounded-md w-max h-[100%] ">
                  <div className="h-[100%] w-[100px]">
                    <img
                      src={plus}
                      alt=""
                      className="h-[100%] w-[100%] object-contain"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div id="wizards" className="hidden tab-content">
              <ul className="grid grid-cols-5 gap-2 grid-row-[auto] p-2">
                <li className="p-2 border rounded-md w-max h-[100%] bg-slate-50">
                  <div className="h-[100px] w-[100px]">
                    <img
                      src={wizard1}
                      alt=""
                      className="h-[100%] w-[100%] object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">Siła +2</p>
                    <p className="text-sm text-gray-700">Zręczność +2</p>
                    <p className="text-sm text-gray-700">Obrazenia +2</p>
                  </div>
                </li>
                <li className="p-2 border rounded-md w-max  h-[100%] bg-slate-50">
                  <div className="h-[100px] w-[100px]">
                    <img
                      src={wizard2}
                      alt=""
                      className="h-[100%] w-[100%] object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">Siła +2</p>
                    <p className="text-sm text-gray-700">Zręczność +2</p>
                    <p className="text-sm text-gray-700">Obrazenia +2</p>
                  </div>
                </li>
                <li className="p-2 cursor-pointer rounded-md w-max h-[100%] ">
                  <div className="h-[100%] w-[100px]">
                    <img
                      src={plus}
                      alt=""
                      className="h-[100%] w-[100%] object-contain"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div id="equipment" className="hidden tab-content">
              <ul className="grid grid-cols-5 gap-2 grid-row-[auto] p-2">
                <li className="p-2 border rounded-md w-max h-[100%] bg-slate-50">
                  <div className="h-[100px] w-[100px]">
                    <img
                      src={torches}
                      alt=""
                      className="h-[100%] w-[100%] object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">Siła +2</p>
                    <p className="text-sm text-gray-700">Zręczność +2</p>
                    <p className="text-sm text-gray-700">Obrazenia +2</p>
                  </div>
                </li>
                <li className="p-2 cursor-pointer rounded-md w-max h-[100%] ">
                  <div className="h-[100%] w-[100px]">
                    <img
                      src={plus}
                      alt=""
                      className="h-[100%] w-[100%] object-contain"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div id="notes" className="hidden tab-content">
              <textarea
                className="w-[100%] h-[80vh] bg-gray-400 text-white font-secondaryFont placeholder-black p-2"
                placeholder="Notatki ..."
                style={{ resize: 'none' }}
              />
            </div>
            <div id="characteristics" className="hidden tab-content">
              <ul className="p-2">
                <li className="flex flex-col">
                  <h4 className="p-2 text-xl text-center text-white">
                    Umiejętności
                  </h4>
                  <textarea
                    name=""
                    id="abilities"
                    className="h-[150px] rounded-sm"
                    style={{ resize: 'none' }}
                  ></textarea>
                </li>
                <li className="flex flex-col">
                  <h4 className="p-2 text-xl text-center text-white">
                    Cechy osobowości
                  </h4>
                  <textarea
                    name=""
                    id="characteristics "
                    className="h-[150px] rounded-sm"
                    style={{ resize: 'none' }}
                  ></textarea>
                </li>
                <li className="flex flex-col">
                  <h4 className="p-2 text-xl text-center text-white">
                    Słabości
                  </h4>
                  <textarea
                    name=""
                    id="weaknesses"
                    className="h-[150px] rounded-sm"
                    style={{ resize: 'none' }}
                  ></textarea>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
