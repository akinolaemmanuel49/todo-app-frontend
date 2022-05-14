import axios from "axios";
import { useState } from "react";

import "./AddTodoItem.css";
import plusSignImage from "../images/plusSign.svg";
import authHeader from "../services/auth-header";
import API_URL from "../utils/constants";

const AddTodoItem = () => {
  const [todo, setTodo] = useState("");

  const postTodo = () => {
    axios.post(API_URL + "/todos", { todo: todo }, { headers: authHeader() });
  };

  const handleAddTodoAction = (e) => {
    e.preventDefault();
    postTodo();
    window.location.replace("/");
  };
  return (
    <div className="addTodoItemOuter">
      <div className="addTodoItemInner">
        <input
          className="addTodoItemInput"
          type="text"
          maxLength={64}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodoAction(e);
            }
          }}
        />
        <button className="addTodoItemButton" onClick={handleAddTodoAction}>
          <img src={plusSignImage} alt="ADD" />
        </button>
      </div>
    </div>
  );
};

export default AddTodoItem;
