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
  "photo" : {
    "title" : "nothing to see here"
  },
};

const fetchPhoto = (query , setPhoto) => {
  // let data = {};
  //
  axios
    .get ((() => {
      console.log ("--- fetching photo... ---"); /* --- i just wanted this console.log nested like the others */
      return (APOD_API.query_url (query));
    })())
    .then ((response) => {
      console.log ("--- success! ---");
      // /* TESTING */ console.log (response);
      const data = response.data;
      // /* TESTING */ console.log (data);
      setPhoto (data);
    })
    .catch ((error) => {
      console.log ("--- failure! ---");
      const data = {
        ...init.photo,
        "error" : error,
      };
      // /* TESTING */ console.log (data);
      setPhoto (data);
    })
    .finally (() => {
      console.log ("--- done. ---");
    })
  // //
  // return (data);
}

/***************************************
  COMPONENTS
***************************************/
function App () {
  const [query , setQuery] = React.useState (init.query);
  const [photo , setPhoto] = React.useState (init.photo);
  //
  React.useEffect (() => {
    fetchPhoto (query , setPhoto);
    // /* TESTING */ console.log (photo); /* --- why doesn't this show the current state? --- */
  } , [query.date]);
  //
  return (
    <div className="App">
      {/*<p>Read through the instructions in the README.md file to build your NASA app! Have fun 🚀!</p>*/}
      <img className="APOD" src={photo.hdurl} alt={photo.title}/>
    </div>
  );
}

export default App;
