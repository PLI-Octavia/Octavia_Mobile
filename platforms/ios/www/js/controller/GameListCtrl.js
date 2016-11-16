app.controller('GameListCtrl', ['$scope','$http' , '$location', '$rootScope', '$state', function($scope, $http, $location, $rootScope, $state) {

if ($rootScope.co != undefined && $rootScope.co == 1) {
	var request = "http://46.105.123.11/game/" + $rootScope.user.course_id;

	$http.get(request)
	.success(function(data){
		$scope.available_game = data.data;
	})
	.error(function(err){
		console.log(err);
	});	
} else {
	$state.go("login");
	return;
}
	

$scope.launchGame = function(game_name) {
	$state.go("play", {game: game_name});
}

}]);