angular.module('GeekService', []).factory('Geek', ['$http', function($http) {
    $http.get("welcome.htm")
    .then(function(response) {
        $scope.docs = response.docs;
    });
	

}]);