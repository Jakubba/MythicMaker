import React from 'react';
import FeatureCard from '../components/FieldCard';
import icon1 from '../assets/icons/icon-1.png';
import icon2 from '../assets/icons/icon-2.png';
import icon3 from '../assets/icons/icon-3.png';
export const InfoPage = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full md:flex-row h-max">
      <FeatureCard
        icon={icon2}
        altText="Ikona do tworzenia i zarządzania postaciami"
        title="Twórz i zarządzaj postaciami"
        description="W MythicMaker możesz łatwo tworzyć konta i projektować swoje unikalne postacie do RPG. Każdy profil zawiera wszystkie niezbędne informacje, takie jak imię, rasa, historia, wygląd i zdjęcie."
      />
      <FeatureCard
        icon={icon3}
        altText="Ikona do rozwijania umiejętności"
        title="Rozwijaj swoje umiejętności"
        description="W miarę grania zdobywasz doświadczenie, które pozwala twojej postaci rosnąć. MythicMaker umożliwia dodawanie punktów doświadczenia i modyfikowanie statystyk, takich jak siła, zręczność i inteligencja."
      />
      <FeatureCard
        icon={icon1}
        altText="Ikona do zarządzania ekwipunkiem"
        title="Zarządzaj swoim ekwipunkiem"
        description="Zyskaj pełny wgląd w sprzęt, który twoja postać ma na sobie. MythicMaker pozwala ci przeglądać i edytować swój ekwipunek, co ułatwia strategizowanie i zarządzanie postacią."
      />
    </section>
  );
};

export default InfoPage;
