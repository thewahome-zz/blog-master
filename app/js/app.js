'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
	]).
config(['$routeProvider', function($routeProvider) {

	//Common
	$routeProvider.when('/registration', {templateUrl: 'partials/registration.html', controller: 'RegistrationCtrl'});
	$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
	$routeProvider.when('/logout', {templateUrl: 'partials/logout.html', controller: 'LogoutCtrl'});
	$routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'ProfileCtrl'});

	// Frontend
	$routeProvider.when('/home', {templateUrl: 'partials/frontend/home.html', controller: 'HomeCtrl'});
	$routeProvider.when('/blog', {templateUrl: 'partials/frontend/blog.html', controller: 'BlogCtrl'});
	$routeProvider.when('/post/:id_posts', {templateUrl: 'partials/frontend/post.html', controller: 'PostCtrl'});

	// Backend
	$routeProvider.when('/dashboard', {templateUrl: 'partials/backend/home.html', controller: 'HomeCtrl'});
	$routeProvider.when('/manage-blog', {templateUrl: 'partials/backend/manage-blog.html', controller: 'BlogCtrl'});
	$routeProvider.when('/newpost', {templateUrl: 'partials/backend/newpost.html', controller: 'NewPostCtrl'});

	$routeProvider.otherwise({redirectTo: '/login'});
}]);
