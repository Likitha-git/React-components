import "./Button.css";
import React from "react";

function Button(props) {
  return (
    <button className="custom-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
