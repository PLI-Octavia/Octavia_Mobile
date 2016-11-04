app.controller('LoginCtrl', ['$scope','$http' , '$location', '$rootScope' ,'$state', function($scope, $http, $location, $rootScope, $state) {

$scope.symbols = ['square', 'circle', 'tri', 'cross'];
$scope.passwordSymbols = [];
var tmp = "http://46.105.123.11/login/student";

$scope.addSymbol = function (symbol) {
		$scope.passwordSymbols.push(symbol);
};

$scope.removeSymbol = function (index) {
		$scope.passwordSymbols.splice(index, 1);
};

$scope.validation = function (user) {
	data = {
		user_login : user.login,
		user_password : $scope.passwordSymbols.join('-')		
	}
	$http.post(tmp, data).then(function (data) {
      $rootScope.user = data.data.data
      $state.go("game")

    });
}
}]);