/* jshint node: true */
'use strict';

/*
 * PostCSS plugins:
 */
var nesting = require('postcss-nesting');
var autoprefixer = require('autoprefixer');

module.exports = {
  name: 'ember-sparks',

  isDevelopingAddon: function() {
    return true;
  },

  options: {
    cssModules: {
      plugins: [
        nesting(),
        autoprefixer('last 2 versions'),
      ]
    },
  },

};
