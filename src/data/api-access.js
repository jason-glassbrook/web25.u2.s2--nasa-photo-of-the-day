/*******************************************************************************
  API ACCESS
*******************************************************************************/

export const account = {
  "email"   : "jason.glassbrook+data.gov@gmail.com",
  "id"      : "6a491d63-a4dc-4184-9ae0-9f4be4979efe",
  "api_key" : "e2mUdS5B7kEgbpDMeIaWZipCjsnxyzLU0TRhxpbl",
};

export const api = {
  "base_url" : "https://api.nasa.gov/planetary/apod",
  "options" : {
    "api_key" : {
      "format" : (x) => (x),
      "to" : function ({api_key}) {
        return (`api_key=${this.format (api_key)}`);
      },
    },
    "date" : {
      "format" : (x) => {
        const datetime = x.toISOString ();
        const stop = datetime.indexOf ("T");
        const date = datetime.slice (0 , stop);
        return (date);
      },
      "to" : function ({date}) {
        return (
          `date=${this.format (date)}`
        );
      },
    },
    "hd" : {
      "format" : (x) => (x ? "True" : "False"),
      "to" : function ({hd}) {
        return (`hd=${this.format (hd)}`);
      },
    },
  },
  "options_url" : function (options) {
    // get _real_ options
    const real_option_names = Object.keys (this["options"]);
    const good_option_names = (Object.keys (this["options"])).filter (
      (name) => (real_option_names.includes (name))
    );
    // create options url string
    const options_url = (
      good_option_names
      .map ((name , i) => {
        const first = ((i === 0) ? "?" : "");
        const value = this["options"][name].format (options[name]);
        return (`${first}${name}=${value}`);
      })
      .join ("&")
    );
    //
    return (options_url);
  },
  "url" : function (options) {
    return (`${this["base_url"]}${this["options_url"] (options)}`);
  },
};
