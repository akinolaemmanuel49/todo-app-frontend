import { useState } from "react";

import TodoService from "../services/todo.service";
import "./TodoItem.css";
import DoneButton from "./DoneButton";
import DeleteButton from "./DeleteButton";

const TodoItem = (props) => {
  const [isDone, setIsDone] = useState(props.done);

  const toggleTodoState = () => {
    if (isDone) {
      setIsDone(false);
    } else {
      setIsDone(true);
    }
    TodoService.toggleTodoState(props.id);
  };
  return (
    <div className="todoItemInner">
      <DoneButton
        todoId={props.id}
        isDone={props.done}
        onClick={toggleTodoState}
      />
      <span className="todoItem" type="text">
        {props.todo}
      </span>
      <DeleteButton todoId={props.id} />
    </div>
  );
};

export default TodoItem;
