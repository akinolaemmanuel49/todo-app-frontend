import "./DoneButton.css";
import checkmarkImage from "../images/checkmark.svg";
import checkmarkImageHidden from "../images/checkmarkHidden.svg";

const DoneButton = (props) => {
  return (
    <button className="todoDoneButton" onClick={props.onClick}>
      <img
        className="checkmarkImage"
        src={props.isDone ? checkmarkImage : checkmarkImageHidden}
        alt="checkmark"
      ></img>
    </button>
  );
};

export default DoneButton;
