import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/styles';
import BaseLayout from "./BaseLayout";




const BaseList = () => {
    
    // boolean to toggle between list and detail
    const [showList, setShowList] = useState(true);
    // document name, used to show correct detailed content
    const [baseLayoutId, setBaseLayoutId] = useState('noBaseSelected');
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

        if(response.ok){
            jsonBases = await response.json();
        } else {
            alert("HTTP-Error: " + response.status);
        }        
        //turn it into a json format
        //const jsonBases = await fetchedBaseLayouts.json();
        
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
            //set refresh to false so this only happens once
            setRefresh(false);
        } catch (error) {
            console.log(error);
        }
    }, [refresh]);
    




    return (
        <View>
            {showList ? 
            //First the list of base layouts
            //when one of them is clicked, set showList to false to render the detail content
            <View>
                <FlatList
                    data={baseList}
                    renderItem={({base}) => (
                       <View styles={styles.mockupImg}></View> 
                    )}
                />
            </View> : 
            <View>
                <View>
                    {/* back button here */}    
                </View>
                <View>
                    <BaseLayout/>
                </View>   
            </View>}
        </View>    
    )
}

export default BaseList

const styles = StyleSheet.create({
    mockupImg:{
        flex: 0.9,
        height: 150,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
})

