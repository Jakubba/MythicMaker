import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import validationSchema from '../Registration/schema';
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
      <div className="relative flex flex-col items-center w-full h-screen">
        <Link
          className="absolute z-20 px-4 py-2 font-semibold text-gray-800 uppercase rounded-md top-5 left-5 bg-slate-200"
          to="/login"
        >
          Wróć
        </Link>
        <main className="flex w-full min-h-[560px] h-[80vh] relative">
          <div className="absolute top-0 w-full h-[520px] bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent z-10"></div>
          <img
            className="absolute object-cover w-full h-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            src={bgRegistration}
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
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
