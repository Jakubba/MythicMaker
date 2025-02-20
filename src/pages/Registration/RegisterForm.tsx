import { Form } from 'formik';
import InputField from '../../components/InputField';
import CheckField from '../../components/CheckField';

const RegistrationForm = ({ loading, isSubmitting }) => (
  <Form className="flex w-full max-w-sm flex-col">
    <div className="mb-5">
      <InputField type="email" id="username" name="username" placeholder="E-mail" />
    </div>
    <div className="mb-5">
      <InputField type="password" id="password" name="password" placeholder="Hasło" />
    </div>
    <div className="mb-5">
      <InputField
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Potwierdź hasło"
      />
    </div>
    <CheckField id="notRobot" name="notRobot" label="Nie jestem robotem" />
    <button
      type="submit"
      className="mt-4 rounded-lg bg-thirdColor px-4 py-2 font-secondaryFont font-semibold text-white hover:bg-fourthColor focus:bg-fourthColor focus:outline-none focus:ring-2"
      disabled={loading || isSubmitting}
      aria-label="Zarejestruj się"
      aria-live="polite"
    >
      {loading ? 'Ładowanie...' : 'Zarejestruj się'}
    </button>
  </Form>
);

export default RegistrationForm;
