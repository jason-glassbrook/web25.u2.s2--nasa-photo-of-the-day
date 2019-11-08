import React from "react";

export function Card (props) {
  return (
    <div className={`card ${props.subtype}`}></div>
  );
}

export default Card;
