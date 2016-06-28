angular.module('myApp').controller('formCtrl', function($scope, dbSvc) {
    $scope.page = 'Welcome',
    
    $scope.details = [],
    $scope.details.name = "",
    $scope.details.contactnumber = "",
    $scope.details.emailaddr = "",
    $scope.details.nextofkin = [],
    $scope.details.nextofkin.name = "",
    $scope.details.nextofkin.contactnumber = "",
    $scope.details.howdidyouhear = "",
    $scope.details.disabled = true,
    $scope.activities = [],
    $scope.activities.quest = [],
    $scope.activities.quest.adults = 0,
    $scope.activities.quest.kids = 0,
    $scope.activities.quest.medical = "",
    $scope.activities.walk = [],
    $scope.activities.walk.adults = 0,
    $scope.activities.walk.kids = 0,
    $scope.activities.totalcost = 0.00,
    $scope.transport = [],
    $scope.transport.required = false,
    $scope.transport.howmany = 0,
    $scope.lunch = [],
    $scope.lunch.adults = 0,
    $scope.lunch.kids = 0,
    $scope.lunch.dietaryreqs = "",
    
    $scope.setPage = function(pageName) {
        $scope.page = pageName;
    },

    $scope.calculateTotal = function() {
        var temp = ($scope.activities.quest.adults * 10) + ($scope.activities.quest.kids * 10) + ($scope.activities.walk.adults * 5) + ($scope.activities.walk.kids * 2.5);
        $scope.activities.totalcost = temp.toFixed(2)
    },

    $scope.validatePerson = function() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if($scope.details.name != "" && re.test($scope.details.emailaddr)) {
            $scope.details.disabled = false;
        }
        else {
            $scope.details.disabled = true;
        }
    },
    
    $scope.submit = function() {
        var newRegistration = {
            name: $scope.details.name,
            contact_number: $scope.details.contactnumber,
            email_addr: $scope.details.emailaddr,
            next_of_kin: $scope.details.nextofkin.name,
            next_of_kin_contact_number: $scope.details.nextofkin.contactnumber,
            how_did_you_hear: $scope.details.howdidyouhear,
            activities_quest_adults: $scope.activities.quest.adults,
            activities_quest_kids: $scope.activities.quest.kids,
            activities_quest_medical: $scope.activities.quest.medical,
            activities_walk_adults: $scope.activities.walk.adults,
            activities_walk_kids: $scope.activities.walk.kids,
            activities_totalcost: $scope.activities.totalcost,
            transport_required: $scope.transport.required,
            transport_howmany: $scope.transport.howmany,
            lunch_adults: $scope.lunch.adults,
            lunch_kids: $scope.lunch.kids,
            lunch_dietaryreqs: $scope.lunch.dietaryreqs
        };
        
        //Send the registration to the server
        dbSvc.createRegistration(newRegistration).then(function(registration) {

            //Redirect to view the submission successful page
            $scope.setPage("Submission Successful");

        }, function(error) {

            //Redirect to view the submission failed page
            $scope.setPage("Submission Failed");
        });
    }
});