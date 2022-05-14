import { useState, useEffect } from "react";

import TodoService from "../services/todo.service";
import AddTodoItem from "../components/AddTodoItem";
import TodoList from "../components/TodoList";
import AuthService from "../services/auth.service";
import NavBar from "../components/NavBar";
import { isTokenExpired } from "../utils/isTokenExpired";

const AllTodos = () => {
  const [loadedTodoList, setLoadedTodoList] = useState([]);
  useEffect(() => {
    if (!isTokenExpired(localStorage.getItem("accessToken"))) {
      AuthService.currentUserProfile()
        .then((res) => {
          if (res.data.username) {
            TodoService.fetchTodoList().then((res) => {
              const todoList = [];
              for (const key in res.data) {
                const todoItem = {
                  id: key,
                  ...res.data[key],
                };
                todoList.push(todoItem);
              }
              setLoadedTodoList(todoList);
            });
          }
        })
        .catch((err) => {
          console.error(err);
          window.location.replace("/signin");
        });
    } else if (!isTokenExpired(localStorage.getItem("refreshToken"))) {
      AuthService.refreshTokenAPI();
    } else {
      window.location.replace("/signin");
    }
  }, []);
  return (
    <>
      <NavBar />
      <section>
        <AddTodoItem />
        <TodoList todoList={loadedTodoList} />
      </section>
    </>
  );
};
export default AllTodos;
