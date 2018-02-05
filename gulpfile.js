//modules
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const uglifyjs = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const pump = require('pump');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

//gulp variables
const src = 'public/assets';

// gulp.tasks

// minify & concat js
gulp.task('minify-concat-js', (cb) => {
     pump([
     	gulp.src('src/js/*.js'),
     	sourcemaps.init(),
	    concat('main.js'),
	   	uglifyjs(),
	   	sourcemaps.write(src),
	    gulp.dest(src)
	  ],
	  cb
	);
});

//compile sass
gulp.task('sass', () => {
	gulp.src('src/sass/style.scss')
	.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(concat('style.css'))
	.pipe(sourcemaps.write(src))
	.pipe(gulp.dest(src));
})

//define default gulp task
gulp.task('default', ['minify-concat-js', 'sass']);

//define watch gulp task
gulp.task('watch', () => {
	//watch for changes in js
	gulp.watch('src/js/*.js', ['minify-concat-js', 'sass']);
});
