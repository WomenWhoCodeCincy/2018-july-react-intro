import React, { Component } from 'react';

class Todos extends Component {
  render() {
    const todos = [
      {},
      {},
      {},
    ];

    return (
      <ul className="todo-list">
        {
          todos.map((todo) => (
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Buy a unicorn</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Rule the web" />
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Todos;
