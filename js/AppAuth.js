(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyASvw80DuelGaKx3v3NoK4eo13tT_C1Q7U",
        authDomain: "dpprojekt-3d1fd.firebaseapp.com",
        databaseURL: "https://dpprojekt-3d1fd.firebaseio.com",
        projectId: "dpprojekt-3d1fd",
        storageBucket: "dpprojekt-3d1fd.appspot.com",
        messagingSenderId: "455950445352",
        appId: "1:455950445352:web:c551266cc5d56e5ecd7e1d",
        measurementId: "G-91EEZ5MBPF"
    };

    firebase.initializeApp(firebaseConfig);

    //sign in using google
    function googleSignIn() {
        provider = new Firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopUp(provider).then(function(result) {
            console.log(result);
            console.log("success");
        }).catch(function(err) {
            console.log(err);
            console.log("failed");
        });
    }

});
// const txtEmail = document.getElementById("userEmail");
// const txtPass = document.getElementById("userPass");
// const LoginIn = document.getElementById("logInBtn");
// const SignUp = document.getElementById("signUpBtn");


//sign in with email

//     LoginIn.addEventListener('click', e => {
//         const email = txtEmail.value;
//         const pass = txtPass.value;
//         const auth = firebase.auth();
//         const promise = auth.signInWithEmailAndPassword(email, pass);
//         promise.catch(e => console.log(e.message));
//     });


//sign up with email

//     SignUp.addEventListener('click', e => {
//         const email = txtEmail.value;
//         const pass = txtPass.value;
//         const auth = firebase.auth();
//         const promise = auth.createUserWithEmailAndPassword(email, pass);
//         promise.catch(e => console.log(e.message));
//     });

//     firebase.authStateChanged(user => {
//         if (user) {
//             console.log(user);
//         } else {
//             console.log("not logged in");
//         }
//     });