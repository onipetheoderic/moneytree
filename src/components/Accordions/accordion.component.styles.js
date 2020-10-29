import { StyleSheet } from 'react-native';
import {palete} from '../../theme/theme'

export default StyleSheet.create({
container: {
    width: '80%',
    alignSelf:'center'
},
accordionBody: {

width: '100%',
alignItems:'center'
},
accordionHeader: {
    justifyContent:'space-between',
    flexDirection: 'row',

},
accordionText: {
    fontSize:20,
    fontFamily:'Poppins_500Medium',
},
image: {
    width:24,
    height:24,
    resizeMode:'contain'
}

})