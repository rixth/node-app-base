module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: {
          appDir: "app/public",
          baseUrl: "javascript",
          dir: "built-assets",
          fileExclusionRegExp: /parseError/,
          mainConfigFile: 'app/public/javascript/boot.js',
          modules: [
            { name: "boot" }
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs']);
};