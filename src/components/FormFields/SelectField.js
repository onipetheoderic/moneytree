import React from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TextInput, TouchableHighlight, Platform, Alert } from 'react-native';

import styles from './form.component.styles';
import email from '../../../assets/images/email.png'

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';



export default function SelectField({collection, name, value, handleForm, disabled, label}) {

    const [showOptions, changeShowOption] = React.useState(false)
    const displayOnly = disabled ? '100%' : '90%'
    const currentValue = value == "" ? label : value
    // const displayOnlyMargin = disabled ? 5 : 10
   
//lets select and replace state_values
    return (
        <>
         
        
        <TouchableOpacity onPress={()=>changeShowOption(!showOptions)} style={[styles.container,{width:displayOnly}]}>
          
            <View style={styles.formPortion2}>
                <Text style={styles.labelSelect}>{currentValue}</Text>
                
            </View>
            <TouchableOpacity onPress={()=>{changeShowOption(!showOptions);}} style={styles.typeContSelect}>
                {/* <Image
                    source={email} 
                    style={styles.image}
                /> */}
                 <Entypo name="triangle-down" size={16} style={styles.iconStyle} />
            </TouchableOpacity>
            
        </TouchableOpacity>
        {showOptions &&
              <View style={styles.optionsMenuCont}>
                  {collection.map((data)=>(
                    <TouchableOpacity onPress={()=>{changeShowOption(false); handleForm(name, data.value)}} style={[styles.selectBox,{zIndex:200000,}]}>
                        <Text style={styles.selectText}>{data.name}</Text>
                    </TouchableOpacity>
                  ))}
                
                
              </View>
           }
        </>
    )
}
 