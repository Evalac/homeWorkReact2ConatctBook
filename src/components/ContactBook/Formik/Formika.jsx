import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import css from './formik.module.css';

const userSchema = object({
  login: string().required(),
  password: string().min(6).max(10).required(),
});

const initialValue = {
  login: '',
  password: '',
};

function Formika() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login:
          <Field type="text" name="login" className={css.inputCell} />
          <ErrorMessage name="login" component="div" />
        </label>
        <br />
        <label htmlFor="password">
          Paswword:
          <Field type="password" name="password" className={css.inputCell} />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export { Formika };
