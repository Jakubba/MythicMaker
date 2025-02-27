import React from 'react';
import { Form, useFormikContext } from 'formik';
import { Link } from 'react-router-dom';
import InputField from '../../components/Input/InputField';
import InputError from '../../components/Input/InputError';
import CheckField from '../../components/CheckField/CheckField';

export const LoginForm = () => {
  const { isSubmitting } = useFormikContext();

  return (
    <Form className="flex w-full max-w-sm flex-col">
      <div className="mb-5">
        <InputField type="email" id="username" name="username" placeholder="E-mail" />
        <InputError name="username" />
      </div>
      <div className="mb-5">
        <InputField type="password" id="password" name="password" placeholder="Hasło" />
        <InputError name="password" />
      </div>
      <CheckField id="notRobot" name="notRobot" label="Nie jestem robotem" />
      <InputError name="notRobot" />
      <button
        type="submit"
        className="mt-4 rounded-lg bg-thirdColor px-4 py-2 font-secondaryFont font-semibold text-white opacity-80 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2"
        disabled={isSubmitting}
        aria-label="Zaloguj się"
        aria-live="polite"
      >
        {isSubmitting ? 'Logowanie...' : 'Zaloguj się'}
      </button>
      <div className="text-color mt-4 px-4 py-2 font-secondaryFont text-white">
        Nie masz konta?
        <Link
          className="ml-2 font-secondaryFont font-bold text-white hover:text-primaryColor"
          to="/registration"
        >
          {' '}
          Zarejestruj się
        </Link>
      </div>
    </Form>
  );
};
