angular.module('todoApp').controller('TodosCtrl', function($scope) {
  $scope.todos = [1, 2];
  console.log($scope.todos.length);
});
