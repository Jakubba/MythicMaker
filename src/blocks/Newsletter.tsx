import React from 'react';
import background from '../assets/image/registration.png';

export const Newsletter = () => {
  return (
    <section className="relative px-4 py-6 md:px-20 md:py-40 min-h-[60vh] flex justify-start items-center ">
      <div className="absolute left-0 top-0 w-full h-[520px] bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent z-10"></div>
      <img
        src={background}
        alt=""
        className="absolute top-[50%] left-[50%] w-full h-full translate-x-[-50%] translate-y-[-50%] object-cover"
      />
      <div className="relative z-10 p-4 border-2 md:p-20 bg-slate-700">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Zapisz się na nasz newsletter
        </h2>
        <p className="mb-4 text-base font-semibold text-white">
          Bądź na bieżąco z nowościami i aktualizacjami dla graczy i Mistrzów
          Gry.
        </p>
        <form>
          <input type="text" placeholder="Wpisz swój e-mail" className="p-2" />
          <button
            type="submit"
            className="px-4 py-2 mt-4 font-semibold text-white bg-thirdColor font-secondaryFont"
          >
            Zapisz się
          </button>
        </form>
        <p className="mt-4 text-sm font-semibold text-white">
          Klikając Zapisz się, potwierdzasz akceptację naszych Warunków
          korzystania.
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
    </section>
  );
};
