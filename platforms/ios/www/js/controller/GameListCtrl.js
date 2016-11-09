app.controller('GameListCtrl', ['$scope','$http' , '$location', '$rootScope', '$state', function($scope, $http, $location, $rootScope, $state) {
	
if ($rootScope.co != "undifined" && $rootScope.co == 1) {
	var request = "http://46.105.123.11/game/" + $rootScope.user.course_id;

	$http.get(request)
	.success(function(data){
		$scope.available_game = data.data;
	})
	.error(function(err){
		return err;
	});	
} else {
	$location.path("/login");
}
	

$scope.launchGame = function(game_name) {
	alert(game_name);
}


}]);