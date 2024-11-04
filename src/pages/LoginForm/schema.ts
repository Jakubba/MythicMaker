import * as Yup from 'yup';
const validationSchema = Yup.object({
  username: Yup.string()
    .email('Nieprawidłowy adres e-mail')
    .required('Username jest wymagany'),
  password: Yup.string().required('Hasło jest wymagane'),
  notRobot: Yup.boolean().oneOf(
    [true],
    'Musisz potwierdzić, że nie jesteś robotem',
  ),
});

export default validationSchema;
