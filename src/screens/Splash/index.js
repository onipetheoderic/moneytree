import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet,Image, View, Dimensions,} from 'react-native';
const { height, width } = Dimensions.get('screen');

import styles from './splash.screen.style'

export default function Splash(props) {    
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Login')
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
            source={require('../../../assets/images/logo.png')} 
            style={styles.image}>
            </Image>
        </View>
    )
}


