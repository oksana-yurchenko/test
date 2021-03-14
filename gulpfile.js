'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'));
});