'use strict';

angular.module('todoApp').controller('TodosController', function($scope, $http, todosService) {
    $scope.formData = {};

    // GET =====================================================================
    todosService.list()
        .success(function(data) {
            $scope.todos = data;
        });
});
