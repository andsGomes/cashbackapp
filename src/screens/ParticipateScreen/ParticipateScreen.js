// libraries
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, ScrollView, Text, View, SafeAreaView } from 'react-native';
import Toast from 'react-native-tiny-toast';
import { useDispatch, useSelector } from 'react-redux';

// js
import backHandler from '../../util/backHandler';
import format from '../../util/format';
import home from '../../services/home';
import profile from '../../services/profile';
import participate from '../../services/participate';
import styles from './participateStyle';

// actions
import { updateUser } from '../../store/modules/user/actions';

// components
import ArrowGoBack from '../../components/global/GoBackClick/ContainerGoBack';
import ContainerListGroups from './components/ContainerListGroups';
import LoadingScreen from '../../components/global/LoadingScreen/ContainerLoadingScreen';

function ParticipateScreen(props) {
    // selectors
    const userInfo = useSelector((state) => state.user.user);

    // dispatch
    const dispatch = useDispatch();

    // constants
    const {
        navigation,
    } = props;

    // states
    const [allInfoBody, setAllInfoBody] = useState([]);
    const [allInfoHeader, setAllInfoHeader] = useState({});
    const [loading, setLoading] = useState(true);

    // useEffect
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            backHandler.BackHandlerAdjuste(dispatch);
            GetInfoGroups();
        });

        return unsubscribe;
    }, []);

    // methods
    function NavigationArrowGoBack() {
        navigation.replace('AppRouteBottomTab');
    }

    async function GetInfoGroups() {
        const infoGroups = await participate.GetGroups(userInfo?.id, userInfo?.token, navigation, dispatch);
        const infoHome = await home.GetHome(userInfo?.id, userInfo?.token, navigation, dispatch);
        if (!infoGroups || !infoHome) {
            return null;
        }
        const newValue = {
            apelido: infoHome?.data.apelido,
            saldoTotal: infoHome?.data.saldoTotal,
        };
        setAllInfoBody(infoGroups?.dataList);
        setAllInfoHeader(newValue);
        setLoading(false);
    }

    async function CreateParticipate(idGroup, valueDeposit) {
        if (valueDeposit) {
            navigation.replace('AppRouteBottomTab', { screen: 'DepositScreen' });
        } else {
            const dataParticipate = await participate.RegisterParticipate(userInfo?.id, idGroup, userInfo?.token, navigation, dispatch);
            if (!dataParticipate) {
                return null;
            }
            if ((dataParticipate?.errors || []).length) {
                return Alert.alert(JSON.stringify(dataParticipate.errors[0]));
            }
            const id = userInfo?.id;
            const token = userInfo?.token;
            const infoProfile = await profile.GetInfoUser(id, token, navigation, dispatch);
            if (!infoProfile) {
                return null;
            }
            const dataProfile = {
                ...infoProfile.data,
                token,
            };
            const updateProfile = updateUser(dataProfile);
            dispatch(updateProfile);
            GetInfoGroups();
            Toast.show('Parabéns sua inclusão no grupo está ok, seus exercícios já estão valendo a partir de hoje.', {
                position: Toast.position.BOTTOM,
                containerStyle: styles.containerToast,
                textStyle: styles.txtToast,
                duration: 5000,
            });
        }
    }

    // renders
    function RenderListGroups(item) {
        return (
            <ContainerListGroups data={item} onPress={CreateParticipate} />
        );
    }

    function RenderFlatList() {
        if (allInfoBody?.length) {
            return (
                <>
                    <Text style={styles.txtGroupsBody}>Por favor selecione qual grupo deseja participar</Text>
                    <View style={styles.containerHeader}>
                        <Text style={styles.txtHeaderList}>Grupo</Text>
                        <Text style={styles.txtHeaderList}>Tempo</Text>
                        <Text style={styles.txtHeaderList}>Dias</Text>
                        <Text style={styles.txtHeaderList}>Valor</Text>
                        <Text style={styles.txtHeaderList}>Participar</Text>
                    </View>
                    <FlatList
                        contentContainerStyle={styles.containerFlatListGroups}
                        data={allInfoBody}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => RenderListGroups(item)}
                    />
                </>
            );
        }
        return (
            <Text style={styles.txtGroupsDescription}>Não existe grupos para participar</Text>
        );
    }

    function RenderScreen() {
        if (!loading) {
            return (
                <>
                    <ArrowGoBack onPress={NavigationArrowGoBack} />
                    <View style={styles.containerHeader}>
                        <Text style={styles.txtHeaderName}>{`Olá, ${allInfoHeader?.apelido}`}</Text>
                        <Text style={styles.txtHeaderBalance}>
                            seu saldo:
                            <Text style={styles.txtHeaderBalanceResult}>{` R$ ${format.toPrice(allInfoHeader?.saldoTotal)}`}</Text>
                        </Text>
                    </View>
                    <View style={styles.containerGroups}>
                        <Text style={styles.txtGroups}>Grupos</Text>
                    </View>
                    {RenderFlatList()}
                    <View style={styles.viewBlind} />
                    <SafeAreaView style={styles.containerAbsolute}>
                        <Text style={styles.txtValueTotal}>Caso deseje criar um grupo por favor entrar em contato pelo WhatsApp (11) 94286-6974</Text>
                    </SafeAreaView>
                </>
            );
        }

        return (
            <LoadingScreen loading={loading} />
        );
    }

    return (
        <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
            style={styles.scrollBackgroundDragging}
        >
            {RenderScreen()}
        </ScrollView>
    );
}

export default ParticipateScreen;
