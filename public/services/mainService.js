angular.module('getStuffDoneApp').service('mainService', function ($http, $q) {

    // GET LOGGED IN USER TASKS //
    this.getTasks = function (userId) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/api/user/' + userId
        }).then(function (response) {
            // console.log(response.data);
            deferred.resolve(response.data)
        })
        return deferred.promise
    };
    
    // CREATE NEW TASK //
    this.postTask = function (postNewObj) {
        var deferred = $q.defer()
        $http({
            method: 'POST',
            url: '/api/tasks',
            dataType: 'json',
            data: postNewObj
        }).then(function (response) {
            // console.log('newTask on service', response.data)
            deferred.resolve(response.data)
        })
        return deferred.promise
    };
    
    // DELETE TASK //
    this.deleteTask = function (delObj) {
        var deferred = $q.defer()
        $http({
            method: 'DELETE',
            url: '/api/tasks/' + delObj.id
        }).then(function (response) {
            deferred.resolve(response)
        })
        return deferred.promise
    };
    
    // UPDATE TASK (EDIT) //
    this.updateTask = function (id, status) {
        var deferred = $q.defer()
        $http({
            method: 'PUT',
            url: '/api/tasks/' + id,
            dataType: 'json',
            data: status
        }).then(function (response) {
            deferred.resolve(response.data)
        })
        return deferred.promise
    };





});