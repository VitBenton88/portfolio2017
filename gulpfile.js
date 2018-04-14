//modules
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const uglifyjs = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const pump = require('pump');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');

//paths
const paths = {
  libSrc: 'src/libs/**/*.js',
  root: '/',
  src: 'public/assets',
  scripts: 'src/js/*.js',
  sass: 'src/sass/**/*.scss',
  sassSrc: 'src/sass/style.scss'
};

// gulp.tasks

// minify & concat custom js
gulp.task('scripts', (cb) => {
  pump([
      gulp.src(paths.scripts),
      sourcemaps.init(),
      concat('all.min.js'),
      uglifyjs(),
      sourcemaps.write(paths.root),
      gulp.dest(paths.src)
    ],
    cb
  );
});

// combine js libraries
gulp.task('libraries', (cb) => {
  pump([
      gulp.src(paths.libSrc),
      sourcemaps.init(),
      concat('lib.min.js'),
      sourcemaps.write(paths.root),
      gulp.dest(paths.src)
    ],
    cb
  );
});

//compile sass
gulp.task('sass', () => {
  gulp.src(paths.sassSrc)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write(paths.root))
    .pipe(gulp.dest(paths.src));
});

//define watch gulp task
gulp.task('watch', () => {
  //live reloader
  livereload.listen();
  //watch for changes in js
  gulp.watch(paths.scripts, ['scripts']);
  //watch for changes in sass
  gulp.watch(paths.sass, ['sass']);
});

//define default gulp task
gulp.task('default', ['libraries', 'scripts', 'sass']);
