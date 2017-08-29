'use strict';

// Register `removeUser` component, along with its associated controller and template
angular.
module('removeUser').
component('removeUser', {
  templateUrl: 'remove-user/remove-user.template.html',
  controller: ['$routeParams', 'Users',
    function PhoneDetailController($routeParams, Users) {
      var scope = this;

      Users.GetAllUsersAjax().then(function (data) {
        scope.users = data.data;
      });
    }
  ]
});