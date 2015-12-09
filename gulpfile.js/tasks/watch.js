
var      gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
        watch = require('gulp-watch'),
            $ = require('../gulpconfig');


gulp.task('watchFiles', ['inject', 'moveFonts', 'moveImages' ], function () {

    //initialize browsersync
    browserSync.init($.browserSync);

    watch($.watch.sass, function () {
            gulp.start('compileSass');
    });
    watch($.watch.js, function () {
            gulp.start('inject');
    });
    watch($.watch.themeFiles, function () {
            gulp.start('inject');
    });
    watch($.watch.images, function () {
            gulp.start('reloadMoveImages');
    });

});
