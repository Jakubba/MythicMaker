import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik, Form } from 'formik';
import validationSchema from '../../pages/LoginForm/schema';
import FeatureCard from '../../components/FieldCard';
import InputField from './../../components/InputField';
import InputError from './../../components/InputError';
import CheckField from '../../components/CheckField';
import bgLogin from '../../assets/image/login.png';
import icon1 from '../../assets/icons/icon-1.png';
import icon2 from '../../assets/icons/icon-2.png';
import icon3 from '../../assets/icons/icon-3.png';
import iconPlus from '../../assets/icons/icon-plus.png';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { username, password } = values;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password,
      );
      console.log('Zalogowano:', userCredential.user);
      navigate('/character');
    } catch (error) {
      console.error('Logowanie nie powiodło się', error);
      alert('Logowanie nie powiodło się. Sprawdź swoje dane.');
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <main className="flex w-full min-h-[560px] h-[80vh] relative">
        <img
          className="absolute object-cover w-full h-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          src={bgLogin}
          alt=""
        />
        <section className="relative z-10 flex flex-col items-center justify-center w-auto m-auto rounded-md p-7 login-form customGlass">
          <h2 className="mb-4 text-3xl font-bold text-center text-white font-tertiaryFont">
            Logowanie
          </h2>
          <Formik
            initialValues={{
              username: '',
              password: '',
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
                <CheckField />
                <InputError name="notRobot" />
                <button
                  type="submit"
                  className="px-4 py-2 mt-4 font-semibold text-white rounded-lg font-secondaryFont bg-thirdColor hover:bg-fourthColor focus:outline-none focus:ring-2 focus:bg-fourthColor"
                >
                  Zaloguj się
                </button>
                <div className="px-4 py-2 mt-4 text-white font-secondaryFont text-color">
                  Nie masz konta?
                  <Link
                    className="font-semibold font-secondaryFont text-primaryColor"
                    to="/registration"
                  >
                    {' '}
                    Zarejestruj się
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </main>
      <footer className="relative flex flex-col items-center justify-center w-full md:flex-row h-max">
        <div className="absolute w-[80%] h-[32px] top-[-25px] left-1/2 translate-x-[-50%] bg-white z-10 rounded-2xl">
          <div className="relative w-full h-full">
            <div className="h-[50px] w-[50px] rounded-[15px] bg-gray-200 absolute top-1/2 left-[-15px] translate-y-[-50%] flex justify-center items-center">
              <img
                src={iconPlus}
                alt="Plus icon for adding features"
                className="invert sepia saturate-200"
              />
            </div>
            <div className="h-[50px] w-[50px] rounded-[15px] bg-gray-200 absolute top-1/2 right-[-15px] translate-y-[-50%] flex justify-center items-center">
              <img
                src={iconPlus}
                alt="Plus icon for adding features"
                className="invert sepia saturate-200"
              />
            </div>
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

export default LoginForm;
