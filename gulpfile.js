var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');

gulp.task('default', [], function (done) {
    return gulp.src(["app/**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(typescript())
        .pipe(ngAnnotate())
        .pipe(sourcemaps.write("./", {addComment: true, includeContent: false, sourceRoot: '/../source'}))
        .pipe(gulp.dest("deploy/"));
});

gulp.task('concat', [], function (done) {
    return gulp.src(["app/**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(typescript())
        .pipe(ngAnnotate())
        .pipe(concat("code.js"))
        .pipe(sourcemaps.write("./", {addComment: true, includeContent: false, sourceRoot: '/../source'}))
        .pipe(gulp.dest("deploy/"));
});


