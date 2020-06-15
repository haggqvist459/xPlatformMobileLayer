import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { globalStyles } from '../styles/styles';
import BaseLayout from "./BaseLayout";




const BaseList = () => {
    
    // boolean to toggle between list and detail
    const [showList, setShowList] = useState(true);
    // document name, used to show correct detailed content
    const [baseLayout, setBaseLayout] = useState();
    // all the base layouts in the database to be used in the FlatList
    const [baseList, setBaseList] = useState();
    //a boolean to determine whether content needs to be refreshed
    const [refresh, setRefresh] = useState(true);
    
    //fetch the data from the service layer 
    async function getBaseLayouts() {
        console.log("starting to fetch base layouts");
        //one variable to hold them all 
        const allTheBases = [];

        let url = 'http://192.168.0.3:4000/baseLayout';
        let response = await fetch(url);
        let jsonBases;

         //turn it into a json format
        if(response.ok){
            jsonBases = await response.json();
        } else {
            alert("HTTP-Error: " + response.status);
        }        
        
        //put the json-formatted baselayouts into an array
        jsonBases.forEach((baseFetched) => {
            allTheBases.push(baseFetched.base);
        });

        //set the array of base layouts to the list of base layouts to be displayed in the FlatList
        setBaseList(allTheBases);
        console.log(allTheBases);

    }


    useEffect(()=>{
        try {
            //fetch the base layouts
            getBaseLayouts();

            //also need to do something here for the image file path
            
            //set refresh to false so this only happens once
            setRefresh(false);
        } catch (error) {
            console.log(error);
        }
    }, [refresh]);
    
    const setUpImage = () => {
        
    }

    const handlePress = (item) => {
        setBaseLayout(item);
        setShowList(false);
        console.log(item);
    }

    const backPressed = () => {
        setBaseLayout('');
        setShowList(true);
        console.log('back button pressed');
    }

    return (
        <View>
            {showList ? 
            //First the list of base layouts
            //when one of them is clicked, set showList to false to render the detail content
            <View>
                <FlatList
                    keyExtractor={(item) => item.baseID}
                    data={baseList}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={styles.mockupImg}
                            onPress={() => handlePress(item)}>
                            
                            <View>
                                <Text>{item.armyComposition}</Text>
                                <Text>{item.baseID}</Text>
                                <Text>{item.youtubeURL}</Text>
                                <Text>{item.imageURL}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View> : 
            <View>
                {/* Base Layout details */}
                <View style={styles.mockupImg} >
                    <BaseLayout 
                        base={baseLayout}/>
                </View>
                <View style={styles.backButtonView}>
                    {/* back button here */}
                    <Button
                        title="back" 
                        onPress={() => backPressed()}
                        style={styles.backButton}/>
                </View>   
            </View>}
            {/* end of ternary operator */}
        </View>    
    )
}

export default BaseList

const styles = StyleSheet.create({
    mockupImg: {
        height: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    backButtonView: {

    },
    backButton: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    image: {
        height: 300,
        resizeMode: 'contain',
    },
})

