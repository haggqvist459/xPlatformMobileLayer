import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { globalStyles } from '../styles/styles';
import BaseLayout from './BaseLayout';
import BaseImage from './BaseImage';




export default function BaseList() {

    //the list of base layouts with all data 
    const [baseList, setBaseList] = useState();
    // document name, used to show correct detailed content
    const [baseLayout, setBaseLayout] = useState();
    // boolean to toggle between list and detail
    const [showList, setShowList] = useState(false);    

    //ajax call, fetch data from the service layer
    async function getBaseLayouts() {
        console.log("starting to fetch base layouts");
        //one variable to hold them all 
        const allTheBases = [];

        let url = 'http://192.168.0.3:4000/baseLayout';
        let fetchedBases = await fetch(url,{
                method: "GET"
            });   

        //turn it into a json format
        let jsonBases;
        if(fetchedBases.ok){
            jsonBases = await fetchedBases.json();
        } else {
            alert("HTTP-Error: " + fetchedBases.status);
        }        
        
        //put the json-formatted baselayouts into an array
        jsonBases.forEach((baseFetched) => {
            allTheBases.push(baseFetched.base);
        });

        //set the array of base layouts to the list of base layouts to be displayed in the FlatList  
        setBaseList(allTheBases);
        console.log('--allTheBases: ')  
        console.log(allTheBases);
    }    
    //load the data from the service layer
    useEffect(() => {
        try {
          //fetch the base layouts
          getBaseLayouts();
          //also need to do something here for the image file path
          console.log('--baseList: ')  
          console.log(baseList);
          //set refresh to false so this only happens once
        } catch (error) {
          console.log(error);
        }
    }, []);

    const handlePress = (item) => {
        //pass the data to the baselayout
        setBaseLayout(item);
        setShowList(false);
        //alert('pressed');
        console.log(item);
    }


    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.baseID}
                data={baseList}
                renderItem={({item}) => (
                        <BaseImage
                            imageURI={item.imageURI}
                            armyComposition={item.armyComposition}
                            youtubeURL={item.youtubeURL}
                            youtubeChannel={item.youtubeChannel}
                        />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    backButtonView: {

    },
    backButton: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
})

