import "./DoneButton.css";
import checkmarkImage from "../images/checkmark.svg";

const DoneButton = () => {
  return (
    <button className="todoDoneButton">
      <img
        className="checkmarkImage"
        src={checkmarkImage}
        alt="checkmark"
      ></img>
    </button>
  );
};

export default DoneButton;
