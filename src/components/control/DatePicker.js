/// external modules ///
import React from "react";

/// internal modules ///
import Select from "./Select";
import Button from "./Button";

/***************************************
  STATES
***************************************/
const init = {
  "year" : "",
  "month" : "",
  "day" : "",
};

const handleChange = (setX) => (x) => {
  setX (x);
};

/***************************************
  COMPONENTS
***************************************/
export function DatePicker (props) {
  return (
    <div className="date-picker">
      <Select
        className="year"
        data={{
          "name" : "year",
          "min"  : 2000,
          "max"  : 2019,
          "step" : 1,
        }}
        onChange={(event) => {console.log (event.target.value)}}
      />
      <Select
        className="month"
        data={{
          "name" : "month",
          "min"  : 1,
          "max"  : 12,
          "step" : 1,
        }}
        onChange={(event) => {console.log (event.target.value)}}
      />
      <Select
        className="day"
        data={{
          "name" : "day",
          "min"  : 1,
          "max"  : 31,
          "step" : 1,
        }}
        onChange={(event) => {console.log (event.target.value)}}
      />
      <Button onClick={() => {}}>Go</Button>
    </div>
  );
}

/**************************************/
export default DatePicker;
