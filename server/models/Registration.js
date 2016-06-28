var mongoose = require('mongoose');

var registrationSchema = mongoose.Schema({
    name: {type: String, required: true},
    contact_number: {type: String},
    email_addr: {type: String, required: true},
    next_of_kin: {type: String},
    next_of_kin_contact_number: {type: String},
    how_did_you_hear: {type: String},
    activities_quest_adults: {type: Number, default: 0},
    activities_quest_kids: {type: Number, default: 0},
    activities_quest_medical: {type: String},
    activities_walk_adults: {type: Number, default: 0},
    activities_walk_kids: {type: Number, default: 0},
    activities_totalcost: {type: String},
    transport_required: {type: Boolean, default: false},
    transport_howmany: {type: Number, default: 0},
    lunch_adults: {type: Number, default: 0},
    lunch_kids: {type: Number, default: 0},
    lunch_dietaryreqs: {type: String},
});

registrationSchema.methods = { };

//Creates a new registration
registrationSchema.statics.createRegistration = function createRegistration(newRegistrationData) {
    
    //Return a promise
    return new Promise(function(resolve, reject) {

        //Create the registration
        mongoose.model('Registration').create(newRegistrationData, function(error, registration) {

            //If an error occurred
            if(error) {

                //If the error code was 11000
                if (error.code == 11000) {

                    //Update the error message to be more user friendly
                    error.errmsg = 'A registration with the same code already exists.';
                }

                //Return the error
                reject(error);
            }
            else {

                //Otherwise, return the registration code
                resolve(registration.code);
            }
        });
    });
}

var Registration = mongoose.model('Registration', registrationSchema);