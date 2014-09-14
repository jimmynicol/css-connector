'use strict';

var gulp  = require('./src/gulp'),
    grunt = require('./src/grunt');

module.exports = function(render, file){

  if (!file){
    throw new Error('the connector requires a base file name');
  }

  return {
    file:    file,
    render:  render,
    gulp:    gulp(render, file),
    grunt:   grunt(render, file)
  };

};