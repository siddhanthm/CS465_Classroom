var app = angular.module('mp3',['ngRoute','classRoomControllers']);

app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: './partials/FrontPage.html',
		controller: 'FrontPageController'
	}).when('/login', {
		templateUrl: './partials/login.html',
		controller: 'LoginCtrl'
	}).when('/signup', {
		templateUrl: './partials/signup.html',
		controller: 'SignupCtrl'
	}).when('/class/:id', {
		templateUrl: './partials/class.html',
		controller: 'ClassCtrl'
	}).when('/class/:id/officehours', {
		templateUrl: './partials/officehours.html',
		controller: 'ohCtrl'
	}).when('/class/:id/TAofficehours', {
		templateUrl: './partials/TAofficehours.html',
		controller: 'taohCtrl'
	}).when('/class/:id/addpost', {
		templateUrl: './partials/addcomment.html',
		controller: 'AddcommentCtrl'
	}).when('/edit', {
		templateUrl: './partials/editclass.html',
		controller: 'EditCtrl'
	}).when('/class/:id/:postid/instructor', {
		templateUrl: './partials/post.html',
		controller: 'PostidInsCtrl'
	}).when('/class/:id/:postid/student', {
		templateUrl: './partials/post.html',
		controller: 'PostidStudentCtrl'
	}).when('/TAclass/:id', {
		templateUrl: './partials/TAClass.html',
		controller: 'ClassCtrl'
	}). otherwise({ redirectTo: '/' });
});
