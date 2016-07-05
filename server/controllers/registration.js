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
                        <head>
                            <style>
                                body {
                                        margin: 5pc;
                                        font-size: 12pt;
                                        font-family: Arial, Helvetica, sans-serif;
                                    }

                                    h3{
                                        color: darkgoldenrod;
                                        text-align: center;
                                        padding-bottom: 10px;
                                    }

                                    h4{
                                        color: darkgoldenrod;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                    }
                                    .well {
                                        min-height: 20px;
                                        padding: 19px;
                                        margin-bottom: 20px;
                                        background-color: #f5f5f5;
                                        border: 1px solid #e3e3e3;
                                        border-radius: 4px;
                                        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
                                                box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
                                    }
                            </style>
                        </head>
                        <body>
                            <div class="well">
                                <h3>Thank you for registering for Stroll or Sprint!</h3>
                                <h3>We look forward to seeing you on Saturday 13th August!</h3>
                                <p>The colour theme for the event is yellow, supporting SOS Bus NI, so it would be great if everyone managed to find something yellow to wear on the day.</p>
                                <p>
                                    <b>Some useful information:</b>
                                </p>
                                <p>Registration begins at 09:30 for Team Adventure Challenge event and 10:00 for Lakeside Walk and Spectators event.</p>
                                <p>Remember if you have requested a seat on the mini bus you will receive confirmation <b>separately</b>.</p>
                                <p>
                                    <b>FAQs... Clothing/Equipment?</b>
                                </p>
                                <p>As a guide we would suggest you bring...</p>
                                <ul>
                                    <li>Waterproof trousers/ Tracksuit bottoms</li>
                                    <li>T-shirts or thermal tops</li>
                                    <li>Warm jacket/ fleece,</li>
                                    <li>Socks & underwear</li>
                                    <li>Footwear (Wellies and sturdy boots/shoes)</li>
                                    <li>Warm hat & gloves and a;</li>
                                    <li>Towel!</li>
                                </ul>
                                <p>If participating in water based activities also bring...</p>
                                <ul>
                                    <li>Swimming costumes or shorts</li>
                                    <li>Trainers (old)</li>
                                    <li>More Towels!!!</li>
                                </ul>
                                <p>And finally you might find these useful...</p>
                                <ul>
                                    <li>Polythene bag for dirty/ wet laundry</li>
                                </ul>
                                <p>The above needs to be brought in addition to the clothes you wear to and from the centre!</p>
                                <p>The Life Team advise that you do not bring any valuables!</p>
                                <p>
                                    <b>For more information please visit our website, <a href="https://www.strollorsprint.co.uk" target="_blank">www.strollorsprint.co.uk</a> or email <a href="mailto:cdsi-csr@civica.co.uk">cdsi-csr@civica.co.uk</a>.</b>
                                </p> 

                                <p>
                                    <b>All fundraising proceeds from this event will go to SOS Bus NI, the chosen charity of Shane Mullan's Family</b>
                                </p>
                            </div>
                            <body>
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
                        <head>
                            <style>
                                body {
                                        margin: 5pc;
                                        font-size: 12pt;
                                        font-family: Arial, Helvetica, sans-serif;
                                    }

                                    h3{
                                        color: darkgoldenrod;
                                        text-align: center;
                                        padding-bottom: 10px;
                                    }

                                    h4{
                                        color: darkgoldenrod;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                    }
                                    .well {
                                        min-height: 20px;
                                        padding: 19px;
                                        margin-bottom: 20px;
                                        background-color: #f5f5f5;
                                        border: 1px solid #e3e3e3;
                                        border-radius: 4px;
                                        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
                                                box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
                                    }
                            </style>
                        </head>
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