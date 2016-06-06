var Registration = require('mongoose').model('Registration');

//Creates a new registration
exports.createRegistration = function(request, response) {

    //Get the registration data from the request
    var registrationData = request.body;

    //Sanitise the data
    var newRegistrationData = {
        name: registrationData.name,
        contact_number: registrationData.contact_number,
        email_addr: registrationData.email_addr,
        next_of_kin: registrationData.next_of_kin,
        next_of_kin_contact_number: registrationData.next_of_kin_contact_number,
        how_did_you_hear: registrationData.how_did_you_hear,
        activities_quest_adults: registrationData.activities_quest_adults,
        activities_quest_kids: registrationData.activities_quest_kids,
        activities_quest_medical: registrationData.activities_quest_medical,
        activities_walk_adults: registrationData.activities_walk_adults,
        activities_walk_kids: registrationData.activities_walk_kids,
        activities_totalcost: registrationData.activities_totalcost,
        transport_required: registrationData.transport_required,
        transport_howmany: registrationData.transport_howmany,
        lunch_adults: registrationData.lunch_adults,
        lunch_kids: registrationData.lunch_kids,
        lunch_dietaryreqs: registrationData.lunch_dietaryreqs
    };

    //Create the registration
    Registration.createRegistration(newRegistrationData).then(function(code) {

        //Set the success status and send the new registration code
        response.status(201).send({code: code});

    }, function(error) {

        //Set the error status and send the error message
        response.status(400).send({code: error.code, message: error.errmsg});
    });
}