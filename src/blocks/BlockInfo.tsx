import React from 'react';
import book from '../assets/image/book.png';
import fireBook from '../assets/image/burn-book.png';
import openBook from '../assets/image/open-book.png';

export const BlockInfo = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full p-4 bg-gray-800 h-max md:p-20">
      <div className="flex flex-col items-start justify-center mb-8">
        <span className="mb-2 text-sm font-semibold text-white">Funkcje</span>
        <h2 className="mb-4 text-3xl font-bold text-white max-w-[500px]">
          Odkryj nasze niesomniety narzędzie, która ułatwia grę w Dungeons &
          Dragons
        </h2>
        <p className="mb-4 text-base font-medium text-white">
          Nasze narzędzie oferuje wszystko, co potrzebne do stworzenia
          wyjątkowej postaci w Dungeons & Dragons. Od kreatora postaci po
          menedżera kampanii, mamy wszystko, co ułatwi Twoją grę.
        </p>
      </div>
      <ul className="flex flex-col items-stretch justify-center h-full gap-4 xl:flex-row">
        <li className="flex flex-row items-center w-full gap-4 p-8 bg-white shadow-xl xl:flex-col">
          <img src={book} alt="book icon" className="h-[100px] w-auto" />
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-800 xl:text-center xl:mb-4">
              Kreator postaci dostosowany do Twoich potrzeb
            </h3>
            <p className="text-sm font-semibold text-gray-800 font-secondaryFont xl:text-center">
              Twórz postacie, wybierając rasę, klasę i poziom.
            </p>
          </div>
        </li>
        <li className="flex flex-row items-center w-full gap-4 p-8 bg-white shadow-xl xl:flex-col">
          <img
            src={fireBook}
            alt="fire book icon"
            className="h-[100px] w-auto"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-800 xl:text-center xl:mb-4">
              Intuicyjne kalkulatory bonusów i modyfikatorów
            </h3>
            <p className="text-sm font-semibold text-gray-800 font-secondaryFont xl:text-center">
              Zautomatyzowane obliczenia ułatwiają zarządzanie statystykami.
            </p>
          </div>
        </li>
        <li className="flex flex-row items-center w-full gap-4 p-8 bg-white shadow-xl xl:flex-col">
          <img
            src={openBook}
            alt="open book icon"
            className="h-[100px] w-auto"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-800 xl:text-center xl:mb-4">
              Notatnik do organizacji sesji i przygód
            </h3>
            <p className="text-sm font-semibold text-gray-800 font-secondaryFont xl:text-center">
              Notatnik do organizacji sesji i przygód
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
