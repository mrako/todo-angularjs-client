angular.module('todoApp').controller('TodosCtrl', function($scope, todosService) {

  $scope.formData = {};

  todosService.list()
    .success(function(data) {
      $scope.todos = data;
    });

});
