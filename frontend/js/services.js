document.getElementById('demoForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var firstName = getInputValue('fname');
    var lastName = getInputValue('lname')
    var email = getInputValue('email');
    var phone = getInputValue('Phone');
    var location = getInputValue('location');
    var qualification = getInputValue('qualification');
    var domain = getInputValue('domain');
    var organization = getInputValue('organization');
    var file = getInputValue('research_ppr');
    var name = firstName + lastName;
    saveMessage(name, email, phone, location, qualification, domain, organization, file);
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, phone, location, qualification, domain, organization, file) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection("demoInfo").add({
                name: name,
                email: email,
                phone: phone,
                location: location,
                qualification: qualification,
                domain: domain,
                organization: organization,
                file: file
            }).then(function () {
                console.log("New user added to firestore");
                // sendMail();
                //  window.location.assign("mainClient.html");
            }).catch(function (error) {
                console.log("Error adding new user: " + error);
            });
        }
    });
}