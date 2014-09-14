/*
Example CSS module using `css-connector`
*/

'use strict';

var cssConnector, render, fs;

cssConnector = require('../');
fs = require('fs');


render = function(){
  return fs.readFileSync(__dirname + '/css/sample1.css');
}


module.exports = cssConnector(render, 'css-module.css');
