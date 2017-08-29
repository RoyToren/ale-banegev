'use strict';

// Register `roomsList` component, along with its associated controller and template
angular.
module('roomsList').
component('roomsList', {
  templateUrl: 'rooms-list/rooms-list.template.html',
  controller: ['Users', '$scope','$location',
    function RoomsListController(Users, $scope,$location) {
      var scope = this;
      this.filteredRooms = []
      this.currentPage = 1
      this.numPerPage = 11
      this.maxSize = 100;
      this.pageChanged = function () {
        var begin = ((scope.currentPage - 1) * scope.numPerPage),
          end = begin + scope.numPerPage;

        scope.filteredRooms = scope.renderedRooms.slice(begin, end);
      }
      Users.GetAllRoomsAjax().then(function (data) {
        scope.rooms = data.data;
        scope.renderedRooms = RenderRooms(scope.rooms);
        scope.pageChanged();
      });

      this.orderProp = 'age';
      this.ChooseRoom = function (room) {
        Users.setCurrRoomUsers(room.users);
        $location.path( "/roomUsers/"+room.id );
      };

      function RenderRooms(users) {
        var renderedRooms = [];
        var renderedUser = {};

        if (users) {
          for (var j = 0; j < users.length ? users.length : 0; j++) {
            renderedUser = {};
            if (users[j]) {
              if (users[j].id) {
                renderedUser.title = 'חדר מס ' + users[j].id;
                 renderedUser.id = users[j].id;
                 if(users[j].users)
                 {
                    renderedUser.length = users[j].users.length;
                    renderedUser.users = users[j].users;
                 }
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

            renderedRooms.push(renderedUser);
          }

          return renderedRooms;
        }
      }
    }
  ]
});