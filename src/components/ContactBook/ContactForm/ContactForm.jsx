import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './contactForm.module.css';

class ContactForm extends Component {
  state = {
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
    e.preventDefault();
    const result = this.props.initialValue.some(
      ({ name }) => name === this.state.name
    );

    if (result) {
      alert('ЗЕЛЯ ПІДОР');
    } else {
      this.props.addContact(this.state);
      this.setState({ id: '', name: '', number: '' });
    }
  };

  render() {
    return (
      <form className={css.formNewContact} onSubmit={this.onSubmit}>
        <label className={css.labelNewContact} htmlFor="name">
          Name:
          <input
            className={css.inputNewContact}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onChange}
          />
        </label>
        <label className={css.labelNewContact}>
          Number:
          <input
            className={css.inputNewContact}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onChange}
          />
        </label>
        <button className={css.buttonNewContact} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export { ContactForm };
