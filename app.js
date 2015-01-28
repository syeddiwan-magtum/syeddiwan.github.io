'use strict';
var app = angular.module('SampleMVCApp', ['ngRoute'

]).config(function ($routeProvider) {
    $routeProvider
        .when('/user', {
            templateUrl:'features/users/views/userdetail.html',
            controller:'UserDetailController'
        }).
        otherwise({
            redirectTo: '/user'
    });

});


