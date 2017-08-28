'use strict';

angular.
module('core.phone').
factory('Phone', ['$resource',
  function ($resource) {

    var GetAllUsers = function () {

      return $resource('phones/:phoneId.json', {}, {
          query: {
            method: 'GET',
            params: {
              phoneId: 'phones'
            },
            isArray: true
          }
        });
      };
  }
]);