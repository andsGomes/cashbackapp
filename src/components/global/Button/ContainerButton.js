// libraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// js
import styles from './containerButtonStyles';

function ContainerButton(props) {
    // constants
    const {
        label,
        onPress,
        styleContainerButton,
        styleTxtButton,
        disabled = false,
    } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.containerButton, styleContainerButton]}
            disabled={disabled}
        >
            <Text style={[styles.txtButton, styleTxtButton]}>{label}</Text>
        </TouchableOpacity>
    );
}

export default ContainerButton;
