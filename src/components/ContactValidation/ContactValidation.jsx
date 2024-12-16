import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, email, number, boolean } from 'yup';
import { nanoid } from 'nanoid';

class ContactValidation extends Component {
  // const result = Object.values(initialValue).map((value, index, array) => {
  //   console.log(value);
  // });
  onSubmit = e => {
    // e.preventDefault();
    // в цій функціїї треба зробити логіку на додавання Імя контакту в стейт але не змінюючи його
    console.log('submit');
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit" onClick={e => this.onSubmit(e)}>
            Add contact
          </button>
        </form>
        <h1>Contact</h1>
        <ul>
          {Object.values(this.props.initialValue).map((value, index, array) => {
            return <li key={nanoid()}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export { ContactValidation };
// <Formik initialValues={initialValue}>
//   <Form>
//     <label htmlFor="name">
//       Name:
//       <Field
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </label>
//   </Form>
// </Formik>
