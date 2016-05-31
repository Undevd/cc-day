angular.module('myApp', ['ngResource', 'ngRoute']);

angular.module('myApp').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/register', {templateUrl: '/partials/register/register', controller: 'formCtrl'})
});

angular.module('myApp').run(function($rootScope) {

    //Set the default title
    var defaultTitle = 'CC Day';
});