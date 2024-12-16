import { Component } from 'react';
import { ContactValidation } from './ContactValidation/ContactValidation';
import { Formika } from './ContactValidation/Formik/Formika';
import { FormikNext } from './ContactValidation/FormikNext/FormixNext';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  test = () => {
    const iddd = nanoid();
    console.log(iddd);
  };

  addContact = () => {};

  render() {
    return (
      <>
        {/* <Formika /> */}
        {/* <FormikNext /> */}
        <ContactValidation initialValue={this.state} />
      </>
    );
  }
}

export { App };
