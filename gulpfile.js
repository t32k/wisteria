var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require("browser-sync");

gulp.task('test', function() {
  gulp.src('./wisteria.css')
    .pipe($.csslint('.csslintrc'))
    .pipe($.csslint.reporter())
    .pipe($.csslint.failReporter());
});

gulp.task('report', function () {
  gulp.src('./wisteria.css')
    .pipe($.stylestats());
});

gulp.task('browser-sync', function() {
  browserSync({
    server: { baseDir: "./docs/" }
  });
});

gulp.task('build', function() {
  gulp.src('./wisteria.css')
    .pipe($.csslint('.csslintrc'))
    .pipe($.csslint.reporter())
    .pipe($.csscomb())
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest('./docs/css/'))
    .pipe($.rename({suffix: '.min'}))
    .pipe($.csso({banner:}))
    .pipe(gulp.dest('./'));
});

gulp.task('default',  ['browser-sync'], function() {
  gulp.watch(['wisteria.css', '*/**/custom.css', '*/**/index.html'], ['build', browserSync.reload]);
});