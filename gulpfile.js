// include the required packages.
var gulp = require('gulp');
var data = require('gulp-data');
var stylus = require('gulp-stylus');

// Get one .styl file and render
gulp.task('compile', function () {
  return gulp.src('./css/styl/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/'));
});

// Options
// Options compress
gulp.task('compress', function () {
  return gulp.src('./css/styl/main.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css/'));
});


// Default gulp task to run
gulp.task('default', ['compile', 'compress']);
