'use strict';

var fs     = require('fs'),
    chalk  = require('chalk');


module.exports = function(render, file){

  function GruntConnector(grunt){
    var options, desc, css;

    desc = 'Render ' + file + ' with options';

    function log(msg) {
      if (!options.silent) {
        grunt.log.writeln(msg);
      }
    }

    grunt.registerMultiTask('atomicity', desc, function(){
      // set a default of not making the rendering silent
      options = this.options({ silent: false });

      // render the CSS to a string with the options hash
      css = render(options);

      // write the CSS to file and print a log statement
      fs.writeFileSync(this.data.dest, css);
      log('File ' + chalk.cyan(this.data.dest) + ' created.');
    });

  };

  return GruntConnector;

};
