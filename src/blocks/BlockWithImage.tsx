import React from 'react';
import castle from '../assets/image/login.png';
import mask from '../assets/image/mask.png';

export const BlockWithImage = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-4 py-12 bg-gray-950 h-max md:p-20 xl:flex-row">
      <div className="absolute top-0 w-full h-[160px] bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent z-10"></div>
      <div className="flex flex-col items-start justify-start items-s xl:w-1/2 md:p-20">
        <h2 className="mb-4 text-3xl font-bold text-white font-primaryFont">
          Odkryj, jak nasze narzędzie ułatwia zarządzanie postacią i kampanią.
        </h2>
        <p className="mb-4 text-base font-semibold text-white font-tertiaryFont">
          Nasze narzędzie sprawia, że tworzenie i zarządzanie postacią jest
          proste i intuicyjne. Dzięki zaawansowanym funkcjom, możesz skupić się
          na przygodzie, a nie na liczbach.
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-[380px] h-[50vh] xl:w-1/2 bg-cover">
        <img
          src={castle}
          alt="image castle with dark forest background"
          className="object-cover w-full h-full maskedElement"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
    </section>
  );
};
