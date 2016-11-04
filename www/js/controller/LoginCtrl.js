app.controller('LoginCtrl', ['$scope','$http' , '$location', function($scope, $http, $location) {

$scope.symbols = ['square', 'circle', 'tri', 'cross'];
$scope.symbolsPassword = [];

$scope.addSymbol = function (symbol) {
		$scope.symbolsPassword.push(symbol);
};

$scope.removeSymbol = function (index) {
		$scope.symbolsPassword.splice(index, 1);
};

}]);