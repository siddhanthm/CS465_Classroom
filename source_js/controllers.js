/* Sample Controller */
var classRoomControllers = angular.module('classRoomControllers', []);

classRoomControllers.controller('FrontPageController', ['$scope','$http', function($scope, $http){
	console.log("Here");
}]);

classRoomControllers.controller('LoginCtrl', ['$scope','$http','$location', function($scope, $http, $location){
	$scope.submit = function(){
		if(($scope.username == 'sid' && $scope.password == 'password')|| 
			$scope.username == 'priya' && $scope.password == 'password'){
			$location.path('/class/0');
		}else{
			$scope.message = "Invalid Username or Password";
		}
	}
}]);

classRoomControllers.controller('SignupCtrl', ['$scope','$http', function($scope, $http){
	$scope.submit = function(){
		$scope.message = "";
		$scope.message1 = "";

		if($scope.email == 'siddhanthm@outlook.com'){
			$scope.message = "Email " + $scope.email + " already exists!";
		}else{
			$scope.message1 = "User Created Successfully!";
		}
	}
	
	
}]);

classRoomControllers.controller('ClassCtrl', ['$scope','$http','$routeParams', function($scope, $http,$routeParams){
	console.log("Here", $routeParams.id);
	$scope.classes;
	$scope.order = "likes";
	$scope.reverse= true;
	$http.get('../data/class.json').success(function(data){
		$scope.classes = data;
		$scope.classinfo = data[$routeParams.id];
		console.log($scope.classes);
		console.log($scope.classinfo)
	});
}]);

