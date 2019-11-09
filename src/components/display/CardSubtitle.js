/// external modules ///
import React from "react";

/***************************************
  COMPONENTS
***************************************/
export function CardSubtitle (props) {
  return (
    <h4 className="card-subtitle">{props.children}</h4>
  );
}

/**************************************/
export default CardSubtitle;