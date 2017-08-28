'use strict';

angular.
module('core.phone').
factory('Users', ['$resource', '$http', '$q',
  function ($resource, $http, $q) {
    var factory = {};

    factory.GetAllUsersAjax = function () {
      var deferred = $q.defer();
      $http.get('https://ale-banegev.herokuapp.com/getGuardians')
        .then(function (success) {
          deferred.resolve(success);
        }, function (error) {
          deferred.resolve(error);
        });
        return deferred.promise;
    }

    factory.createUser = function (user) {
      var deferred = $q.defer();
      $http.post('https://ale-banegev.herokuapp.com/addGuardian',user)
        .then(function (success) {
          deferred.resolve(success);
        }, function (error) {
          deferred.resolve(error);
        });
        return deferred.promise;
    }

    return factory;
  }
]);