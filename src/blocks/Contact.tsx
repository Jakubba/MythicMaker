import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import contactImg from '../assets/image/hero.png';
import iconMail from './../assets/icons/icon-mail-white.svg';
import iconPhone from './../assets/icons/icon-phone-white.svg';
import iconLocation from './../assets/icons/icon-point-white.svg';

export const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Imię musi mieć co najmniej 2 znaki')
      .required('Imię jest wymagane'),
    email: Yup.string()
      .email('Niepoprawny adres email')
      .required('Email jest wymagany'),
    message: Yup.string()
      .min(10, 'Wiadomość musi mieć co najmniej 10 znaków')
      .required('Wiadomość jest wymagana'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    alert('Formularz został wysłany!');
    resetForm();
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-auto gap-2 px-4 py-12 bg-slate-600">
      <div className="absolute left-0 top-0 w-full h-[520px] bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent z-10"></div>
      <div className="flex flex-col justify-center w-full gap-2 px-4 py-12 bg-slate-600 md:gap-10 md:items-center md:flex-row max-w-[1600px]  h-auto">
        <div className="w-full h-full overflow-hidden rounded-lg md:h-screen max-h-[900px] md:block md:w-1/2 ">
          <img className="object-cover h-[100%]" src={contactImg} alt="" />
        </div>
        <div className="z-20 flex flex-col flex-wrap items-center justify-center w-full lg:p-10 lg:gap-10 md:w-1/2 md:flex-row">
          <div className="w-full">
            <p className="mb-2 text-xl font-semibold text-white uppercase font-tertiaryFont">
              Kontakt
            </p>
            <h3 className="mb-4 text-4xl font-bold text-white font-primaryFont ">
              Skontaktuj się
            </h3>
            <p className="text-lg text-white font-tertiaryFont">
              Jesteśmy tutaj, aby Ci pomóc w każdej sprawie
            </p>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="flex items-center gap-2">
                <img
                  src={iconMail}
                  alt="Email Icon"
                  className="h-[25px] w-[25px]"
                />
                <a
                  type="email"
                  href="mailto:hello@mythicmaker.com"
                  className="text-white font-tertiaryFont"
                >
                  hello@mythicmaker.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={iconPhone}
                  alt="Phone Icon"
                  className="h-[25px] w-[25px]"
                />
                <a
                  type="phone"
                  href="tel:+48 123 456 789"
                  className="text-white font-tertiaryFont"
                >
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={iconLocation}
                  alt="Address Icon"
                  className="h-[25px] w-[25px]"
                />
                <p className="text-white font-tertiaryFont">
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
                <Form className="flex flex-col m-auto w-max">
                  <div className="flex flex-col items-start mb-4 w-max">
                    <label
                      htmlFor="name"
                      className="mb-2 text-white font-tertiaryFont"
                    >
                      Imię
                    </label>
                    <Field
                      name="name"
                      type="text"
                      className="p-2 text-white placeholder-white bg-gray-700 border-2 w-full md:min-w-[320px] max-w-[400px]"
                    />
                    <ErrorMessage name="name" component="div" />
                  </div>
                  <div className="flex flex-col items-start mb-4 w-max">
                    <label
                      htmlFor="email"
                      className="mb-2 text-white font-tertiaryFont"
                    >
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="p-2 text-white placeholder-white bg-gray-700 border-2  w-full md:min-w-[320px] max-w-[400px]"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="flex flex-col items-start w-max">
                    <label
                      htmlFor="message"
                      className="mb-2 text-white font-tertiaryFont"
                    >
                      Wiadomość
                    </label>
                    <Field
                      name="message"
                      as="textarea"
                      placeholder="Wiadomość"
                      className="p-2 text-white placeholder-white bg-gray-700 border-2  w-full md:min-w-[320px] max-w-[400px] min-h-[200px] resize-none"
                    />
                    <ErrorMessage name="message" component="div" />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 mt-4 text-white border-2 border-transparent transition-all  max-w-[400px] bg-thirdColor hover:border-white hover:bg-transparent"
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
