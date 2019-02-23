var gulp = require('gulp');
var sass = require('gulp-sass');
//и что-то выведем в консоль для подтверждения
gulp.task('sass', function () {
    gulp.src('./style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./style.scss', ['sass']);
});