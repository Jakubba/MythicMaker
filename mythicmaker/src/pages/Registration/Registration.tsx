import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik, Form } from 'formik';
import validationSchema from '../../pages/LoginForm/schema';
import FeatureCard from '../../components/FieldCard';
import InputField from '../../components/InputField';
import InputError from '../../components/InputError';
import CheckField from '../../components/CheckField';
import icon1 from '../../assets/icons/icon-1.png';
import icon2 from '../../assets/icons/icon-2.png';
import icon3 from '../../assets/icons/icon-3.png';
import iconPlus from '../../assets/icons/icon-plus.png';
import bgRegistration from '../../assets/image/registration.png';
import { useAuth } from './../../AuthProvider';

export const Registration = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate('/character');
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (values) => {
    const { username, password } = values;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        username,
        password,
      );
      console.log('Registered:', userCredential.user);
      navigate('/character');
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed. Please check your details.');
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <main className="flex w-full min-h-[560px] h-[80vh] relative">
        <img
          className="absolute object-cover w-full h-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          src={bgRegistration}
          alt="Background"
        />
        <section className="relative z-10 flex flex-col items-center justify-center w-auto m-auto rounded-md p-7 login-form customGlass">
          <h2 className="mb-4 text-3xl font-bold text-center text-white font-tertiaryFont">
            Rejestracja
          </h2>
          <Formik
            initialValues={{
              username: '',
              password: '',
              confirmPassword: '',
              notRobot: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col w-full max-w-sm">
                <div className="mb-5">
                  <InputField
                    type="text"
                    id="username"
                    name="username"
                    placeholder="E-mail"
                  />
                  <InputError name="username" />
                </div>
                <div className="mb-5">
                  <InputField
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Hasło"
                  />
                  <InputError name="password" />
                </div>
                <div className="mb-5">
                  <InputField
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Potwierdź hasło"
                  />
                  <InputError name="confirmPassword" />
                </div>
                <CheckField
                  id="notRobot"
                  name="notRobot"
                  label="Nie jestem robotem"
                />
                <InputError name="notRobot" />
                <button
                  type="submit"
                  className="px-4 py-2 mt-4 font-semibold text-white rounded-lg font-secondaryFont bg-thirdColor hover:bg-fourthColor focus:outline-none focus:ring-2 focus:bg-fourthColor"
                  aria-label="Register Account"
                >
                  Załóż konto
                </button>
              </Form>
            )}
          </Formik>
        </section>
      </main>
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
    </div>
  );
};

export default Registration;
