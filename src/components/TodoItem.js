import { useState } from "react";

import "./TodoItem.css";
import DoneButton from "../components/DoneButton";
import DeleteButton from "../components/DeleteButton";
import TodoService from "../services/todo.service";

const TodoItem = (props) => {
  const [isDone, setIsDone] = useState(props.done);
  const handleToggleTodoAction = (e, todoId) => {
    e.preventDefault();
    if (isDone) {
      setIsDone(false);
    } else {
      setIsDone(true);
    }
    TodoService.toggleTodoState(todoId);
  };
  const handleDeleteTodoAction = (e, todoId, todoList) => {
    console.log("PRE DELETE:", todoList);
    console.log("PRE DELETE:", todoId);
    // asyncLocalStorage.getItem("todoList").then((data) => {
    //   todoList = JSON.parse(data);
    // });
    e.preventDefault();
    TodoService.deleteTodo(todoId);
    todoList.splice(todoId, 1);
    // asyncLocalStorage.setItem("todoList", JSON.stringify(todoList));
    // localStorage.setItem("todoList", JSON.stringify(todoList));
    console.log("POST DELETE:", todoList);
    console.log("POST DELETE:", todoId);
  };
  return (
    <div className="todoItemInner">
      <DoneButton
        todoId={props.todoId}
        isDone={isDone}
        onClickCallback={handleToggleTodoAction}
      />
      <span className="todoItem" type="text">
        {props.todo}
      </span>
      <DeleteButton
        todoId={props.todoId}
        todoList={props.todoList}
        onClickCallback={handleDeleteTodoAction}
      />
    </div>
  );
};

export default TodoItem;
