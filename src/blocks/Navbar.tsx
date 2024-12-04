import React from 'react';
import logo from '../assets/image/logo.png';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-start bg-gray-800 z-100">
      <img src={logo} alt="image logo" className="h-[60px] w-auto px-4 py-2" />
      <ul className="flex px-4 h-[100%] w-max flex-wrap">
        <li className="py-2 px-10 text-base font-semibold text-white cursor-pointer h-[100%] hover:bg-yellow-600">
          <Link to="/">Strona główna</Link>
        </li>
        <li className="py-2 px-10 text-base font-semibold text-white cursor-pointer h-[100%] hover:bg-yellow-600">
          <Link to="/nas">O nas</Link>
        </li>
        <li className="py-2 px-10 text-base font-semibold text-white cursor-pointer h-[100%] hover:bg-yellow-600">
          <Link to="/nas">Instrukcja</Link>
        </li>
        <li className="py-2 px-10 text-base font-semibold text-white cursor-pointer h-[100%] hover:bg-yellow-600">
          <Link to="/nas">Kontakt</Link>
        </li>
      </ul>
      <ul className="flex px-4 h-[100%] w-max ml-auto">
        <li className="py-2 px-10 border border-white  text-base font-semibold text-white cursor-pointer h-[100%] hover:bg-yellow-600">
          <Link to="/nas">FAQ</Link>
        </li>
        <li className="py-2 px-10 text-base font-semibold text-white cursor-pointer h-[100%] hover:bg-yellow-600">
          <Link to="/nas">Pomoc</Link>
        </li>
      </ul>
    </nav>
  );
};
