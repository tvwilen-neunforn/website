var gulp            = require('gulp');
var connect         = require('gulp-connect');
var sass            = require('gulp-sass');

gulp.task('connect', function () {
    connect.server({
        root: ['./'],
        port: 1337,
        livereload: true
    });
});

gulp.task('sass', function () {
    return gulp.src('./app/css/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function () {
    gulp.watch(['./app/css/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'watch', 'connect']);
