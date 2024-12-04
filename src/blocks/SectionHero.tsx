import React from 'react';
import heroImage from '../assets/image/hero.png';
import { Link } from 'react-router-dom';
export const SectionHero = () => {
  return (
    <section className="h-[70vh]">
      <div className="relative flex items-center justify-end w-full h-full overflow-hidden">
        <div className="absolute top-0 w-full h-[520px] bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent z-10"></div>
        <img
          src={heroImage}
          alt="image hero"
          className="absolute w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
        <div className="relative z-20 w-[50vw] max-w-[700px] h-full flex flex-col justify-end items-start py-20">
          <h1 className="mb-8 text-5xl font-semibold text-left text-white font-tertiaryFont drop-shadow-lg">
            Twórz postacie i zarządzaj przygodami w D&D
          </h1>
          <p className="text-xl font-semibold text-left text-white font-tertiaryFont drop-shadow-lg">
            Odkryj nasze innowacyjne narzędzie, które ułatwia grę w Dungeons &
            Dragons. Dzięki intuicyjnemu kreatorowi postaci i zarządzaniu
            kampanią, każda sesja stanie się niezapomnianą przygodą.
          </p>
          <div className="flex items-start justify-start gap-4 mt-8">
            <Link
              to="/register"
              className="px-10 py-3 text-base font-semibold text-white transition-all bg-gray-800 border-2 border-white hover:bg-white hover:text-gray-800"
            >
              Zacznij
            </Link>
            <Link
              to="/login"
              className="px-10 py-3 text-base font-semibold text-gray-800 transition-all bg-white border-2 border-gray-800 hover:bg-gray-800 hover:text-white"
            >
              Kontynuuj
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
      </div>
    </section>
  );
};
