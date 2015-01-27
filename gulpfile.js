var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var csslint = require('gulp-csslint');
var stylestats = require('gulp-stylestats');
var csso = require('gulp-csso');


gulp.task('csscomb', function() {
  return gulp.src('css/wisteria.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./build/css'));
});
gulp.task('test', function() {
  gulp.src('css/wisteria.css')
    .pipe(csslint('.csslintrc'))
    .pipe(csslint.reporter())
    .pipe(csslint.failReporter());
});
gulp.task('stylestats', function () {
  gulp.src('css/wisteria.css')
    .pipe(stylestats());
});
gulp.task('csso', function() {
  return gulp.src('css/wisteria.css')
    .pipe(csso())
    .pipe(gulp.dest('css/wisteria.min.css'));
});