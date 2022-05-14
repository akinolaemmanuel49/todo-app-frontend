import "./DoneButton.css";
import checkmarkImage from "../images/checkmark.svg";
import checkmarkImageHidden from "../images/checkmarkHidden.svg";

const DoneButton = ({ todoId, isDone, onClickCallback }) => {
  return (
    <button
      className="todoDoneButton"
      onClick={(e) => onClickCallback(e, todoId)}
    >
      <img
        className="checkmarkImage"
        src={isDone ? checkmarkImage : checkmarkImageHidden}
        alt="checkmark"
      ></img>
    </button>
  );
};

export default DoneButton;
