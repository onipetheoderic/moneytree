import React from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
     Platform, Alert } from 'react-native';

import styles from './dashboard.header.component.styles';
import email from '../../../assets/images/email.png'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Gold from '../../../assets/images/gold.png';
import Avatar from '../../../assets/images/avatar.jpg'

export default function WalletHeader({removeMember, title, navigation, hideFilterBtn}) {
    const widthHeight = removeMember ? 123 : 64;
    const position = removeMember ? -70 : -30
    return (
        <View style={styles.container}>
            <View style={styles.subContainerPlain}>
                <TouchableOpacity style={styles.centerifier} 
                onPress={()=>navigation.openDrawer()}>
                    <Feather name="menu" size={20} style={styles.iconStyle} />
                    <Text style={styles.title}>{title}</Text>
                    {!hideFilterBtn &&
                     <FontAwesome5 name="filter" size={20} style={styles.iconStyle2} />
                    }
                     {hideFilterBtn &&
                   <Text></Text>
                    }
                   
                </TouchableOpacity>
            
            </View>
          
              
           
         
        </View>
    )
}