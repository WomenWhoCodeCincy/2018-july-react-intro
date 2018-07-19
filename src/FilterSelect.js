import React, { Component } from 'react';

class FilterSelect extends Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <a className="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
    );
  }
}

export default FilterSelect;
