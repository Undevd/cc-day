angular.module('myApp').controller('formCtrl', function($scope) {
    $scope.page = 'Welcome',
    
    $scope.name = "",
    $scope.contactnumber = "",
    $scope.emailaddr = "",
    $scope.nextofkin = "",
    $scope.nextofkincontactnumber = "",
    $scope.howdidyouhear = "",
    $scope.questadults = 0,
    $scope.questkids = 0,
    $scope.questmedical = "",
    $scope.walkadults = 0,
    $scope.walkkids = 0,
    $scope.activitytotalcost = (($scope.questadults + $scope.questkids) * 10) + ($scope.walkadults * 5) + ($scope.walkkids * 2.5),
    $scope.transportrequired = false,
    $scope.transporthowmany = 0,
    $scope.lunchadults = 0,
    $scope.lunchkids = 0,
    $scope.lunchdietaryreqs = "",
    
    $scope.setPage = function(pageName) {
        console.log(pageName);
        $scope.page = pageName;
    }
});