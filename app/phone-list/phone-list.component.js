'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneList').
component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: ['Users', '$scope', '$routeParams',
    function PhoneListController(Users, $scope, $routeParams) {
      var scope = this;
      this.filteredRooms = []
      this.currentPage = 1
      this.numPerPage = 11
      this.maxSize = 100;
      this.pageChanged = function () {
        var begin = ((scope.currentPage - 1) * scope.numPerPage),
          end = begin + scope.numPerPage;

        scope.filteredRooms = scope.renderedUsers.slice(begin, end);
      }
      Users.GetAllUsersAjax().then(function (data) {
        scope.users = data.data;
        scope.renderedUsers = RenderUsers(scope.users);
        scope.pageChanged();
      });

      this.orderProp = 'age';

      function RenderUsers(users) {
        var renderedUsers = [];
        var renderedUser = {};

        // for (var j = 0; j < 11; j++) {
        for (var j = 0; j < users.length; j++) {
          renderedUser = {};
          if (users[j].general) {
            if (users[j] && users[j].general && users[j].general.firstName && users[j].general.lastName) {

              renderedUser.title = users[j].general.firstName + ' ' + users[j].general.lastName;
              renderedUser.id = users[j].id;
            }
          }

          renderedUser.span = {
            row: 1,
            col: 1
          };

          switch ((j + 1) % scope.numPerPage) {
            case 1:
              renderedUser.background = "rgba(255,0,0,0.7)";
              renderedUser.span.row = renderedUser.span.col = 2;
              break;

            case 2:
              renderedUser.background = "rgba(0,128,0,0.7)";
              break;
            case 3:
              renderedUser.background = "rgba(0,0,255,0.7)";
              break;
            case 4:
              renderedUser.background = "rgba(0,0,139,0.7)";
              renderedUser.span.col = 2;
              break;

            case 5:
              renderedUser.background = "rgba(237,237,79,0.7)";
              renderedUser.span.row = renderedUser.span.col = 2;
              break;

            case 6:
              renderedUser.background = "rgba(255,192,203,0.7)";
              break;
            case 7:
              renderedUser.background = "rgba(255,0,0,0.7)";
              break;
            case 8:
              renderedUser.background = "rgba(128,0,128,0.7)";
              break;
            case 9:
              renderedUser.background = "rgba(0,128,0,0.7)";
              break;
            case 10:
              renderedUser.background = "rgba(128,128,128,0.7)";
              break;
            case 0:
              renderedUser.background = "rgba(237,237,79,0.7)";
              break;
          }

          renderedUsers.push(renderedUser);
        }

        return renderedUsers;
      }
    }
  ]
});