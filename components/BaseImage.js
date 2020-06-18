import React, { useState, useEffect } from "react";
import {Linking, StyleSheet, Text, View, Image, TouchableWithoutFeedback, Dimensions} from 'react-native';


export default function BaseImage ({armyComposition, imageURI, youtubeURL, youtubeChannel}){
    
    const [imagePath, setImagePath] = useState();
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width - 10;

    useEffect(() => {
        setImagePath(imageURI);
        console.log("inside BaseImage");
        console.log(imageURI);
    }, []);

    return (
            <View style={styles.flatListItem}>
                <Image 
                    source={{uri: imageURI}}
                    style={{height: imageHeight, width: imageWidth, resizeMode: 'center', alignSelf: 'center'}}
                />
                <View style={[{width: imageWidth}, styles.textView]}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableWithoutFeedback
                            onPress={() => Linking.openURL(youtubeURL)}>
                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    source={require('../assets/play_circle.png')}
                                    style={{width: 18, height: 18}}
                                />
                                <Text style={styles.text}>{armyComposition}</Text>
                           </View> 
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <Text style={styles.text}>{youtubeChannel}</Text>
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
    },
    baseImageStyle: {
        resizeMode: 'contain',
    },
    text: {
        fontSize: 16,
        color: '#152238',
        paddingHorizontal: 10,
    },
    textView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
});