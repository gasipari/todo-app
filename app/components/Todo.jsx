import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {toggleTodo} from 'actions';

export const Todo = React.createClass({
  render: function () {
    const {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';

    let renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
          dispatch(toggleTodo(id));
        }}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
