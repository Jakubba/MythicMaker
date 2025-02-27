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
  const counterData = [
    { number: 10, title: 'Użytkownicy', description: 'Łączna liczba użytkowników' },
    { number: 5, title: 'Posty', description: 'Łączna liczba postów' },
    { number: 20, title: 'Komentarze', description: 'Łączna liczba komentarzy' },
    { number: 50, title: 'Reakcje', description: 'Łączna liczba reakcji' },
  ];

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
        description="Nasze narzędzie sprawia, że zarządzanie postacią jest proste i intuicyjne. Dzięki zaawansowanym funkcjom, możesz skupić się na przygodzie, a nie na liczbach."
        img={castle}
      />
      <StepBySteps />
      <ContentWithTwoImage
        mainTitle="Witaj w grze Mythic Maker"
        title="Najlepsze narzędzie do tworzenia postaci i kampanii"
        description="Otwórz oczy i skup się na przygodzie, a nie na liczbach. Pochłoń się całkowicie w grze."
        img={loginImg}
      />
      <Reviews />
      <Newsletter
        title="Zapisz się na nasz newsletter"
        description="Bądź na bieżąco z nowościami i aktualizacjami dla graczy i Mistrzów Gry."
        img={newsletterImg}
      />
      <Counter data={counterData} />
      <Contact />
      <GallerySlider />
      <Footer />
    </>
  );
};
