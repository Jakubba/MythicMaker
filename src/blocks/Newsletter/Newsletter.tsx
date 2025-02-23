import React, { useState } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { NewsletterProps } from './Newsletter.types';
import { toast } from 'react-toastify';

export const Newsletter: React.FC<NewsletterProps> = ({ title, description, img }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Podaj poprawny e-mail!');
      return;
    }

    try {
      await addDoc(collection(db, 'subscribe-email'), { email });
      setEmail('');
      toast.success('Dziekujemy za zapis!');
    } catch (error) {
      toast.error(`Błąd zapisu e-maila:${error.message}`);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Wpisz swój e-mail"
            className="p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 bg-thirdColor px-4 py-2 font-secondaryFont font-semibold text-white"
          >
            Zapisz się
          </button>
        </form>
        {message && <p className="mt-4 text-sm font-semibold text-white">{message}</p>}
        <p className="mt-4 text-sm font-semibold text-white">
          Klikając Zapisz się, potwierdzasz akceptację naszych Warunków korzystania.
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
    </section>
  );
};
