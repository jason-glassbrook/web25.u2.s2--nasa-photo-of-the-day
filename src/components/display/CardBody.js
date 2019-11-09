/// external modules ///
import React from "react";

/***************************************
  COMPONENTS
***************************************/
export function CardBody (props) {
  return (
    <div className="card-body">
      {props.children}
    </div>
  );
}

/**************************************/
export default CardBody;