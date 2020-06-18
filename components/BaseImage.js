import React, { useState, useEffect } from "react";
import {Linking, StyleSheet, Text, View, Image, TouchableWithoutFeedback, Dimensions} from 'react-native';

// custom component that needs army composition, image filepath, youtube url and name of the youtube channel
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
            //this component sets up the image and all the data around it
            <View style={styles.flatListItem}>
                {/* the image gets the width and height calculated depending on the window size */} 
                <Image 
                    source={{uri: imagePath}}
                    style={{height: imageHeight, width: imageWidth, resizeMode: 'center', alignSelf: 'center'}}
                />
                {/* this view should be as wide as the image. holds all the other information about the layout */}
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