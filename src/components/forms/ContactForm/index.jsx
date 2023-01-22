import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { CONTACT_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';

// Name, Tel, Email, Birthday

function ContactForm() {
  const initialValues = { name: '', phone: '', email: '', birthday: '' };

  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values:', values);
    formikBag.resetForm();
  };

  return (
    // initialValues onSubmit - обов'язкові пропи для Formik
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_VALIDATION_SCHEMA}>
      {formikProps => {
        return (
          <Form>
            <label>
              <span>Name: </span>
              <Field type="text" name="name" placeholder="Yourname" autoFocus />
              <ErrorMessage name="name" component="span" />
            </label>
            <label>
              <span>Phone Number:</span>
              <Field type="tel" name="phone" placeholder="+380111111111" />
              <ErrorMessage name="phone" component="span" />
            </label>
            <label>
              <span>Email:</span>
              <Field type="email" name="email" placeholder="your@mail.com" />
              <ErrorMessage name="email" component="span" />
            </label>
            <label>
              <span>Birthday</span>
              <Field type="date" name="birthday" />
              <ErrorMessage name="birthday" component="span" />
            </label>
            <button type="submit">Save</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
