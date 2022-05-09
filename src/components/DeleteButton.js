import axios from "axios";

import API_URL from "../utils/constants";
import deleteSignImage from "../images/deleteSign.svg";
import "./DeleteButton.css";
import authHeader from "../services/auth-header";
import UserService from "../services/user.service";

const DeleteButton = (props) => {
  // const deleteRequest = () => {
  //   axios
  //     .delete(API_URL + "/todos/" + props.todoId, {
  //       headers: {
  //         Authorization: authHeader(),
  //       },
  //     })
  //     .then(() => {});
  // };

  const handleClick = (e) => {
    // deleteRequest();
    UserService.deleteTodo(props.todoId);
  };

  return (
    <button className="todoDeleteItemButton" onClick={handleClick}>
      <img src={deleteSignImage} alt="DELETE BUTTON" />
    </button>
  );
};

export default DeleteButton;
