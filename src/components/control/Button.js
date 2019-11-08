import React from "react";

export function Button (props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
