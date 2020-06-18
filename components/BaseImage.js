import React, { useState, useEffect } from "react";
import {Linking, StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';


export default function BaseImage ({armyComposition, imageURI, youtubeURL}){
    
    const [imagePath, setImagePath] = useState();
    
    useEffect(() => {
        setImagePath(imageURI);
        console.log("inside BaseImage");
        console.log(imageURI);
    }, []);

    return (
            <View style={styles.flatListItem}>
                <Image 
                    source={{uri: imageURI}}
                    style={styles.baseImageStyle}
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style={styles.armyCompText}>{armyComposition}</Text>
                    </View>
                    <View>
                        <TouchableWithoutFeedback
                            onPress={() => Linking.openURL(youtubeURL)}>
                            <Image
                                source={require('../assets/play_circle.png')}
                                style={{width: 20, height: 20}}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    flatListItem: {
        flexDirection: 'column',
        flex: 1,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: 'grey'
    },
    baseImageStyle: {
        height: 200,
        resizeMode: 'contain',
    },
    armyCompText: {
        fontSize: 18,
        color: '#152238',
    },
});