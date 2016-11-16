app.controller('LoginCtrl', ['$scope','$http' , '$location', '$rootScope' ,'$state', function($scope, $http, $location, $rootScope, $state) {

$scope.symbols = ['square', 'circle', 'tri', 'cross'];
$scope.passwordSymbols = [];
var request = "http://46.105.123.11/login/student";
$rootScope.co = 0;

$scope.addSymbol = function (symbol) {
		$scope.passwordSymbols.push(symbol);
};

$scope.removeSymbol = function (index) {
		$scope.passwordSymbols.splice(index, 1);
};

$scope.validation = function (user) {
	var data = {
		user_login : user.login,
		user_password : $scope.passwordSymbols.join('-')		
	}
	$http.post(request, data).then(function (data) {
      if (data.data.status == "success") {
      	$rootScope.user = data.data.data
      	$rootScope.co = 1;
      	$state.go("game");
      } else {
      	alert("Mauvais mot de passe")
      }
    });
}
}]);