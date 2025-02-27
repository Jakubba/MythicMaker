import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string()
    .transform((value) => (value === null ? '' : value)) // Zamienia null na pusty string
    .email('Proszę podać poprawny adres e-mail.')
    .required('E-mail jest wymagany.'),
  password: Yup.string()
    .transform((value) => (value === null ? '' : value))
    .min(6, 'Hasło musi mieć co najmniej 6 znaków.')
    .required('Hasło jest wymagane.'),
  notRobot: Yup.boolean()
    .oneOf([true], 'Proszę potwierdzić, że nie jesteś robotem.')
    .required('To pole jest wymagane.'), // Dodajemy wymaganie
});

export default validationSchema;
