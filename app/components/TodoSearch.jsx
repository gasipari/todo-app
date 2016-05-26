import React from 'react';
import {connect} from 'react-redux';
import {setSearchText, toggleShowCompleted} from 'actions';

export const TodoSearch = React.createClass({
  render: function () {
    const {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search tasks" value={searchText}
            onChange={() => {
              let searchText = this.refs.searchText.value;
              dispatch(setSearchText(searchText));
            }}/>
        </div>
        <div>
          <label>
          <input type="checkbox" ref="showCompleted" checked={showCompleted}
            onChange={() => {
              dispatch(toggleShowCompleted())
            }} />
          Show completed tasks
        </label>
        </div>
      </div>
    )
  }
})

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
