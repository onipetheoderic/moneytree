import React from 'react';
import { Text, View } from 'react-native';
import styles from './topic.component.styles'
import PropTypes from 'prop-types';

export default function Topic({title, color, fontSize, marginTop}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title,{color:color, fontSize:fontSize, marginTop:marginTop}]}>{title.toUpperCase()}</Text>
        </View>
    )
}

Topic.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
}
