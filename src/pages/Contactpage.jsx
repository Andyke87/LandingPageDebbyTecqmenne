/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import '../css/pages/Contact.css';

const Contactpage = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().trim()
                      .matches(/^[a-zA-Z\s]*$/, 'Ongeldige naam') // Alleen letters en spaties
                      .transform((value) => value.toLowerCase())
                      .required('Naam is verplicht')
                      .max(50, 'Naam mag maximaal 50 karakters bevatten'),
    email: Yup.string().trim()
                       .email('Ongeldig e-mailadres')
                       .transform((value) => value.toLowerCase())
                       .required('E-mailadres is verplicht'),
    phone: Yup.string().required('Telefoonnummer is verplicht')
                       .matches(/^[0-9+()-\s]*$/, 'Ongeldig telefoonnummer')
                       .min(9, 'Telefoonnummer moet minimaal 9 karakters bevatten')
                       .max(20, 'Telefoonnummer mag maximaal 20 karakters bevatten'),
    message: Yup.string().trim()
                         .required('Bericht is verplicht')
                         .transform((value) => value.toLowerCase())
                         .max(1000, 'Maximaal 1000 karakters toegelaten'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const serviceID = 'service_7ps0dhw'; // EmailJS-service-ID
    const templateID = 'template_8txgi1d'; // EmailJS-sjabloon-ID
    const publicKey = 'CN_OW-CGrHy_8dXhk'; // EmailJS-public key

    emailjs
      .send(serviceID, templateID, values, publicKey)
      .then(() => {
        alert('Uw bericht is succesvol verzonden!');
        resetForm();
      })
      .catch((error) => {
        console.error('Fout bij verzenden:', error);
        alert('Er is iets misgegaan. Probeer het opnieuw.');
      });
  };

  return (
    <section className="contact-page">
      <h1>Zit je met een vraag?</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Naam:</label>
              <div className="input-wrapper">
                <Field type="text" id="name" name="name" placeholder="Vul hier uw naam in" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mailadres:</label>
              <div className="input-wrapper">
                <Field type="email" id="email" name="email" placeholder="Vul hier uw e-mailadres in" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefoonnummer:</label>
              <div className="input-wrapper">
                <Field type="tel" id="phone" name="phone" placeholder="Vul hier uw telefoonnummer in" />
                <ErrorMessage name="phone" component="div" className="error-message" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Bericht:</label>
              <div className="input-wrapper">
                <Field as="textarea" id="message" name="message" placeholder="Typ hier uw bericht" />
                <ErrorMessage name="message" component="div" className="error-message" />
                {/* Karakterteller */}
                <div className="character-count">
                  {values.message.length}/1000 karakters gebruikt
                </div>
              </div>
            </div>

            <button type="submit">Verzend</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Contactpage;
