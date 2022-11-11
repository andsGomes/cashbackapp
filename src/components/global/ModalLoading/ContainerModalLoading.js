// libraries
import React from 'react';
import { Modal, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

// js
import colors from '../../../util/colors';
import styles from './containerModalLoadingStyle';

function LoadingModal(props) {
    // constants
    const {
        activityIndicatorNull,
        loading,
        message = 'Carregando...',
    } = props;

    // renders
    return (
        <Modal
            animationType='none'
            transparent
            visible={loading}
        >
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    {activityIndicatorNull ? null : (
                        <ActivityIndicator
                            animating={loading}
                            color={colors.blueDark}
                            size={36}
                        />
                    )}
                    <Text style={styles.text}>{message}</Text>
                </View>
            </View>
        </Modal>
    );
}

export default LoadingModal;
