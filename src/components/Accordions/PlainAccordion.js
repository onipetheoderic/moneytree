import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './accordion.component.styles'
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import Open from '../../../assets/images/open.png';
import Close from '../../../assets/images/close.png';

export default function PlainAccordion({children, title}) {
    const [open, setOpen] = useState(false)

    const source = open ? Open : Close;
    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.accordionHeader} onPress={()=>setOpen(!open)}>
                <Text style={styles.accordionText}>{title}</Text>
                <Image source={source} style={styles.image} />
                
            </TouchableOpacity>
            {open && 
            <Animatable.View animation="zoomInUp" style={styles.accordionBody}>
            {children}
            </Animatable.View>
            }
            
            
        </View>
    )
}

PlainAccordion.propTypes = {
   
}
