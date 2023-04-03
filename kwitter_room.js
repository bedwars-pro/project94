var firebaseConfig = {
      apiKey: "AIzaSyA_LzD0vHvHRF_A1T01ZB4JwQ6qc9JOx1w",
      authDomain: "project93-ce57b.firebaseapp.com",
      databaseURL: "https://project93-ce57b-default-rtdb.firebaseio.com",
      projectId: "project93-ce57b",
      storageBucket: "project93-ce57b.appspot.com",
      messagingSenderId: "790945877350",
      appId: "1:790945877350:web:64f3adfe0083e3fc150ca7"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
localStorage.setItem("room_name",room_name);
}
function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}