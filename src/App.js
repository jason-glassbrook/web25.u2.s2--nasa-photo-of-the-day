import React from "react";
import axios from "axios";
import {APOD_API} from "./data/api.nasa.gov/api";
import account from "./data/api.nasa.gov/account";
import "./App.css";
import { Date } from "core-js";

/***************************************
  STATES
***************************************/
const init = {
  "query" : {
    "api_key" : account.api_key,
    "date" : Date.now (),
    "hd" : true,
  }
}

/***************************************
  COMPONENTS
***************************************/
function App () {
  const [query , setQuery] = React.useState (init.query);
  //
  return (
    <div className="App">
      {/*<p>Read through the instructions in the README.md file to build your NASA app! Have fun 🚀!</p>*/}
    </div>
  );
}

export default App;
