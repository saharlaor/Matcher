import React from "react";
import "./Counter.css";

function Counter(props) {
  return (
    <div className="Counter">
      <img src={props.img} alt={props.text} />
      <span>{props.text}</span>
    </div>
  );
}

export default Counter;
