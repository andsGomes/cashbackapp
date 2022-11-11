// libraries
import React from 'react';
import { Text, View } from 'react-native';

// js
import colors from '../../../util/colors';
import format from '../../../util/format';
import styles from '../extractStyles';

function ContainerItemsFilters(props) {
    // constants
    const {
        data,
    } = props;

    // methods
    function RenderName(type) {
        if (data.descricao === 'adesao' && type === 'name') {
            return 'Adesão ao Grupo';
        }
        if (data.descricao === 'adesao' && type === 'value') {
            return colors.red;
        }
        if (data.descricao === 'adesao' && type === 'splitSignal') {
            return `- R$ ${format.toPrice(data.valor * -1)}`;
        }
        if (data.descricao === 'pagamento' && type === 'name') {
            return 'Novo Pagamento';
        }
        if (data.descricao === 'pagamento' && type === 'value') {
            return colors.white;
        }
        if (data.descricao === 'pagamento' && type === 'splitSignal') {
            return `R$ ${format.toPrice(data.valor)}`;
        }
        if (data.descricao === 'resgate' && type === 'name') {
            return 'Solicitação de Resgate';
        }
        if (data.descricao === 'resgate' && type === 'value') {
            return colors.red;
        }
        if (data.descricao === 'resgate' && type === 'splitSignal') {
            return `- R$ ${format.toPrice(data.valor * -1)}`;
        }
        if (data.descricao === 'exercicio' && type === 'name') {
            return 'Receita Exercício';
        }
        if (data.descricao === 'exercicio' && type === 'value') {
            return colors.green;
        }
        if (data.descricao === 'exercicio' && type === 'splitSignal') {
            return `+ R$ ${format.toPrice(data.valor)}`;
        }
    }

    // render
    return (
        <View style={styles.containerBodyActivities}>
            <View style={styles.containerBodyActivitiesInfo}>
                <View style={styles.containerBodyActivitiesInfoTwo}>
                    <View style={styles.containerGreen} />
                    <View>
                        <Text style={styles.txtBodyActivitiesName} numberOfLines={1}>{RenderName('name')}</Text>
                        <Text style={styles.txtBodyActivitiesDescription} numberOfLines={2}>{data.data.substring(0, 5).replace('/', '.')}</Text>
                    </View>
                </View>
                <Text style={{ color: RenderName('value') }}>{RenderName('splitSignal')}</Text>
            </View>
        </View>
    );
}

export default ContainerItemsFilters;
