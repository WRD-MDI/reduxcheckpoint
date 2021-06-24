import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addTodo from "../../JS/Action/todoAction";
const AddTodo = () => {
  const [newinput, setnewinput] = useState("");
  const dispatch = useDispatch();

  const add = () => {
    let newTodo = {
      text: newinput,
      id: Math.random(),
      isdone: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setnewinput(e.target.value)} />
      <button onClick={() => add()}>ADD</button>
    </div>
  );
};

export default AddTodo;
