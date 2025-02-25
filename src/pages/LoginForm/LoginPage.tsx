import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './../../firebase/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import validationSchema from './schema';
import AuthenticationGuard from '../../components/AuthenticationGuard/AuthenticationGuard';
import InfoPage from '../../blocks/InfoPage';
import Preloader from '../../components/Preloader';
import { LoginFormBackground } from './LoginFormBackground';
import { LoginForm } from './LoginForm';
import { Navbar } from '../../blocks/Navbar';
import { toast } from 'react-toastify';

const initialValues = {
  username: '',
  password: '',
  notRobot: false,
};

interface LoginValues {
  username: string;
  password: string;
}

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

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    const { username, password } = values;
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      navigate('/character');
    } catch (error) {
      toast.error(`Logowanie nie powiodło się: ${(error as Error).message}`);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <AuthenticationGuard>
      <div className="flex h-screen w-full flex-col items-center bg-gray-800">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />
            <main className="relative flex h-[80vh] min-h-[560px] w-full">
              <LoginFormBackground />
              <section className="login-form customGlass relative z-10 m-auto flex w-auto flex-col items-center justify-center rounded-md p-7">
                <h2 className="mb-4 text-center font-tertiaryFont text-3xl font-bold text-white">
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
