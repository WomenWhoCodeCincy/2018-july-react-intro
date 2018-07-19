import React, { Component } from 'react';

class FilterSelect extends Component {
  handleChange = (filter) => () => {
    this.props.onChange(filter);
  }

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
                <a className={buttonClasses} onClick={this.handleChange(filter)}>{filter.name}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default FilterSelect;
