import expect from 'expect';
import {searchTextReducer, showCompletedReducer} from 'reducers';

 // make sure the reducer does not modify the object the passed thru
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

});
