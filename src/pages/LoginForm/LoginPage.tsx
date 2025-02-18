import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './../../firebase/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { Formik, Form } from 'formik';
import validationSchema from './schema';
import AuthenticationGuard from '../../components/AuthenticationGuard';
import InfoPage from '../../blocks/InfoPage';
import Preloader from '../../components/Preloader';
import { LoginFormBackground } from './LoginFormBackground';
import { LoginForm } from './LoginForm';
import { Navbar } from '../../blocks/Navbar';

const initialValues = {
  username: '',
  password: '',
  notRobot: false,
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/character');
      } else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleSubmit = async (values, { setSubmitting }) => {
    const { username, password } = values;
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password,
      );
      navigate('/character');
    } catch (error) {
      console.error('Logowanie nie powiodło się', error);
      alert('Logowanie nie powiodło się. Sprawdź swoje dane.');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <AuthenticationGuard>
      <div className="flex flex-col items-center w-full h-screen bg-gray-800">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />
            <main className="flex w-full min-h-[560px] h-[80vh] relative">
              <LoginFormBackground />
              <section className="relative z-10 flex flex-col items-center justify-center w-auto m-auto rounded-md p-7 login-form customGlass">
                <h2 className="mb-4 text-3xl font-bold text-center text-white font-tertiaryFont">
                  Logowanie
                </h2>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => <LoginForm />}
                </Formik>
              </section>
            </main>
            <InfoPage />
          </>
        )}
      </div>
    </AuthenticationGuard>
  );
};

export default LoginPage;
