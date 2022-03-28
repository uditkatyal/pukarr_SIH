document.getElementById('Subscriptionform').addEventListener('submit', submitForm);

var email;
function submitForm(e) {
    e.preventDefault();
    email = getTnputValue('subscribedEmail');
    var today = new Date();
    var currentdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    saveMessage(email, currentdate);
}

function getTnputValue(id) {
    return document.getElementById(id).value;
}

function sendEmail(subscribedUser) {
    let users = [subscribedUser];
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            for (let i = 0; i < users.length; i++) {
                db.collection("subscribedUsers").doc(users[i].get().then((doc) => {
                    Email.send({
                        //Host: "smtp.gmail.com",
                        SecureToken: "10263b94-1b8b-42c2-b83c-ff155e980fc5",
                        To: doc.data().email,
                        From: "aashma.2008@gmail.com",
                        Subject: "Thankyou for contacting ResGrant",
                        Body: "We will reach out to you soon!"
                    }).then(function () {
                        console.log("email sent");
                    }).catch(function (error) {
                        console.log("Error sending email: " + error);
                    });
                }));
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
                sendEmail(user.uid);
                var alertstr = "thank you for subscribing";
                alert(alertstr);
            }).catch(function (error) {
                console.log("Error adding new user: " + error);
            });
        }
    });
}

