'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('default', function() {
  return gulp.src('jetbrains/**/*')
    .pipe(zip('jetbrains-react.jar'))
    .pipe(gulp.dest('.'));
});
