'use strict';

angular.module('todoApp').controller('TodosCtrl', function($scope, todosService) {
    $scope.formData = {};
    $scope.submit = 'Create';

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

    // CREATE ==================================================================
    $scope.edit = function (id) {
        todosService.get(id)
            .success(function(data) {
                $scope.formData = data;
                $scope.submit = 'Save';
            });
    };

    // UPDATE ==================================================================
    $scope.update = function(todo) {
        $scope.updateData(todo, todo.text);
    };

    $scope.updateData = function(todo, data) {
        $scope.loading = true;

        todosService.update(todo._id, {done: todo.done, text: data})
            .success(function(data) {
                $scope.todos = data;
            });
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
