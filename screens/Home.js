import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';
import BaseList from "../components/BaseList";


const Home = () => {

    const [baseListComponent, setCompBaseList] = useState(true);

    // only null for now, can be something else in the future
    return (
        <View>
            {baseListComponent ? <BaseList/> : null}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
