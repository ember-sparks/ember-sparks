/* jshint node: true */
'use strict';

/*
 * PostCSS plugins:
 */
var nesting = require('postcss-nesting');
var autoprefixer = require('autoprefixer');

module.exports = {
  name: 'ember-sparks',

  options: {
    cssModules: {
      plugins: [
        nesting(),
        autoprefixer('last 2 versions'),
      ]
    },
  },

  
  /*
   * This would ideally only be included for the dummy app:
   */
  /*
  included(app) {
    this._super.included.apply(this, arguments);

    this.import(app.bowerDirectory + '/markdown-it/dist/markdown-it.js');
  },
  */

};
