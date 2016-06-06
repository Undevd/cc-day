angular.module('myApp').factory('dbSvc', function(apiRegistration) {
	return {
		createRegistration: function(newRegistrationData) {
			return new apiRegistration(newRegistrationData).$save();
		}
	};
});