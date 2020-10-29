import { StyleSheet } from 'react-native';
import {palete} from '../../theme/theme'

export default StyleSheet.create({
    title:{
        fontFamily:'Poppins_800ExtraBold',
        // color: palete.BritishRacingGreen
    },
   formPortion:{
    zIndex:10,
    marginLeft:'auto', 
    width:'88%', 
    height:53
   },
    container: {
        alignSelf: 'center',
        backgroundColor:'#0000001C',
        borderRadius:10,
        height:56,
        zIndex:10,
        flexDirection:'row'

    },
    image: {
        width:14,
        height:10
    },
    typeCont: {
       marginLeft:10,
       marginTop:23
    },
    label: {
        fontFamily:'Poppins_500Medium',
        fontSize:10,
        color: palete.BritishRacingGreen,
        marginTop:10,
        marginLeft:4,
    },
    textInput: {
        marginTop:-13, 
        fontFamily:'Poppins_500Medium',
        height: 40, 
        marginLeft:4,
        
         
    }
})