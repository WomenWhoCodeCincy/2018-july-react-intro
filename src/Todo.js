import React, { Component } from 'react';

class Todo extends Component {
  handleChange = () => {
    this.props.onIsCompleteChanged(
      !this.props.todo.isComplete
    );
  }

  render() {
    const { todo } = this.props;

    return (
      <li className={todo.isComplete ? "completed" : "view"}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.isComplete}
            onChange={this.handleChange}
          />
          <label>{todo.message}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Rule the web" />
      </li>
    );
  }
}

export default Todo;
