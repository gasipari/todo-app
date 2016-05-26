import expect from 'expect';
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

 // make sure the reducer does not modify the object passed thru
import df from 'deep-freeze-strict';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'mail'
      };
      let result = searchTextReducer(df(''), df(action))

      expect(result).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      let result = showCompletedReducer(df(false), df(action))

      expect(result).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'Check the mail'
      };
      let result = todosReducer(df([]), df(action))

      expect(result.length).toEqual(1);
      expect(result[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      let todos = [
        {
          id: '999',
          text: 'Doing something',
          completed: true,
          createdAt: 765,
          completedAt: 800
        }];
      let action = {
        type: 'TOGGLE_TODO',
        id: '999'
      };
      var result = todosReducer(df(todos), df(action));

      expect(result[0].completed).toEqual(false);
      expect(result[0].completedAt).toEqual(undefined);
    });

    it('should add existing todos', () => {
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
      var result = todosReducer(df([]), df(action));

      expect(result.length).toEqual(1);
      expect(result[0]).toEqual(todos[0]);
    });

  });

});
