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
    "date" : (new Date ()),
    "hd" : true,
  },
  "photo" : {},
};

const fetchPhoto = async (query) => {
  let data = {};
  //
  await axios
    .get ((() => {
      console.log ("--- fetching photo... ---");
      return (APOD_API.query_url (query));
    })())
    .then ((response) => {
      console.log ("--- success! ---");
      data = response.data;
      console.log (data);
    })
    .catch ((error) => {
      console.log ("--- failure! ---");
      data = { "error" : error };
      console.log (data);
    })
    .finally (() => {
      console.log ("--- done. ---");
    })
  //
  return (data);
}

/***************************************
  COMPONENTS
***************************************/
function App () {
  const [query , setQuery] = React.useState (init.query);
  const [photo , setPhoto] = React.useState (init.photo);
  //
  React.useEffect (() => {
    const newPhoto = fetchPhoto (query);
    if (newPhoto.error === undefined) {
      setPhoto (newPhoto);
    }
  } , [query.date]);
  //
  return (
    <div className="App">
      {/*<p>Read through the instructions in the README.md file to build your NASA app! Have fun 🚀!</p>*/}
    </div>
  );
}

export default App;
