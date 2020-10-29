import React from 'react';
import { Text, View } from 'react-native';
import styles from './cards.component.styles'
import PropTypes from 'prop-types';

export default function CoverCard(props) {
    return (
        <View style={styles.containerCover}>
            <View style={{marginVertical:15}} />
            {props.children}
        </View>
    )
}

CoverCard.propTypes = {
   
}
