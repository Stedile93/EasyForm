
// Charge gulp and gulp plugins
var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var jasmine = require('gulp-jasmine');

// Define source folder
var files = "./src/*.js";


gulp.task('lint', function(){

  // Code validation
  gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));


});


// Dist task
gulp.task('dist', function(){

  gulp.src(files)
    .pipe(rename('easyform.jquery.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));

});

// Jasmine task
gulp.task('jasmine', function () {
    return gulp.src('./spec/test.js')
      .pipe(jasmine());
});


// Default task
gulp.task('default', function(){

  gulp.run('lint', 'dist');
  gulp.watch(files, function(evt){
    gulp.run('lint', 'dist');
  });

});
