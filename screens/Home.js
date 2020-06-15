import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';
import * as firebase from "firebase";
import BaseList from "../components/BaseList";
import Authentication from "../components/Authentication";
import Experiment from '../components/Experiment';


const Home = () => {

    //currently not in use
    const [baseListComponent, setCompBaseList] = useState(true);

    // used to determine content based on whether the user is signed in or not
    const [signedIn, setSignedIn] = useState(false);

    // variable to toggle between registration and sign in
    const [needsRegistration, setNeedRegistration] = useState(false);

    // variables for registration and sign in
    const [registrationEmail, setRegistrationEmail] = useState();
    const [registrationPassword, setRegistrationPassword] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // functions
    // register
    async function registerUser() {
        firebase
        .auth()
        .createUserWithEmailAndPassword(registrationEmail, registrationPassword)
        .then((user) => {
        console.log("registerUser()");
        console.log(registrationEmail);
        })
        .catch((error) => {
        console.log(error);
        console.log("registerUser() failed ");
        });
    }

    // sign in
    async function authenticateUser() {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
        console.log("Authentication successful");
        console.log(user.uid);
        })
        .catch(function (error) {
        console.log(error);
        console.log("Authentication failure");
        });
    }

    // sign in work
    const authenticateSuccess = () => {
        setEmail('');
        setPassword('');
        setSignedIn(true);

    }
    // sign in fail
    const authenticateFailure = () => {
        setEmail('');
        setPassword('');
        setSignedIn(false);
        alert('Login failure');
    }


    return (
        <View>
            {signedIn ? (<View></View>):(
                //Authentication
                <View styles={styles.outerBox}>
                {needsRegistration ? 
                <View styles={styles.innerBox}>
                    {/* Register */}
                    <Text styles={styles.headingText}>Register</Text>
                    <TextInput
                        style={styles.inputField}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="e-mail"
                        onChangeText={(xx) => setRegistrationEmail(xx)}
                        clearTextOnFocus={true}
                        value={registrationEmail}/>
                    <TextInput
                        style={styles.inputField}
                        placeholder="password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(password) => setRegistrationPassword(password)}
                        clearTextOnFocus={true}
                        secureTextEntry={true}
                        value={registrationPassword}/>
                    <Button
                        style={styles.authButtons} 
                        onPress={() => registerUser()}>Register</Button>
                    <Button
                        style={styles.authButtons} 
                        onPress={() => setNeedRegistration(false)}>Back</Button>
                </View>: 
                    // Sign In View, needs one text, two inputs and two buttons, sign in and register 
                <View styles={styles.innerBox}>
                    <Text styles={styles.headingText}>Log in</Text>
                    <TextInput
                        style={styles.inputField}
                            autoCapitalize="none"
                            placeholder="e-mail"
                            onChangeText={(xx) => setEmail(xx)}
                            clearTextOnFocus={true}
                            autoCorrect={false}
                        value={email}/>
                    <TextInput
                        style={styles.inputField}
                            placeholder="password"
                            autoCapitalize="none"
                            onChangeText={(xx) => setPassword(xx)}
                            clearTextOnFocus={true}
                            secureTextEntry={true}
                            autoCorrect={false}
                        value={password}/>
                    <Button
                        style={styles.authButtons} 
                        onPress={() => setNeedRegistration(true)}>Register</Button>
                    <Button
                        style={styles.authButtons} 
                        onPress={() => authenticateUser()}>Sign In</Button>
                </View>}       
            </View>)}    
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // I want all content in a column that is centered in the screen
    // with all its content centered. The border should have a tiny radius
    // and it should be in the primary color #152238
    innerBox: {
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        borderWidth: 1,
        borderColor: '#152238',
        borderRadius: 5,
    },
    inputField: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#152238',

    },
    headingText: {
        color: '#152238',
        fontSize: 18, 
    },
    authButtons: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#152238',
    },
})


/*
            // ternary operator switching between login and content 
            
                {signedIn ? <BaseList/> : <SignIn/>} 
             <Experiment styles={styles.container}/>

*/