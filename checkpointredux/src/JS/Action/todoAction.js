import { Add_todo } from "../ActionType/actionType";
const addTodo = (payload) => {
  return {
    type: Add_todo,
    payload,
  };
};
export default addTodo;
