
var octo = require('@octopusdeploy/gulp-octo');
require('gulp-release-it')(gulp);

gulp.task("bump-rc", function() {
  execSync("npm run bump -- prerelease");
});

gulp.task("bump-release", function() {
  execSync("npm run bump -- release");
});

gulp.task("octopus", function() {
  return gulp.src("index.js")
    .pipe(octo.pack('zip'))
    .pipe(octo.push({host: 'http://devapi.checkout.com:8080/', apiKey: 'API-DHBUQTKYBMZ1P0FRIJZIKJMFSI'}));
});
