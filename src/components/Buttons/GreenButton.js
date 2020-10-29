import React from 'react';
import { Text, View } from 'react-native';
import styles from './button.component.styles'
import PropTypes from 'prop-types';

export default function GreenButton({title}) {
    return (
        <View style={styles.containerCover}>
           <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

GreenButton.propTypes = {
    title: PropTypes.string.isRequired,
}
