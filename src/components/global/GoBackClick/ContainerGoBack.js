// libraries
import React from 'react';
import { Image, TouchableOpacity, SafeAreaView } from 'react-native';

// js
import styles from '../GoBackClick/containerGoBackStyles';

function ContainerGoBack(props) {
    // constants
    const {
        onPress,
    } = props;

    // renders
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.button}
            >
                <Image
                    source={require('../../../../assets/icons/setaVoltar.png')}
                    style={styles.img}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ContainerGoBack;
