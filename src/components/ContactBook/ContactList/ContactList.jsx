import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    return (
      <ul className={css.containerList}>
        {this.props.initialValue.map(contact => {
          return (
            <li key={nanoid()} className={css.contactItem}>
              <p>{contact.name}:</p>
              <p>{contact.number}</p>
              <button
                className={css.buttonDelete}
                type="button"
                onClick={() => this.props.onDeleteContact(contact.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export { ContactList };
