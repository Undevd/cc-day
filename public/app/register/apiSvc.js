angular.module('myApp').factory('apiRegistration', function($resource) {
    var registrationResource = $resource('/api/registration/:registrationId', {registrationId: "@registrationId"}, {  });
        
    return registrationResource;
});