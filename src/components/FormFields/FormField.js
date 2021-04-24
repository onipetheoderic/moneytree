import React from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TextInput, TouchableHighlight, Platform, Alert } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import styles from './form.component.styles';


export default function FormFields({icon, keyboardType, value, placeholder, handleForm, name, marginVertical, secure, disabled, label, editable}) {
   
    const displayOnly = disabled ? '100%' : '90%'
    const displayOnlyMargin = disabled ? 5 : 6
    const [show, changeShow] = React.useState(secure)
    let showEyes = secure==true ? true : false
    let logoDisplay = show ? "eye-off" : "eye"

   
    return (
        <View style={[styles.container,{width:displayOnly}]}>
            <View style={styles.typeCont}>
               {icon}
            </View>
            <View style={styles.formPortion}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                style={styles.textInput}
                onChangeText={text => handleForm(name,text)}
                secureTextEntry={show}
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#000000'
                keyboardType={keyboardType}
                />
            </View>
            
        </View>
    )
}
 