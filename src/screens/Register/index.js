import React, {useState, useContext, useEffect} from 'react';
import styles from './register.screen.style';
import { Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';

import Topic from '../../components/Topic';
import CoverCard from '../../components/Cards/CoverCard'
import FormField from '../../components/FormFields/FormField';
import GreenButton from '../../components/Buttons/GreenButton'
import {palete} from '../../theme/theme'


export default function Register(props) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Dashboard')
        }, 3000);
    }, []);


    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/logo.png')} 
                style={styles.image}>
            </Image>
            <Topic title="Register" fontSize={22} color={palete.DirtyBrown} marginTop={10}/>
            <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
                <CoverCard>
                    <FormField placeholder="mail@gmail.com" secure={false}/>
                    <FormField placeholder="password" secure={true}/>
                    <FormField placeholder="mail@gmail.com" secure={false}/>
                    <FormField placeholder="password" secure={true}/>
                    <FormField placeholder="mail@gmail.com" secure={false}/>
                    <FormField placeholder="password" secure={true}/>
                    <FormField placeholder="mail@gmail.com" secure={false}/>
                    <FormField placeholder="password" secure={true}/>
                    <GreenButton title="Login"/>
                    <View style={styles.spacer}/>
                </CoverCard>
                <View style={styles.registerCont}>
              
              <Text style={styles.registerText}>Dont have an Account? </Text>
              <Text style={styles.registerTextLink}>Register Here</Text>
         
            
          </View>
            </ScrollView>
        </View>
    )
}
