module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assetBuildDir: "built-assets",

    bower: {
      target: {
        rjsConfig: 'app/public/javascript/boot.js'
      }
    },

    requirejs: {
      compile: {
        options: {
          keepBuildDir: true,
          appDir: "app/public",
          baseUrl: "javascript",
          dir: "<%= assetBuildDir %>",
          fileExclusionRegExp: /(parseError|tests|lang)/,
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

    copy: {
      requirejs_out: {
        files: { "<%= assetBuildDir %>/require.js": "<%= assetBuildDir %>/components/requirejs/require.js" }
      },
      requirejs_in: {
        files: { "<%= assetBuildDir %>/components/requirejs/require.js": "<%= assetBuildDir %>/require.js" }
      }
    },

    clean: {
      postbuild: {
        files: [
          { src: "<%= assetBuildDir %>/components" },
          { src: "<%= assetBuildDir %>/**/*.less" }
        ]
      },
      all: {
        files: [
          { src: "<%= assetBuildDir %>" }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bower-requirejs');

  grunt.registerTask('build', [
    'clean:all',
    'less',
    'requirejs',
    'copy:requirejs_out',
    'clean:postbuild',
    'copy:requirejs_in'
  ]);
  grunt.registerTask('default', ['build']);
};