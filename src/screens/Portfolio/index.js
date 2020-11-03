import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';
import WalletHeader from '../../components/Headers/WalletHeader';
import PlainHeader from '../../components/Headers/PlainHeader';
import OverlappingTable from '../../components/Table/OverlappingTable';
import styles from './wallet.screen.style';

import GreenButton from '../../components/Buttons/GreenButton'
import SubHeader from '../../components/Headers/Subheader';

export default function Portfolio(props) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Investment')
        }, 3000);
    }, []);

    let sampleData = [
        {"Portfolio Name":"mtp-0000001", investment: "$26.00" ,growth: "$26.00" },
        {"Portfolio Name":"mtp-0000001", investment: "$26.00" ,growth: "$26.00" },
        {"Portfolio Name":"mtp-0000001", investment: "$26.00" ,growth: "$26.00" },
        {"Portfolio Name":"mtp-0000001", investment: "$26.00" ,growth: "$26.00" },
        {"Portfolio Name":"mtp-0000001", investment: "$26.00" ,growth: "$26.00" },
        {"Portfolio Name":"mtp-0000001", investment: "$26.00" ,growth: "$26.00" },
        {"Portfolio Name":"mtp-0000001", investment: "$26.00" ,growth: "$26.00" },
        {"Portfolio Name":"mtp-0000001", investment: "$26.00" ,growth: "$26.00" },
        {"Portfolio Name":"mtp-0000001", investment: "$26.00" ,growth: "$26.00" },
        {"Portfolio Name":"mtp-0000001", investment: "$26.00" ,growth: "$26.00" }
    ]
    return (
        <View>
            <WalletHeader title="My Portfolio" navigation={props.navigation} hideFilterBtn={false}/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <OverlappingTable data={sampleData}/>
            </ScrollView>
            <View style={styles.btnCont}>
            <GreenButton title="Add Funds"/>
            </View>
        </View>
    )
}
 