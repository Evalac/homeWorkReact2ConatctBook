import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, email, number, boolean } from 'yup';
import { nanoid } from 'nanoid';
import css from './contactValidation.module.css';

class ContactValidation extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  onChange = e => {
    this.setState({
      id: nanoid(),
      [e.currentTarget.name]: e.currentTarget.value, //вичисляємі значення
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmit = e => {
    console.log('submit');
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onChange}
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.onChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <label htmlFor="">
          Find contact by name
          <input type="text" />
        </label>
        <h1>Contact</h1>
        <ul>
          {this.props.initialValue.contacts.map(contact => {
            return (
              <li key={nanoid()} className={css.contactItem}>
                <p>{contact.name}:</p>
                <p>{contact.number}</p>
              </li>
            );
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
