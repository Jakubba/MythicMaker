import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import validationSchema from '../Registration/schema';
import AuthenticationGuard from '../../components/AuthenticationGuard/AuthenticationGuard';
import InfoPage from '../../blocks/InfoPage';
import bgRegistration from '../../assets/image/registration.png';
import { createUser } from '../../services/createUser';
import { getErrorMessage } from '../../helpers/errorMessages';
import RegisterForm from './RegisterForm';
import { Navbar } from '../../blocks/Navbar';

const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
  notRobot: false,
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: typeof initialValues) => {
    const { username, password } = values;
    setLoading(true);
    try {
      const user = await createUser({ email: username, password: password, profile: {} });

      if (user) {
        toast.success('Konto zostało pomyślnie utworzone!');
        navigate('/character');
      } else {
        toast.error('Nie udało się utworzyć użytkownika. Spróbuj ponownie.');
      }
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = getErrorMessage(error.message) || 'Wystąpił błąd. Spróbuj ponownie.';
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthenticationGuard>
      <div className="relative flex h-screen w-full flex-col items-center">
        <Navbar />

        <main className="relative flex h-[80vh] min-h-[560px] w-full">
          <div className="absolute top-0 z-10 h-[520px] w-full bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent"></div>
          <img
            className="absolute left-1/2 top-1/2 h-full w-full translate-x-[-50%] translate-y-[-50%] object-cover"
            src={bgRegistration}
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
          <section className="login-form customGlass relative z-10 m-auto flex w-auto flex-col items-center justify-center rounded-md p-7">
            <h2 className="mb-4 text-center font-tertiaryFont text-3xl font-bold text-white">
              Rejestracja
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => <RegisterForm loading={loading} isSubmitting={isSubmitting} />}
            </Formik>
          </section>
        </main>
        <InfoPage />
      </div>
    </AuthenticationGuard>
  );
};

export default RegisterPage;
