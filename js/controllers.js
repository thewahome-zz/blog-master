'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('RegistrationCtrl', ['$scope', '$http', '$location', 'headerFooterData','ngToast', 
    function ($scope, $http, $location, headerFooterData, ngToast) {

        headerFooterData.getHeaderFooterData().then(function (data) {
            // console.log(data);
            if (data.success === true) {
                $location.path('home').replace();
            } else {
                $scope.nav = data.menu;
            }
        });

        var loadCSRFToken = function () {
            $http.get('api/registration')
            .success(function (data, status, headers, config) {
                    // console.log(data);
                    $scope.csrf_cookie_name = data.csrf_cookie_name;
                })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });

            });
        };
        // loadCSRFToken();checkUsername

        $scope.checkUsername = function () {
            if ($scope.username == '') {
                $scope.usernameCheck = '';
                return false;
            }
            $http.post('api/registration/check_username', {'username': $scope.username})
            .success(function (data, status, headers, config) {
                $scope.usernameCheck = data.message;
            })
        }

        $scope.checkEmail = function () {
            if ($scope.email == '') {
                $scope.emailCheck = '';
                return false;
            }
            $http.post('api/registration/check_email', {'email': $scope.email})
            .success(function (data, status, headers, config) {
                $scope.emailCheck = data.message;
            })
        }


        $scope.signup = function () {
            if ($scope.password !== $scope.repassword)
                return false;

            // 'csrf_cookie_name' : $scope.csrf_cookie_name,

            var data = {
                'username': $scope.username,
                'email': $scope.email,
                'password': $scope.password,
                'repassword': $scope.repassword
            };

            // console.log(data);

            $http.post('api/registration/signup', data)
            .success(function (data, status, headers, config) {
                    // console.log(data);
                    if (data.success == true) {
                        $location.path(data.url).replace();
                    }
                    ;
                })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });

            });
        };
    }])

.controller('LoginCtrl', ['$scope', '$http', '$location', 'headerFooterData','ngToast', 
    function ($scope, $http, $location, headerFooterData, ngToast) {

        headerFooterData.getHeaderFooterData().then(function (data) {
            // console.log(data);
            if (data.success === true) {
                $location.path('home').replace();
            } else {
                $scope.nav = data.menu;
            }
        });


        $scope.login = function () {
            var login = {
                'username': $scope.username,
                'password': $scope.password
            };

            $http.post('api/login/login_check', login)
            .success(function (data, status, headers, config) {
                    // console.log(data);

                    if (data.success == true) {
                        $location.path(data.url).replace();
                    } else {
                        ngToast.create({ className: 'danger', content: data.message });

                    }
                    ;
                })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });

            });
        }
    }])

.controller('HomeCtrl', ['$scope', '$http','$resource', '$location', 'headerFooterData','ngToast',
    function ($scope, $http, $resource, $location, headerFooterData, ngToast) {
        headerFooterData.getHeaderFooterData().then(function (data) {
            console.log(data);
                /*if(data.success === false)
                $location.path('login').replace();*/

                $scope.nav = data.menu;
                //console.log(data);
                //getAllPost($scope.limit,$scope.offset);
            });
          $scope.resultsPerPage = 5;
          $scope.page = 1;
          $scope.searchTerm = "angularjs";

          $scope.twitter = $resource('https://jsonplaceholder.typicode.com',
            
            { get: { method:'JSONP' } });

          $scope.load = function() {
            $scope.twitter.get(function(data) {
              $scope.tweets = data.results;
              console.log(data);
            });
          };
    }])

.controller('NewPostCtrl', ['$scope', '$http', '$location', 'headerFooterData','ngToast', 
    function ($scope, $http, $location, headerFooterData, ngToast) {

        headerFooterData.getHeaderFooterData().then(function (data) {
            // console.log(data);
            if (data.success === false)
                $location.path('login').replace();
            $scope.limit = 5;
            $scope.offset = 0;
            $scope.nav = data.menu;
            getAllPost($scope.limit, $scope.offset);

        });

        $scope.submitPost = function () {

            if ($scope.title == '' || $scope.details == '') {
                alert("Please fill data properly!");
                return false;
            }


            var data = {
                title: $scope.title,
                details: $scope.details
            }

            $http.post('api/users/submit_new_post', data)
            .success(function (data, status, headers, config) {
                    //console.log(data);
                    
                    $scope.title = '';
                    $scope.details = '';
                    ngToast.create({ className: 'success', content: data.message });
                })
            .error(function (data, status, headers, config) {
                ngToast.create({className: 'danger',content: data.message});
            });
        }

        $scope.deletePost=function(post){
            $http.post('api/users/deletePost/', {'id': post})
            .success(function (data, status, headers, config) {
                ngToast.create({ className: 'success', content: data.message });
                getAllPost($scope.limit, $scope.offset);
            })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });
            });
        }

        var getAllPost = function (limit, offset) {
            $http.get('api/users/get_all_home_post/' + limit + '/' + offset)
            .success(function (data, status, headers, config) {
                $scope.error = '';
                    //console.log(data);
                    if (data.success === true) {
                        $scope.allPost = data.posts;
                    } else {
                        $scope.error = data.message;
                    }
                })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });
            });
        }


    }])

.controller('ProfileCtrl', ['$scope', '$http', '$location', 'headerFooterData','ngToast', 'UserService',
    function ($scope, $http, $location, headerFooterData, ngToast, User) {

        headerFooterData.getHeaderFooterData().then(function (data) {
                // console.log(data);
                if (data.success === false)
                    $location.path('login').replace();

                $scope.nav = data.menu;
                //console.log($scope.nav);
            });


        $http.get('api/users/user_details')
        .success(function (data, status, headers, config) {
                    // console.log(data);
                    if (data.success === true) {
                        $scope.userdata = data.userdata;
                    } else {
                        ngToast.create({ className: 'danger', content: data.message });

                    }
                })
        .error(function (data, status, headers, config) {
            ngToast.create({ className: 'danger', content: data.message });

        });
    }])

.controller('BlogCtrl', ['$scope', '$http', '$location', 'headerFooterData','ngToast', 
    function ($scope, $http, $location, headerFooterData, ngToast) {

        $scope.limit = 5;
        $scope.offset = 0;
        headerFooterData.getHeaderFooterData().then(function (data) {
            // console.log(data);
            if (data.success === false)
                $location.path('login').replace();

            $scope.nav = data.menu;
            getAllPost($scope.limit, $scope.offset);
        });
        // return false;


        // $scope.allPost;

        var getAllPost = function (limit, offset) {
            $http.get('api/users/get_all_home_post/' + limit + '/' + offset)
            .success(function (data, status, headers, config) {
                $scope.error = '';
                    //console.log(data);
                    if (data.success === true) {
                        $scope.allPost = data.posts;
                    } else {
                        $scope.error = data.message;
                    }
                })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });

            });
        }
    }])

.controller('PostCtrl', ['$scope', '$http', '$location', '$routeParams', 'headerFooterData','ngToast', 
    function ($scope, $http, $location, $routeParams, headerFooterData, ngToast) {

        headerFooterData.getHeaderFooterData().then(function (data) {
            // console.log(data);
            if (data.success === false)
                $location.path('login').replace();

            $scope.nav = data.menu;
            $scope.limit = 5;
            $scope.offset = 0;
            getPostDetails($routeParams["id_posts"]);
            getAllComments($routeParams["id_posts"]);
            getAllPost($scope.limit, $scope.offset);
        });
        $scope.likes = 0;
        $scope.favorites = 0;
        $scope.showLike = true;
        $scope.showFavorite = true;
        // console.log($routeParams["id_posts"]);
        // return false;
        var getPostDetails = function (id_posts) {
            $http.get('api/users/post_details/' + id_posts)
            .success(function (data, status, headers, config) {
                console.log(data);
                if (data.success === true) {
                    $scope.post = data.post;
                    $scope.showLike = data.post.liked;
                    $scope.showFavorite = data.post.added_to_favorite;
                    $scope.likes = data.likes_favorites.likes;
                    $scope.favorites = data.likes_favorites.favorites;
                        // console.log($scope.showFavorite);
                    } else {
                        ngToast.create({ className: 'info', content: data.message });

                    }
                })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });

            });
        };

        var getAllComments = function (id_posts) {
            $http.get('api/users/all_comments/' + id_posts)
            .success(function (data, status, headers, config) {
                    // console.log(data);
                    $scope.error = '';
                    if (data.success === true) {
                        $scope.comments = data.comments;
                    } else {
                        $scope.error = data.message;
                    }
                })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });

            });
        }

        var getAllPost = function (limit, offset) {

            $http.get('api/users/get_all_home_post/' + limit + '/' + offset)
            .success(function (data, status, headers, config) {

                $scope.error = '';
                if (data.success === true) {
                    $scope.allPosts = data.posts;
                } else {
                    $scope.error = data.message;
                }
            })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });
            });
        }

        $scope.commentSubmit = function () {
            if ($scope.comment == '') {
                ngToast.create({ className: 'warning', content: 'Please put a comment first' });

                return false;
            }
            ;
            var comment = {
                'id_posts': $routeParams["id_posts"],
                'comment': $scope.comment
            }
            $http.post('api/users/submit_comment/', comment)
            .success(function (data, status, headers, config) {
                    // console.log(data);
                    $scope.comment = '';
                    getAllComments($routeParams["id_posts"]);
                    ngToast.create({ className: 'danger', content: data.message });


                })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });

            });
        }

        $scope.likeFavoriteSubmit = function (type) {
            if (type == '')
                return false;
            var id_posts = $routeParams["id_posts"];

            $http.get('api/users/submit_like_favorite/' + id_posts + '/' + type)
            .success(function (data, status, headers, config) {
                    // console.log(data);
                    if (data.success) {
                        $scope.likes = data.likes_favorites.likes;
                        $scope.favorites = data.likes_favorites.favorites;

                        if (type == 'l')
                            $scope.showLike = true;
                        if (type == 'f')
                            $scope.showFavorite = true;
                    }
                    ;
                    ngToast.create({ className: 'success', content: data.message });

                })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });

            });
        }

        $scope.likeFavoriteWithdraw = function (type) {

            $http.get('api/users/remove_likes_favorites/' + $routeParams["id_posts"] + '/' + type)
            .success(function (data, status, headers, config) {
                console.log(data);
                if (data.success === true) {
                    if (type == 'l')
                        $scope.showLike = false;
                    if (type == 'f')
                        $scope.showFavorite = false;
                }

                ngToast.create({ className: 'danger', content: data.message });

            })
            .error(function (data, status, headers, config) {
                ngToast.create({ className: 'danger', content: data.message });

            });
        }
    }])

.controller('LogoutCtrl', ['$scope', '$http', '$location', 'headerFooterData','ngToast', 
    function ($scope, $http, $location, headerFooterData, ngToast) {

        $http.get('api/users/logout')
        .success(function (data, status, headers, config) {
            headerFooterData.getHeaderFooterData().then(function (data) {
                $scope.nav = data.menu;
            });
        })
        .error(function (data, status, headers, config) {
            ngToast.create({ className: 'danger', content: data.message });

        });
    }]);
// .controller('MenuCtrl', ['$scope','$location','headerFooterData','ngToast', function($scope,$location,headerFooterData) {

// headerFooterData.getHeaderFooterData().then(function(data) {
// 	console.log(data);
// 	if(data.success === true){
// 		$location.path(data.url).replace();
// 	}else{
// 		$scope.nav = data.menu;
// 	}
// });


// }]);
