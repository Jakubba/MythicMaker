import React, { useState } from 'react';
import logo from '../assets/image/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <nav className="relative z-30 flex items-center justify-between w-full pl-2 pr-4 bg-gray-800 md:justify-start">
      <img src={logo} alt="logo" className="h-[60px] w-auto py-2" />
      <button
        className={`ml-auto openbtn md:hidden ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div className="openbtn-area">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>
      <div
        className={`absolute top-[60px] left-0 w-full bg-gray-800 z-100 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'block' : 'hidden'
        } md:relative md:justify-between md:top-0 md:left-0 md:flex md:w-full`}
      >
        <ul className="flex flex-col md:flex-row md:items-center">
          <li className="px-6 py-2 text-base font-semibold text-white cursor-pointer hover:bg-yellow-600">
            <Link to="/">Strona główna</Link>
          </li>
          <li className="px-6 py-2 text-base font-semibold text-white cursor-pointer hover:bg-yellow-600">
            <Link to="/nas">O nas</Link>
          </li>
          <li className="px-6 py-2 text-base font-semibold text-white cursor-pointer hover:bg-yellow-600">
            <Link to="/instrukcja">Instrukcja</Link>
          </li>
          <li className="px-6 py-2 text-base font-semibold text-white cursor-pointer hover:bg-yellow-600">
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
        <ul className="flex flex-col md:flex-row md:ml-auto">
          <li className="px-6 py-2 text-base font-semibold text-white border border-white cursor-pointer hover:bg-yellow-600">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="px-6 py-2 text-base font-semibold text-white cursor-pointer hover:bg-yellow-600">
            <Link to="/pomoc">Pomoc</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
