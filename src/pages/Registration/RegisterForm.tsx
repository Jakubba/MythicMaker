import { Form, Field } from 'formik';
import InputField from '../../components/InputField';
import InputError from '../../components/InputError';
import CheckField from '../../components/CheckField';

const RegistrationForm = ({ loading, isSubmitting }) => (
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
    <CheckField id="notRobot" name="notRobot" label="Nie jestem robotem" />
    <InputError name="notRobot" />
    <button
      type="submit"
      className="px-4 py-2 mt-4 font-semibold text-white rounded-lg font-secondaryFont bg-thirdColor hover:bg-fourthColor focus:outline-none focus:ring-2 focus:bg-fourthColor"
      disabled={loading || isSubmitting}
      aria-label="Zarejestruj się"
      aria-live="polite"
    >
      {loading ? 'Ładowanie...' : 'Zarejestruj się'}
    </button>
  </Form>
);

export default RegistrationForm;
