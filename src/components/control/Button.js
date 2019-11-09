/// external modules ///
import React from "react";

/***************************************
  COMPONENTS
***************************************/
export function Button ({ onClick , children }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

/**************************************/
export default Button;
