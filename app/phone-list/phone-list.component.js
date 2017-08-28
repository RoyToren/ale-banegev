'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneList').
component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: ['Phone',
    function PhoneListController(Phone) {
      this.users = Phone.query();
      this.orderProp = 'age';
      this.renderedUsers = RenderUsers(this.users);

      function RenderUsers(users) {
        var renderedUsers = [];
        var renderedUser = {};

        for (var j = 0; j < 11; j++) {
          renderedUser = {};
          renderedUser.title = "Number " + (j + 1);
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
              renderedUser.background = "deepBlue";
              break;
            case 10:
              renderedUser.background = "lightPurple";
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