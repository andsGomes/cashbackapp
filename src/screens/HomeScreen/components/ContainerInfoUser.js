// libraries
import React from 'react';
import { Image, Text, View } from 'react-native';

// js
import styles from '../homeStyles';

function ContainerInfoUser(props) {
    // constants
    const {
        item,
    } = props;

    // render
    return (
        <View style={styles.containerDataUser}>
            <Image
                source={item.icon}
                style={styles.iconDataUser}
                resizeMode='contain'
            />
            <Text style={styles.txtHeaderInfoTitle}>
                {item.name}
            </Text>
            <Text style={styles.txtHeaderInfoResultFlat}>
                {item.result}
            </Text>
        </View>
    );
}

export default ContainerInfoUser;
