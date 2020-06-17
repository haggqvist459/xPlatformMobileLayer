import React, { useState, useEffect } from "react";
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';


export default function BaseImage (armyComposition, imageURI){
    
    const [imagePath, setImagePath] = useState();
    
    useEffect(() => {
        setImagePath(imageURI);
    }, []);

    return (
            <View>
                <Image 
                    source={{uri: imagePath}}
                    style={baseImage}
                />
                <Text style={styles.armyCompText}>{armyComposition}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    baseImage: {
        width: '90%',
        resizeMode: 'contain',
    },
    armyCompText: {
        fontSize: 18,
        color: '#152238',

    },
});