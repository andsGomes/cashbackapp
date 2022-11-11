// libraries
import React from 'react';
import { Modal, View } from 'react-native';

// js
import styles from '../homeStyles';

function FreezeScreen(props) {
    // constants
    const {
        openModal,
    } = props;

    // render
    return (
        <Modal
            animationType='none'
            transparent
            visible={openModal}
        >
            <View style={styles.modalBackgroundFreeze} />
        </Modal>
    );
}

export default FreezeScreen;
