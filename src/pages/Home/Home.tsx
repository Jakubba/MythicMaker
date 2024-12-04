import React from 'react';
import { Navbar } from '../../blocks/Navbar';
import { SectionHero } from '../../blocks/SectionHero';
import { BlockInfo } from '../../blocks/BlockInfo';
import { BlockWithImage } from '../../blocks/BlockWithImage';
import { Reviews } from '../../blocks/Reviews';
import { Newsletter } from '../../blocks/Newsletter';
import { Footer } from '../../blocks/Footer';

export const Home = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <SectionHero></SectionHero>
      <BlockInfo></BlockInfo>
      <BlockInfo></BlockInfo>
      <BlockWithImage></BlockWithImage>
      <Reviews></Reviews>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </React.Fragment>
  );
};
