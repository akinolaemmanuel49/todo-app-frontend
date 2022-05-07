import { baseUrl } from "../constants";
import AddTodoItem from "../components/AddTodoItem";
import NavBar from "../components/NavBar";
import TodoItem from "../components/TodoItem";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { isTokenExpired } from "../utils";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const refreshToken = () => {
    axios
      .get(baseUrl + "/users/refresh", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("refreshToken"),
        },
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.access_token);
      });
  };
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
  if (!isTokenExpired(localStorage.getItem("accessToken"))) {
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
  } else if (!isTokenExpired(localStorage.getItem("refreshToken"))) {
    refreshToken();
    return <TodoList />;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default TodoList;
