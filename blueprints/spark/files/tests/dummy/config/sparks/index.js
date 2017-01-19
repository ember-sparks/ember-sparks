'use strict';

var fs        = require('fs');
var path      = require('path');

var basename  = path.basename(module.filename);
var controls  = {};

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    var baseName = path.basename(file, '.js');
    var methodName = camelize(baseName);
    controls[methodName] = require('./' + file);
  });

module.exports = controls;
