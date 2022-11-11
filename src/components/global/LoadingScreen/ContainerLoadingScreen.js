// libraries
import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

// js
import colors from '../../../util/colors';
import styles from './containerLoadingScreenStyle';

function ContainerLoadingScreen(props) {
    // constants
    const {
        loading,
    } = props;

    // renders
    return (
        <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator
                animating={loading}
                color={colors.white}
                size={36}
            />
        </View>
    );
}

export default ContainerLoadingScreen;
