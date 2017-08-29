'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
    module('createRoom').
    component('createRoom', {
        templateUrl: 'createRoom/createRoom.html',
        controller: ['$scope','Users',
            function CreateRoomController($scope, Users) {
            Users.GetAllUsersAjax().then(function (data) {
            $scope.users = data.data;
            
      });

                 $scope.createRoom = function () {
                Users.createRoom($scope.Room).then(function (data) {
                          var x = data;
                 });
                }
            }
        ]
    });