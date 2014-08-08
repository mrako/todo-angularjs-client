'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'app/**/*.js'
      ]
    },
    karma: {
      unit: {
        configFile: './test/karma.conf.js'
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'karma']);

  grunt.registerTask('test:unit', ['karma:unit']);
  grunt.registerTask('test:e2e', ['karma:e2e']);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
};
