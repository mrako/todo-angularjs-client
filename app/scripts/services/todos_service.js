'use strict';

angular.module('todoApp').factory('todosService', function ($http) {
    var apiHost = 'https://todo-nodejs-server.herokuapp.com/api';

    return {
        list : function() {
            return $http.get(apiHost + '/todos');
        },
        create : function(data) {
            return $http.post(apiHost + '/todos', data);
        }
    };
});
