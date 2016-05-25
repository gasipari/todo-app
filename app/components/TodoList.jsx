import React from 'react';
import Todo from 'Todo';

const TodoList = React.createClass({
  render: function () {
    const {todos} = this.props;
    //
    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">There is no Task!</p>
        )
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
