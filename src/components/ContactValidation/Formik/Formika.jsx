import { Formik, Form, Field } from 'formik';
import css from './formik.module.css';

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
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="login">
          Login:
          <Field type="text" name="login" className={css.inputCell} />
        </label>
        <label htmlFor="password">
          Paswword:
          <Field type="password" name="password" className={css.inputCell} />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export { Formika };
