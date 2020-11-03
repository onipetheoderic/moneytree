import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';

import WalletHeader from '../../components/Headers/WalletHeader';
import FilterField from '../../components/FormFields/FilterField'
import PaginatedTable from '../../components/Table/PaginatedTable';
import RadioButton from '../../components/RadioButton';
import GreenButton from '../../components/Buttons/GreenButton'

export default function Transaction(props) {
    const data = [
        {
          label: 'Portfolio'
         },
         {
            label: 'Portfolio'
         }
    ];
    const data2 = [
        {
          label: 'Active'
         },
         {
          label: 'Cancelled'
         }
    ];
    const data3 = [
        {
          label: 'Acorn Basic'
         },
         {
          label: 'Accorn Standard'
         },
         {
            label: 'Acorn Basic'
           },
           {
            label: 'Accorn Standard'
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
 