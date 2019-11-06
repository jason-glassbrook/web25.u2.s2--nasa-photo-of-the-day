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
  "url"      : function ({api_key}) {
    `${this["base_url"]}?api_key=${api_key}`
  },
};
