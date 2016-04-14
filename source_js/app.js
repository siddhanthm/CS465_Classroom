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
	}).otherwise({ redirectTo: '/' });
});
