'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneList').
component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: ['Users', '$scope',
    function PhoneListController(Users, $scope) {
      var scope = this;
      this.filteredRooms = []
      this.currentPage = 1
      this.numPerPage = 11
      this.maxSize = 100;

      Users.GetAllUsersAjax().then(function (data) {
        scope.users = data.data;
        scope.renderedUsers = RenderUsers(scope.users);

        $scope.$watch("currentPage + numPerPage", function() {
          var begin = ((scope.currentPage - 1) * scope.numPerPage)
          , end = begin + scope.numPerPage;
      
          scope.filteredRooms = scope.renderedUsers.slice(begin, end);
        });
      });

      this.orderProp = 'age';
      this.ChooseUser = function (user) {};

      function RenderUsers(users) {
        var renderedUsers = [];
        var renderedUser = {};

        // for (var j = 0; j < 11; j++) {
        for (var j = 0; j < users.length; j++) {
          renderedUser = {};
          if (users[j].general.firstName && users[j].general.lastName) {

            renderedUser.title = users[j].general.firstName + ' ' + users[j].general.lastName;
          }
          renderedUser.span = {
            row: 1,
            col: 1
          };

          switch (j + 1) {
            case 1:
              renderedUser.background = "red";
              renderedUser.span.row = renderedUser.span.col = 2;
              break;

            case 2:
              renderedUser.background = "green";
              break;
            case 3:
              renderedUser.background = "darkBlue";
              break;
            case 4:
              renderedUser.background = "blue";
              renderedUser.span.col = 2;
              break;

            case 5:
              renderedUser.background = "yellow";
              renderedUser.span.row = renderedUser.span.col = 2;
              break;

            case 6:
              renderedUser.background = "pink";
              break;
            case 7:
              renderedUser.background = "darkBlue";
              break;
            case 8:
              renderedUser.background = "purple";
              break;
            case 9:
              renderedUser.background = "green";
              break;
            case 10:
              renderedUser.background = "gray";
              break;
            case 11:
              renderedUser.background = "yellow";
              break;
          }

          renderedUsers.push(renderedUser);
        }

        return renderedUsers;
      }
    }
  ]
});