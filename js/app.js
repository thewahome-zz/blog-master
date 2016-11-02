'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngRoute',
	'ngResource',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers',
	'ngToast'
	]).
config(['$routeProvider', function($routeProvider) {

	//Common
	$routeProvider.when('/', {templateUrl: 'partials/frontend/home.html', controller: 'HomeCtrl'});

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
	$routeProvider.when('/manage-blog', {templateUrl: 'partials/backend/manage-blog.html', controller: 'NewPostCtrl'});
	$routeProvider.when('/newpost', {templateUrl: 'partials/backend/newpost.html', controller: 'NewPostCtrl'});

	$routeProvider.otherwise({redirectTo: '/login'});
}])

.config(['ngToastProvider', function(ngToastProvider) {
  ngToastProvider.configure({
    animation: 'fade',
    horizontalPosition: 'center',
    maxNumber:1, 
    timeout:6000
  });
}])

.config(function ($httpProvider) {
  $httpProvider.responseInterceptors.push('myHttpInterceptor');

  var spinnerFunction = function spinnerFunction(data, headersGetter) {
    $("#spinner").show();
    return data;
  };

  $httpProvider.defaults.transformRequest.push(spinnerFunction);
})

.factory('myHttpInterceptor', function ($q, $window) {
  return function (promise) {
    return promise.then(function (response) {
      $("#spinner").hide();
      return response;
    }, function (response) {
      $("#spinner").hide();
      return $q.reject(response);
    });
  };
})

;
