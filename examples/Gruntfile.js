'use strict';

var cssModule = require('./css_module');


module.exports = function(grunt){

  grunt.initConfig({
    cssModule: {
      dev: {
        options: { silent: false },
        dest: __dirname + '/cssModule.css'
      }
    }
  });

  // register the cssModule task
  cssModule.grunt(grunt);

  grunt.registerTask('css', ['cssModule']);
};