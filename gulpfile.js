var gulp = require('gulp');
var octo = require('@octopusdeploy/gulp-octo');
require('gulp-release-it')(gulp);
var runSequence = require('run-sequence');
var execSync = require('child_process').execSync;


gulp.task("bump", function() {
  execSync("npm run bump");
});

gulp.task("octopus", function() {
  return gulp.src("index.js")
    .pipe(octo.pack('zip'))
    .pipe(octo.push({host: 'http://devapi.checkout.com:8080/', apiKey: 'API-DHBUQTKYBMZ1P0FRIJZIKJMFSI'}));
});

gulp.task("release", function(done) {
   runSequence("bump", "octopus", done);
});
