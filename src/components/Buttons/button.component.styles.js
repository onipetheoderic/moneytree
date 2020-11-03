import { StyleSheet } from 'react-native';
import {palete} from '../../theme/theme'

export default StyleSheet.create({
   containerCover:{
     backgroundColor:palete.BritishRacingGreen,
     width:'90%',
     height:56,
     borderRadius:10,
     alignSelf:'center',
     alignItems:'center',
     justifyContent:'center'
    },
    titleText: {
        fontSize: 15,
        color:'white',
        fontFamily:'Poppins_500Medium',
    }
})