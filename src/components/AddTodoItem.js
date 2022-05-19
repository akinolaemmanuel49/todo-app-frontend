import { useState } from "react";

import "./AddTodoItem.css";
import plusSignImage from "../images/plusSign.svg";
import TodoService from "../services/todo.service";

const AddTodoItem = (props) => {
  const [todo, setTodo] = useState("");

  const handleAddTodoAction = async (e) => {
    e.preventDefault();
    await TodoService.createTodo(todo);
    setTodo("");
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
