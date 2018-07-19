import React, { Component } from 'react';

import Todo from './Todo';

class Todos extends Component {
  render() {
    const { todos } = this.props;

    return (
      <ul className="todo-list">
        {
          todos.map((todo) =>
            <Todo
              key={todo.id}
              todo={todo}
              onIsCompleteChanged={this.props.onIsCompleteChanged(todo)}
            />
          )
        }
      </ul>
    );
  }
}

export default Todos;
