module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assetBuildDir: "built-assets",
    releaseDir: "releases",

    bower: {
      target: {
        rjsConfig: 'app/public/javascript/boot.js'
      }
    },

    gitinfo: {},

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
      },
      latestLink: {
        files: [
          { src: "<%= releaseDir %>/latest.tar" }
        ]
      }
    },

    compress: {
      build: {
        options: {
          archive: '<%= releaseDir %>/<%= gitinfo.local.branch.current.name %>-<%= gitinfo.local.branch.current.shortSHA %>.tar',
          pretty: true,
        },
        files: [
          { src: ['app/**', '!app/public/**'] },
          { src: ['built-assets/**'] },
          { src: ['app.js'] },
          {
            src: ['node_modules/**'],
            filter: function (file) {
              return /^\.bin/.test(file) || Object.keys(pkg.dependencies).indexOf(file.split('/')[1]) !== -1;
            }
          },
        ]
      }
    },

    symlink: {
      options: {
        overwrite: true
      },
      explicit: {
        src: '<%= releaseDir %>/<%= gitinfo.local.branch.current.name %>-<%= gitinfo.local.branch.current.shortSHA %>.tar',
        dest: '<%= releaseDir %>/latest.tar'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-symlink');
  grunt.loadNpmTasks('grunt-gitinfo');

  grunt.registerTask('build', [
    'clean:all',
    'less',
    'requirejs',
    'copy:requirejs_out',
    'clean:postbuild',
    'copy:requirejs_in'
  ]);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('package', ['build', 'gitinfo', 'compress:build', 'clean:latestLink', 'symlink']);
};