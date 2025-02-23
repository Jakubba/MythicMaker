import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import contactImg from '../../assets/image/hero.png';
import iconMail from '../../assets/icons/icon-mail-white.svg';
import iconPhone from '../../assets/icons/icon-phone-white.svg';
import iconLocation from '../../assets/icons/icon-point-white.svg';
import { toast } from 'react-toastify';
import { validationSchema } from './schema';

export const Contact = () => {
  const accessKey = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;
  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Formularz został wysłany!');
        resetForm();
      } else {
        toast.error('Wystąpił błąd podczas wysyłania formularza.');
      }
    } catch (error) {
      toast.error('Błąd połączenia. Spróbuj ponownie później.');
    }
  };

  return (
    <section
      className="relative flex h-auto w-full flex-col items-center justify-center gap-2 bg-slate-600 px-4 py-12"
      id="contact"
    >
      <div className="absolute left-0 top-0 z-10 h-[520px] w-full bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent"></div>
      <div className="flex h-auto w-full max-w-[1600px] flex-col justify-center gap-2 bg-slate-600 px-4 py-12 md:flex-row md:items-center md:gap-10">
        <div className="h-full max-h-[900px] w-full overflow-hidden rounded-lg md:block md:h-screen md:w-1/2">
          <img className="h-[100%] object-cover" src={contactImg} alt="" />
        </div>
        <div className="z-20 flex w-full flex-col flex-wrap items-center justify-center md:w-1/2 md:flex-row lg:gap-10 lg:p-10">
          <div className="w-full">
            <p className="mb-2 font-tertiaryFont text-xl font-semibold uppercase text-white">
              Kontakt
            </p>
            <h3 className="mb-4 font-primaryFont text-4xl font-bold text-white">Skontaktuj się</h3>
            <p className="font-tertiaryFont text-lg text-white">
              Jesteśmy tutaj, aby Ci pomóc w każdej sprawie
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <img src={iconMail} alt="Email Icon" className="h-[25px] w-[25px]" />
                <a
                  type="email"
                  href="mailto:hello@mythicmaker.com"
                  className="font-tertiaryFont text-white"
                >
                  hello@mythicmaker.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img src={iconPhone} alt="Phone Icon" className="h-[25px] w-[25px]" />
                <a type="phone" href="tel:+48 123 456 789" className="font-tertiaryFont text-white">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img src={iconLocation} alt="Address Icon" className="h-[25px] w-[25px]" />
                <p className="font-tertiaryFont text-white">
                  ul. Poniatowskiego 32b, Wrocław, Poland
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="m-auto flex w-max flex-col">
                  <div className="mb-4 flex w-max flex-col items-start">
                    <label htmlFor="name" className="mb-2 font-tertiaryFont text-white">
                      Imię
                    </label>
                    <Field
                      name="name"
                      type="text"
                      className="w-full max-w-[400px] border-2 bg-gray-700 p-2 text-white placeholder-white md:min-w-[320px]"
                    />
                    <ErrorMessage name="name" component="div" />
                  </div>
                  <div className="mb-4 flex w-max flex-col items-start">
                    <label htmlFor="email" className="mb-2 font-tertiaryFont text-white">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full max-w-[400px] border-2 bg-gray-700 p-2 text-white placeholder-white md:min-w-[320px]"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="flex w-max flex-col items-start">
                    <label htmlFor="message" className="mb-2 font-tertiaryFont text-white">
                      Wiadomość
                    </label>
                    <Field
                      name="message"
                      as="textarea"
                      placeholder="Wiadomość"
                      className="min-h-[200px] w-full max-w-[400px] resize-none border-2 bg-gray-700 p-2 text-white placeholder-white md:min-w-[320px]"
                    />
                    <ErrorMessage name="message" component="div" />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full max-w-[400px] border-2 border-transparent bg-thirdColor py-2 text-white transition-all hover:border-white hover:bg-transparent"
                  >
                    Wyślij
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
    </section>
  );
};
