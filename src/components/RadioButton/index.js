import React from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
     Platform, Alert } from 'react-native';

import {palete} from '../../theme/theme'

import styles from './radiobutton.component.styles';
import RadioButtonRN from 'radio-buttons-react-native';

export default function RadioButton({data}) {
    
    return (
      <View style={styles.subView}>
       <Text style={styles.title}>Payment Status</Text>
            <RadioButtonRN
            textStyle={styles.radioTextStyle}
            box={false}
            animationTypes={['pulse']}
            initial={1}
            activeColor={palete.BritishRacingGreen}
        data={data}
        selectedBtn={(e) => console.log(e)}
        />
      </View>
    );
}
  
RadioButton.propTypes = {

}
  