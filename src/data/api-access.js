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
  "url" : function ({api_key}) {
    `${this["base_url"]}?api_key=${api_key}`
  },
};
