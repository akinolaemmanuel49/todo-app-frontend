import axios from "axios";
import { useState } from "react";

import "./AddTodoItem.css";
import plusSignImage from "../images/plusSign.svg";
import API_URL from "../utils/constants";
import authHeader from "../services/auth-header";

const AddTodoItem = () => {
  const [todoContent, setTodoContent] = useState("");

  const postTodoContent = () => {
    axios
      .post(
        API_URL + "/todos",
        { todo: todoContent },
        { headers: authHeader() }
      )
      .then(() => {
        setTodoContent("");
      });
  };
  const handleAddTodoItem = (e) => {
    e.preventDefault();
    postTodoContent();
  };
  return (
    <div className="addTodoItemOuter">
      <div className="addTodoItemInner">
        <input
          className="addTodoItemInput"
          type="text"
          maxLength={64}
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodoItem(e);
            }
          }}
        />
        <button className="addTodoItemButton" onClick={handleAddTodoItem}>
          <img src={plusSignImage} alt="ADD" />
        </button>
      </div>
    </div>
  );
};

export default AddTodoItem;
