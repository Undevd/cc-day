angular.module('myApp').controller('formCtrl', function($scope) {
    $scope.page = 'Welcome',
    
    $scope.details = [],
    $scope.details.name = "",
    $scope.details.contactnumber = "",
    $scope.details.emailaddr = "",
    $scope.details.nextofkin = [],
    $scope.details.nextofkin.name = "",
    $scope.details.nextofkin.contactnumber = "",
    $scope.details.howdidyouhear = "",
    $scope.activities = [],
    $scope.activities.quest = [],
    $scope.activities.quest.adults = 0,
    $scope.activities.quest.kids = 0,
    $scope.activities.quest.medical = "",
    $scope.activities.walk = [],
    $scope.activities.walk.adults = 0,
    $scope.activities.walk.kids = 0,
    $scope.activities.totalcost = (($scope.activities.quest.adults + $scope.activities.quest.kids) * 10) + ($scope.activities.walk.adults * 5) + ($scope.activities.walk.kids * 2.5),
    $scope.transport = [],
    $scope.transport.required = false,
    $scope.transport.howmany = 0,
    $scope.lunch = [],
    $scope.lunch.adults = 0,
    $scope.lunch.kids = 0,
    $scope.lunch.dietaryreqs = "",
    
    $scope.setPage = function(pageName) {
        console.log(pageName);
        $scope.page = pageName;
    }
});