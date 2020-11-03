import React from 'react'
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Platform, Alert } from 'react-native';
import PropTypes from 'prop-types'
import styles from './dashboard.header.component.styles';
export default function SubHeader() {
  return (
    <View style={styles.subView}>
        <View style={styles.body}>
            <Text style={styles.subTextSmall}>Wallet Balance</Text>
            <Text style={styles.bigText}>$124.99 USD</Text>
        </View>
       
    </View>
  );
}

SubHeader.propTypes = {

}
