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
        when('/roomers/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/', {
          template: '<home></home>'
        }).
        when('/createUser', {
          template: '<create-user></create-user>'
        }).
        otherwise('/');
    }
  ]);
