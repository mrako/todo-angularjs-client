'use strict';

angular.module('todoApp').controller('TodosCtrl', function($scope, todosService) {
  $scope.formData = {};

  // GET =====================================================================
  todosService.list()
    .success(function(data) {
      $scope.todos = data;
    });

  // CREATE AND SAVE =========================================================
  $scope.save = function() {
    if ($scope.formData._id === undefined) {
      todosService.create($scope.formData)
        .success(function(data) {
          $scope.todos = data;
        });
    } else {
      todosService.update($scope.formData._id, $scope.formData)
        .success(function(data) {
          $scope.todos = data;
        });
    }
    $scope.formData = {};
  };

  // UPDATE ==================================================================
  $scope.update = function(todo) {
    $scope.updateData(todo, todo.text);
  };

  // DELETE ==================================================================
  $scope.delete = function(id) {
    $scope.loading = true;

    todosService.delete(id)
      .success(function(data) {
        $scope.loading = false;
        $scope.todos = data;
      });
  };
});
