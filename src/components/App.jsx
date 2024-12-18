import { Component } from 'react';
import { ContactValidation } from './ContactBook/AddContact/ContactValidation';
import { Formika } from './ContactBook/Formik/Formika';
import { FormikNext } from './ContactBook/FormikNext/FormixNext';

import { nanoid } from 'nanoid';

class App extends Component {
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

  test = () => {};

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const filteredContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    console.log(filteredContact);

    return (
      <>
        {/* <Formika /> */}
        {/* <FormikNext /> */}

        <ContactValidation
          initialValue={filteredContact}
          addContact={this.addContact}
          filterChange={this.filterContact}
          value={this.state.filter}
        />
      </>
    );
  }
}

export { App };
