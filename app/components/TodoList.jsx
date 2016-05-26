import React from 'react';
import Todo from 'Todo';
import {connect} from 'react-redux';
import TodoAPI from 'TodoAPI';

export const TodoList = React.createClass({
  render: function () {
    const {todos, showCompleted, searchText} = this.props;
    //
    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">There is no Task!</p>
        )
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
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
    return state; // available on component props
  }
)(TodoList);
