import { StyleSheet } from 'react-native';
import {palete} from '../../theme/theme'
export default StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        alignItems:'center'
    },
    image: {
        height:159,
        marginTop:20,
        width:167,
        resizeMode:'contain',
        alignSelf:'center'
    },
    inviteText: {
        fontFamily:'Poppins_500Medium',
        alignSelf:'center',
        fontSize:20,
        marginBottom:15
    },
    btnCont: {
        marginTop:10,
        width:'80%', 
        alignSelf:'center'
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
    }
});