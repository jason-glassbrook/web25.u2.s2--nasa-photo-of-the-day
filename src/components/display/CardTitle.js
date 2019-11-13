/// external modules ///
import React from "react";

/***************************************
  COMPONENTS
***************************************/
export function CardTitle (props) {
  return (
    <h3 className="card-title">{props.children}</h3>
  );
}

/**************************************/
export default CardTitle;