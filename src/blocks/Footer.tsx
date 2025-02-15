import React from 'react';
import github from '../assets/social-media/github.svg';
import instagram from '../assets/social-media/instagram.svg';
import linkedin from '../assets/social-media/linkedin.svg';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';

export const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full px-4 py-20 bg-gray-950 md:p-20 ">
      <div className="absolute top-0 w-full h-[120px] bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent z-10"></div>
      <div className="relative z-20 flex flex-col justify-between w-full m-auto max-w-[800px] items-center md:flex-row">
        <img src={logo} alt="logo" className="h-[60px] w-auto mb-10" />
        <ul className="flex flex-col items-center justify-center mb-4 md:space-x-5 md:mb-0 md:flex-row">
          <li className="mb-4 font-bold text-white transition-colors ease-in-out cursor-pointer hover:text-yellow-600">
            <Link to="">Strona główna</Link>
          </li>
          <li className="mb-4 font-bold text-white transition-colors ease-in-out cursor-pointer hover:text-yellow-600">
            <Link to=""> Instruction</Link>
          </li>
          <li className="mb-4 font-bold text-white transition-colors ease-in-out cursor-pointer hover:text-yellow-600">
            <Link to="">O grze</Link>
          </li>
          <li className="mb-4 font-bold text-white transition-colors ease-in-out cursor-pointer hover:text-yellow-600">
            <Link to="">Kontakt</Link>
          </li>
        </ul>
        <ul className="flex items-center justify-center space-x-2 ">
          <li className="p-2 transition-all ease-in-out bg-white h-max hover:bg-yellow-600">
            <Link to="">
              <img src={github} alt="" className="w-[30px] h-[30px]" />
            </Link>
          </li>
          <li className="p-2 transition-all ease-in-out bg-white h-max hover:bg-yellow-600">
            <Link to="">
              <img src={instagram} alt="" className="w-[30px] h-[30px]" />
            </Link>
          </li>
          <li className="p-2 transition-all ease-in-out bg-white h-max hover:bg-yellow-600">
            <Link to="">
              <img src={linkedin} alt="" className="w-[30px] h-[30px]" />
            </Link>
          </li>
        </ul>
      </div>
      <p className="mt-12 font-bold text-white">Copyright @2024 by Jacob B</p>
    </footer>
  );
};
