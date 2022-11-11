// libraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// js
import styles from '../extractStyles';
import colors from '../../../util/colors';

function ContainerOptionsFilters(props) {
    // constants
    const {
        FilterExtract,
        data,
        identifierColor,
        setIdentifierColor,
    } = props;

    // methods

    function TradeFilter() {
        if (!Object.values(identifierColor).length) {
            setIdentifierColor({ idKey: data.idKey });
            FilterExtract(data.lastDays, data.description);
        } else if (identifierColor?.idKey !== data.idKey) {
            setIdentifierColor({ idKey: data.idKey });
            FilterExtract(data.lastDays, data.description);
        } else {
            setIdentifierColor({});
            FilterExtract(365, null);
        }
    }

    // render
    return (
        <TouchableOpacity
            style={[styles.buttonFilters, { backgroundColor: identifierColor?.idKey === data.idKey ? colors.green : colors.blueLight }]}
            onPress={TradeFilter}
        >
            <Text style={[styles.txtButtonFilters, { color: identifierColor?.idKey === data.idKey ? colors.black : colors.white }]}>{data.label}</Text>
        </TouchableOpacity>
    );
}

export default ContainerOptionsFilters;
