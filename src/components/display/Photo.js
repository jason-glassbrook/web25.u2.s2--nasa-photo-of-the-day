/// external modules ///
import React from "react";

/***************************************
  COMPONENTS
***************************************/
export function Photo (props) {
  return (
    <img className="photo" src={props.url} alt={props.title}/>
  );
}

/**************************************/
export default Photo;
