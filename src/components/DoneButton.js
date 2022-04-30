import { useState } from "react";
import axios from "axios";

import { baseUrl } from "../constants";
import "./DoneButton.css";
import checkmarkImage from "../images/checkmark.svg";
import checkmarkImageHidden from "../images/checkmarkHidden.svg";

const DoneButton = (props) => {
  const getCurrentState = () => {
    axios.get(baseUrl + "/todos/" + props.todoId + "/state").then((res) => {
      setIsComplete(res.data);
    });
  };
  const [isComplete, setIsComplete] = useState(getCurrentState);
  const handleClick = () => {
    axios.get(baseUrl + "/todos/" + props.todoId + "/toggle").then((res) => {
      setIsComplete(res.data);
    });
  };

  return (
    <button className="todoDoneButton" onClick={handleClick}>
      <img
        className="checkmarkImage"
        src={isComplete ? checkmarkImage : checkmarkImageHidden}
        alt="checkmark"
      ></img>
    </button>
  );
};

export default DoneButton;
