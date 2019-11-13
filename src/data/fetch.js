import axios from "axios";

/*******************************************************************************
  FETCH
*******************************************************************************/

export const fetchData = (api , initData) => (query , setData) => {
  axios
    .get ((() => {
      console.log ("--- fetching data... ---"); /* --- i just wanted this console.log nested like the others */
      return (api.query_url (query));
    })())
    .then ((response) => {
      console.log ("--- success! ---");
      /* TESTING */ console.log (response);
      const data = response.data;
      /* TESTING */ console.log (data);
      setData (data);
    })
    .catch ((error) => {
      console.log ("--- failure! ---");
      const data = {
        ...initData,
        "error" : error,
      };
      /* TESTING */ console.log (data);
      setData (data);
    })
    .finally (() => {
      console.log ("--- done. ---");
    })
}
