var app = angular.module('App', []);

app.controller('controller',['$scope', '$http', function($scope, $http){
	
	$scope.tab = 1;

	$scope.sTab = function(res){
		$scope.tab = res;
	}

	$scope.aTab = function(deger){
		return $scope.tab === deger;
	}

	$scope.icerik = ["İçerik 1","İçerik 2", "İçerik 3"];
}]);