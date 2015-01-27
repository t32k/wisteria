var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('test', function() {
  gulp.src('css/wisteria.css')
    .pipe($.csslint('.csslintrc'))
    .pipe($.csslint.reporter())
    .pipe($.csslint.failReporter());
});
gulp.task('csso', function() {
  return gulp.src('css/wisteria.css')
    .pipe($.csso())
    .pipe(gulp.dest('css/wisteria.min.css'));
});
gulp.task('csscomb', function() {
  return gulp.src('./css/wisteria.css')
    .pipe($.csscomb())
    .pipe(gulp.dest('./css'));
});
gulp.task('stylestats', function () {
  gulp.src('css/wisteria.css')
    .pipe($.stylestats());
});