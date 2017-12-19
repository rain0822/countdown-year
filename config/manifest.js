/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "countdown-year",
    short_name: "countdown-year",
    description: "",
    start_url: "/countdown-year",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
    ],
    apple: {
        statusBarStyle: 'black-translucent'
    },
    ms: {
      tileColor: '#fff'
    }
  };
}