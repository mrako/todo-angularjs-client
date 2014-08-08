angular.module('todoApp').controller('TodosCtrl', function($scope, todosService) {

  $scope.formData = {};

  todosService.list()
    .success(function(data) {
      $scope.todos = data;
    });

  $scope.save = function() {
    todosService.create($scope.formData)
      .success(function(data) {
        $scope.todos = data;
      });
  };

});
