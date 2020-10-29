import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';
import styles from './dashboard.screen.styles'
import DashboardHeader from '../../components/Headers/DashboardHeader'
import WrappableCard from '../../components/Cards/WrappableCard';

import CenterTable from '../../components/Table/CenterTable';

import planning from '../../../assets/images/planning.png'
import solid from '../../../assets/images/Solid.png';

export default function Dashboard(props) {
  let sampleData = [
      {name: "investment plan", investment:"1020", date: "20-03-2020" },
      {name: "investment plan", investment:"1020", date: "20-03-2020" },
      {name: "investment plan", investment:"1020", date: "20-03-2020" },
      {name: "investment plan", investment:"1020", date: "20-03-2020" },
      {name: "investment plan", investment:"1020", date: "20-03-2020" },
      {name: "investment plan", investment:"1020", date: "20-03-2020" },
      {name: "investment plan", investment:"1020", date: "20-03-2020" },
      {name: "investment plan", investment:"1020", date: "20-03-2020" },
      {name: "investment plan", investment:"1020", date: "20-03-2020" }
  ]

  let sampleData2 = [
    {value: "3.2m usd", date:"20-03-2020" },
    {value: "3.2m usd", date:"20-03-2020" },
    {value: "3.2m usd", date:"20-03-2020" },
    {value: "3.2m usd", date:"20-03-2020" },
    {value: "3.2m usd", date:"20-03-2020" },
    {value: "3.2m usd", date:"20-03-2020" },
    {value: "3.2m usd", date:"20-03-2020" },
    {value: "3.2m usd", date:"20-03-2020" }   
]

useEffect(() => {
    setTimeout(() => {
        props.navigation.navigate('Profile')
    }, 3000);
}, []);
    return (
        <View style={styles.overallBg}>
            <DashboardHeader title="Dashboard" navigation={props.navigation} />
            
                <ScrollView>
                <View style={styles.menuCont}>
                    <WrappableCard title="No. of Porfolios" digit="218" />
                    <WrappableCard title="No. of Investment Plans" digit="201"  />
                    <WrappableCard title="Total Amount Invested" digit="3.2m" />
                    <WrappableCard title="Invites" digit="20"  />
                    </View>

                    <CenterTable title="List of Investment Plans" imageLogo={planning} data={sampleData}/>

                    <CenterTable title="Recent Funds Credited" 
                    imageLogo={solid} data={sampleData2}/>
                </ScrollView>
              
           
        </View>
    )
}
