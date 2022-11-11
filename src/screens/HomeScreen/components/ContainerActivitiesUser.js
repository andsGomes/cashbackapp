// libraries
import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

// js
import styles from '../homeStyles';

function ContainerActivitiesUser(props) {
    // constants
    const {
        item,
        onPress,
    } = props;

    // render
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.containerBodyActivities}
            disabled={!item?.idImagem}
        >
            <View style={styles.containerBodyActivitiesInfo}>
                <View style={styles.containerGreen(item?.adm)} />
                <View>
                    <Text style={styles.txtBodyActivitiesName} numberOfLines={1}>{item.nomeUsuario}</Text>
                    <Text style={styles.txtBodyActivitiesDescription} numberOfLines={2}>{item.mensagem}</Text>
                </View>
            </View>
            {!item?.idImagem ? null : (
                <Image
                    source={require('../../../../assets/icons/imageCash.png')}
                    style={{ width: 12, height: 12 }}
                />
            )}
            <View style={styles.containerBodyActivitiesHour}>
                <Text style={styles.txtBodyActivitiesName}>{item.data.substring(11, 16)}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ContainerActivitiesUser;
