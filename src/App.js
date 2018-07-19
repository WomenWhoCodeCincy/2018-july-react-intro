import React, { Component } from 'react';

import Todos from './Todos';
import FilterSelect from './FilterSelect';

export const FILTERS = [
  {
    name: "All",
  },
  {
    name: "Active",
  },
  {
    name: "Completed",
  }
];

class App extends Component {
  state = {
    newTodo: "",
    nextTodoId: 4,
    todos: [
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
    ],
  }

  addNewTodo = (message) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.nextTodoId,
          isComplete: false,
          message,
        },
      ],
      nextTodoId: this.state.nextTodoId + 1,
    });
  }

  clearNewTodo = () => {
    this.setState({ newTodo: "" });
  }

  updateNewTodo = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.addNewTodo(this.state.newTodo);
      this.clearNewTodo();
    }
  }

  handleIsCompleteChanged = (todo) => (value) => {
    const { todos } = this.state;
    const todoIndex = todos.indexOf(todo);
    const updatedTodo = {
      ...todo,
      isComplete: value,
    };
    const updatedTodos = [
      ...todos.slice(0, todoIndex),
      updatedTodo,
      ...todos.slice(todoIndex + 1),
    ];

    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={this.state.newTodo}
            onChange={this.updateNewTodo}
            onKeyDown={this.handleKeyDown}
          />
        </header>

        {/* This section should be hidden by default and shown when there are todos */}
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <Todos todos={this.state.todos} onIsCompleteChanged={this.handleIsCompleteChanged} />
        </section>

        {/* This footer should hidden by default and shown when there are todos */}
        <footer className="footer">
          {/* This should be `0 items left` by default */}
          <span className="todo-count"><strong>0</strong> item left</span>

          <FilterSelect filters={FILTERS} />

          {/* Hidden if no completed items are left ↓ */}
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
