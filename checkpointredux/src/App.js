import "./App.css";
import TodoList from "./component/TodoList/TodoList";
import AddTodo from "./component/AddTodo/AddTodo";
import EditTodo from "./component/EditTodo/EditTodo";
import TodoCard from "./component/TodoCard/TodoCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        todoList redux
        <TodoCard />
        <AddTodo />
        <TodoList />
        <EditTodo />
      </header>
    </div>
  );
}

export default App;
