// libraries
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// js
import backHandler from '../../util/backHandler';
import extract from '../../services/extract';
import format from '../../util/format';
import styles from './extractStyles';

// components
import ArrowGoBack from '../../components/global/GoBackClick/ContainerGoBack';
import ContainerItemsFilters from './components/ContainerItemsFilters';
import ContainerOptionsFilters from './components/ContainerOptionsFilters';
import LoadingScreen from '../../components/global/LoadingScreen/ContainerLoadingScreen';

function ExtractScreen(props) {
    // selectors
    const userInfo = useSelector((state) => state.user.user);

    // dispatch
    const dispatch = useDispatch();

    // constants
    const {
        navigation,
    } = props;
    const ListFiltersLineOne = [
        {
            idKey: '1',
            lastDays: 5,
            label: '5\nDias',
            description: null,
        },
        {
            idKey: '2',
            lastDays: 10,
            label: '10\nDias',
            description: null,
        },
        {
            idKey: '3',
            lastDays: 15,
            label: '15\nDias',
            description: null,
        },
        {
            idKey: '4',
            lastDays: 30,
            label: '30\nDias',
            description: null,
        },
        {
            idKey: '5',
            lastDays: 60,
            label: '60\nDias',
            description: null,
        },
        {
            idKey: '6',
            lastDays: 365,
            label: 'Resgate',
            description: 1,
        },
        {
            idKey: '7',
            lastDays: 365,
            label: 'Deposito',
            description: 2,
        },
    ];

    // states
    const [resultFilter, setResultFilter] = useState({});
    const [identifierColor, setIdentifierColor] = useState({});
    const [loading, setLoading] = useState(true);

    // useEffect
    useEffect(() => {
        backHandler.BackHandlerAdjuste(dispatch);
        FilterExtract(365, null);
    }, []);

    // methods
    function NavigationArrowGoBack() {
        navigation.replace('AppRouteBottomTab');
    }

    async function FilterExtract(lastDays, description) {
        const result = await extract.GetFilterExtract(userInfo?.id, lastDays, description, userInfo?.token, navigation, dispatch);
        if (!result) {
            return null;
        }
        setResultFilter(result?.data || {});
        setLoading(false);
    }

    // renders
    function RenderListFilters() {
        return (
            ListFiltersLineOne.map((value) => {
                return (
                    <ContainerOptionsFilters
                        data={value}
                        FilterExtract={FilterExtract}
                        identifierColor={identifierColor}
                        setIdentifierColor={setIdentifierColor}
                        key={value.idKey}
                    />
                );
            })
        );
    }

    function RenderList() {
        const formatResult = resultFilter?.itens || [];

        return (
            <FlatList
                data={formatResult}
                contentContainerStyle={styles.containerFlatList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <ContainerItemsFilters data={item} />
                    );
                }}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyExtract}>Sem dados de extrato para exibir.</Text>
                )}
            />
        );
    }

    function RenderScreen() {
        if (!loading) {
            return (
                <>
                    <ArrowGoBack onPress={NavigationArrowGoBack} />
                    <View style={styles.container}>
                        <View style={styles.containerHeader}>
                            <View style={styles.containerIcon}>
                                <Image
                                    source={require('../../../assets/icons/extractHeader.png')}
                                    style={styles.icon}
                                    resizeMode='contain'
                                />
                            </View>
                            <Text style={styles.txtHeader}>Extratos</Text>
                        </View>
                        <View style={styles.containerTabFilters}>
                            {RenderListFilters()}
                        </View>
                        <View style={styles.containerLineTransparent} />
                    </View>
                    {RenderList()}
                    <View style={styles.containerNull} />
                    <SafeAreaView style={styles.containerAbsolute}>
                        <Text style={styles.txtValueTotal}>Valor Total</Text>
                        <Text style={styles.txtValueTotalResult}>{`R$ ${format.toPrice(resultFilter?.valorTotal || 0)}`}</Text>
                    </SafeAreaView>
                </>
            );
        }

        return (
            <LoadingScreen loading={loading} />
        );
    }

    return (
        <View style={styles.scroll}>
            {RenderScreen()}
        </View>
    );
}

export default ExtractScreen;
