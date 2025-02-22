import React from 'react';
import book from '../assets/image/book.png';
import fireBook from '../assets/image/burn-book.png';
import openBook from '../assets/image/open-book.png';

export const BlockInfo = () => {
  return (
    <section className="relative flex h-max w-full flex-col items-center justify-center bg-gray-800 p-4 md:p-20">
      <div className="mb-8 flex flex-col items-start justify-center">
        <span className="mb-2 text-sm font-semibold text-white">Funkcje</span>
        <h2 className="mb-4 font-primaryFont text-3xl font-bold text-white">
          Odkryj nasze niesomniety narzędzie, która ułatwia grę w Dungeons & Dragons
        </h2>
        <p className="mb-4 font-tertiaryFont text-base font-medium text-white">
          Nasze narzędzie oferuje wszystko, co potrzebne do stworzenia wyjątkowej postaci w Dungeons
          & Dragons. Od kreatora postaci po menedżera kampanii, mamy wszystko, co ułatwi Twoją grę.
        </p>
      </div>
      <ul className="flex h-full flex-col items-stretch justify-center gap-4 xl:flex-row">
        <li className="flex w-full flex-row items-center gap-4 bg-white p-8 shadow-xl xl:flex-col">
          <img src={book} alt="book icon" className="h-[100px] w-auto" />
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-800 xl:mb-4 xl:text-center">
              Kreator postaci dostosowany do Twoich potrzeb
            </h3>
            <p className="font-secondaryFont text-sm font-semibold text-gray-800 xl:text-center">
              Twórz postacie, wybierając rasę, klasę i poziom.
            </p>
          </div>
        </li>
        <li className="flex w-full flex-row items-center gap-4 bg-white p-8 shadow-xl xl:flex-col">
          <img src={fireBook} alt="fire book icon" className="h-[100px] w-auto" />
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-800 xl:mb-4 xl:text-center">
              Intuicyjne kalkulatory bonusów i modyfikatorów
            </h3>
            <p className="font-secondaryFont text-sm font-semibold text-gray-800 xl:text-center">
              Zautomatyzowane obliczenia ułatwiają zarządzanie statystykami.
            </p>
          </div>
        </li>
        <li className="flex w-full flex-row items-center gap-4 bg-white p-8 shadow-xl xl:flex-col">
          <img src={openBook} alt="open book icon" className="h-[100px] w-auto" />
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-800 xl:mb-4 xl:text-center">
              Notatnik do organizacji sesji i przygód
            </h3>
            <p className="font-secondaryFont text-sm font-semibold text-gray-800 xl:text-center">
              Notatnik do organizacji sesji i przygód
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
