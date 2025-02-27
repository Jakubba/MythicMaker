import React from 'react';
import book from '../assets/image/book.png';
import fireBook from '../assets/image/burn-book.png';
import openBook from '../assets/image/open-book.png';

const features = [
  {
    img: book,
    alt: 'book icon',
    title: 'Kreator postaci dostosowany do Twoich potrzeb',
    description: 'Twórz postacie, wybierając rasę, klasę i poziom.',
  },
  {
    img: fireBook,
    alt: 'fire book icon',
    title: 'Intuicyjne kalkulatory bonusów i modyfikatorów',
    description: 'Zautomatyzowane obliczenia ułatwiają zarządzanie statystykami.',
  },
  {
    img: openBook,
    alt: 'open book icon',
    title: 'Notatnik do organizacji sesji i przygód',
    description: 'Zapisuj ważne wydarzenia i planuj swoje sesje RPG.',
  },
];

export const BlockInfo = () => {
  return (
    <section className="relative flex h-max w-full flex-col items-center justify-center bg-gray-800 p-4 md:p-20">
      <div className="mb-8 flex flex-col items-start justify-center">
        <span className="mb-2 text-sm font-semibold text-white">Funkcje</span>
        <h2 className="mb-4 font-primaryFont text-3xl font-bold text-white">
          Odkryj nasze niesomniety narzędzie, które ułatwia grę w Dungeons & Dragons
        </h2>
        <p className="mb-4 font-tertiaryFont text-base font-medium text-white">
          Nasze narzędzie oferuje wszystko, co potrzebne do stworzenia wyjątkowej postaci w Dungeons
          & Dragons. Od kreatora postaci po menedżera kampanii, mamy wszystko, co ułatwi Twoją grę.
        </p>
      </div>
      <ul className="flex h-full flex-col items-stretch justify-center gap-4 xl:flex-row">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex w-full flex-row items-center gap-4 bg-white p-8 shadow-xl xl:flex-col"
          >
            <img src={feature.img} alt={feature.alt} className="h-[100px] w-auto" />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 xl:mb-4 xl:text-center">
                {feature.title}
              </h3>
              <p className="font-secondaryFont text-sm font-semibold text-gray-800 xl:text-center">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
