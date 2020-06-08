import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styles';

const BaseLayout = (props) => {
    return (
        <View styles={styles.mockupImg}>
           <Text>{props.base.armyComposition}</Text>
           <Text>{props.base.imageURL}</Text>
           <Text>{props.base.youtubeURL}</Text>
           <Text>{props.base.baseID}</Text>
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
    mockupImg: {
        height: 90,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
})
