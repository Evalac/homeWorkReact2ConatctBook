import { Component } from 'react'; // eslint-disable-next-line
import { Formika } from './Formik/Formika'; // eslint-disable-next-line
import { FormikNext } from './FormikNext/FormixNext';

import { ContactBook } from './ContactBook/ContactBook';

class App extends Component {
  render() {
    return (
      <>
        {/* <Formika /> */}
        {/* <FormikNext /> */}
        <ContactBook />
      </>
    );
  }
}

export { App };
