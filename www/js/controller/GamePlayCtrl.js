app.controller('GamePlayCtrl', ['$scope','$http' , '$location', '$rootScope', '$state', '$sce',  function($scope, $http, $location, $rootScope, $state, $sce) {

if ($rootScope.co != undefined && $rootScope.co == 1) {
	$scope.game_url = "http://46.105.123.11/" +  $state.params.game  + "/index.html?user_id=" + $rootScope.user.user_id + "&game_id=" + 1 
} else {
	$state.go("login");
	return;
}

$scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
}

}]);