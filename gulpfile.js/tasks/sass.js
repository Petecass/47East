
var        gulp = require('gulp'),
           sass = require('gulp-sass'),
           csso = require('gulp-csso'),
           minifyCss = require('gulp-minify-css'),
        plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create(),
     sourcemaps = require('gulp-sourcemaps'),
     autoprefix = require('gulp-autoprefixer'),
         notify = require('gulp-notify'),
         inject = require('gulp-inject'),
         uglify = require('gulp-uglify'),
         useref = require('gulp-useref'),
         series = require('stream-series'),
            iff = require('gulp-if'),
              $ = require('../gulpconfig').sass;

var errorHandler = function (errTitle) {
                      return plumber({
                        errorHandler: notify.onError({
                          // Customizing error title
                          title: errTitle || "Error running Gulp",
                          message: "Error: <%= error.message %>",
                        })
                      });
                    };


gulp.task('compileSass', function(){
  return gulp.src($.src)
             .pipe(errorHandler($.errorMessage))
             .pipe(sourcemaps.init())
             .pipe(sass())
             .pipe(autoprefix($.autoprefix))
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest($.build))
             .pipe(browserSync.stream());
});

gulp.task('html',  function() {
  return gulp.src('build/index.html')
             .pipe(useref())
             .pipe(iff('*.js', uglify()))
             .pipe(iff('*.css' , minifyCss()))
             .pipe(gulp.dest('dist'));
});

gulp.task('inject', ['compileSass', 'moveJs'], function(){
  var jQuery = gulp.src(['./bower_components/jquery/dist/jquery.js']);
  var foundationJs = gulp.src(['./bower_components/foundation-sites/dist/foundation.js']);
  var main = gulp.src(['./src/js/main.js']);
  var modernizr = './src/js/modernizr.js';
  var easing = gulp.src(['./src/js/jquery.easing.1.3.js']);

  gulp.src('./src/index.html')
      .pipe(inject(series(jQuery, foundationJs, easing, main), {read: false , relative: true}))
      .pipe(gulp.dest('./build'));
});
