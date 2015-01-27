var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('default', function () {
  return gulp.src('src/app.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('styles', function() {
  return gulp.src('css/wisteria.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./build/css'));
});

var csslint = require('gulp-csslint');

gulp.task('test', function() {
  gulp.src('css/wisteria.css')
    .pipe(csslint('.csslintrc'))
    .pipe(csslint.reporter())
    .pipe(csslint.failReporter());
});