import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';
import BaseList from "../components/BaseList";
import SignIn from "../components/SignIn";



const Home = () => {

    //currently not in use
    const [baseListComponent, setCompBaseList] = useState(true);

    //used to determine content based on whether the user is signed in or not
    const [signedIn, setSignedIn] = useState(true);

    return (
        <View>
            {/* ternary operator switching between login and content */}
            {signedIn ? <BaseList/> : <SignIn/>}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
