'use strict';

var gulp      = require('gulp'),
    cssModule = require('./css_module');


// Render CSS as the source stream
gulp.task('src', function(){
  cssModule
    .gulp.src()
    .pipe(gulp.dest('.'));
});


// Pipe an existing stream of CSS through the Gulp connector
gulp.task('pipe', function(){
  gulp.src(['./css/sample2.css'])
    .pipe(cssModule.gulp.through())
    .pipe(gulp.dest('.'));
});