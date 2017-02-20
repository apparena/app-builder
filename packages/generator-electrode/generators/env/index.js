'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.option('projectId', {
      type: Number,
      required: true,
      desc: 'App-Arena Project Id'
    });

    this.option('aaApiKey', {
      type: String,
      required: true,
      desc: 'App-Arena Api-Key'
    });
  },

  writing: function () {
    if (this.options.projectId && this.options.aaApiKey) {
      this.fs.copyTpl(
        this.templatePath('apparena.json'),
        this.destinationPath('config/apparena.json'),
        {
          projectId: this.options.projectId,
          aaApiKey: this.options.aaApiKey,
        }
      );
    }
  }
});
