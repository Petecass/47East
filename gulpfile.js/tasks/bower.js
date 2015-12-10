var        gulp = require('gulp'),
deploy = require('gulp-deploy-git'),
              $ = require('../gulpconfig').bower;





gulp.task('move-components', function(){
  return gulp.src($.vendorFiles)
        .pipe(gulp.dest($.jsVendor)); 
});




gulp.task('deploy', function() {
  return gulp.src('dist/**/*')
    .pipe(deploy({
      repository: 'https://github.com/Petecass/47East.git',
      branches: ['gh-pages']

    }));
});
