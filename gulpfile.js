var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var ghPages = require('gulp-gh-pages');

gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//builds sass files to ./css/, and minifies
gulp.task('sass', function() {
    return gulp.src('stylesheets/*.scss')
        .pipe(sass())
        .pipe(rename("all.css"))
        .pipe(sourcemaps.init())
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

//concatenate vendor and custom js, and uglify
gulp.task('js', function() {
    return gulp.src([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/vegas/dist/vegas.js',
            'bower_components/typed.js/js/typed.js',
            'js/*.js'
        ])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

//copies index.html and other goodies to dist folder
gulp.task('copy', function() {
    return gulp.src([
        'index.html',
        'images/*',
        'overlay.png',
        'CNAME',
        'favicon.ico'
    ], {base: './'})
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
    del([
        'dist/',
        'css/'
    ], cb);
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
        branch: 'master'
    }));
});

// gulp.task('watch', function() {
//     gulp.watch('js/*.js', ['lint', 'scripts']);
//     gulp.watch('scss/*.scss', ['sass']);
// });

// gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
