import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../TodoCard/TodoCard";
const TodoList = () => {
  const todoList = useSelector((state) => state.todoReducer.todoList);

  return (
    <div>
      {todoList.map((todo) => (
        <div>
          <TodoCard todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
