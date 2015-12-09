var      gulp = require('gulp'),
     imagemin = require('gulp-imagemin'),
     pngquant = require('imagemin-pngquant'),
  browserSync = require('browser-sync'),
            $ = require('../gulpconfig').images;



gulp.task('moveImages', function(){
 return gulp.src($.src + $.fileType)
            .pipe(gulp.dest($.build));
});

gulp.task('reloadMoveImages', ['moveImages'], browserSync.reload);

gulp.task('optimImages', ['moveImages'], function(){
  return gulp.src($.build + $.fileType)
            .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant({quality: '70', speed: 1})] }))
            .pipe(gulp.dest($.dist));
});
