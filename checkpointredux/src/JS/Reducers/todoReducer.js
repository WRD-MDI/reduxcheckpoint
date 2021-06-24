import { Add_todo } from "../ActionType/actionType";

const initialState = {
  todoList: [
    { text: "My first todo", id: "0", isDone: "false" },
    { text: "My second todo", id: "1", isDone: "false" },
    { text: "My third todo", id: "2", isDone: "false" },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_todo:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    default:
      return state;
  }
};
export default todoReducer;
