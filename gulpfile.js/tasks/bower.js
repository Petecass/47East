var        gulp = require('gulp'),
ghPages = require('gulp-gh-pages'),
              $ = require('../gulpconfig').bower;





gulp.task('move-components', function(){
  return gulp.src($.vendorFiles)
        .pipe(gulp.dest($.jsVendor)); 
});




gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());

});
