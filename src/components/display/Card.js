/// external modules ///
import React from "react";

/***************************************
  COMPONENTS
***************************************/
export function Card (props) {
  return (
    <div className={`card ${props.subtype}`}></div>
  );
}

/**************************************/
export default Card;
