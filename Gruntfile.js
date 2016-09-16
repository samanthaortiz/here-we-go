module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // CONFIGURE GRUNT PLUGINS/PACKAGES ===================================================
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    babel: {
      options: {
        sourceMap: true,
        presets: ['babel-preset-es2015']
      },
      dist: {
      }
    },

    eslint: {
      all: [
        'testing-grunt/build/js/file-1.js',
        'testing-grunt/build/js/file-2.js'
      ],
      options: {
        config: "config/eslint.json",
        rulesDir: "conf/rules"
      }
    },

    uglify: {
      dev: {
        files: {
          'testing-grunt/build/js/bundle.min.js': ['testing-grunt/build/js/file-1.js', 'testing-grunt/build/js/file-2.js']
        } 
      }
    }

  });

  // LOAD GRUNT PLUGINS/PACKAGES ========================================================
  grunt.loadNpmTasks('grunt-eslint');
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // CREATE GRUNT TASKS =================================================================
  grunt.registerTask('default', ['babel', 'eslint', 'uglify']);
};