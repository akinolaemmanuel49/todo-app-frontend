import axios from "axios";
import { useState, useEffect } from "react";
import authHeader from "../services/auth-header";
import API_URL from "../utils/constants";
import AddTodoItem from "../components/AddTodoItem";
import NavBar from "../components/NavBar";
import TodoItem from "../components/TodoItem";
import AuthService from "../services/auth.service";
import { isTokenExpired } from "../utils/isTokenExpired";

const TodoList = (props) => {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = () => {
    return axios
      .get(API_URL + "/todos", { headers: authHeader() })
      .then((res) => {
        localStorage.setItem("todoList", JSON.stringify(res.data));
        setTodoList(res.data);
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

  if (!isTokenExpired(localStorage.getItem("accessToken"))) {
    return (
      <>
        <NavBar />
        <AddTodoItem todoList={todoList} />
        {todoList.map((todoItem) => (
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
