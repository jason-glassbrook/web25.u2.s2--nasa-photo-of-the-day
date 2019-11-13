/*******************************************************************************
  API.NASA.GOV - APIs
*******************************************************************************/

export class API {
  constructor ({base_url , params}) {
    this.base_url = base_url;
    this.params = params;
  }

  query_params_url (params) {
    /// get _real_ params ///
    const real_param_names = Object.keys (this["params"]);
    // /* TESTING */ console.log (real_param_names);

    /// get _good_ params from input ///
    const good_param_names = (Object.keys (this["params"])).filter (
      (name) => (real_param_names.includes (name))
      );
    // /* TESTING */ console.log (good_param_names);

    /// create params url string ///
    const params_url = (
      good_param_names
        .map ((name , i) => {
          const first = ((i === 0) ? "?" : "");
          
          // /* TESTING */ console.log (name);
          // /* TESTING */ console.log (params[name]);
          const value = this.params[name].format (params[name]);
          // /* TESTING */ console.log (value);
          
          return (`${first}${name}=${value}`);
        })
        .join ("&")
    );
    // /* TESTING */ console.log (params_url);
    
    ///
    return (params_url);
  }

  query_url (params) {
    /// create full url ///
    const full_url = (
      `${this.base_url}${this.query_params_url (params)}`
    );
    // /* TESTING */ console.log (full_url);

    ///
    return (full_url);
  }
}

export const APOD_API = new API({
  "base_url" : "https://api.nasa.gov/planetary/apod",
  "params" : {
    "api_key" : {
      "format" : (x) => (x),
    },
    "date" : {
      "format" : (x) => {
        const datetime = x.toISOString ();
        const stop = datetime.indexOf ("T");
        const date = datetime.slice (0 , stop);
        return (date);
      },
    },
    "hd" : {
      "format" : (x) => (x ? "True" : "False"),
    },
  },
});
