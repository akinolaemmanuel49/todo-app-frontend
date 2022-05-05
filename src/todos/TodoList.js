import { baseUrl } from "../constants";
import AddTodoItem from "../components/AddTodoItem";
import NavBar from "../components/NavBar";
import TodoItem from "../components/TodoItem";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getJWTExpireTime } from "../utils";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const navigate = useNavigate();

  const getUserProfile = () => {
    axios
      .get(baseUrl + "/users/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setUsername(res.data.username);
        setProfileImage(res.data.profileImage);
      });
  };
  const getTodoItems = () => {
    axios
      .get(baseUrl + "/todos", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setTodoItems(res.data);
      });
  };
  useEffect(() => {
    getTodoItems();
    getUserProfile();
  }, [todoItems]);
  return (
    <>
      <NavBar username={username} profileImage={profileImage} />
      <AddTodoItem />
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoId={todoItem.id}
          todoContent={todoItem.todo}
          isComplete={todoItem.done}
        />
      ))}
    </>
  );
};

export default TodoList;
