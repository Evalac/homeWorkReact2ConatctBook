import { Component } from 'react';
import css from './contactFilter.module.css';

class ContactFilter extends Component {
  render() {
    return (
      <div className={css.filterContainer}>
        <label className={css.filterLabel} htmlFor="filter">
          Find contact by name
          <input
            className={css.filterInput}
            type="text"
            name="filter"
            onChange={this.props.filterChange}
            value={this.props.value}
          />
        </label>
      </div>
    );
  }
}

export { ContactFilter };
