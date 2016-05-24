import React from 'react';

const TodoSearch = React.createClass({
  //
  handleSearch: function () {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search tasks" onChange={this.handleSearch}/>
        </div>
        <div>
          <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
          Show completed tasks
        </div>
      </div>
    )
  }
})

module.exports = TodoSearch;
