'use strict';
var axios = require('axios');

module.exports = function (test, cb) {

  axios('https://api.npms.io/v2/search?q=keywords:apparena-electrode-react-component')
    .then(function (result) {
      var data = result.data.results;
      var choices = data.map((component) => {
        return {name: component.package.name, version: component.package.version}
      });

      cb(null, choices);
    }).catch(cb);
};
