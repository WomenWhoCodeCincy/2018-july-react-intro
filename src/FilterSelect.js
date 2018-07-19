import React, { Component } from 'react';

class FilterSelect extends Component {
  render() {
    const { filters } = this.props;

    return (
      <ul className="filters">
        {
          filters.map((filter) => (
            <li key={filter.name}>
              <a>{filter.name}</a>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default FilterSelect;
