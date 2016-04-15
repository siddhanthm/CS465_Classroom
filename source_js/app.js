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
	}).when('/class/:id/:postid', {
		templateUrl: './partials/post.html',
		controller: 'PostidCtrl'
	}).otherwise({ redirectTo: '/' });
});
