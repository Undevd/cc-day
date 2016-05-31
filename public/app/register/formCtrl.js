angular.module('myApp').controller('formCtrl', function($scope) {
    $scope.page = 'Welcome',
    
    $scope.customer = [],
    $scope.customer.name = ""
    
    $scope.setPage = function(pageName) {
        console.log(pageName);
        $scope.page = pageName;
    }
});