import React from 'react';
import { BlockWithImageProps } from './BlockWithImage.types';

export const BlockWithImage: React.FC<BlockWithImageProps> = ({ title, description, img }) => {
  return (
    <section className="relative flex h-max w-full flex-col items-center justify-center bg-gray-950 px-4 py-12 md:p-20 xl:flex-row">
      <div className="absolute top-0 z-10 h-[160px] w-full bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent"></div>
      <div className="items-s flex flex-col items-start justify-start md:p-20 xl:w-1/2">
        <h2 className="mb-4 font-primaryFont text-3xl font-bold text-white">{title}</h2>
        <p className="mb-4 font-tertiaryFont text-base font-semibold text-white">{description}</p>
      </div>
      <div className="relative flex h-[50vh] min-h-[380px] flex-col items-center justify-center bg-cover xl:w-1/2">
        <img
          src={img}
          alt="image castle with dark forest background"
          className="maskedElement h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
    </section>
  );
};
