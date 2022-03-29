
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user.uid);
        console.log(user.email);
        console.log(user.name);
        $(document).ready(function () {
            const clientID = user.uid;
            db.collection("users").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    if (doc.id == clientID) {
                        const data = doc.data();
                        console.log(user.name);
                        console.log($("#name"));
                        $("#name").text(data.name)
                        $("#location").text(data.location);
                        $("#Applications").text(data.Applications);
                        $("#offered").text(data.offered);
                        $("#awarded").text(data.awarded); 
                        $("#budget").text(data.budget);    
                    }
                });
            });
        });
    }
})


$(document).ready(function () {
    /**
     * @desc adds onClick to the logout button
     */
    function addOnClick() {
        document.getElementById("logoutButton").onclick = logout;
    }

    /**
     * @desc log out current logged in user.
     */
    function logout() {
        firebase.auth().signOut().then(function () {
            window.location.assign("login.html");
        })
    }

    document.getElementById("logoutButton").onclick = logout;
    redirect("./sign.in");
});

