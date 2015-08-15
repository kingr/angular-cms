var gulp 				= require('gulp');
var less 				= require('gulp-less');
var path 				= require('path');
var livereload 			= require('gulp-livereload');

// call watch function
gulp.task('default', ['watch']);

// define less compiler
gulp.task('less', function () {
  return gulp.src('app/css/less/app.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('app/css/'));
});

// define watcher
gulp.task('watch', function(){
	gulp.watch('app/css/less/**/*.less', ['less'])
});