import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';

import WalletHeader from '../../components/Headers/WalletHeader';
import FilterField from '../../components/FormFields/FilterField'
import PaginatedTable from '../../components/Table/PaginatedTable';
import RadioButton from '../../components/RadioButton';
import GreenButton from '../../components/Buttons/GreenButton'

export default function TransactionTypeFilter(props) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Portfolio')
        }, 3000);
    }, []);

    const data = [
        {
          label: 'Deposit'
         },
         {
          label: 'Withdraw'
         },
         {
            label: 'Investment'
           },
           {
            label: 'Reverse'
           },
    ];
    return (
        <View>
            <WalletHeader title="Filters" navigation={props.navigation} hideFilterBtn={true}/>
         
            <FilterField placeholder="Transaction ID"/>
            <RadioButton data={data}/>
            <View style={{marginVertical:'18%'}}/>
            <GreenButton title="Apply Filters"/>
        </View>
    )
}
 