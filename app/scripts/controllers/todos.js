angular.module('todoApp').controller('TodosCtrl', function($scope, todosService) {

  todosService.list()
    .success(function(data) {
      $scope.todos = data;
    });

});
