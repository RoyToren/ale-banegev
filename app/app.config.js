'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/roomers', {
          template: '<phone-list></phone-list>'
        }).
        when('/rooms-list', {
          template: '<rooms-list></rooms-list>'
        }).
        when('/remove-user', {
          template: '<remove-user></remove-user>'
        }).
        when('/userDetail/:phoneId', {
          template: '<user-detail></user-detail>'
        }).
        when('/', {
          template: '<home></home>'
        }).
        when('/createUser', {
          template: '<create-user></create-user>'
        }).
       when('/createRoom', {
          template: '<create-room></create-room>'
        }).
        when('/roomUsers/:roomId', {
          template: '<room-users></room-users>'
        }).
        otherwise('/');
    }
  ]);
