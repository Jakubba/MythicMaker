import React from 'react';
import { NewsletterProps } from './Newsletter.types';

export const Newsletter: React.FC<NewsletterProps> = ({ title, description, img }) => {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-start px-4 py-6 md:px-20 md:py-40">
      <div className="absolute left-0 top-0 z-10 h-[520px] w-full bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent"></div>
      <img
        src={img}
        alt=""
        className="absolute left-[50%] top-[50%] h-full w-full translate-x-[-50%] translate-y-[-50%] object-cover"
      />
      <div className="relative z-10 border-2 bg-slate-700 p-4 md:p-20">
        <h2 className="mb-4 text-3xl font-bold text-white">{title}</h2>
        <p className="mb-4 text-base font-semibold text-white">{description}</p>
        <form>
          <input type="text" placeholder="Wpisz swój e-mail" className="p-2" />
          <button
            type="submit"
            className="mt-4 bg-thirdColor px-4 py-2 font-secondaryFont font-semibold text-white"
          >
            Zapisz się
          </button>
        </form>
        <p className="mt-4 text-sm font-semibold text-white">
          Klikając Zapisz się, potwierdzasz akceptację naszych Warunków korzystania.
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
    </section>
  );
};
