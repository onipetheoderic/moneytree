import { StyleSheet } from 'react-native';
import {palete} from '../../theme/theme'

export default StyleSheet.create({
    filterField: {
        backgroundColor:'white', 
        width:'88%', 
        alignSelf:'center', 
        height:50,
        borderRadius:7,
        justifyContent:'center',
        shadowColor: "#00000014",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 10,
    },
    textInput2: {
        
        fontFamily:'Poppins_500Medium',
        height: 40, 
        marginLeft:14,
    },
    optionsMenuCont: {
        width:'100%',
        zIndex:100,
        backgroundColor:'white'
    },
    containerFilter: {
        marginTop:20,
        justifyContent:'space-between',
        flexDirection:'row',
        width:'88%', 
        alignSelf:'center'
    },
    selectBox: {
        width:'100%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:4,
        backgroundColor:'#0000001C',
    },
    selectText: {
        fontFamily:'Poppins_500Medium',
        fontSize:12,
        color: palete.DirtyBrown,
    },
    clearTextStyle: {
        fontFamily:'Poppins_500Medium',
        fontSize:16,
        color: palete.DirtyBrown,
    },
    title:{
        fontFamily:'Poppins_800ExtraBold',
        // color: palete.BritishRacingGreen
    },
    formPortionFilter:{
        zIndex:10,
        marginLeft:'auto', 
        width:'88%', 
        height:53
    },
   formPortion:{
    zIndex:10,
    marginLeft:'auto', 
    width:'88%', 
    height:53
   },
   formPortion2:{
    zIndex:10,
    marginLeft:'auto', 
    width:'88%', 
    height:56,
    justifyContent:'center'
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
    typeContSelect: {
        marginRight:10,
        alignSelf:'center'
     },
    label: {
        fontFamily:'Poppins_500Medium',
        fontSize:10,
        color: palete.BritishRacingGreen,
        marginTop:10,
        marginLeft:4,
    },
    labelSelect: {
        fontFamily:'Poppins_500Medium',
        fontSize:10,
        marginLeft:10,
      
    },
    textInput: {
        marginTop:-13, 
        fontFamily:'Poppins_500Medium',
        height: 40, 
        marginLeft:4,
        
         
    }
})