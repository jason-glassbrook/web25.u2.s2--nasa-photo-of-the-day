/// external modules ///
import React from "react";

/// internal modules ///
import Photo from "./Photo";

/***************************************
  COMPONENTS
***************************************/
export function CardImage (props) {
  return (
    <Photo
      className="card-image"
      url={props.url}
      title={props.title}
    />
  );
}

/**************************************/
export default CardImage;