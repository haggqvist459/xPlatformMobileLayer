import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { globalStyles } from '../styles/styles';


const BaseLayout = (props) => {

    //a boolean to determine whether content needs to be refreshed
    const [refresh, setRefresh] = useState(true);
    const [imageURI, setImageURL] = useState();

    useEffect(()=>{
        
        try {
            //set the image url here
            setImageURLs();
            //set refresh to false so this only happens once
            setRefresh(false);
        } catch (error) {
            console.log(error);
        }
    }, [refresh]);

    const setImageURLs = (item) => {
        setBaseLayout(item);
        setShowList(false);
        console.log(item);
    }
    return (
        <View>
            {/* neeed to add space between the bits and pieces so youtube URL's can be pressed */}
            <View styles={styles.mockupImg}>
                <Image 
                    style={styles.baseLayoutImage}
                    source={{uri: props.base.imageURL}}/>
                <Text>{props.base.armyComposition}</Text>
                <Text>{props.base.baseID}</Text>     
            </View>
            
            <View styles={styles.mockupImg}>
                <TouchableOpacity>
                    <Text onPress={() => Linking.openURL(props.base.youtubeURL)}>{props.base.youtubeURL}</Text>
                </TouchableOpacity>
            </View>
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
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    youTube: {
        height: 90,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
})
