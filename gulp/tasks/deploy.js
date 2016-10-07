var gulp = require('gulp'),
    ghPages = require('gulp-gh-pages');

gulp/tasl('deploy', function() {
  return gulp/src('./dist/**/*')
    .pipe(ghPages());
});
