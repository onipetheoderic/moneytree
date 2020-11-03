import { StyleSheet } from 'react-native';
import {palete} from '../../theme/theme';


export default StyleSheet.create({
    paginationCont: {
        marginLeft:'20%',      
        flexDirection:'row'
    },
    eachText: {
        fontFamily:'Poppins_500Medium',
        color:'white',
        fontSize:9
    },
    iconStyle: {
        color:'black',
        marginTop:5,
        fontSize:22,
        marginLeft:15,
    },
    iconStyle2: {
        color:'black',
        marginTop:5,
        fontSize:22,
        marginRight:15,
    },
    eachPage:{
        margin:2,
        width: 30,
        height:30,
        borderRadius:25,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    },
    container: {
        marginBottom:20,
        marginLeft:15,
        marginRight:20,
        width:400,
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
    investmentStyle: {
        color: palete.PureBlack,
        fontFamily:'Poppins_500Medium',
        fontSize:15,
        marginTop:30,
        marginLeft:25
    },
    topicCont: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image: {
        width:22,
        height:22,
        marginTop:30,
        marginRight:25
    },
    dataRowCont: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:5,
        marginRight:25,
        marginLeft:3,   
        height:30,   
    },
    dataText: {
        color: palete.PureBlack,
        fontFamily:'Poppins_500Medium',
        fontSize:11,
       
    },
    rowCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20,
        marginRight:25,
        marginLeft:25,      
    },
    eachRowText: {
        color: palete.BritishRacingGreen,
        fontFamily:'Poppins_700Bold',
        fontSize:12,
        marginRight:-10,
        
       
    }
})