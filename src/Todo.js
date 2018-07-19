import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { todo } = this.props;

    return (
      <li className={todo.isComplete ? "completed" : "view"}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{todo.message}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Rule the web" />
      </li>
    );
  }
}

export default Todo;
