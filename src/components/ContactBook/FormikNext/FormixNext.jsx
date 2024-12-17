import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, email, number, boolean } from 'yup';

import css from './FormikNext.module.css';

const userShema = object({
  product: string().required('Please select a product'),
  name: string().required(),
  email: string().email().required(),
  title: string().required(),
  rewiev: string().required(),
  raiting: number().required(),
  wouldRecomend: boolean().default(false),
});

const initialValues = {
  name: '',
  email: '',
  title: '',
  rewiev: '',
  raiting: '',
  date: new Date(),
  wouldRecomend: false,
  product: '',
  date: new Date(),
};

const products = ['Sweater', 'Keyboard', 'Sofa', 'Mouse'];

class FormikNext extends Component {
  handleSubmit = (values, actions) => {
    console.log(actions);
    console.log(values);
    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={userShema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off" className={css.form}>
          <label htmlFor="name">
            Full name:
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label htmlFor="email">
            Email adress:
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <label htmlFor="product">
            Product:
            <Field name="product" as="select">
              <option value="">Select a product</option>
              {products.map((product, idx) => (
                <option value={product} key={idx}>
                  {product}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="product"
              component="div"
              className={css.error}
            />
          </label>
          <label htmlFor="title">
            Title:
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" className={css.error} />
          </label>
          <label htmlFor="rewiev">
            <Field
              id="about"
              as="textarea"
              name="rewiev"
              rows="5"
              cols="40"
              placeholder="Розкажіть про себе..."
            />
            <ErrorMessage name="rewiev" component="div" className={css.error} />
          </label>
          <label htmlFor="raiting">
            <Field type="number" name="raiting" placeholder="Raiting" />
            <ErrorMessage
              name="raiting"
              component="div"
              className={css.error}
            />
          </label>
          <label htmlFor="wouldRecomend">
            <Field type="checkbox" name="wouldRecomend" />
            Would recomend
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  }
}

export { FormikNext };
