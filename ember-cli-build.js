/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

/*
 * PostCSS plugins:
 * (only for dummy app)
 */
var nesting = require('postcss-nesting');
var autoprefixer = require('autoprefixer');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  var app = new EmberAddon(defaults, {
    cssModules: {
      plugins: [
        nesting(),
        autoprefixer('last 2 versions'),
      ]
    }
  });

  return app.toTree();
};
