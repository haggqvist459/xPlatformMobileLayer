import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, TextInput, TouchableWithoutFeedback, Button } from 'react-native';
import { globalStyles } from '../styles/styles';
import Register from "./Register";
//NOT IN USE YET

const Authentication = () => {
    
    //variable to toggle between registration and sign in
    const [needsRegistration, setNeedRegistration] = useState(false);

    //variables for registration and sign in
    const [registrationEmail, setRegistrationEmail] = useState();
    const [registrationPassword, setRegistrationPassword] = useState();
    const [registrationUserName, setRegistrationUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    return (
        <View styles={styles.outerBox}>
            {/* Register */}
            {/* */}
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
                    placeholder="username"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(xx) => setRegistrationUserName(xx)}
                    clearTextOnFocus={true}
                    value={registrationUserName}/>     
                <TextInput
                    style={styles.inputField}
                    placeholder="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(password) => setRegistrationPassword(password)}
                    clearTextOnFocus={true}
                    secureTextEntry={true}
                    value={registrationPassword}/>
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
                    <Button>Register</Button>
                    <Button>Sign In</Button>
                </View>}
            
        </View>
    )
}

export default Authentication

const styles = StyleSheet.create({
    outerBox: {

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
    AuthButtons: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#152238',
    },
})

/* 

  loginContainer: {
    flexDirection: "column",
    alignSelf: 'center',
    alignItems: "center",
    padding: 20,
    marginVertical: 30,
    borderRadius: 10,
    borderColor: "coral",
    borderWidth: 2,
  
},

*/
