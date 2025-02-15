import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/image/login.png';

export const ContentWithTwoImage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full p-4 bg-slate-50 h-[100%] md:h-[60vh]">
      <div className="flex flex-col items-center justify-between gap-10 w-full md:flex-row md:max-w-[80%]">
        <div className="relative flex flex-col items-center justify-center w-full h-full gap-4 md:w-1/2">
          <div className="w-full h-auto overflow-hidden rounded-lg">
            <img
              className="object-cover w-full h-full min-h-[240px]"
              src={img}
              alt="image banner"
            />
          </div>
          <div className="w-full h-auto  md:absolute rounded-lg overflow-hidden z-10 bg-black md:left-[-20%] md:top-[-20%] md:h-[80%] md:w-[50%]">
            <img
              className="object-cover w-auto h-full min-h-[240px]"
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col w-full md:items-start md:w-1/2 ">
          <p className="text-lg text-[#ff0000] mb-4 uppercase font-tertiaryFont font-bold">
            Witaj w grze Mythic Maker
          </p>
          <h4 className="text-3xl text-[#000000] mb-4 font-primaryFont">
            Najlepszy narzędzie do tworzenia postaci i kampanii
          </h4>
          <p className="text-base text-[#000000] mb-6 font-tertiaryFont">
            Otwórz oczy i skup się na przygodzie i nie na liczbach. Pochłoń się
            całkowicie w grze
          </p>
          <Link
            to="/registration"
            className="px-6 py-2 text-white transition-all border-2 border-transparent bg-thirdColor w-max hover:bg-white hover:text-gray-800 hover:border-gray-800"
          >
            Zapisz się
          </Link>
        </div>
      </div>
    </section>
  );
};
