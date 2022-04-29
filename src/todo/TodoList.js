import AddTodoItem from "../components/AddTodoItem";
import TodoItem from "../components/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  return (
    <>
      <AddTodoItem />
      <div className="todoItems">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </>
  );
};

export default TodoList;
