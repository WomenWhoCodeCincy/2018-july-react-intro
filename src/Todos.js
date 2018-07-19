import React, { Component } from 'react';

class Todos extends Component {
  render() {
    const todos = [
      {
        id: 1,
        isComplete: true,
        message: "Buy a unicorn",
      },
      {
        id: 2,
        isComplete: false,
        message: "Build a todo app in React",
      },
      {
        id: 3,
        isComplete: false,
        message: "Celebrate!",
      },
    ];

    return (
      <ul className="todo-list">
        {
          todos.map((todo) => (
            <li key={todo.id} className={todo.isComplete ? "completed" : "view"}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{todo.message}</label>
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
