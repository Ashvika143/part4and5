// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBm5uOhcwj35JPlzgp5711JA2_WX3IDmm8",
    authDomain: "project101-8ed0e.firebaseapp.com",
    databaseURL: "https://project101-8ed0e-default-rtdb.firebaseio.com",
    projectId: "project101-8ed0e",
    storageBucket: "project101-8ed0e.appspot.com",
    messagingSenderId: "753821693541",
    appId: "1:753821693541:web:a9dcc4b39a7ad17bd2f88c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room_name -" + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItemm("room_name",name);
      window.location="chat_page.html" ;
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    }