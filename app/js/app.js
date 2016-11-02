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
	$routeProvider.when('/registration', {templateUrl: 'partials/registration.html', controller: 'RegistrationController'});
	$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginController'});
	$routeProvider.when('/logout', {templateUrl: 'partials/logout.html', controller: 'LogoutController'});
	$routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'ProfileController'});

	// Frontend
	$routeProvider.when('/home', {templateUrl: 'partials/frontend/home.html', controller: 'HomeController'});
	$routeProvider.when('/blog', {templateUrl: 'partials/frontend/blog.html', controller: 'BlogController'});
	$routeProvider.when('/post/:id_posts', {templateUrl: 'partials/frontend/post.html', controller: 'PostController'});

	// Backend
	$routeProvider.when('/dashboard', {templateUrl: 'partials/backend/home.html', controller: 'HomeController'});
	$routeProvider.when('/manage-blog', {templateUrl: 'partials/backend/manage-blog.html', controller: 'BlogController'});
	$routeProvider.when('/newpost', {templateUrl: 'partials/backend/newpost.html', controller: 'NewpostController'});

	$routeProvider.otherwise({redirectTo: '/login'});
}]);
