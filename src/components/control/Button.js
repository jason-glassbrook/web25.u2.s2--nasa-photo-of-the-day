/// external modules ///
import React from "react";

/***************************************
  COMPONENTS
***************************************/
export function Button (props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

/**************************************/
export default Button;
