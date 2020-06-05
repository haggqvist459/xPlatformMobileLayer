import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';
import BaseList from "../components/BaseList";


const Home = () => {

    const [compBaseList, setCompBaseList] = useState(true);

    // null for now, login page later
    return (
        <View>
            {compBaseList ? <BaseList/> : null}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
