'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var app = angular.module('myApp.services', []);

/*.factory('headerFooterData', ['$http', '$q',
         function($http, $q) {
         	return {
         		getHeaderFooterData: function(type) {
         			var deferred = $q.defer();
         			$http.get('api/menus/').success(function(data) {
         				deferred.resolve(data);
         			}).error(function() {
         				deferred.reject();
         			});
         			return deferred.promise;
         		}
         	};
         }])
         .value('version', '0.1');*/


         app.factory('UserService', [function() {
          return {
            isLogged: false,
            username: ''
          };
        }]);

         app.factory('headerFooterData', ['$http', '$q',
           function($http, $q) {
            return {
             getHeaderFooterData: function(type) {
              var deferred = $q.defer();
              $http.get('api/menus/').success(function(data) {
               deferred.resolve(data);
             }).error(function() {
               deferred.reject();
             });
             return deferred.promise;
           }
         };
       }]);
