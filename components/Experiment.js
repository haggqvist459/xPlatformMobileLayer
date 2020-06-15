import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { globalStyles } from '../styles/styles';
import BaseLayout from "./BaseLayout";




const Experiment = () => {
    
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

    useEffect(()=>{
        try {
            //fetch the base layouts
            getBaseLayouts();
            //also need to do something here for the image file path
            console.log('--baseList: ')  
            console.log(baseList);



            //set refresh to false so this only happens once
            setRefresh(false);
        } catch (error) {
            console.log(error);
        }
    }, [refresh]);
    


    const handlePress = (item) => {
        setBaseLayout(item);
        alert('pressed');
        console.log(item);
    }


    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.baseID}
                data={baseList}
                renderItem={({item}) => (
                    <TouchableOpacity
                        //style={styles.mockupImg}
                        onPress={() => handlePress(item)}>
                        <Image
                            style={styles.baseImage}
                            source={require('../assets/QAcemU9OPRmn8Yj9uCsM.png')}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
//require(`../assets/${item.imageURL}` ) }
export default Experiment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    mockupImg: {
        flex: 1,
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
    baseImage: {
        width: '90%',
        resizeMode: 'contain',
    },
})

