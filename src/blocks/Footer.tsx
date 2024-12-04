import React from 'react';
import github from '../assets/social-media/github.svg';
import instagram from '../assets/social-media/instagram.svg';
import linkedin from '../assets/social-media/linkedin.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full px-4 py-6 bg-gray-950 md:p-20">
      <div className="absolute top-0 w-full h-[120px] bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent z-10"></div>
      <div className="relative z-20 flex justify-between w-full">
        <ul>
          <li className="mb-4 font-bold text-white cursor-pointer">
            <Link to="">Strona główna</Link>
          </li>
          <li className="mb-4 font-bold text-white cursor-pointer">
            <Link to=""> Instruction</Link>
          </li>
          <li className="mb-4 font-bold text-white cursor-pointer">
            <Link to="">O grze</Link>
          </li>
          <li className="mb-4 font-bold text-white cursor-pointer">
            <Link to="">Kontakt</Link>
          </li>
        </ul>
        <ul className="flex">
          <li className="p-2 bg-white h-max">
            <Link to="">
              <img src={github} alt="" className="w-[30px] h-[30px]" />
            </Link>
          </li>
          <li className="p-2 bg-white h-max">
            <Link to="">
              <img src={instagram} alt="" className="w-[30px] h-[30px]" />
            </Link>
          </li>
          <li className="p-2 bg-white h-max">
            <Link to="">
              <img src={linkedin} alt="" className="w-[30px] h-[30px]" />
            </Link>
          </li>
        </ul>
      </div>
      <p className="font-bold text-white ">Copyright @2024 by Jacob B</p>
    </footer>
  );
};
