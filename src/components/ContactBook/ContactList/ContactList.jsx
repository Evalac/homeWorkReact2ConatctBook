import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.initialValue.map(contact => {
          return (
            <li key={nanoid()} className={css.contactItem}>
              <p>{contact.name}:</p>
              <p>{contact.number}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export { ContactList };
