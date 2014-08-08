'use strict';

// SERVICE FOR API CALLS =======================================================
angular.module('todoApp').factory('todosService', function ($http) {
    var apiHost = "https://todo-nodejs-server.herokuapp.com/api";

    return {
        list : function() {
            return $http.get(apiHost + '/todos');
        },
        get : function(id) {
            return $http.get(apiHost + '/todos/' + id);
        },
        create : function(data) {
            return $http.post(apiHost + '/todos', data);
        },
        update : function(id, data) {
            return $http.put(apiHost + '/todos/' + id, data);
        },
        delete : function(id) {
            return $http.delete(apiHost + '/todos/' + id);
        }
    };
});
