import React from 'react';
import TodoList from 'TodoList';

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Cook cake'
        },
        {
          id: 4,
          text: 'Call James'
        }
      ]
    }
  },
  render: function () {
    const {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
