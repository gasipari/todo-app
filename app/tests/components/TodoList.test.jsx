import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

//let configureStore = require('configureStore');
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo compoment for each todo item', () => {
    let todos = [
      {
        id: 1,
        text: 'Go to the gym',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: 'Call Joe',
        completed: false,
        completedAt: undefined,
        createdAt: 501
      }
    ];
    var store = configure({
      todos
    })
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    )

    let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    // Finds all instances of components with type of Todo class
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.lenght).toBe(todos.lenght);
  });

  it('should render empty message if no todo item', () => {
    let todos = [];
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    let $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
