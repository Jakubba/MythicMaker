import React from 'react';
import { Navbar } from '../../blocks/Navbar';
import { SectionHero } from '../../blocks/SectionHero';
import { BlockInfo } from '../../blocks/BlockInfo';
import { BlockWithImage } from '../../blocks/BlockWithImage';
import { Reviews } from '../../blocks/Reviews';
import { Newsletter } from '../../blocks/Newsletter';
import { Footer } from '../../blocks/Footer';
import { ContentWithTwoImage } from '../../blocks/ContentWithTwoImage';
import { Contact } from '../../blocks/Contact';
import { GallerySlider } from '../../blocks/GallerySlider';
import { Counter } from '../../blocks/Counter';
export const Home = () => {
  return (
    <>
      <Navbar />
      <SectionHero />
      <BlockInfo />
      <BlockInfo />
      <BlockWithImage />
      <ContentWithTwoImage />
      <Reviews />
      <Newsletter />
      <Counter />
      <Contact />
      <GallerySlider />
      <Footer />
    </>
  );
};
