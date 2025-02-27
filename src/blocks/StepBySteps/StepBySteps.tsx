import React from 'react';
import { StepByStepsProps } from './StepBySteps.types';

export const StepBySteps: React.FC<StepByStepsProps> = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="mb-10 text-5xl font-bold text-white font-primaryFont">
        Jak to zrobić? To takie proste!
      </h2>
      {[
        "Kliknij przycisk 'Zarejestruj', który znajduje się na stronie głównej, aby przejść do formularza rejestracji.",
        'Wpisz swoje imię, hasło (i powtórz je dla potwierdzenia) oraz adres e-mail.',
        "Kliknij przycisk 'Zarejestruj'.",
        'Jeśli wystąpią błędy (np. niepoprawne dane lub zajęta nazwa użytkownika), system poinformuje Cię o problemie.',
        'Po pomyślnej rejestracji zostaniesz przeniesiony do panelu postaci, gdzie możesz edytować swoją kartę postaci według własnych preferencji.',
        'W ekwipunku znajdziesz już bazę broni, zaklęć oraz niezbędnych przedmiotów do gry.',
      ].map((step, index) => (
        <div
          key={index}
          className="mb-8 flex h-full w-full max-w-[1200px] items-start justify-start gap-2"
        >
          <div className="flex h-full w-full max-w-[150px] flex-col items-center justify-center bg-white p-2">
            <span className="block w-full h-full p-4 text-4xl font-bold text-gray-800 bg-white border-2 border-gray-800 font-primaryFont">
              {index + 1}
            </span>
          </div>
          <div className="flex max-w-[900px] flex-col items-start justify-center">
            <h3 className="mb-4 text-2xl font-bold text-white text-start font-primaryFont">
              {step}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
};
