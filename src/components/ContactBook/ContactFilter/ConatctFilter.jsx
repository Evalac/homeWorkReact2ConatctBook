import { Component } from 'react';

class ContactFilter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="">
          Find contact by name
          <input
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
