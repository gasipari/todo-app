import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import TodoAPI from 'TodoAPI';

import TodoApp from 'TodoApp';

import {setSearchText, addTodo, addTodos, toggleShowCompleted, toggleTodo} from 'actions';
let store = require('configureStore').configure();

//
store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
})

let initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
)
