var gulp = require('gulp');
var sass = require('gulp-sass');
var path = 'assets/scss/**/*.scss';
gulp.task('sass', function () {
  gulp.src(path)
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('fuck', function () {
  gulp.src('./assets/scss/bootsrap/stylesheets/bootstrap.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
  gulp.watch(path, ['sass']);
});

gulp.task('default', ['sass', 'watch']);
