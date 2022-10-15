//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCE6nbZz2JqxnbckP2oNZpsrmp7UC1QI3g",
      authDomain: "kwitter-2ae91.firebaseapp.com",
      databaseURL: "https://kwitter-2ae91-default-rtdb.firebaseio.com",
      projectId: "kwitter-2ae91",
      storageBucket: "kwitter-2ae91.appspot.com",
      messagingSenderId: "673238022269",
      appId: "1:673238022269:web:9156057811cd983eb71914"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    room_name=localStorage.getItem("roomname");
    document.getElementById("room").innerHTML="Roomname: "+room_name;
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}