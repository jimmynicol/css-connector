'use strict';

var gulp      = require('gulp'),
    // mocha     = require('gulp-mocha'),
    jshint    = require('gulp-jshint'),
    stylish   = require('jshint-stylish'),
    util      = require('gulp-util');


gulp.task('lint', function() {
  gulp.src(['src/**/*.js', './*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish));
});
gulp.task('lint:watch', ['lint'], function(){
  gulp.watch(
    ['src/**/*.js', './*.js'],
    function(event){
      util.log('file changed:', util.colors.green(event.path));
      gulp.src(event.path)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
    }
  );
});