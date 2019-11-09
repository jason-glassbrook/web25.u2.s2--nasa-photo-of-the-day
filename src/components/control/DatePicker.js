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
  /// internal states ///
  const [year , setYear] = React.useState (
    (props.year !== undefined) ? props.year : init.year
  );
  const [month , setMonth] = React.useState (
    (props.month !== undefined) ? props.month : init.month
  );
  const [day , setDay] = React.useState (
    (props.day !== undefined) ? props.day : init.day
  );

  /// internal effects ///
  React.useEffect (() => {
    /* TESTING */ console.log (`year: ${year}`);
  } , [year]);
  React.useEffect (() => {
    /* TESTING */ console.log (`month: ${month}`);
  } , [month]);
  React.useEffect (() => {
    /* TESTING */ console.log (`day: ${day}`);
  } , [day]);

  /// component ///
  return (
    <div className="date-picker">
      <Select
        key="year"
        className="year"
        value={year}
        data={{
          "name" : "year",
          "min"  : 2000,
          "max"  : 2019,
          "step" : 1,
        }}
        onChange={handleChange (setYear)}
      />
      <Select
        key="month"
        className="month"
        value={month}
        data={{
          "name" : "month",
          "min"  : 1,
          "max"  : 12,
          "step" : 1,
        }}
        onChange={handleChange (setMonth)}
      />
      <Select
        key="day"
        className="day"
        value={day}
        data={{
          "name" : "day",
          "min"  : 1,
          "max"  : 31,
          "step" : 1,
        }}
        onChange={handleChange (setDay)}
      />
      <Button onClick={() => {}}>Go</Button>
    </div>
  );
}

/**************************************/
export default DatePicker;
