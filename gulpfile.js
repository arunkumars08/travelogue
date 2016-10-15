var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');

gulp.task('minifyCss', function () {
	return gulp	.src('dist/css/*.css', {base: './dist/css/'})
				.pipe(minifycss())
				.pipe(gulp.dest('dist/css'));
});

gulp.task('sassToCss', function () {
    return gulp .src('scss/*.scss', {base: './scss/'})
                .pipe(sass())
                .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['sassToCss']);
gulp.watch('scss/*.scss', ['sassToCss']);