/// external modules ///
import React from "react";
import { Date } from "core-js";

/// internal modules ///
import { fetchData } from "./data/fetch";
import { APOD_API } from "./data/api.nasa.gov/api";
import account from "./data/api.nasa.gov/account";

/// styles ///
import "./App.css";

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

const fetchPhoto = fetchData (APOD_API , init.photo);

/***************************************
  COMPONENTS
***************************************/
export function App () {
  const [query , setQuery] = React.useState (init.query);
  const [photo , setPhoto] = React.useState (init.photo);
  //
  React.useEffect (() => {
    fetchPhoto (query , setPhoto);
    // /* TESTING */ console.log (photo); /* --- why doesn't this show the current state? --- */
  } , [query]);
  //
  return (
    <div className="App">
      {/*<p>Read through the instructions in the README.md file to build your NASA app! Have fun 🚀!</p>*/}
      <img className="APOD" src={photo.hdurl} alt={photo.title}/>
    </div>
  );
}

export default App;
