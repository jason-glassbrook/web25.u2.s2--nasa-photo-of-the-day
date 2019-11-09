/// external modules ///
import React from "react";

/// internal modules ///
import Select from "./Select";
import Button from "./Button";

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
        onChange={() => {}}
      />
      <Select
        className="month"
        data={{
          "name" : "month",
          "min"  : 1,
          "max"  : 12,
          "step" : 1,
        }}
        onChange={() => {}}
      />
      <Select
        className="day"
        data={{
          "name" : "day",
          "min"  : 1,
          "max"  : 31,
          "step" : 1,
        }}
        onChange={() => {}}
      />
      <Button onClick={() => {}}>Go</Button>
    </div>
  );
}

/**************************************/
export default DatePicker;
