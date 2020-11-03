import { StyleSheet } from 'react-native';
import {palete} from '../../theme/theme'

export default StyleSheet.create({
    subView: {
        backgroundColor:palete.BritishRacingGreen,
        height:90,
        width:'100%',
        alignItems:'center',
       
    },
    bigText: {
        fontSize: 40,
        color:'white'
    },  
    body: {
alignSelf:'center'
    },
    subTextSmall: {
        fontSize: 10,
        color: 'white'
    },
    container: {
        width:'100%',
    },
    subContainerPlain: {
        backgroundColor:palete.BritishRacingGreen,
        height:110,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'flex-end'
    },
    subContainer: {
        backgroundColor:palete.BritishRacingGreen,
        height:140,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
 
    text2:{
        color: palete.PureBlack,
        fontFamily:'Poppins_500Medium',
        fontSize: 13,
        marginTop:-6
    },
    text:{
        color: palete.DirtyBrown,
        fontFamily:'Poppins_500Medium',
        fontSize: 15
    },
    imageGold: {
        width:40,
        position:'absolute',
        resizeMode:'contain',
        height:40,
        left:'52%',
        bottom:-40,
        zIndex:20,
    },
    image: {
       
       
        marginLeft:-1.5,
        marginTop:-2,
      
    },
    circularImage: {
        backgroundColor:palete.BritishRacingGreen,
        width:65,
        height:65,
        borderRadius:38,
        borderColor:'white',
        borderWidth:2,
        position:'absolute',
        bottom:-34,
    },
    title: {
        // alignSelf:'center',
        fontFamily:'Poppins_500Medium',
        fontSize:20,
        marginLeft:-15,
        color:'white'
    },
    centerifier: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',

    },
    iconStyle: {
        color:'white',
        marginTop:5,
        fontSize:22,
        marginLeft:15,
    },
    iconStyle2: {
        color:'white',
        marginTop:5,
        fontSize:22,
        marginRight:15,
    }
})