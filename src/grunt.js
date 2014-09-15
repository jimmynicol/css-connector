'use strict';

var fs     = require('fs'),
    chalk  = require('chalk'),
    inflec = require('inflection');


module.exports = function(render, file){

  return function(grunt){
    var options, desc, css, taskName;

    desc = 'Render ' + file + ' with options';

    function log(msg) {
      if (!options.silent) {
        grunt.log.writeln(msg);
      }
    }

    try {
      taskName = inflec.camelize(file.split('.')[0].replace('-','_'), true);
    } catch(e) {
      taskName = 'cssConnect';
    }

    grunt.registerMultiTask(taskName, desc, function(){
      // set a default of not making the rendering silent
      options = this.options({ silent: false });

      // render the CSS to a string with the options hash
      css = render(options);

      // write the CSS to file and print a log statement
      fs.writeFileSync(this.data.dest, css);
      log('File ' + chalk.cyan(this.data.dest) + ' created.');
    });

  };

};
