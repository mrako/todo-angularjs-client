'use strict';

var todoApp = angular.module('todoApp', ['ngRoute', 'xeditable']);

todoApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

todoApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

// ROUTES ======================================================================
todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/todos', {
        templateUrl: 'templates/todos.html'
      }).
      when('/tomme', {
        templateUrl: 'templates/todos.html'
      }).
    otherwise({
      redirectTo: '/todos'
    });
}]);
