import React from 'react';
import { Form, useFormikContext } from 'formik';
import { Link } from 'react-router-dom';
import InputField from '../../components/InputField';
import InputError from '../../components/InputError';
import CheckField from '../../components/CheckField';

export const LoginForm = () => {
  const { isSubmitting } = useFormikContext();

  return (
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
      <CheckField id="notRobot" name="notRobot" label="Nie jestem robotem" />
      <InputError name="notRobot" />
      <button
        type="submit"
        className="px-4 py-2 mt-4 font-semibold text-white rounded-lg bg-thirdColor font-secondaryFont opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:opacity-100"
        disabled={isSubmitting}
        aria-label="Zaloguj się"
        aria-live="polite"
      >
        {isSubmitting ? 'Logowanie...' : 'Zaloguj się'}
      </button>
      <div className="px-4 py-2 mt-4 text-white font-secondaryFont text-color">
        Nie masz konta?
        <Link
          className="ml-2 font-bold text-white font-secondaryFont hover:text-primaryColor"
          to="/registration"
        >
          {' '}
          Zarejestruj się
        </Link>
      </div>
    </Form>
  );
};
