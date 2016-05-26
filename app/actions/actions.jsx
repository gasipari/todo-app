export let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export let addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export let addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

// toggleShowCompleted
export let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
};

// toggleTodo(id) _ toggleTodo
export let toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
