/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {

  var app = new EmberAddon(defaults, {

  });

  /*
   * We want to be able to read the README & package.json from our app
   * (for metadata):
   */
  var extraAssets = new Funnel('./', {
    srcDir: '/',
    include: [
      'README.md',
      'package.json',
    ],
    destDir: '/'
  });

  return app.toTree(extraAssets);
};
