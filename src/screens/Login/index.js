import React, {useState, useContext, useEffect} from 'react';
import styles from './login.screen.style';
import { Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';

import Topic from '../../components/Topic';
import CoverCard from '../../components/Cards/CoverCard'
import FormField from '../../components/FormFields/FormField';
import { CounterContext } from '../../../store';
import {Toast} from 'native-base';
import GreenButton from '../../components/Buttons/GreenButton'
import {palete} from '../../theme/theme'

import password from '../../../assets/images/register/passwordKey.png';
import passwordR from '../../../assets/images/register/passwordR.png';

import user from '../../../assets/images/register/user3.png';



export default function Login(props) {    
    const [value, changeValue] = React.useState({password:"",email:""}) 
    
    const globalState = React.useContext(CounterContext);
  
    const {state, dispatch } = globalState;

    const handleForm = (name, text) => {
        console.log("the vals", value)
        changeValue({...value, [name]:text})    
    }

  
 

    const iconMaker2 = (img) => (<Image
        source={img} 
        style={styles.imageIcon2}
    />)


    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/logo.png')} 
                style={styles.image}>
            </Image>

            <Topic title="Login" fontSize={40} color={palete.BritishRacingGreen} marginTop={10}/>
            <CoverCard>
                <FormField icon={iconMaker2(user)} handleForm={handleForm} name="password" placeholder="mail@gmail.com" secure={false} label="Email" />
                <View style={{marginVertical:6}}/>
                <FormField icon={iconMaker2(password)} handleForm={handleForm} name="password" placeholder="password" secure={true} label="Password" />
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <View style={styles.spacer}/>
                <GreenButton title="Login"/>
            </CoverCard>
            <View style={styles.registerCont}>
              
                <Text style={styles.registerText}>Dont have an Account? </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Register")}>
                    <Text style={styles.registerTextLink}>Register Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


