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