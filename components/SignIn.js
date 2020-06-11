import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, TextInput } from 'react-native';
import { globalStyles } from '../styles/styles';
import Register from "../components/Register";

const SignIn = () => {
    
    //variable to toggle between registration and sign in
    const [needsRegistration, setNeedRegistration] = useState(false);

    //variables for registration and sign in
    const [registrationEmail, setRegistrationEmail] = useState();
    const [registrationPassword, setRegistrationPassword] = useState();
    const [userName, setUserName] = useState();


    return (
        <View styles={styles.outerBox}>
            {/* Register */}
            {needsRegistration ? 

            <Register styles={styles.innerBox}/> : 
            // Sign In View    
            <View styles={styles.innerBox}>
             
            </View>}
            
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    outerBox: {
        borderColor: 'black',
        borderWidth: 1,
    },
    innerBox: {
        paddingTop: 15,
        paddingBottom: 15,
    },
})
