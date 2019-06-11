'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const browserify = require('gulp-browserify');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');

gulp.task('styles', function(){ 
	return gulp.src('./src/styles/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/assets/css/'))
		.pipe(browserSync.reload({stream: true}));
})

gulp.task('images', function(){
	return gulp.src('./src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./build/assets/img/'))
		.pipe(browserSync.reload({stream: true}));
})

gulp.task('fonts', function(){
	return gulp.src('./src/fonts/**/*.*')
		.pipe(gulp.dest('./build/assets/fonts/'))
		.pipe(browserSync.reload({stream: true}));
})

gulp.task('pages', function buildHTML(){
  	return gulp.src('./src/*.pug')
  		.pipe(pug())
  		.pipe(gulp.dest('./build/'))
  		.pipe(browserSync.reload({stream: true}));
})

gulp.task('scripts', function(){
	return gulp.src('./src/scripts/main.js')
		.pipe(browserify())
		.pipe(babel())
  		.pipe(gulp.dest('./build/assets/scripts/'))
  		.pipe(browserSync.reload({stream: true}));
})

gulp.task('compressed-js', function() {  
    return gulp.src('./src/scripts/*.js')
        .pipe(gulp.dest('build/assets/scripts'));
})

gulp.task('clean', function () {
    return del('build');
})

gulp.task('watch', function(){
	gulp.watch('./src/scripts/**/*.js', gulp.series('scripts'));
	gulp.watch('./src/*.pug', gulp.series('pages'));
	gulp.watch('./src/includes/*.pug', gulp.series('pages'));
	gulp.watch('./src/fonts/**/*.*', gulp.series('fonts'));
	gulp.watch('./src/scripts/**/*.js', gulp.series('scripts'));
	gulp.watch('./src/styles/**/*.scss', gulp.series('styles'));
})

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('ui', gulp.parallel('watch', 'browser-sync'))

gulp.task('build', gulp.series('clean', 'styles', 'images', 'scripts', 'compressed-js', 'fonts', 'pages', 'ui'));