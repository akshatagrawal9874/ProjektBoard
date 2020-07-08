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

/**
 * Handles the sign in button press.
 */
function toggleSignIn() {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
    } else {
        var email = document.getElementById('email').value;
        var pass = document.getElementById('pass').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (pass.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            document.getElementById('log-in').disabled = false;
            // [END_EXCLUDE]
        });
        // [END authwithemail]
    }
    document.getElementById('log-in').disabled = true;
}

/**
 * Handles the sign up button press.
 */
function handleSignUp() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (pass.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Create user with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END createwithemail]
}

/**
 * Sends an email verification to the user.
 */
function sendEmailVerification() {
    // [START sendemailverification]
    console.log("e v f working")
    firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
    });
    // [END sendemailverification]
}

function sendPasswordReset() {
    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
}

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('verify-email').disabled = true;
        // [END_EXCLUDE]
        // if (user) {
        //     // User is signed in.
        //     var displayName = user.displayName;
        //     var email = user.email;
        //     var emailVerified = user.emailVerified;
        //     var photoURL = user.photoURL;
        //     var isAnonymous = user.isAnonymous;
        //     var uid = user.uid;
        //     var providerData = user.providerData;
        //     // [START_EXCLUDE]
        //     document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
        //     document.getElementById('log-in').textContent = 'Sign out';
        //     document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
        //     if (!emailVerified) {
        //         document.getElementById('verify-email').disabled = false;
        //     }
        //     // [END_EXCLUDE]
        // } else {
        //     // User is signed out.
        //     // [START_EXCLUDE]
        //     document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
        //     document.getElementById('log-in').textContent = 'Sign in';
        //     document.getElementById('quickstart-account-details').textContent = 'null';
        //     // [END_EXCLUDE]
        // }
        // [START_EXCLUDE silent]
        document.getElementById('log-in').disabled = false;
        // [END_EXCLUDE]
    });
    // [END authstatelistener]

    document.getElementById('log-in').addEventListener('click', toggleSignIn, false);
    document.getElementById('sign-up').addEventListener('click', handleSignUp, false);
    document.getElementById('verify-email').addEventListener('click', sendEmailVerification, false);
    document.getElementById('pass-reset').addEventListener('click', sendPasswordReset, false);
}

window.onload = function() {
    initApp();
};