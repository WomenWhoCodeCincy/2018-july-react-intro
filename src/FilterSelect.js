import React, { Component } from 'react';

class FilterSelect extends Component {
  render() {
    const { filters, value } = this.props;

    return (
      <ul className="filters">
        {
          filters.map((filter) => {
            const isSelected = filter === value;
            const buttonClasses = isSelected ? "selected" : "";

            return (
              <li key={filter.name}>
                <a className={buttonClasses}>{filter.name}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default FilterSelect;
