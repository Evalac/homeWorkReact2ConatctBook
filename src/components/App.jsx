import { Component } from 'react';
import { ContactValidation } from './ContactValidation/ContactValidation';
import { Formika } from './ContactValidation/Formik/Formika';
import { FormikNext } from './ContactValidation/FormikNext/FormixNext';

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

  render() {
    return (
      <>
        {/* <Formika /> */}
        {/* <FormikNext /> */}
        <ContactValidation
          initialValue={this.state}
          addContact={this.addContact}
        />
      </>
    );
  }
}

export { App };
