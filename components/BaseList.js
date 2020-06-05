import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/styles';
import BaseLayout from "./BaseLayout";



const BaseList = () => {
    
    //boolean to toggle between list and detail
    const [showList, setShowList] = useState(true);
    //document name, used to show correct detailed content
    const [baseLayoutId, setBaseLayoutId] = useState('noBaseSelected');
    //all the base layouts in the database to be used in the FlatList
    const [baseList, setBaseList] = useState();
    
    //fetch the data from the service layer 
    async function getBaseLayouts() {
        //one variable to hold them all 
        const allTheBases = [];
        const fetchedBaseLayouts = await fetch("http://192.168.0.3/4000/baseLayouts", {
            method: "GET"
        });

        //turn it into a json format
        const jsonBases = await fetchedBaseLayouts.json();
        
        //put the json-formatted baselayouts into an array
        jsonBases.forEach((baseFetched) => {
            allTheBases.push(basesFetched.base);
        });

        //set the array of base layouts to the list of base layouts to be displayed in the FlatList
        setBaseList(allTheBases);
    }

    try {
        getBaseLayouts();
    } catch (error) {
        console.log(error);
    }




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
    },
})

