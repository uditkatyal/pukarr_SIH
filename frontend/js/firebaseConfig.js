//Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp57XoebEHzp_-uS5NGj2sXlW6ychlmtk",
  authDomain: "sih2022-9179d.firebaseapp.com",
  projectId: "sih2022-9179d",
  storageBucket: "sih2022-9179d.appspot.com",
  messagingSenderId: "813682700197",
  appId: "1:813682700197:web:6d22b7c5c701d19cc2824c"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
var docRef = db.collection("users");
var subscribedRef = db.collection("subscribedUsers");
var servicesRef = db.collection("demoInfo");
// var messageRef = db.collection("contacts");
// var payRef = db.collection("payment");
