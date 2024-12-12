import { Component } from 'react';
import { ContactValidation } from './ContactValidation/ContactValidation';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <ContactValidation />
      </>
    );
  }
}

export { App };
