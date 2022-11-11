// libraries
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// js
import format from '../../../util/format';
import styles from '../participateStyle';

function ContainerListGroups(props) {
    // constants
    const {
        data,
        onPress,
    } = props;

    // renders
    function ValidParticipate() {
        if (data.valorPendente) {
            return (
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.txtGroupsBodyParticipateTwo}
                >
                    {`Depositar + ${format.toPrice(data.valorPendente).replace(',', '.')}`}
                </Text>
            );
        }
        return (
            <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={styles.txtGroupsBodyParticipate}
            >
                Participar
            </Text>
        );
    }

    return (
        <View style={styles.containerGroupsBody}>
            <View style={styles.containerGroupsInfo}>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.txtGroupsBodyTwo}
                >
                    {data.nome}
                </Text>
            </View>
            <View style={styles.containerGroupsInfo}>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.txtGroupsBodyTwo}
                >
                    {`${data.duracao}`}
                </Text>
            </View>
            <View style={styles.containerGroupsInfo}>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.txtGroupsBodyTwo}
                >
                    {data.descricaoDiasSemana}
                </Text>
            </View>
            <View style={styles.containerGroupsInfo}>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.txtGroupsBodyTwo}
                >
                    {format.toPrice(data.valor).replace(',', '.')}
                </Text>
            </View>
            <View style={styles.containerNull} />
            <TouchableOpacity
                onPress={() => onPress(data.id, data.valorPendente)}
                style={styles.containerGroupsBodyParticipate}
            >
                {ValidParticipate()}
            </TouchableOpacity>
        </View>
    );
}

export default ContainerListGroups;
