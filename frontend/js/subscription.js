document.getElementById('Subscriptionform').addEventListener('submit', submitForm);

var email;
function submitForm(e) {
    e.preventDefault();
    email = getTnputValue('subscribedEmail');
    console.log(email);
    var today = new Date();
    var currentdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    saveMessage(email, currentdate);
}

function getTnputValue(id) {
    return document.getElementById(id).value;
}

function sendEmail(subscribedUser, email) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            for (let i = 0; i < subscribedUser.length; i++) {
                db.collection("subscribedUsers").doc(subscribedUser[i]).get().then((doc) => {
                    Email.send({
                        Host: "smtp.gmail.com",
                        SecureToken: "4ac43b13-87bf-48c4-9968-cff89a276b5f",
                        To: email,
                        From: "kashish.989392@gmail.com",
                        Subject: "Thankyou for contacting ResGrant",
                        Body: "We will reach out to you soon!"
                    }).then(function () {
                        console.log("email sent");
                    }).catch(function (error) {
                        console.log("Error sending email: " + error);
                    });
                });
            }
        }
    });

}


function saveMessage(email, currentdate) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection("subscribedUsers").add({
                email: email,
                date: currentdate
            }).then(function () {
                console.log("New user added to firestore");
                sendEmail(user.uid, email);
                var alertstr = "thank you for subscribing";
                alert(alertstr);
            }).catch(function (error) {
                console.log("Error adding new user: " + error);
            });
        }
    });
}

