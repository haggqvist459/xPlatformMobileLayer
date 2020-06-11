import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { globalStyles } from '../styles/styles';

const Register = () => {
    return (
        <View styles={}>
            {/* Sign In*/}
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
                placeholder="password"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(password) => setRegistrationPassword(password)}
                clearTextOnFocus={true}
                secureTextEntry={true}
                value={registrationPassword}/>
            <TextInput
                style={styles.inputField}
                placeholder="username"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(username) => setRegistrationPassword(username)}
                clearTextOnFocus={true}
                secureTextEntry={true}
                value={userName}/> 
            
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    inputField: {

    },
 
})