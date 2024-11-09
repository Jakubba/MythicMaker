import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string()
    .email('Proszę podać poprawny adres e-mail.')
    .required('E-mail jest wymagany.'),
  password: Yup.string()
    .min(6, 'Hasło musi mieć co najmniej 6 znaków.')
    .required('Hasło jest wymagane.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Hasła nie są zgodne.')
    .required('Potwierdzenie hasła jest wymagane.'),
  notRobot: Yup.boolean().oneOf(
    [true],
    'Proszę potwierdzić, że nie jesteś robotem.',
  ),
});

export default validationSchema;
