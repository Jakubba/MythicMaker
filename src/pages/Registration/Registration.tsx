import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import validationSchema from '../../pages/LoginForm/schema';
import InputField from '../../components/InputField';
import InputError from '../../components/InputError';
import CheckField from '../../components/CheckField';
import bgRegistration from '../../assets/image/registration.png';
import RedirectIfAuthenticated from '../../components/RedirectIfAuthenticated';
import InfoPage from '../../blocks/InfoPage';
import { createUser } from '../../services/createUser';
import { getErrorMessage } from '../../helpers/errorMessages';

const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
  notRobot: false,
};

const Registration = () => {
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
    <RedirectIfAuthenticated>
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
                <Form className="flex flex-col w-full max-w-sm">
                  <div className="mb-5">
                    <InputField
                      type="email"
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
                    disabled={loading || isSubmitting}
                  >
                    {loading ? 'Ładowanie...' : 'Zarejestruj się'}
                  </button>
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

export default Registration;