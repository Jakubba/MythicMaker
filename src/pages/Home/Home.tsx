import React from 'react';
import { Navbar } from '../../blocks/Navbar';
import { SectionHero } from '../../blocks/SectionHero/SectionHero';
import { BlockInfo } from '../../blocks/BlockInfo';
import { BlockWithImage } from '../../blocks/BlockWithImage/BlockWithImage';
import { Reviews } from '../../blocks/Reviews/Reviews';
import { Newsletter } from '../../blocks/Newsletter/Newsletter';
import { Footer } from '../../blocks/Footer';
import { ContentWithTwoImage } from '../../blocks/ContentWithTwoImage/ContentWithTwoImage';
import { Contact } from '../../blocks/Contact/Contact';
import { GallerySlider } from '../../blocks/GallerySlider';
import { Counter } from '../../blocks/Counter/Counter';
import { StepBySteps } from '../../blocks/StepBySteps/StepBySteps';

import heroImage from '../../assets/image/hero.png';
import book from '../../assets/image/mainbook.png';
import castle from '../../assets/image/login.png';
import loginImg from '../../assets/image/login.png';
import newsletterImg from '../../assets/image/registration.png';

export const Home = () => {
  return (
    <>
      <Navbar />
      <SectionHero
        title="Twórz postacie i zarządzaj przygodami w D&D"
        description="Odkryj nasze innowacyjne narzędzie, które ułatwia grę w Dungeons
                & Dragons. Dzięki intuicyjnemu kreatorowi postaci i zarządzaniu
                kampanią, każda sesja stanie się niezapomnianą przygodą."
        featuredImage={book}
        background={heroImage}
      />
      <BlockInfo />
      <BlockInfo />
      <BlockWithImage
        title="Odkryj, jak nasze narzędzie ułatwia zarządzanie postacią i kampanią."
        description="Nasze narzędzie sprawia,áncheza postacią jest proste i intuicyjne. Dzięki zaawansowanym funkcjom, możesz skupą się na przygodzie, a nie na liczbach."
        img={castle}
      />
      <StepBySteps />
      <ContentWithTwoImage
        mainTitle="Witaj w grze Mythic Maker"
        title="Najlepszy narzędzie do tworzenia postaci i kampanii"
        description="Otwórz oczy i skup się na przygodzie i nie na liczbach. Pochłoń się całkowicie w grze"
        img={loginImg}
      />
      <Reviews />
      <Newsletter
        title="Zapisz się na nasz newsletter"
        description="Bądź na bieżąco z nowościami i aktualizacjami dla graczy i Mistrzów Gry."
        img={newsletterImg}
      />
      <Counter
        number1={10}
        number2={56}
        number3={30}
        number4={150}
        title1="Raz na dzień"
        title2="Raz na tydzień"
        title3="Raz na miesiac"
        title4="Raz na rok"
        description1="Liczba postaci"
        description2="Liczba postaci"
        description3="Liczba postaci"
        description4="Liczba postaci"
      />
      <Contact />
      <GallerySlider />
      <Footer />
    </>
  );
};
