import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  const handleClick = ()=>{
    props.clearPurchased();
  }

  return (
    <div className="shopping-list">
      {props.todos.map(todo => (
        <Todo key={todo.id} toggleTodo={props.toggleTodo} todo={todo} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Purchased
      </button>
    </div>
  );
};

export default TodoList;