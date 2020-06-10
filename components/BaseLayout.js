import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { globalStyles } from '../styles/styles';

const BaseLayout = (props) => {
    return (
        <View styles={styles.mockupImg}>
            {/* neeed to add space between the bits and pieces so youtube URL's can be pressed */}
            <Image 
                style={styles.baseLayoutImage}
                source={{uri: props.base.imageURL}}    
                /> 
            <Text>{props.base.armyComposition}</Text>
            <Text>{props.base.baseID}</Text>
            <TouchableOpacity>
                <Text onPress={() => Linking.openURL(props.base.youtubeURL)}>{props.base.youtubeURL}</Text>
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
    baseLayoutImage: {
        width: 250,
        resizeMode: 'contain',

    },
    mockupImg: {
        height: 90,
        backgroundColor: 'greyç',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
})
