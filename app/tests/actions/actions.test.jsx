import expect from 'expect';
//import actions from 'actions';
var actions = require('actions');

describe('Action', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    let result = actions.setSearchText(action.searchText);

    expect(result).toEqual(action);
  });

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'Some task'
    };
    let result = actions.addTodo(action.text);

    expect(result).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    let result = actions.toggleShowCompleted();

    expect(result).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: '999'
    };
    let result = actions.toggleTodo(action.id);

    expect(result).toEqual(action);
  });

})
