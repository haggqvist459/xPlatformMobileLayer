import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styles';

const BaseLayout = () => {
    return (
        <View>
            <TouchableOpacity>
                    <Text>BaseLayout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BaseLayout

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },

})
