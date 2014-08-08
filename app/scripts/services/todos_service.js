'use strict';

// SERVICE FOR API CALLS =======================================================
angular.module('todoApp').factory('todosService', function ($http) {
    var apiHost = 'https://todo-nodejs-server.herokuapp.com/api';

    return {
        list : function() {
            return $http.get(apiHost + '/todos');
        }
    };
});
