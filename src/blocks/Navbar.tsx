import React, { useState } from 'react';
import logo from '../assets/image/logo.png';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

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
    <nav className="relative z-30 flex w-full items-center justify-between bg-gray-800 pl-2 pr-4 md:justify-start">
      <img src={logo} alt="logo" className="h-[60px] w-auto py-2" />
      <button
        className={`openbtn ml-auto md:hidden ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div className="openbtn-area">
          <span className="mb-1 block h-0.5 w-6 bg-white"></span>
          <span className="mb-1 block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </div>
      </button>
      <div
        className={`z-100 absolute left-0 top-[60px] w-full bg-gray-800 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'block' : 'hidden'
        } md:relative md:left-0 md:top-0 md:flex md:w-full md:justify-between`}
      >
        <ul className="flex flex-col md:flex-row md:items-center">
          <li className="cursor-pointer px-6 py-2 text-base font-semibold text-white hover:bg-yellow-600">
            <Link to="/">Strona główna</Link>
          </li>
          <li className="cursor-pointer px-6 py-2 text-base font-semibold text-white hover:bg-yellow-600">
            <Link to="/nas">O nas</Link>
          </li>
          <li className="cursor-pointer px-6 py-2 text-base font-semibold text-white hover:bg-yellow-600">
            <Link to="/instrukcja">Instrukcja</Link>
          </li>
          <li className="cursor-pointer px-6 py-2 text-base font-semibold text-white hover:bg-yellow-600">
            <LinkScroll to="contact" spy={true} smooth={true} duration={500} offset={-50}>
              Kontakt
            </LinkScroll>
          </li>
        </ul>
        <ul className="flex flex-col md:ml-auto md:flex-row">
          <li className="cursor-pointer border border-white px-6 py-2 text-base font-semibold text-white hover:bg-yellow-600">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="cursor-pointer px-6 py-2 text-base font-semibold text-white hover:bg-yellow-600">
            <LinkScroll to="contact" spy={true} smooth={true} duration={500} offset={-50}>
              Pomoc
            </LinkScroll>
          </li>
        </ul>
      </div>
    </nav>
  );
};
