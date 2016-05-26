import expect from 'expect';
import {setSearchText, addTodo, addTodos, toggleShowCompleted, toggleTodo} from 'actions';

describe('Action', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    let result = setSearchText(action.searchText);

    expect(result).toEqual(action);
  });

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'Some task'
    };
    let result = addTodo(action.text);

    expect(result).toEqual(action);
  });

  it('should generate add todos action object', () => {
    let todos = [{
      id: '123',
      text: 'some',
      completed: false,
      completedAt: undefined,
      createdAt: 99999
    }];
    let action = {
      type: 'ADD_TODOS',
      todos
    };
    let result = addTodos(todos);

    expect(result).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    let result = toggleShowCompleted();

    expect(result).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: '999'
    };
    let result = toggleTodo(action.id);

    expect(result).toEqual(action);
  });

})
