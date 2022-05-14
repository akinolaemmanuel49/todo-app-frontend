import deleteSignImage from "../images/deleteSign.svg";
import TodoService from "../services/todo.service";
import "./DeleteButton.css";

const DeleteButton = (props) => {
  const deleteTodoItem = (e) => {
    e.preventDefault();
    TodoService.deleteTodo(props.todoId).then(() => {
      props.todoList.splice(props.todoId, 1);
      window.location.replace("/");
    });
  };
  return (
    <button
      className="todoDeleteItemButton"
      // onClick={(e) => {
      //   props.onClickCallback(e, props.todoId, props.todoList);
      // }}
      onClick={deleteTodoItem}
    >
      <img src={deleteSignImage} alt="DELETE BUTTON" />
    </button>
  );
};

export default DeleteButton;
