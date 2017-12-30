/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "2018 全台跨年直播演唱會",
    short_name: "2018 跨年演唱會",
    description: "演唱會",
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
