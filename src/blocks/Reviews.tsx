import React from 'react';
import avatar from '../assets/image/avatar.png';

export const Reviews = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full p-4 bg-gray-800 h-max">
      <h2 className="mb-6 text-5xl font-bold text-white">Opinie Klientów</h2>
      <p className="mb-16 text-base font-semibold text-white">
        To narzędzie zmieniło sposób, w jaki gram!
      </p>
      <ul className="flex flex-col items-stretch justify-center w-full h-full md:flex-row md:gap-8">
        <li className="flex flex-col p-4 mb-5 bg-white border-2 border-gray-600 md:p-8">
          <div className="mb-5 star"></div>
          <p className="mb-4 italic font-tertiaryFont">
            "Niezastąpione w moich sesjach D&D!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="image avatar"
              className="h-[60px] w-[60px]  object-cover"
            />
            <div className="flex flex-col items-start ">
              <p className="font-bold font-tertiaryFont">Jan Kowalski</p>
              <p className="font-semibold font-tertiaryFont">Gracz, D&D</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col p-4 mb-5 bg-white border-2 border-gray-600 md:p-8">
          <div className="mb-5 star"></div>
          <p className="mb-4 italic font-tertiaryFont">
            "Niezastąpione w moich sesjach D&D!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="image avatar"
              className="h-[60px] w-[60px]  object-cover"
            />
            <div className="flex flex-col items-start ">
              <p className="font-bold font-tertiaryFont">Jan Kowalski</p>
              <p className="font-semibold font-tertiaryFont">Gracz, D&D</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col p-4 mb-5 bg-white border-2 border-gray-600 md:p-8">
          <div className="mb-5 star"></div>
          <p className="mb-4 italic font-tertiaryFont">
            "Niezastąpione w moich sesjach D&D!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="image avatar"
              className="h-[60px] w-[60px]  object-cover"
            />
            <div className="flex flex-col items-start ">
              <p className="font-bold font-tertiaryFont">Jan Kowalski</p>
              <p className="font-semibold font-tertiaryFont">Gracz, D&D</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
