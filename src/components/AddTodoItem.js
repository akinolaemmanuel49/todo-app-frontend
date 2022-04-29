import "./AddTodoItem.css";
import plusSignImage from "../images/plusSign.svg";

const AddTodoItem = () => {
  return (
    <div className="addTodoItemOuter">
      <div className="addTodoItemInner">
        <input className="addTodoItemInput" type="text" />
        <button className="addTodoItemButton">
          <img src={plusSignImage} alt="ADD" />
        </button>
      </div>
    </div>
  );
};

export default AddTodoItem;
