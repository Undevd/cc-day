angular.module('myApp', ['ngResource', 'ngRoute']);

angular.module('myApp').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/about', { templateUrl: '/partials/greeting/about'})
        .when('/register', {templateUrl: '/partials/register/register', controller: 'formCtrl'})
        .when('/stroll', {templateUrl: '/partials/activities/walk'})
        .when('/challenge', {templateUrl: '/partials/activities/quest'})
        .when('/location', {templateUrl: '/partials/location/location'})
        .when('/contact', {templateUrl: '/partials/contact/contactus'})
});

angular.module('myApp').run(function($rootScope) {

    //Set the default title
    var defaultTitle = 'Sprint or Stroll';
});