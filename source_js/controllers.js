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
	$scope.classes;
	$scope.order = "likes";
	$scope.reverse= true;
	$scope.classindex = $routeParams.id;

	$scope.sort = "time";
	$http.get('../data/class.json').success(function(data){
		$scope.classes = data;
		$scope.classinfo = data[$routeParams.id];
	});
	$scope.filter = function(x){
		console.log(x);
		$scope.query = x;
	}
	$scope.h = new Array();
	$scope.h[$routeParams.id] = true;
}]);

classRoomControllers.controller('ohCtrl', ['$scope','$http','$routeParams', function($scope, $http,$routeParams){
	console.log("Here", $routeParams.id);
	$scope.classes;
	$scope.order = "likes";
	$scope.reverse= true;
	$scope.classindex = $routeParams.id;
	$http.get('../data/class.json').success(function(data){
		$scope.classes = data;
		$scope.classinfo = data[$routeParams.id];
		console.log($scope.classes);
		console.log($scope.classinfo);
		console.log($scope.classinfo.officeHours[0].students[0].name);
	});
	$scope.h = new Array();
	$scope.h[$routeParams.id] = true;
}]);

classRoomControllers.controller('taohCtrl', ['$scope','$http','$routeParams', function($scope, $http,$routeParams){
	console.log("Here", $routeParams.id);
	$scope.classes;
	$scope.order = "likes";
	$scope.reverse= true;
	$scope.classindex = $routeParams.id;
	$http.get('../data/class.json').success(function(data){
		$scope.classes = data;
		$scope.classinfo = data[$routeParams.id];
		console.log($scope.classes);
		console.log($scope.classinfo);
		console.log($scope.classinfo.officeHours[0].students[0].name);
	});

	$scope.submit = function(){
		$scope.addedTAname = $scope.name;
		$scope.addedTAlocation = $scope.location;
		$scope.addedStartTime = $scope.stime;
		$scope.addedEndTime = $scope.etime;
		$scope.if_added = true;
	}
	$scope.h = new Array();
	$scope.h[$routeParams.id] = true;
}]);


classRoomControllers.controller('PostidInsCtrl', ['$scope','$http','$routeParams', function($scope, $http,$routeParams){
	console.log("Here", $routeParams.id);
	console.log("Here Also",$routeParams.postid);
	$scope.classes;
	$scope.class = $routeParams.id;
	console.log("Yipee", $scope.class);
	$scope.heart = true;
	$http.get('../data/class.json').success(function(data){
		$scope.classlist = data;
		$scope.classes = data[$routeParams.id];
		$scope.classinfo = $scope.classes.instructorposts[$routeParams.postid];
		console.log($scope.classinfo);

	});

	$scope.change = function(){
		$scope.heart = !$scope.heart;
	}

	$scope.submit = function(){
		$scope.comment_added = $scope.comment;
		$scope.if_comment = true;
		$scope.comment = "";
	}
	$scope.h = new Array();
	$scope.h[$routeParams.id] = true;
}]);

classRoomControllers.controller('PostidStudentCtrl', ['$scope','$http','$routeParams', function($scope, $http,$routeParams){
	console.log("Here", $routeParams.id);
	console.log("Here Also",$routeParams.postid);
	$scope.classes;
	$scope.class = $routeParams.id;
	console.log("Yipee", $scope.class);
	$scope.heart = true;
	$http.get('../data/class.json').success(function(data){
		$scope.classlist = data;
		$scope.classes = data[$routeParams.id];
		$scope.classinfo = $scope.classes.posts[$routeParams.postid];
		console.log($scope.classinfo);

	});

	$scope.change = function(){
		$scope.heart = !$scope.heart;
	}

	$scope.submit = function(){
		$scope.comment_added = $scope.comment;
		$scope.if_comment = true;
		$scope.comment = "";
	}
	$scope.h = new Array();
	$scope.h[$routeParams.id] = true;
}]);

classRoomControllers.controller('AddcommentCtrl', ['$scope','$http','$routeParams', function($scope, $http,$routeParams){
	$scope.class = $routeParams.id;
	$http.get('../data/class.json').success(function(data){
		$scope.classlist = data;
		$scope.classes = data[$routeParams.id];
		$scope.topics = $scope.classes.topics;
		console.log($scope.topics);
	});

	$scope.submit = function(){
		$scope.message = "Post added Successfully!";
	}
	$scope.h = new Array();
	$scope.h[$routeParams.id] = true;
}]);

classRoomControllers.controller('EditCtrl', ['$scope','$http','$routeParams', function($scope, $http,$routeParams){

	$http.get('../data/class.json').success(function(data){
		$scope.classlist = data;
	});

	$scope.delete = function(){
		$scope.message = "";
		$scope.message1 = "Class deleted!"
	}

	$scope.submit = function(){
		$scope.message1 = "";
		$scope.message = "Class added!";
	}

	$scope.h = new Array();
	$scope.h[$routeParams.id] = true;

}]);




