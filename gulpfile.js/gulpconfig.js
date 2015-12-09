
// customize per project

// directory naming conventions

var    themeName = '47-east',
             src = './src/',
           build = './build/',
         distDir = './dist/',
            dist = distDir + themeName + '/',
           bower = './bower_components/',
            sass = 'sass/',
           fonts = 'fonts/',
             img = 'images/',
              js = 'js/',
      bowerFiles = 'bowerFiles/';

var jsFiles = [
  // src + js + 'vendor/modernizr.js',
  src + js + 'vendor/fastclick.js',
  src + js + 'vendor/foundation.min.js',
  src + js + 'vendor/slick.js',
  src + js + 'main.js'
];


module.exports = {

  new : {
    src : src + '*.html',
    build : build,
    dist : dist,
    files : jsFiles
  },

  bower : {
    bowerDir : bower,
    jsVendor : src + js + 'vendor/',
    vendorFiles : [ bower + 'foundation/js/vendor/modernizr.js', bower + 'foundation/js/vendor/fastclick.js', bower + 'foundation/js/foundation.min.js', bower + 'slick-carousel/slick/slick.js']
  },

  sass : {
    src : src + sass + '**/*.sass',
    build : build + 'css',
    dist : dist + 'css',
    options: {
      includePaths:'./bower_components/foundation-sites/*.sass'
    },
    autoprefix : { browsers: ['> 3%', 'last 2 versions']},
    errorMessage : 'Problem running Sass',
  },

  js : {
    src : jsFiles,
    build : build + js,
    dist : dist + js,
    errorMessage : 'js errored'
  },

  browserSync : {
    server: {
      baseDir: './build',
      routes: {
        '/bower_components' : 'bower_components'
      }
    },
    logLevel: 'debug',
    tunnel: 'awesome',
    reloadDelay: 1000,
    reloadOnRestart: true,
    online: false,
    files: [
        './build/**/*.css',
        './src/**/**.html',
        './src/js/**/**.js'
        ]
  },

  watch : {
    sass : src + sass + '**/**.sass',
    js : src + js + '**/**.js',
    themeFiles : src + '**.html',
    images : src + img + '**.**'
  },

  images : {
    src : src + img,
    fileType : '**.*',
    build : build + img,
    dist : distDir + img,
    options : {
        optimizationLevel: 7,
        progressive: true,
        interlaced: true
    }
  },

  clean : {
    deleteFolder : [distDir, build, src + js + 'vendor/'],
    cleanFiles : build + '**/.DS_Store'
  },

  themeFiles : {
    src : src,
    build : build,
    dist : dist,
    filesToMove : '**.html'
  },

  fonts : {
    src : src + fonts + '**.**',
    build : build + fonts,
    dist : distDir + fonts
  }
};
