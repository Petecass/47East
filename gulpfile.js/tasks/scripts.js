

var        gulp = require('gulp'),
         concat = require('gulp-concat'),
         uglify = require('gulp-uglify'),
        plumber = require('gulp-plumber'),
     sourcemaps = require('gulp-sourcemaps'),
         notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
              $ = require('../gulpconfig').js;

var errorHandler = function (errTitle) {
                      return plumber({
                        errorHandler: notify.onError({
                          // Customizing error title
                          title: errTitle || "Error running Gulp",
                          message: "Error: <%= error.message %>",
                        })
                      });
                    };

gulp.task('moveVendorScripts', function(){

  return gulp.src('./src/js/vendor/modernizr.js')
             .pipe(gulp.dest('./build/js/vendor/'));
});

gulp.task('moveJs', function() {
  gulp.src('./src/js/**/*.js', {base: './src'})
      .pipe(gulp.dest('build'));
});
