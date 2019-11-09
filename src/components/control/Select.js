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
    for (let n = data.min ; n <= data.max ; n += data.step) {
      data.list.push ({
        "value"   : n,
      });
    }
  }
  /// create options ///
  return (
    <>
      {data.list.map ((el , i) => (
        <option key={el.value} value={el.value}>
          {(el.content === undefined) ? (data.build (el.value)) : (el.content)}
        </option>
      ))}
    </>
  );
}

/***************************************
  STATES
***************************************/
const init = {
  "value" : "",
};

const handleChange = (setValue) => (event) => {
  setValue (event.target.value);
};

/***************************************
  COMPONENTS
***************************************/
export function Select (props) {
  /// internal states ///
  const [value , setValue] = React.useState (
    (props.value !== undefined) ? props.value : init.value
  );

  /// external effects ///
  React.useEffect (() => {
    /* TESTING */ console.log (value);
    props.onChange (value);
  } , [props.onChange , value])

  /// component ///
  return (
    <select
      className="select"
      onChange={handleChange (setValue)}
      value={value} /* this doesn't appear in browser? */
    >
      <option className="select-title" value="">{props.data.name}</option>
      {buildOptions (props.data)}
    </select>
  );
}

/**************************************/
export default Select;
