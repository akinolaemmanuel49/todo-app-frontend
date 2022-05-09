import axios from "axios";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import authHeader from "../services/auth-header";
import API_URL from "../utils/constants";
import AddTodoItem from "../components/AddTodoItem";
import NavBar from "../components/NavBar";
import TodoItem from "../components/TodoItem";
import AuthService from "../services/auth.service";
import { isTokenExpired } from "../utils/isTokenExpired";

const TodoList = (props) => {
  const [todoItems, setTodoItems] = useState([]);
  // const navigate = useNavigate();

  // const refreshTokenAPI = () => {
  //   axios
  //     .get(API_URL + "/users/refresh", { headers: authHeader() })
  //     .then((res) => {
  //       localStorage.setItem("accessToken", res.data.access_token);
  //       console.log("accessTokenRefreshed:", res.data.access_token);
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  const getTodoList = () => {
    return axios
      .get(API_URL + "/todos", { headers: authHeader() })
      .then((res) => {
        localStorage.setItem("todoList", JSON.stringify(res.data));
        setTodoItems(res.data);
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  };
  useEffect(() => {
    const renderInterval = setInterval(() => {
      getTodoList();
    }, 1000);
    if (AuthService.refreshTokenAPI()) {
      window.location.reload();
    }
    return () => clearInterval(renderInterval);
  }, []);

  if (
    !isTokenExpired(localStorage.getItem("accessToken")) &&
    !isTokenExpired(localStorage.getItem("refreshToken"))
  ) {
    return (
      <>
        <NavBar />
        <AddTodoItem />
        {todoItems.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            todo={todoItem.todo}
            done={todoItem.done}
          />
        ))}
      </>
    );
  } else if (
    isTokenExpired(localStorage.getItem("accessToken")) &&
    isTokenExpired(localStorage.getItem("refreshToken"))
  ) {
    AuthService.signout();
  }
};

export default TodoList;
