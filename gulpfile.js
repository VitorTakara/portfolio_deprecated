/*

GULPFILE 11ART - COMANDOS

1) gulp build - compila o projeto e serve pelo browserSync para o autoreload

*/

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  prefix = require("gulp-autoprefixer"),
  cssnano = require("gulp-cssnano"),
  concat = require("gulp-concat"),
  imagemin = require("gulp-imagemin"),
  browserSync = require("browser-sync"),
  notify = require("gulp-notify"),
  runSequence = require("run-sequence"),
  rigger = require("gulp-rigger"),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify-es').default,
  htmlmin = require('gulp-htmlmin'),
  rimraf = require("rimraf");

// BROWSERSYNC
gulp.task("browser-sync", function() {
  browserSync.init({server: {baseDir: "dist",index:"index.html"}});
  //Vai dar reload na tela a cada mudança que ele encontrar
  gulp.watch("app/**/*").on("change", browserSync.reload);
  gulp.watch("app/*.html", ["html"]);
  gulp.watch("app/scss/**/*.scss", ["sass"]);
  gulp.watch("app/js/**/*.js", ["js"]);
  gulp.watch("app/img/**/*.*", ["img"]);
});

// HTML
gulp.task("html", function() {
   return gulp.src("app/*.html")
   .pipe(htmlmin({collapseWhitespace: true}))
   .pipe(gulp.dest("dist"));
});

// Favicon
gulp.task("favicon", function() {
  return gulp.src("app/favicon.png")
  .pipe(gulp.dest("dist"));
});

// PHP Email
gulp.task("email", function() {
  return gulp.src("app/email/**/*.*")
  .pipe(gulp.dest("dist/email"));
});

// SASS
gulp.task("sass", function() {
  return gulp
    .src(["app/scss/main.scss"])
    .pipe(sass({ outputStyle: "expanded" }).on("error", notify.onError()))
    .pipe(prefix(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
    .pipe(cssnano({ zindex: false }))
    .pipe(gulp.dest("dist/css"));
});

// JS

gulp.task("js", function() {
  gulp.start('js-libs');
  return gulp
    .src(["app/js/plugins/slideout.min.js",
          "app/js/plugins/masonry.min.js",
          "app/js/plugins/masonry.extends.js",
          "app/js/plugins/tingle.js",
          "app/js/plugins/photoswipe.js",
          "app/js/plugins/photoswipe-ui-default.js",
          "app/js/plugins/parallax.min.js",
          "app/js/plugins/nanobar.js",
          "app/js/isMobile.js",
          "app/js/modal.js",
          "app/js/menu.js",
          "app/js/masonry.js",
          "app/js/parallax.js"])
    //.pipe(sourcemaps.init()) //ATIVAR SE QUISER SOURCEMAP
    .pipe(rigger())
    .pipe(concat("main.js"))
    .pipe(uglify(/* options */))
    //.pipe(sourcemaps.write()) //ATIVAR SE QUISER SOURCEMAP
    .pipe(gulp.dest("dist/js"));
});

gulp.task("js-libs", function() {
  return gulp
    .src(["app/js/plugins/parallax.min.js",
          "app/js/parallax.js",
          "app/js/isMobile.js"])
    .pipe(uglify(/* options */))
    .pipe(gulp.dest("dist/js"));
});

// IMAGES
gulp.task("img", function() {
  return gulp
    .src("app/img/**/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
});

// CLEAR dist
gulp.task("clear", function(cb) {
  rimraf("./dist", cb);
});

// WATCH
gulp.task("watch", function() {
  gulp.watch("app/*.html", ["html"]);
  gulp.watch("app/scss/**/*.scss", ["sass"]);
  gulp.watch("app/js/**/*.js", ["js"]);
  gulp.watch("app/img/**/*.*", ["img"]);
  console.log(
    "\n\n\nWatching Changes\n\n\n"
  );
});

// BUILD

gulp.task("finish", function() {
  console.log(
    "\n\n\nBuild Finished\n\n\n"
  );
});

gulp.task("build", function() {
  runSequence(
    "clear",
    "html",
    "sass",
    "js",
    "js-libs",
    "img",
    "favicon",
    "email",
    "browser-sync",
    "finish"
  );
});
