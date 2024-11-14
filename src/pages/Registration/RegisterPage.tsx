import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import validationSchema from '../LoginForm/schema';
import AuthenticationGuard from '../../components/AuthenticationGuard';
import InfoPage from '../../blocks/InfoPage';
import bgRegistration from '../../assets/image/registration.png';
import { createUser } from '../../services/createUser';
import { getErrorMessage } from '../../helpers/errorMessages';
import RegisterForm from './RegisterForm';

const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
  notRobot: false,
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    const { username, password } = values;
    setLoading(true);
    try {
      const user = await createUser({ email: username, password });

      if (user) {
        toast.success('Konto zostało pomyślnie utworzone!');
        navigate('/character');
      } else {
        toast.error('Nie udało się utworzyć użytkownika. Spróbuj ponownie.');
      }
    } catch (error) {
      console.error('Kod błędu podczas rejestracji:', error.code);
      const errorMessage =
        getErrorMessage(error.code) || 'Wystąpił błąd. Spróbuj ponownie.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthenticationGuard>
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
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <RegisterForm loading={loading} isSubmitting={isSubmitting} />
              )}
            </Formik>
          </section>
        </main>
        <InfoPage />
      </div>
    </AuthenticationGuard>
  );
};

export default RegisterPage;
