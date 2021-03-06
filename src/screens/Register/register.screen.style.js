import { StyleSheet } from 'react-native';
import {palete} from '../../theme/theme'
export default StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        alignItems:'center'
    },
    imageIcon: {
        width:15.26,
        height:13.99,
        resizeMode: 'contain',
    },
    image: {
        height:80,
        width:141,
        resizeMode:'contain'
    },
    imageIcon2: {
        width:12.5,
        height:14.99,
        resizeMode: 'contain',
    },
    forgotPassword: {
        fontFamily:'Poppins_500Medium',
        fontSize:10,
        marginTop:-10,
        alignSelf:'flex-end',
        marginRight:16,
        color: palete.DirtyBrown
    },
    spacer: {
        marginTop:30
    },
    registerText: {
        fontSize:10,
        fontFamily:'Poppins_500Medium',
    },
    registerTextLink: {
        fontSize:10,
        fontFamily:'Poppins_500Medium',
        color:palete.BritishRacingGreen
    },
    registerCont: {
        marginTop:30,
        marginBottom:30,
        alignSelf:'center',
        height:'100%',
        justifyContent:'center',
        flexDirection:'row'
    },
  
});