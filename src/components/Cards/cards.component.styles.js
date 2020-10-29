import { StyleSheet } from 'react-native';
import {palete} from '../../theme/theme'

export default StyleSheet.create({
   containerCover:{
        alignSelf:'center',
        width:'90%',
        minHeight:306,
        borderRadius:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 6,
    },

    containerWrap: {
        width:'47%',
        borderRadius:8,
        height:104,
        marginVertical:10,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,        
        elevation: 6,
    },

    titleText: {
        color: palete.PureBlack,
        fontFamily:'Poppins_500Medium',
        fontSize:15,
        marginTop:14,
        lineHeight:18,
        width:150,
        alignSelf:'center',
        textAlign:'center'
    },

    digitText: {
        fontFamily:'Poppins_500Medium',
        marginTop:-12,
        fontSize:45,
        color: palete.BritishRacingGreen,
        alignSelf:'center'
    }


})