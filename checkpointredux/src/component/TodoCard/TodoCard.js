import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import TodoList from "../TodoList/TodoList";

const TodoCard = ({ todo }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <FaEdit />
      <FaTrash />
    </div>
  );
};

export default TodoCard;
