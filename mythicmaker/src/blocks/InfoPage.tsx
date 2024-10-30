import React from 'react';
import FeatureCard from '../components/FieldCard';
import icon1 from '../assets/icons/icon-1.png';
import icon2 from '../assets/icons/icon-2.png';
import icon3 from '../assets/icons/icon-3.png';
import iconPlus from '../assets/icons/icon-plus.png';
export const InfoPage = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full md:flex-row h-max">
      <div className="absolute w-[80%] h-[32px] top-[-25px] left-1/2 translate-x-[-50%] bg-white z-10 rounded-2xl">
        <div className="relative w-full h-full">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="h-[50px] w-[50px] rounded-[15px] bg-gray-200 absolute top-1/2"
              style={{
                [index === 0 ? 'left' : 'right']: '-15px',
                transform: 'translateY(-50%)',
              }}
            >
              <img
                src={iconPlus}
                alt="Plus icon for adding features"
                className="invert sepia saturate-200"
              />
            </div>
          ))}
        </div>
      </div>

      <FeatureCard
        icon={icon2}
        altText="Ikona do tworzenia i zarządzania postaciami"
        title="Twórz i zarządzaj postaciami"
        description="W MythicMaker możesz łatwo tworzyć konta i projektować swoje unikalne postacie do RPG. Każdy profil zawiera wszystkie niezbędne informacje, takie jak imię, rasa, historia, wygląd i zdjęcie."
        bgColor="bg-primaryColor"
      />
      <FeatureCard
        icon={icon3}
        altText="Ikona do rozwijania umiejętności"
        title="Rozwijaj swoje umiejętności"
        description="W miarę grania zdobywasz doświadczenie, które pozwala twojej postaci rosnąć. MythicMaker umożliwia dodawanie punktów doświadczenia i modyfikowanie statystyk, takich jak siła, zręczność i inteligencja."
        bgColor="bg-thirdColor"
      />
      <FeatureCard
        icon={icon1}
        altText="Ikona do zarządzania ekwipunkiem"
        title="Zarządzaj swoim ekwipunkiem"
        description="Zyskaj pełny wgląd w sprzęt, który twoja postać ma na sobie. MythicMaker pozwala ci przeglądać i edytować swój ekwipunek, co ułatwia strategizowanie i zarządzanie postacią."
        bgColor="bg-secondaryColor"
      />
    </footer>
  );
};

export default InfoPage;
