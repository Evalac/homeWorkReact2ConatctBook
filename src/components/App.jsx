import { Component } from 'react';
import { ContactValidation } from './ContactValidation/ContactValidation';
import { Formika } from './ContactValidation/Formik/Formika';

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

  render() {
    return (
      <>
        <Formika />
        {/* <ContactValidation /> */}
      </>
    );
  }
}

export { App };
