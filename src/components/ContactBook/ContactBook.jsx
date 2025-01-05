import { Component } from 'react'; // eslint-disable-next-line

import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ConatctFilter';
import { ContactList } from './ContactList/ContactList';

import css from './ContactBook.module.css';

import { nanoid } from 'nanoid';

class ContactBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm
            addContact={this.addContact}
            initialValue={filteredContact}
          />
          <h1>Contact</h1>
          <ContactFilter
            filterChange={this.filterContact}
            value={this.state.filter}
          />
          <ContactList
            initialValue={filteredContact}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export { ContactBook };
