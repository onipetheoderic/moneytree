import React from 'react';
import { Text, View } from 'react-native';
import styles from './cards.component.styles'
import PropTypes from 'prop-types';

export default function WrappableCard({title, digit}) {
    return (
        <View style={styles.containerWrap}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.digitText}>{digit}</Text>
        </View>
    )
}

WrappableCard.propTypes = {
   
}
