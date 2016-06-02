angular.module('myApp', ['ngResource', 'ngRoute']);

angular.module('myApp').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/about', { templateUrl: '/partials/greeting/about'})
        .when('/register', {templateUrl: '/partials/register/register', controller: 'formCtrl'})
        .when('/walk', {templateUrl: '/partials/activities/walk'})
        .when('/quest', {templateUrl: '/partials/activities/quest'})
        .when('/contact', {templateUrl: '/partials/contact/contactus'})
});

angular.module('myApp').run(function($rootScope) {

    //Set the default title
    var defaultTitle = 'CC Day';
});