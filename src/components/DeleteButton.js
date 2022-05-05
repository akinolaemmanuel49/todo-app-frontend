import axios from "axios";

import { baseUrl } from "../constants";
import deleteSignImage from "../images/deleteSign.svg";
import "./DeleteButton.css";

const DeleteButton = (props) => {
  const deleteRequest = () => {
    axios
      .delete(baseUrl + "/todos/" + props.todoId, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then(() => {});
  };
  const handleClick = (e) => {
    deleteRequest();
  };
  return (
    <button className="todoDeleteItemButton" onClick={handleClick}>
      <img src={deleteSignImage} alt="DELETE BUTTON" />
    </button>
  );
};

export default DeleteButton;
