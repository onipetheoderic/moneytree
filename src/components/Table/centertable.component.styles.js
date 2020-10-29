import { StyleSheet } from 'react-native';
import {palete} from '../../theme/theme';


export default StyleSheet.create({
    container: {
        marginBottom:20,
        alignSelf:'center',
        width:'92%',
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
        justifyContent: 'space-between',
        marginTop:5,
        marginRight:25,
        marginLeft:25,      
    },
    dataText: {
        color: palete.PureBlack,
        fontFamily:'Poppins_500Medium',
        fontSize:10,
       
    },
    rowCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        marginRight:25,
        marginLeft:25,      
    },
    eachRowText: {
        color: palete.DirtyBrown,
        fontFamily:'Poppins_700Bold',
        fontSize:14,
       
    }
})