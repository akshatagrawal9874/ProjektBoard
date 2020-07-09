
var firebaseConfig = {
    apiKey: "AIzaSyASvw80DuelGaKx3v3NoK4eo13tT_C1Q7U",
    authDomain: "dpprojekt-3d1fd.firebaseapp.com",
    databaseURL: "https://dpprojekt-3d1fd.firebaseio.com",
    projectId: "dpprojekt-3d1fd",
    storageBucket: "dpprojekt-3d1fd.appspot.com",
    messagingSenderId: "455950445352",
    appId: "1:455950445352:web:c551266cc5d56e5ecd7e1d",
    measurementId: "G-91EEZ5MBPF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function check(ele){
    if(event.key=='Enter'){
        let li=document.querySelector("#list-1");
        let item=document.createElement("li");
        let t=ele.value.toUpperCase();
        let tex=document.createTextNode(t);        
        item.appendChild(tex);
        li.appendChild(item);
        console.log(li);
        ele.value="";
    }
}
function add_task() {
    input_box = document.getElementById("input-text");
    input_date = document.getElementById("input_date");
    input_desc=document.getElementById("input_desc");
    input_type=document.getElementById("input_type")
    if (input_box.value.length != 0 && input_date.value.length != 0) {
      // our boxes have data and we take database
      var key = firebase.database().ref().child("unfinished_task").push().key;
      var task = {
        title: input_box.value,
        date: input_date.value,
        desc:input_desc.value,
        type:input_type.value,
        key: key
      };

      var updates = {};
      updates["/unfinished_task/" + key] = task;
      firebase.database().ref().update(updates);
      create_unfinished_task();
    }
  }