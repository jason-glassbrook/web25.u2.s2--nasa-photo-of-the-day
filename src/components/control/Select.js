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
        <option value={el.value}>
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

const onChange = (setValue , nextEffect) => (event) => {
  setValue (event.target.value);
  if (nextEffect !== undefined) {
    nextEffect (event);
  }
};

/***************************************
  COMPONENTS
***************************************/
export function Select (props) {
  const [value , setValue] = React.useState (
    (props.value !== undefined) ? props.value : init.value
  );

  React.useEffect (() => {
    /* TESTING */ console.log (value);
  } , [value])

  return (
    <select
      className="select"
      onChange={onChange (setValue , props.onChange)}
      value={value} /* this doesn't appear in browser? */
    >
      <option className="select-title" value="">{props.data.name}</option>
      {buildOptions (props.data)}
    </select>
  );
}

/**************************************/
export default Select;
