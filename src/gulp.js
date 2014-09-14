'use strict';

var stream = require('stream'),
    es     = require('event-stream'),
    util   = require('util'),
    Vinyl  = require('vinyl');


module.exports = function(render, file){

  function GulpSrc(opts){
    /* jshint validthis:true */
    if (!(this instanceof GulpSrc)){
      return new GulpSrc(opts);
    }

    stream.Readable.call(this, { objectMode : true });

    this.opts = opts || {};
    this.filePath = this.opts.file || file;
  }
  util.inherits(GulpSrc, stream.Readable);

  GulpSrc.prototype._read = function(){
    var vinyl = new Vinyl({
      path: this.filePath,
      contents: new Buffer(render(this.opts))
    });

    this.push(vinyl);
    this.push(null);
  };


  var GulpThrough = function(opts){
    opts = opts || {};

    return es.map(function(file, callback){
      if (file.isNull()) {
        return callback(null, file);
      }
      if (file.isStream()){
        var Error = require('gulp-util').PluginError
        return callback(null, new Error('Streaming not supported!'));
      }

      var css = new Buffer(render(opts));
      file.contents = Buffer.concat([file.contents, css]);
      callback(null, file);
    });
  };


  return {
    src: GulpSrc,
    through: GulpThrough
  };
};
