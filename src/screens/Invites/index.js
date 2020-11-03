import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';


import PlainHeader from '../../components/Headers/PlainHeader';
import CuteTable from '../../components/Table/CuteTable';
import invitation from '../../../assets/images/invitation.png';
import styles from './invites.screen.style';

import GreenButton from '../../components/Buttons/GreenButton'
import {palete} from '../../theme/theme'

export default function Invites(props) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Wallet')
        }, 3000);
    }, []);
    let sampleData = [
        {"name": "investment plan", status:"1020", "dated": "20-03-2020" },
        {"name": "investment plan", status:"1020", "dated": "20-03-2020" },
        {"name": "investment plan", status:"1020", "dated": "20-03-2020" },
        {"name": "investment plan", status:"1020", "dated": "20-03-2020" }
      
    ]
    return (
        <View>
            <PlainHeader title="My Invites" navigation={props.navigation}/>
          
            <CuteTable title="List of Investment Plans"  data={sampleData}/>
            <Image source={invitation} style={styles.image} />
            <Text style={styles.inviteText}>Send more Invites</Text>
            <View style={styles.btnCont}>
            <GreenButton title="Send Invites"/>
            </View>
           
        </View>
    )
}
 