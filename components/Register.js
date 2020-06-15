import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { globalStyles } from '../styles/styles';

const Register = () => {

    // states
    
    


    //functions



    return (
        <View>
            {/* Register */}
            <Text styles={styles.registerText}>Register</Text>
            <TextInput
                style={styles.inputField}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="e-mail"
                onChangeText={(email) => setRegistrationEmail(email)}
                clearTextOnFocus={true}
                value={registrationEmail}/>
            <TextInput
                style={styles.inputField}
                placeholder="username"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(username) => setRegistrationPassword(username)}
                clearTextOnFocus={true}
                value={userName}/>     
            <TextInput
                style={styles.inputField}
                placeholder="password"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(password) => setRegistrationPassword(password)}
                clearTextOnFocus={true}
                secureTextEntry={true}
                value={registrationPassword}/>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    inputField: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#152238',

    },
    registerText: {
        color: '#152238',
        fontSize: 18,
        
    },
})