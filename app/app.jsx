import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';

import {setSearchText, addTodo, toggleShowCompleted, toggleTodo} from 'actions';
let store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
})

store.dispatch(addTodo('Check the mail'));
store.dispatch(setSearchText('mail'));
store.dispatch(toggleShowCompleted());

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
