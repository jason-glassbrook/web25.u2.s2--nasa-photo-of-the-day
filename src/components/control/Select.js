/// external modules ///
import React from "react";

/***************************************
  HELPERS
***************************************/
function buildOptions (data) {
  /// create data.build function if missing ///
  if (data.build === undefined) {
    data.build = (x) => (x.toString ());
  }
  /// create data.list if missing ///
  if (data.list === undefined) {
    data.list = [];
    for (const n = data.min ; n <= data.max ; n += data.step) {
      data.list.push ({
        "value"   : n,
      });
    }
  }
  /// create options ///
  return (
    <>
      {options.list.map ((el , i) => (
        <option value={el.value}>
          {(el.content === undefined) ? (data.build (el.value)) : (el.content)}
        </option>
      ))}
    </>
  );
}

/***************************************
  COMPONENTS
***************************************/
export function Button (props) {
  return (
    <select className="select" onChange={props.onChange} value={props.value || ""}>
      <option className="select-title" value="">{props.data.name}</option>
      {buildOptions (props.data)}
    </select>
  );
}

/**************************************/
export default Button;
