import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Imię musi mieć co najmniej 2 znaki')
    .required('Imię jest wymagane')
    .nullable(),
  email: Yup.string().email('Niepoprawny adres email').required('Email jest wymagany').nullable(),
  message: Yup.string()
    .min(10, 'Wiadomość musi mieć co najmniej 10 znaków')
    .required('Wiadomość jest wymagana')
    .nullable(),
});
