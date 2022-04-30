import "./TodoItem.css";
import DoneButton from "./DoneButton";
import DeleteButton from "./DeleteButton";

const TodoItem = (props) => {
  return (
    <div className="todoItemInner">
      <DoneButton todoId={props.todoId} />
      <span className="todoItem" type="text">
        {props.todoContent}
      </span>
      <DeleteButton todoId={props.todoId} />
    </div>
  );
};

export default TodoItem;
