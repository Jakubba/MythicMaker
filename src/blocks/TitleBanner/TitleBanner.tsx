import React from 'react';
import { TitleBannerProps } from './TitleBanner.types';

export const TitleBanner: React.FC<TitleBannerProps> = ({ image, title, description }) => {
  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden p-4">
      <div className="absolute left-0 top-0 z-20 h-[520px] w-full bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent"></div>
      <div className="z-20 bg-yellow-600 p-5">
        <div className="z-20 flex flex-col items-center justify-center border-2 border-white p-10">
          {title && (
            <h2 className="relative z-20 mb-4 font-primaryFont text-5xl font-bold text-white lg:text-7xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="relative z-20 text-center font-tertiaryFont text-xl uppercase text-white md:text-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="absolute left-[50%] top-[50%] z-10 h-full w-full translate-x-[-50%] translate-y-[-50%]">
        <img className="h-full w-full object-cover" src={image} alt="Banner Image" />
      </div>
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
    </section>
  );
};
