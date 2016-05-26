import React from 'react';
import Todo from 'Todo';
import {connect} from 'react-redux';

export const TodoList = React.createClass({
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
          <Todo key={todo.id} {...todo} />
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

export default connect(
  (state) => {
    return {
      todos: state.todos// available on component props
    }
  }
)(TodoList);
