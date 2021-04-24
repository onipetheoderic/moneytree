import React, {useState, useContext, useEffect} from 'react';
import styles from './register.screen.style';
import { Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TouchableHighlight, Platform, Alert } from 'react-native';

import Topic from '../../components/Topic';
import CoverCard from '../../components/Cards/CoverCard'
import FormField from '../../components/FormFields/FormField';
import SelectField from '../../components/FormFields/SelectField';
import GreenButton from '../../components/Buttons/GreenButton';
import {palete} from '../../theme/theme';
import title from '../../../assets/images/register/title.png';
import cell_phone from '../../../assets/images/register/cell-phone3.png';
import email from '../../../assets/images/register/email.png';
import city from '../../../assets/images/register/city.png';
import city_map from '../../../assets/images/register/city-map3.png';
import empire_state from '../../../assets/images/register/empire-state-building3.png'
import subtraction from '../../../assets/images/register/subtraction.png';
import { GetValues } from '../../api/apiService';
import password from '../../../assets/images/register/password3.png';
import passwordR from '../../../assets/images/register/passwordR.png';
import user from '../../../assets/images/register/user3.png';


import { CounterContext } from '../../../store';

export default function Register(props) {
        
    const globalState = React.useContext(CounterContext);
  
    const {state, dispatch } = globalState;

    const [value, changeValue] = useState({
        title:"",
        firstname:"",
        lastname:"",
        email:"",
        isdcode:"",
        phone:"",
        address:"",
        address2:"",
        city:"",
        state:"",
        country_id:"",
        net_worth:"",
        invest_amt:"",
        password:"",
        confirm_password:""
    })

    const handleForm = (name, text) => {
        changeValue({...value, [name]:text})    
        console.log("the vals",name, text, value)
    }

    const countryCollection = [
        {name:"Theoderic", value:"Th"},
        {name:"Mathew", value:"Mt"},
        {name:"Mathew", value:"Mt"}
    ]

    const CountrySelect = () => {

    }

    

    const iconMaker = (img) => (<Image
        source={img} 
        style={styles.imageIcon}
    />)

    const iconMaker2 = (img) => (<Image
        source={img} 
        style={styles.imageIcon2}
    />)

    useEffect(() => {
       async function GetVals(){
        try {
            let netWorth = await GetValues("getNetWorth").then((data)=>{
                console.log(data.data.networth,"UUUU")
                dispatch({type:"setNetworth", payload:data.data.networth})
            })
            let countries = await GetValues("getCountryList").then((data)=>{
                console.log(data.data.country,"CCC")
                dispatch({type:"setCountryList", payload:data.data.country})
            })
            let investment = await GetValues("setInvestmentOptions").then((data)=>{
                console.log(data.data.invest,"III")
                dispatch({type:"setCountryList", payload:data.data.invest})
            })
        }
        catch(error) {
            console.log(error, "register")
        }
       }
       GetVals()
   
        //lets get the country
        //the net worth
        //the amount you want to invest
    }, []);


   
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/logo.png')} 
                style={styles.image}>
            </Image>
            <Topic title="Register" fontSize={22} color={palete.DirtyBrown} marginTop={10}/>
            <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
                <CoverCard>
                    <FormField icon={iconMaker(title)} handleForm={handleForm} name="title" value={value.title} keyboardType="default" label="Title" placeholder="Enter here" secure={false}/>
                    <View style={{marginVertical:6}}/>
                    <FormField icon={iconMaker2(user)} handleForm={handleForm} name="firstname" value={value.firstname} keyboardType="default" label="First Name" placeholder="Enter here" secure={false}/>
                    <View style={{marginVertical:6}}/>
                    <FormField icon={iconMaker2(user)} handleForm={handleForm} name="lastname" value={value.lastname} keyboardType="default" label="Last Name" placeholder="Enter here" secure={false}/>
                    <View style={{marginVertical:6}}/>
                    <FormField icon={iconMaker(email)} handleForm={handleForm} name="email" value={value.email} keyboardType="email-address" label="Email" placeholder="mail@gmail.com" secure={false}/>
                    <View style={{marginVertical:6}}/>
                    <FormField icon={iconMaker2(cell_phone)} handleForm={handleForm} name="phone" value={value.phone} keyboardType="numeric" label="Mobile" placeholder="Enter Mobile Number" secure={false}/>
                    <View style={{marginVertical:6}}/>
                    <FormField icon={iconMaker2(city_map)} handleForm={handleForm} name="address" value={value.address} keyboardType="default" label="Address" placeholder="Address 1" secure={false}/>
                    <View style={{marginVertical:6}}/>
                    <FormField icon={iconMaker2(city_map)} handleForm={handleForm} name="address2" value={value.address2} keyboardType="default" label="Address" placeholder="Address 2" secure={false}/>
                    <View style={{marginVertical:6}}/>
                    <FormField icon={iconMaker2(city)} handleForm={handleForm} name="city" value={value.city} keyboardType="default" label="City" placeholder="Enter City Here" secure={false}/>
                    <View style={{marginVertical:6}}/>
                    <FormField icon={iconMaker2(empire_state)} handleForm={handleForm} name="state" value={value.state} keyboardType="default" label="State" placeholder="Enter State Here" secure={false}/>
                    <View style={{marginVertical:6}}/>
                    <SelectField name="country_id" handleForm={handleForm} value={value.country_id} label="Select your Country" collection={countryCollection}/>
                    <View style={{marginVertical:6}}/>
                    <SelectField name="net_worth" handleForm={handleForm} value={value.net_worth} label="Please select your net worth" collection={countryCollection}/>
                    <View style={{marginVertical:6}}/>
                    <SelectField name="invest_amt" handleForm={handleForm} value={value.invest_amt} label="Please select the amount you want to invest" collection={countryCollection}/>
                    <View style={{marginVertical:6}}/>
                    <FormField icon={iconMaker2(password)} handleForm={handleForm} name="password" value={value.password} keyboardType="default" label="Password" placeholder="password" secure={true}/>
                    <View style={{marginVertical:6}}/>
                    <FormField icon={iconMaker2(passwordR)} handleForm={handleForm} name="confirm_password" value={value.confirm_password} keyboardType="default" label="Re-Enter Password" placeholder="password" secure={true}/>
                    <View style={{marginVertical:6}}/>
                    <GreenButton title="Sign Up"/>
                    <View style={styles.spacer}/>
                </CoverCard>
                <View style={styles.registerCont}>
              
              <Text style={styles.registerText}>Dont have an Account? </Text>
              <Text style={styles.registerTextLink}>Register Here</Text>
         
            
          </View>
            </ScrollView>
        </View>
    )
}
