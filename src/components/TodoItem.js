import "./TodoItem.css";
import DoneButton from "./DoneButton";
import deleteSignImage from "../images/deleteSign.svg";

const TodoItem = () => {
  return (
    <div className="todoItemInner">
      <DoneButton />
      <input className="todoItemInput" type="text" maxLength={128} />
      <button className="todoDeleteItemButton">
        <img src={deleteSignImage} alt="ADD" />
      </button>
    </div>
  );
};

export default TodoItem;
