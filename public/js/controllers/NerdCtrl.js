angular.module('NerdCtrl', []).controller('NerdController', function($scope) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	$scope.roomers = [
		{name:"משה כהן", age:14, info:"אלרגי לבוטנים"},
		{name:"אבי לוי", age:17, info:"צריך עזרה להשתמש בשירותים"},
		{name:"דני דין", age:22, info:"נעלם מידי פעם"}
	];

	$scope.RoomerSelected = function(roomer)
	{
		alert(roomer.name);
	}
});