import React from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';

import PlainAccordion from '../../components/Accordions/PlainAccordion'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import styles from './profile.screen.style';
import FormField from '../../components/FormFields/FormField';

export default function Profile(props) {
    


    return (
        <View>
            <DashboardHeader removeMember={true} title="My Profile" navigation={props.navigation}/>
            <View style={styles.spacer}/>
            <View style={{height:'70%', marginBottom:20,}}>
                <ScrollView>
                <PlainAccordion title="Personal Info">                
                    <FormField placeholder="mail@gmail.com" disabled={true} secure={false}/>
                    <FormField placeholder="password" disabled={true} secure={true}/>
                    <FormField placeholder="mail@gmail.com" disabled={true} secure={false}/>
                    <FormField placeholder="password" disabled={true} secure={true}/>
                    <FormField placeholder="mail@gmail.com" disabled={true} secure={false}/>
                    <FormField placeholder="password" disabled={true} secure={true}/>
                </PlainAccordion>
                <View style={styles.spacer}/>
                <PlainAccordion title="Banking Info">                
                    <FormField placeholder="mail@gmail.com" disabled={true} secure={false}/>
                    <FormField placeholder="password" disabled={true} secure={true}/>
                    <FormField placeholder="mail@gmail.com" disabled={true} secure={false}/>
                    <FormField placeholder="password" disabled={true} secure={true}/>
                    <FormField placeholder="mail@gmail.com" disabled={true} secure={false}/>
                    <FormField placeholder="password" disabled={true} secure={true}/>
                </PlainAccordion>
                </ScrollView>
               
            </View>
            
            
            
        </View>
    )
}
