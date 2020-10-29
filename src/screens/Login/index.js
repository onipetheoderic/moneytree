import React, {useState, useContext, useEffect} from 'react';
import styles from './login.screen.style';
import { Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';

import Topic from '../../components/Topic';
import CoverCard from '../../components/Cards/CoverCard'
import FormField from '../../components/FormFields/FormField';
import GreenButton from '../../components/Buttons/GreenButton'
import {palete} from '../../theme/theme'

export default function Login(props) {    
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Register')
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/logo.png')} 
                style={styles.image}>
            </Image>

            <Topic title="Login" fontSize={40} color={palete.BritishRacingGreen} marginTop={10}/>
            <CoverCard>
                <FormField placeholder="mail@gmail.com" secure={false}/>
                <FormField placeholder="password" secure={true}/>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <View style={styles.spacer}/>
                <GreenButton title="Login"/>
            </CoverCard>
            <View style={styles.registerCont}>
              
                <Text style={styles.registerText}>Dont have an Account? </Text>
                <Text style={styles.registerTextLink}>Register Here</Text>
           
              
            </View>
        </View>
    )
}


