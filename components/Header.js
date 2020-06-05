import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Find the Village</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0A397A',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },
    text: {
        color: 'lightgrey',
    },
});