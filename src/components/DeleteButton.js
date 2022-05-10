import deleteSignImage from "../images/deleteSign.svg";
import "./DeleteButton.css";
import TodoService from "../services/todo.service";

const DeleteButton = (props) => {
  const handleClick = (e) => {
    TodoService.deleteTodo(props.todoId);
  };

  return (
    <button className="todoDeleteItemButton" onClick={handleClick}>
      <img src={deleteSignImage} alt="DELETE BUTTON" />
    </button>
  );
};

export default DeleteButton;
