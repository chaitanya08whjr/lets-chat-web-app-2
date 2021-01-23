var firebaseConfig = {
    apiKey: "AIzaSyDQFdCrJC8LtX4dgxPmpe2v3gTkgd1_rTc",
    authDomain: "kwitter2-17b0d.firebaseapp.com",
    databaseURL: "https://kwitter2-17b0d-default-rtdb.firebaseio.com",
    projectId: "kwitter2-17b0d",
    storageBucket: "kwitter2-17b0d.appspot.com",
    messagingSenderId: "552430304796",
    appId: "1:552430304796:web:1a34c50cd77b4d2f17e9d9",
    measurementId: "G-2GK124LKPQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("James");
document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

function add_room() {
    room_name = document.getElementById("Room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey =
                    childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                var name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;

                //End code
            });
        });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}