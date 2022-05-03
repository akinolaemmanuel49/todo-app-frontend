import { baseUrl } from "../constants";
import AddTodoItem from "../components/AddTodoItem";
import TodoItem from "../components/TodoItem";
import axios from "axios";
import { useState, useEffect } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);

  const getTodoItems = () => {
    axios.get(baseUrl + "/todos").then((res) => {
      setTodoItems(res.data);
    });
  };
  useEffect(() => {
    getTodoItems();
  }, [todoItems]);
  return (
    <>
      <AddTodoItem />
      {todoItems.map((todoItem) => (
        // <div className="todoItems" key={todoItem.id}>
        //   <TodoItem todoContent={todoItem.todo} />
        // </div>
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
