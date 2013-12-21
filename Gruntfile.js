module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assetBuildDir: "built-assets",

    requirejs: {
      compile: {
        options: {
          keepBuildDir: true,
          appDir: "app/public",
          baseUrl: "javascript",
          dir: "<%= assetBuildDir %>",
          fileExclusionRegExp: /parseError/,
          mainConfigFile: 'app/public/javascript/boot.js',
          modules: [
            { name: "boot" }
          ]
        }
      }
    },

    less: {
      production: {
        options: {
          cleancss: true
        },
        files: {
          "<%= assetBuildDir %>/stylesheets/main.css": "app/public/stylesheets/main.less"
        }
      }
    },

    clean: {
      production: {
        files: [
          { src: "<%= assetBuildDir %>/**/*.less" }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['less', 'requirejs', 'clean']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('release', ['build']);
};