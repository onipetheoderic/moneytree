import React, {useContext} from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import logo from '../assets/images/avatar.jpg';
import Splash from '../src/screens/Splash';
import Login from '../src/screens/Login';
import Register from '../src/screens/Register';
import Dashboard from '../src/screens/Dashboard';
import Profile from '../src/screens/Profile';
import Bonus from '../src/screens/Bonus';
import Invites from '../src/screens/Invites';
import Wallet from '../src/screens/Wallet';
import Transactions from '../src/screens/Transaction';
import TransactionFilter from '../src/screens/TransactionFilter';
import TransactionTypeFilter from '../src/screens/TransactionTypeFilter';
import Portfolio from '../src/screens/Portfolio';
import Investment from '../src/screens/Investment';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { CounterContext } from "../store";
import AntDesign from 'react-native-vector-icons/AntDesign';

import {palete} from '../src/theme/theme'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {


  function CustomDrawerContent({ navigation }) {

    return (
      <>
      <View style={styles.transparentLogoCont}>
        <View style={styles.logoView}>
          <Image source={logo} style={styles.logoImage} />          
        </View>        
        <Text style={styles.nameText}>Member ID</Text>
        <Text style={styles.emailText}>N36453KO</Text>
      </View>

      
      <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.drawerItems}>
        <Text style={styles.textStyle}>Dashboard</Text>
      </TouchableOpacity>
   
      
         <TouchableOpacity style={styles.drawerItems}>
         <Text style={styles.textStyle}>My Profile</Text>
       </TouchableOpacity>
    
  
      <TouchableOpacity style={styles.drawerItems}>
        <Text style={styles.textStyle}>My Portfolio</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.drawerItems}>
        <Text style={styles.textStyle}>My Invites</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.drawerItems}>
        <Text style={styles.textStyle}>My Bonus</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.drawerItems}>
        <Text style={styles.textStyle}>My Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.drawerItems}>
        <Text style={styles.textStyle}>My Transactions</Text>
      </TouchableOpacity>
     

       

       <View style={styles.socialMediaCont}>
       <TouchableOpacity style={styles.drawerItems}>     
          <Text style={styles.textStyle}>Log Out</Text>       
      </TouchableOpacity>
         </View>
      
      </>
     
    );
  }


  return (
    <Drawer.Navigator 
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    initialRouteName="Splash">
      <Drawer.Screen name="Splash" 
      component={Splash} options={({ route, navigation }) => {
        return {
          swipeEnabled: false,
        };
      }}/>
       <Drawer.Screen name="Login" 
      component={Login} options={({ route, navigation }) => {
        return {
          swipeEnabled: false,
        };
      }}/>
       <Drawer.Screen name="Register" 
      component={Register} options={({ route, navigation }) => {
        return {
          swipeEnabled: false,
        };
      }}/>
    
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Bonus" component={Bonus} />
      <Drawer.Screen name="Invites" component={Invites} />
      <Drawer.Screen name="Wallet" component={Wallet} />
      <Drawer.Screen name="Transactions" component={Transactions} />
      <Drawer.Screen name="TransactionFilter" component={TransactionFilter} />
      <Drawer.Screen name="TransactionTypeFilter" component={TransactionTypeFilter} />
      <Drawer.Screen name="Portfolio" component={Portfolio} />
      <Drawer.Screen name="Investment" component={Investment} />


    </Drawer.Navigator>
  );
}

export default DrawerNavigator;


const styles = StyleSheet.create({
  emailText: {
    fontFamily: 'Poppins_400Regular', 
    fontSize: 14,

  },
  nameText: {
    fontFamily: 'Poppins_400Regular', 
    fontSize: 16,
    fontWeight:'bold',
    marginTop:10,
    color:palete.DirtyBrown
  },
  copyright: {
    fontFamily: 'Poppins_400Regular', 
    fontSize:8,
    marginTop:3,
    marginLeft:4
  },
  socialMediaCont: {
    position:'absolute',
   
    flexDirection:'column',
    justifyContent:'space-between',
   
    width:'100%',
    bottom:0
  },
  textStyle: {
    marginLeft:30,
    fontFamily: 'Poppins_500Medium', 
    fontSize:20,
  },
  drawerItems: {
    marginVertical:5,
    width:'90%',
    alignItems:'center',
    marginLeft:'10%',
    flexDirection:'row'
  },
  parentLogos: {
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',

    height:150,

  },
  transparentLogoCont: {
  
    width:'100%',
    alignSelf:'center',
    height:200,
   
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
},
 
  logoImageInParent: {
    width:'90%',
    height:105,
    resizeMode: 'stretch',
   alignSelf:'center'
  },
  tinyLogo: {
      width: 50,
      height: 50,
    },
    logoImage: {
      alignSelf:'center',
        width:100,
        height:100,
       borderRadius:100,
        
    },
  logoView: {
    borderRadius:60,
    borderWidth:2,
    borderColor:'white',
    width:120,
    height:120,
      alignSelf:'center',
      alignItems: 'center',
      justifyContent: 'center',
  },
  navBar: {
      flexDirection:'row',
      marginLeft:'15%'
  },
  header: {
      flexDirection:'column',
      flex:1
     
  },
  body: {
      flex:7
  },
 
  image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },


})