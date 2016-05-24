import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo compoment for each todo item', () => {
    let todos = [
      {
        id: 1,
        text: 'Go to the gym'
      },
      {
        id: 2,
        text: 'Call Joe'
      }
    ];
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    // Finds all instances of components with type of Todo class
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.lenght).toBe(todos.lenght);
  })
});
