var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('default', function() {
  gulp.src('./wisteria.css')
    .pipe($.csslint('.csslintrc'))
    .pipe($.csslint.reporter())
    .pipe($.csslint.failReporter())
    .pipe($.csscomb())
    .pipe(gulp.dest('./'))
    .pipe($.rename({suffix: '.min'}))
    .pipe($.csso())
    .pipe(gulp.dest('./public/css/'));
});

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

gulp.task('watch', function() {
  gulp.watch('./*.css', ['default']);
});
