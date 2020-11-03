import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';

import WalletHeader from '../../components/Headers/WalletHeader';
import FilterField from '../../components/FormFields/FilterField'
import PaginatedTable from '../../components/Table/PaginatedTable';
import RadioButton from '../../components/RadioButton';
import GreenButton from '../../components/Buttons/GreenButton'

export default function Transaction(props) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('TransactionTypeFilter')
        }, 3000);
    }, []);

    const data = [
        {
          label: 'Successful'
         },
         {
          label: 'Unsuccessful'
         }
    ];
    return (
        <View>
            <WalletHeader title="Filters" navigation={props.navigation} hideFilterBtn={true}/>
         
            <FilterField placeholder="Transaction ID"/>
            <RadioButton data={data}/>
            <View style={{marginVertical:'25%'}}/>
            <GreenButton title="Apply Filters"/>
        </View>
    )
}
 