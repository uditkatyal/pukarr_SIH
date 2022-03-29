
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user.uid);
        console.log(user.email);
        $(document).ready(function () {
            const clientID = user.uid;
            db.collection("users").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    if (doc.id == clientID) {
                        const data = doc.data();
                        console.log(data.name);
                        // console.log($("#name"));
                        $("#name").text(data.name)
                        $("#location").text(data.location);
                        $("#greet").text("Hello "+data.name+", Welcome to your World of Grants!")
                        $("#Applications").text(data.Applications);
                        $("#offered").text(data.offered);
                        $("#awarded").text(data.awarded);
                        var budg= data.budget;
                        if(!budg)
                            budg=33;
                        console.log(budg);
                        $("#budget").text(budg+" %");
                        $("#cons1").text(data.consultant1);
                        $("#cons2").text(data.consultant2);

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
            window.location.assign("signIn.html");
        })
    }

    document.getElementById("logoutButton").onclick = logout;
    redirect("./sign.in");
});



    function addFile(){
        var x = document.getElementById("file");
        
          x.style.display = "block";  
    
        var y = document.getElementById("grantInfo");
        y.style.display="none";
    }
    
   
   // document.getElementById("tap").onclick = addFile;
