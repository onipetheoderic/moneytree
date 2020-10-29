import React from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TextInput, TouchableHighlight, Platform, Alert } from 'react-native';

import styles from './form.component.styles';
import email from '../../../assets/images/email.png'

export default function FormFields({placeholder, secure, disabled}) {
    const [value, onChangeText] = React.useState('');
    const displayOnly = disabled ? '100%' : '90%'
    const displayOnlyMargin = disabled ? 5 : 15
    return (
        <View style={[styles.container,{width:displayOnly,  marginVertical:displayOnlyMargin,}]}>
            <View style={styles.typeCont}>
                <Image
                    source={email} 
                    style={styles.image}
                />
            </View>
            <View style={styles.formPortion}>
                <Text style={styles.label}>Label</Text>
                <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={placeholder}
                secureTextEntry={true}
                placeholderTextColor='#000000'
                />
            </View>
            
        </View>
    )
}
 