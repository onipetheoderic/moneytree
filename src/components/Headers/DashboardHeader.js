import React from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
     Platform, Alert } from 'react-native';

import styles from './dashboard.header.component.styles';
import email from '../../../assets/images/email.png'
import Feather from 'react-native-vector-icons/Feather';
import Gold from '../../../assets/images/gold.png';
import Avatar from '../../../assets/images/avatar.jpg'

export default function DashboardHeader({removeMember, title, navigation}) {
    const widthHeight = removeMember ? 123 : 64;
    const position = removeMember ? -70 : -30
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.centerifier} onPress={()=>navigation.openDrawer()}>
                    <Feather name="menu" size={20} style={styles.iconStyle} />
                    <Text style={styles.title}>{title}</Text>
                    <Text></Text>
                </TouchableOpacity>
                <View style={{borderRadius:widthHeight/2,
                    width:widthHeight+5,
                    height:widthHeight+5,
                    bottom:position,
                   
                    backgroundColor:'white',
                    
                    position:'absolute'}}>
                <Image
                source={Avatar} 
                style={{ borderRadius:widthHeight/2,
                    width:widthHeight,
                    marginTop:3,
                    alignSelf:'center',
                    height:widthHeight,}} />
                </View>
                {!removeMember &&
                <Image
                source={Gold} 
                style={styles.imageGold} />
                }
            </View>
          
                <View style={styles.nameZone}>
                {!removeMember &&
                <>
                 <Text style={styles.text}>Member ID</Text>
                <Text style={styles.text2}>{"N36453ko".toUpperCase()}</Text>
                </>
                   
                }
                </View>
           
         
        </View>
    )
}