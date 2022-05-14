import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <>
      {props.todoList.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoId={todoItem.id}
          todo={todoItem.todo}
          done={todoItem.done}
          todoList={props.todoList}
        />
      ))}
    </>
  );
};

export default TodoList;
