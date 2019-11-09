/// external modules ///
import React from "react";

/// internal modules ///
import Select from "./Select";
import Button from "./Button";

/***************************************
  STATES
***************************************/
const init = {
  "year"  : "",
  "month" : "",
  "day"   : "",
  "going" : false,
};

const handleChange = (setX) => (x) => {
  setX (x);
};

const handleClick = (setStatus) => () => {
  setStatus (true);
}

const submit = (send , message) => {
  try {
    /* TESTING */ console.log ("--- submitting... ---");
    /* TESTING */ console.log (message);
    send (message);
    /* TESTING */ console.log ("--- success! ---");
  }
  catch (error) {
    /* TESTING */ console.log ("--- failure! ---");
    /* TESTING */ console.log (error);
  }
  finally {
    /* TESTING */ console.log ("--- done. ---");
  }
}

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
  const [going , setGoing] = React.useState (
    init.going
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

  /// external effects ///
  React.useEffect (() => {
    /* TESTING */ console.log (`was clicked: ${going}`);
    if (going) {
      submit (props.onSubmit , {
        "date"  : (new Date (`${year}-${month}-${day}`)),
        "year"  : year,
        "month" : month,
        "day"   : day,
      });
      setGoing (false);
    }
  } , [going]);

  /// component ///
  return (
    <div className="date-picker">
      <Select
        key="year"
        className="year"
        value={year}
        data={{
          "name"  : "year",
          "min"   : 2000,
          "max"   : 2019,
          "step"  : 1,
          "build" : (n) => (n.toString ().padStart (4 , "0")),
        }}
        onChange={handleChange (setYear)}
      />
      <Select
        key="month"
        className="month"
        value={month}
        data={{
          "name"  : "month",
          "min"   : 1,
          "max"   : 12,
          "step"  : 1,
          "build" : (n) => (n.toString ().padStart (2 , "0")),
        }}
        onChange={handleChange (setMonth)}
      />
      <Select
        key="day"
        className="day"
        value={day}
        data={{
          "name"  : "day",
          "min"   : 1,
          "max"   : 31,
          "step"  : 1,
          "build" : (n) => (n.toString ().padStart (2 , "0")),
        }}
        onChange={handleChange (setDay)}
      />
      <Button onClick={handleClick (setGoing)}>Go</Button>
    </div>
  );
}

/**************************************/
export default DatePicker;
