var Registration = require('mongoose').model('Registration');
var SparkPost = require('sparkpost');
var sparky = new SparkPost();

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
        console.log('Success, sending e-mail to: ' + registrationData.email_addr);
        sparky.transmissions.send({
            transmissionBody: {
                content: {
                from: 'registration@strollorsprint.co.uk',
                subject: 'Stroll or sprint for Shane',
                html:`<html>
                        <body>
                            <h1>Stroll or sprint for Shane</h1>
                            <p>Hi ` + registrationData.name + `,</p>
                            <p>Thanks for registering for the event and we look forward to seeing you there.</p>
                        </body>
                    </html>`
                },
                recipients: [
                {address: registrationData.email_addr}
                ]
            }
            }, function(err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log('Confirmation e-mail sent to: ' + registrationData.email_addr);
            }
        });

        
        sparky.transmissions.send({
            transmissionBody: {
                content: {
                from: 'registration@strollorsprint.co.uk',
                subject: 'Registration Received',
                html:`<html>
                        <body>
                            <p>A registration has been received:</p>
                            <h4>Details</h4>
                            <ul>
                                <li>Name: ` + registrationData.name + `</li>
                                <li>Contact Number: ` + registrationData.contact_number + `</li>
                                <li>E-mail: ` + registrationData.email_addr + `</li>
                                <li>Next of kin: ` + registrationData.next_of_kin + `</li>
                                <li>Next of kin contact number: ` + registrationData.next_of_kin_contact_number + `</li>
                                <li>How did you hear: ` + registrationData.how_did_you_hear + `</li>
                            </ul>
                            <h4>Activities</h4>
                            <ul>
                                <li>Quest Adults: ` + registrationData.activities_quest_adults + `</li>
                                <li>Quest Kids: ` + registrationData.activities_quest_kids + `</li>
                                <li>Quest Medical: ` + registrationData.activities_quest_medical + `</li>
                                <li>Walk Adults: ` + registrationData.activities_walk_adults + `</li>
                                <li>Walk Kids: ` + registrationData.activities_walk_kids + `</li>
                                <li>Total Cost: ` + registrationData.activities_totalcost + `</li>
                            </ul>
                            <h4>Transport</h4>
                            <ul>
                                <li>Transport Required: ` + registrationData.transport_required + `</li>
                                <li>Transport How Many: ` + registrationData.transport_howmany + `</li>
                            </ul>
                            <h4>Lunch</h4>
                            <ul>
                                <li>Lunch Adukts: ` + registrationData.lunch_adults + `</li>
                                <li>Lunch Kids: ` + registrationData.lunch_kids + `</li>
                                <li>Dietary Requirements: ` + registrationData.lunch_dietaryreqs + `</li>
                            </ul>
                        </body>
                    </html>`
                },
                recipients: [
                {address: process.env.REGISTRATION_INBOX}
                ]
            }
            }, function(err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log('Registration e-mail sent to: ' + process.env.REGISTRATION_INBOX);
            }
        });

        //Set the success status and send the new registration code
        response.status(201).send({code: code});

        

    }, function(error) {

        //Set the error status and send the error message
        response.status(400).send({code: error.code, message: error.errmsg});
    });
}