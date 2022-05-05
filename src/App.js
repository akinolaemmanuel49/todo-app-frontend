import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./todos/TodoList";
import SignInView from "./users/SignInView";
import SignUpView from "./users/SignUpView";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInView />} />
        <Route path="/signup" element={<SignUpView />} />
        <Route path="/" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
