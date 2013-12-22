module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ["jasmine", "requirejs"],
    files: [
      'app/public/components/jquery/jquery.js',
      'app/public/components/jasmine-jquery/lib/jasmine-jquery.js',
      'app/public/components/jasmine-flight/lib/jasmine-flight.js',

      // loaded with require
      {pattern: 'app/public/components/**/*.js', included: false},
      {pattern: 'app/public/**/*.js', included: false},
      {pattern: 'test/fixtures/**/*.html', included: true},
      {pattern: 'test/spec/**/*.js', included: false},

      'test/test-main.js'
    ],
    browsers: [
      'Chrome',
      'Firefox'
    ],
    reporters: [
      'dots'
    ],
    autoWatch: true,
    singleRun: false
  });
};