import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from 'actions';

export const AddTodo = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    //
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Enter a task" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
})

export default connect()(AddTodo);
