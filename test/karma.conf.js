module.exports = function(config) {
  config.set({
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-xeditable/dist/js/xeditable.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/scripts/app.js',
      'app/scripts/services/todos_service.js',
      'app/scripts/controllers/todos_controller.js',
      'test/spec/**/*.js'
    ],

    exclude: [],

    port: 9999,

    reporters : ['spec'],

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
