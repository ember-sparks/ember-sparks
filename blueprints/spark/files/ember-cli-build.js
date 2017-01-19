/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {

  var app = new EmberAddon(defaults, {

  });

  /*
   * We want to be able to read the README from our app:
   */
  var extraAssets = new Funnel('./', {
    srcDir: '/',
    include: ['README.md'],
    destDir: '/'
  });

  return app.toTree(extraAssets);
};
