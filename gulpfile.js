var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//builds sass files to ./css/
gulp.task('sass', function() {
    return gulp.src('stylesheets/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

//concatenate vendor and custom css, and minify
gulp.task('css', function() {
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'css/main.css'
    ])
    .pipe(concat('all.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist'));
});

//concatenate vendor and custom js, and uglify
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

//copies index.html and other goodies to dist folder
gulp.task('copy', function() {
    return gulp.src([
        'index.html'
    ])
    .pipe(gulp.dest('dist'));
});

// gulp.task('watch', function() {
//     gulp.watch('js/*.js', ['lint', 'scripts']);
//     gulp.watch('scss/*.scss', ['sass']);
// });

// gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
