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
        files: {
          'testing-grunt/build/js/file-1.js': 'testing-grunt/js/file-1.js',
          'testing-grunt/build/js/file-2.js': 'testing-grunt/js/file-2.js'
        }
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





// module.exports = function(grunt) {

//   require('load-grunt-tasks')(grunt);

//   // CONFIGURE GRUNT PLUGINS/PACKAGES ===================================================
//   grunt.initConfig({

//     pkg: grunt.file.readJSON('package.json'),

//     // LINTER
//     eslint: {
//       all: [
//         'testing-grunt/js/*.js'
//       ],
//       options: {
//         config: "config/eslint.json",
//         rulesDir: "conf/rules"
//       }
//     },

//     // BABEL: ES6 TRANSPILER
//     babel: {
//       options: {
//         sourceMap: true,
//         presets: ['babel-preset-es2015']
//       },
//       dist: {
//         files: {
//           'testing-grunt/build/bundle.js': [
//             'testing-grunt/js/*.js'
//           ]
//         }
//       }
//     },

//     uglify: {
//       options: {
//         //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//       },
//       build: {
//         src: ['testing-grunt/js/*.js'],
//         distest: 'testing-grunt/build/js/bundle.min.js'
//       }
//     }

//     // CREATE GRUNT TASKS =================================================================
//     // grunt.registerTask('babel', ['eslint', 'babel']);
//     grunt.registerTask('uglify', ['uglify']);

//   });

//   // LOAD GRUNT PLUGINS/PACKAGES ========================================================
//   // grunt.loadNpmTasks('grunt-eslint');
//   grunt.loadNpmTasks('grunt-contrib-uglify');
//   grunt.loadNpmTasks('grunt-contrib-concat');

//   // PATTERN CHECKER FOR JAVASCRIPT - http://eslint.org/docs/about/
//   // MINFIY JAVASCRIPT FILES - https://github.com/gruntjs/grunt-contrib-uglify
//   // CONCATENATE FILES - https://github.com/gruntjs/grunt-contrib-concat
//   // http://babeljs.io/

  

// };