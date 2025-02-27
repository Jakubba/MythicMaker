import React from 'react';

import { Link } from 'react-router-dom';
import { SectionHeroProps } from './SectionHero.types';

export const SectionHero: React.FC<SectionHeroProps> = ({ title, description,featuredImage, background }) => {
  return (
    <section className="flex items-center justify-center w-full h-full">
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
        <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent"></div>
        <img
          src={background}
          alt="image hero"
          className="absolute left-[50%] top-[50%] h-full w-full translate-x-[-50%] translate-y-[-50%] object-cover"
        />
        <div className="relative z-20 mx-auto mt-8 flex h-full w-full flex-wrap items-center justify-center p-4 md:max-w-[1600px] md:p-10">
          <div className="relative z-20 mb-[-80px] flex h-full w-full max-w-[540px] flex-col items-start justify-end 2xl:mb-0">
            <img className="object-contain w-full h-full" src={featuredImage} alt="" />
          </div>
          <div className="relative z-10 mb-[120px] mt-8 flex h-auto w-full flex-col items-center justify-center bg-yellow-600 p-2 md:p-10 xl:max-w-[50%]">
            <div className="flex flex-col items-center justify-center w-full p-10 border-2 border-white">
              <h1 className="mb-4 text-2xl font-semibold text-left text-white font-primaryFont drop-shadow-lg md:mb-8 md:text-5xl">
                {title}
              </h1>
              <p className="text-xl font-semibold text-left text-white font-tertiaryFont drop-shadow-lg">
                {description}
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
                  className="px-10 py-3 text-base font-semibold text-gray-800 transition-all bg-white border-2 border-white hover:bg-yellow-600 hover:text-white"
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
