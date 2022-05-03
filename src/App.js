import React from "react";
import NavBar from "./components/NavBar";
import AddTodoItem from "./components/AddTodoItem";
import TodoItem from "./components/TodoItem";
import TodoList from "./todos/TodoList";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar
        username="JOHNHALSEY"
        profileImage="https://images.unsplash.com/photo-1618828665347-d870c38c95c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFnb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
      <TodoList />
    </>
  );
};
export default App;
