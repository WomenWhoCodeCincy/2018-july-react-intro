import React, { Component } from 'react';

import Todos from './Todos';

class App extends Component {
  state = {
    newTodo: "",
  }

  addNewTodo = (message) => {
    // How can I add a Todo without Todos in state?
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

          <Todos />
        </section>

        {/* This footer should hidden by default and shown when there are todos */}
        <footer className="footer">
          {/* This should be `0 items left` by default */}
          <span className="todo-count"><strong>0</strong> item left</span>

          {/* Remove this if you don't implement routing */}
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

          {/* Hidden if no completed items are left ↓ */}
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
