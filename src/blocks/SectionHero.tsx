import React from 'react';
import heroImage from '../assets/image/hero.png';
import book from '../assets/image/mainbook.png';
import { Link } from 'react-router-dom';
export const SectionHero = () => {
  return (
    <section className="flex items-center justify-center w-full h-full">
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
        <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent"></div>
        <img
          src={heroImage}
          alt="image hero"
          className="absolute w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover"
        />
        <div className="relative flex items-center justify-center flex-wrap mt-8 z-20 mx-auto md:max-w-[1600px] h-full p-4 md:p-10 w-full">
          <div className="relative z-20 flex mb-[-80px] flex-col items-start justify-end w-full h-full 2xl:mb-0 max-w-[540px]">
            <img className="object-contain w-full h-full" src={book} alt="" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-auto p-2 md:p-10 bg-yellow-600 mb-[120px] mt-8 xl:max-w-[50%]">
            <div className="flex flex-col items-center justify-center w-full p-10 border-2 border-white">
              <h1 className="mb-4 text-2xl font-semibold text-left text-white md:mb-8 md:text-5xl drop-shadow-lg font-primaryFont">
                Twórz postacie i zarządzaj przygodami w D&D
              </h1>
              <p className="text-xl font-semibold text-left text-white font-tertiaryFont drop-shadow-lg">
                Odkryj nasze innowacyjne narzędzie, które ułatwia grę w Dungeons
                & Dragons. Dzięki intuicyjnemu kreatorowi postaci i zarządzaniu
                kampanią, każda sesja stanie się niezapomnianą przygodą.
              </p>
              <div className="flex flex-wrap items-start justify-start gap-4 mt-8">
                <Link
                  to="/registration"
                  className="px-10 py-3 text-base font-semibold text-white transition-all bg-yellow-600 border-2 border-white hover:bg-white hover:text-gray-800"
                >
                  Zacznij
                </Link>
                <Link
                  to="/login"
                  className="px-10 py-3 text-base font-semibold text-gray-800 transition-all bg-white border-2 border-white hover:bg-yellow-600 hover:text-white "
                >
                  Kontynuuj
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
      </div>
    </section>
  );
};
