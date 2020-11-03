import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';

import PlainHeader from '../../components/Headers/PlainHeader';
import OverlappingTable from '../../components/Table/OverlappingTable';

export default function Bonus(props) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Invites')
        }, 3000);
    }, []);

    let sampleData = [
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" },
        {"portfolio name": "investment plan", plan:"1020", "invested amount": "20-03-2020" }
    ]
    return (
        <View>
            <PlainHeader title="My Bonus" navigation={props.navigation}/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <OverlappingTable title="List of Investment Plans"  data={sampleData}/>
            </ScrollView>
            
        </View>
    )
}
 