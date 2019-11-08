import React from "react";

export function Photo (props) {
  return (
    <img className="photo" src={props.url} alt={props.alt}/>
  );
}

export default Photo;
