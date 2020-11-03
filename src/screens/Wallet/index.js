import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';

import PlainHeader from '../../components/Headers/PlainHeader';
import OverlappingTable from '../../components/Table/OverlappingTable';
import styles from './wallet.screen.style';

import GreenButton from '../../components/Buttons/GreenButton'
import SubHeader from '../../components/Headers/Subheader';

export default function Wallet(props) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Transactions')
        }, 3000);
    }, []);

    let sampleData = [
        {amount:"$26.00", "Transaction Type": "lorem ipsum" ,"Transaction ID": "lorem ipsum" },
        {amount:"$26.00", "Transaction Type": "lorem ipsum" ,"Transaction ID": "lorem ipsum" },
        {amount:"$26.00", "Transaction Type": "lorem ipsum" ,"Transaction ID": "lorem ipsum" },
        {amount:"$26.00", "Transaction Type": "lorem ipsum" ,"Transaction ID": "lorem ipsum" },
        {amount:"$26.00", "Transaction Type": "lorem ipsum" ,"Transaction ID": "lorem ipsum" },
        {amount:"$26.00", "Transaction Type": "lorem ipsum" ,"Transaction ID": "lorem ipsum" },
        {amount:"$26.00", "Transaction Type": "lorem ipsum" ,"Transaction ID": "lorem ipsum" },
        {amount:"$26.00", "Transaction Type": "lorem ipsum" ,"Transaction ID": "lorem ipsum" },
        {amount:"$26.00", "Transaction Type": "lorem ipsum" ,"Transaction ID": "lorem ipsum" },
        {amount:"$26.00", "Transaction Type": "lorem ipsum" ,"Transaction ID": "lorem ipsum" }
    ]
    return (
        <View>
            <PlainHeader title="My Wallet" navigation={props.navigation}/>
            <SubHeader />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <OverlappingTable title="List of Investment Plans"  data={sampleData}/>
            </ScrollView>
            <View style={styles.btnCont}>
            <GreenButton title="Add Funds"/>
            </View>
        </View>
    )
}
 