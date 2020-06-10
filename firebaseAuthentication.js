import * as firebase from "firebase";
import "firebase/firestore";

//set up a new user
export async function RegisterUser(email, password) {
    console.log("begin log registering user");
    console.log(email);
    console.log(password);

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
        console.log("user has been registered with email: ", email);
        })
        .catch((error) => {
        console.log("user registration error: ", error);
        });
}

//log in
export async function SignIn(email, password) {
    console.log("begin log user authentication");
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
        console.log(user.uid, " has signed in");
        })
        .catch(function (error) {
        console.log("authentication error: ", error);
        });
}
