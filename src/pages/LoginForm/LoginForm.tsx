// LoginForm.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik, Form } from 'formik';
import validationSchema from '../../pages/LoginForm/schema';
import FeatureCard from '../../components/FieldCard';
import InputField from '../../components/InputField';
import InputError from '../../components/InputError';
import CheckField from '../../components/CheckField';
import bgLogin from '../../assets/image/login.png';
import RedirectIfAuthenticated from '../../components/RedirectIfAuthenticated';
import InfoPage from '../../blocks/InfoPage';
const initialValues = {
  username: '',
  password: '',
  notRobot: false,
};

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
    <RedirectIfAuthenticated>
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
              initialValues={initialValues}
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
                  <CheckField
                    id="notRobot"
                    name="notRobot"
                    label="Nie jestem robotem"
                  />
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
        <InfoPage />
      </div>
    </RedirectIfAuthenticated>
  );
};

export default LoginForm;
