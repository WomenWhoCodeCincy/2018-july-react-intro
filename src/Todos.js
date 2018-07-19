import React, { Component } from 'react';

import Todo from './Todo';

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
          todos.map((todo) => <Todo key={todo.id} todo={todo} />)
        }
      </ul>
    );
  }
}

export default Todos;
