import React from 'react';
import { BlockWithImageProps } from './BlockWithImage.types';
export const BlockWithImage: React.FC<BlockWithImageProps> = ({ title, description, img }) => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-4 py-12 h-max bg-gray-950 md:p-20 xl:flex-row">
      <div className="absolute top-0 z-10 h-[160px] w-full bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent"></div>
      <div className="flex flex-col items-start justify-start items-s md:p-20 xl:w-1/2">
        <h2 className="mb-4 text-3xl font-bold text-white font-primaryFont">{title}</h2>
        <p className="mb-4 text-base font-semibold text-white font-tertiaryFont">{description}</p>
      </div>
      <div className="relative flex h-[50vh] min-h-[380px] flex-col items-center justify-center bg-cover xl:w-1/2">
        <img
          src={img}
          alt="image castle with dark forest background"
          className="object-cover w-full h-full maskedElement"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
    </section>
  );
};
