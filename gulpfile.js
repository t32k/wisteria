var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('default', function() {
  gulp.src('css/wisteria.css')
    .pipe($.csscomb())
    .pipe(gulp.dest('css/'))
    .pipe($.rename({suffix: '.min'}))
    .pipe($.csso())
    .pipe(gulp.dest('css/'));
});

gulp.task('test', function() {
  gulp.src('./css/wisteria.css')
    .pipe($.csslint('.csslintrc'))
    .pipe($.csslint.reporter())
    .pipe($.csslint.failReporter());
});

gulp.task('report', function () {
  gulp.src('./css/wisteria.css')
    .pipe($.stylestats());
});