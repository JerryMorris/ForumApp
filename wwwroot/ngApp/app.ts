namespace FF1 { 

    angular.module('FF1', ['ngRoute', 'ngResource',]).config((
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        $routeProvider
            .when('/', {
                templateUrl: '/ngApp/views/home.html',
                controller: FF1.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .when('/login', {
                templateUrl: '/ngApp/views/login.html',
                controller: FF1.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .when('/register', {
                templateUrl: '/ngApp/views/register.html',
                controller: FF1.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .when('/addPost', {
                templateUrl: '/ngApp/views/addPost.html',
                controller: FF1.Controllers.AddPostController,
                controllerAs: 'controller'
            })
            .when('/addTopic', {
                templateUrl: '/ngApp/views/addTopic.html',
                controller: FF1.Controllers.AddTopicController,
                controllerAs: 'controller'
            })
            .when('/deletePost/:id', {
                templateUrl: '/ngApp/views/deletePost.html',
                controller: FF1.Controllers.DeletePostController,
                controllerAs: 'controller'
            })
            .when('/deletereply/:id', {
                templateUrl: '/ngApp/views/deleteReply.html',
                controller: FF1.Controllers.DeleteReplyController,
                controllerAs: 'controller'
            })
            .when('/deleteTopic/:id', {
                templateUrl: '/ngApp/views/deleteTopic.html',
                controller: FF1.Controllers.DeleteTopicController,
                controllerAs: 'controller'
            })
            .when('/editPost/:id', {
                templateUrl: '/ngApp/views/editPost.html',
                controller: FF1.Controllers.EditPostController,
                controllerAs: 'controller'
            })
            .when('/editReply/:id', {
                templateUrl: '/ngApp/views/editReply.html',
                controller: FF1.Controllers.EditReplyController,
                controllerAs: 'controller'
            })
            .when('/admin', {
                templateUrl: '/ngApp/views/admin.html',
                controller: FF1.Controllers.AdminController,
                controllerAs: 'controller'
            })
            .when('/search', {
                templateUrl: '/ngApp/views/search.html',
                controller: FF1.Controllers.SearchController,
                controllerAs: 'controller'
            })
            .when('/viewPost/:id', {
                templateUrl: '/ngApp/views/viewPost.html',
                controller: FF1.Controllers.ViewPostController,
                controllerAs: 'controller'
            });
        $locationProvider.html5Mode(true);
    });
    angular.module('FF1').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('FF1').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });



}