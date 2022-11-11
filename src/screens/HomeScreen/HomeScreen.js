// libraries
import React, { useEffect, useState } from 'react';
import { Animated, Easing, FlatList, SafeAreaView, Text, View } from 'react-native';
import RNFadedScrollView from 'rn-faded-scrollview';
import { useDispatch, useSelector } from 'react-redux';
import { PanGestureHandler } from 'react-native-gesture-handler';

// js
import colors from '../../util/colors';
import format from '../../util/format';
import home from '../../services/home';
import styles from './homeStyles';
import validationUpdate from '../../util/validationUpdateExercises';

// actions
import { updateBottomTab } from '../../store/modules/configs/actions';

// components
import ContainerActivitiesUser from './components/ContainerActivitiesUser';
import ContainerInfoUser from './components/ContainerInfoUser';
import LoadingScreen from '../../components/global/LoadingScreen/ContainerLoadingScreen';
import ContainerModalActivities from './components/ContainerModalActivities';
import FreezeScreen from './components/FreezeScreen';

function HomeScreen(props) {
    // selectors
    const userInfo = useSelector((state) => state.user.user);
    const infoExercises = useSelector((state) => state.user.infoExercises);

    // dispatch
    const dispatch = useDispatch();

    // constants
    const { navigation } = props;
    const initialAnimated = new Animated.Value(0);

    // states
    const [infoActivity, setInfoActivity] = useState([]);
    const [infoHome, setInfoHome] = useState({});
    const [loading, setLoading] = useState(true);
    const [infoUser, setInfoUser] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [dataOpenPhoto, setDataOpenPhoto] = useState({});
    const [displayLoading, setDisplayLoading] = useState(false);
    const [freeze, setFreeze] = useState(false);
    const [opacity, setOpacity] = useState(initialAnimated);
    const [spinValue, setSpinValue] = useState(initialAnimated);
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    // useEffect
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            GetInfoHome();
            GetInfoActivity();
            dispatch(updateBottomTab(-1));
            if (infoExercises) {
                validationUpdate.ValidationUpdateExercises(infoExercises, dispatch);
            }
        });

        return unsubscribe;
    }, []);

    // methods
    function Format(value, type) {
        if (type === 'percentage') {
            return (
                `${format.toPrice(value)}%`
            );
        }
        if (type === 'money') {
            return (
                `R$ ${format.toPrice(value)}`
            );
        }
        return null;
    }

    async function GetInfoHome() {
        const info = await home.GetHome(userInfo?.id, userInfo?.token, navigation, dispatch);
        if (!info) {
            return null;
        }
        const arrayUserInfo = [
            {
                icon: require('../../../assets/icons/heartbeat.png'),
                id: 1,
                name: 'Dias de exercício praticados',
                result: info?.data?.diasPraticados || 0,
            },
            {
                icon: require('../../../assets/icons/statistics.png'),
                id: 2,
                name: 'Performance de aproveitamento',
                result: Format(info?.data?.performaceAproveitamento || 0, 'percentage'),
            },
            {
                icon: require('../../../assets/icons/returnInvestiment.png'),
                id: 3,
                name: 'Retorno sobre investimento',
                result: Format(info?.data?.retornoInvestimento || 0, 'percentage'),
            },
            {
                icon: require('../../../assets/icons/ranking.png'),
                id: 4,
                name: 'Quantos já se exercitaram hoje?',
                result: info?.data?.seExercitaramHoje || 0,
            },
        ];
        setInfoUser(arrayUserInfo);
        setInfoHome(info.data);
        setLoading(false);
    }

    async function GetInfoActivity() {
        const info = await home.GetActivity(userInfo?.id, userInfo?.token, navigation, dispatch);
        setInfoActivity(info?.dataList || []);
        setLoading(false);
    }

    async function ValidationOpenModal(item) {
        if (item.idImagem) {
            const info = await home.GetPhoto(item.idImagem, userInfo?.id, userInfo?.token, navigation, dispatch);
            setOpenModal(true);
            const data = { ...item, url: info.data.url };
            setDataOpenPhoto(data);
        }
    }

    function onRefresh() {
        setFreeze(true);
        setDisplayLoading(true);
        GetInfoHome();
        GetInfoActivity();
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            },
        ).start();

        Animated.loop(
            Animated.timing(
                spinValue,
                {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                },
            ),
        ).start();

        setTimeout(() => {
            setDisplayLoading(false);
            setFreeze(false);
            setOpacity(initialAnimated);
            setSpinValue(initialAnimated);
        }, 1000);
    }

    // renders
    function GetContainerInfoUser(item) {
        return (
            <ContainerInfoUser key={item.id} item={item} />
        );
    }

    function GetContainerActivity(item) {
        return (
            <ContainerActivitiesUser
                key={item.id}
                item={item}
                onPress={() => ValidationOpenModal(item)}
            />
        );
    }

    function GetFlatListActivity() {
        if (infoActivity.length) {
            return (
                infoActivity.map((value) => GetContainerActivity(value))
            );
        }

        return (
            <Text style={styles.txtBodyActivitiesDescription}>Sem atividades registradas.</Text>
        );
    }

    // renders
    function RenderScreen() {
        if (!loading) {
            return (
                <>
                    {displayLoading && (
                        <Animated.Image
                            style={[styles.containerAnimationImage, { opacity, transform: [{ rotate: spin }] }]}
                            source={require('../../../assets/icons/pullToRefresh.png')}
                        />
                    )}
                    <View style={styles.containerChildrenGesture}>
                        <PanGestureHandler
                            activeOffsetY={50}
                            shouldCancelWhenOutside
                            onBegan={() => onRefresh()}
                        >
                            <View>
                                <View style={styles.container}>
                                    <Text style={styles.txtWelcome}>{`Olá, ${infoHome?.apelido || ''}`}</Text>
                                    <Text style={styles.txtWelcomeTwoLines}>Seja bem-vindo</Text>
                                    <Text style={styles.txtWelcomeTwoLines}>
                                        ao
                                        <Text style={styles.txtWelcomeThreeLines}> CashbackFitness</Text>
                                    </Text>
                                </View>
                                <View style={styles.containerBalance}>
                                    <View style={styles.containerBalanceInfo}>
                                        <Text style={styles.txtHeaderInfoTitle}>Saldo Diário (R$)</Text>
                                        <Text
                                            adjustsFontSizeToFit
                                            numberOfLines={1}
                                            style={styles.txtHeaderInfoResult}
                                        >
                                            {Format(infoHome?.saldoDia || 0, 'money')}
                                        </Text>
                                    </View>
                                    <View style={styles.containerBalanceInfo}>
                                        <Text style={styles.txtHeaderInfoTitle}>Saldo Total (R$)</Text>
                                        <Text
                                            adjustsFontSizeToFit
                                            numberOfLines={1}
                                            style={styles.txtHeaderInfoResult}
                                        >
                                            {Format(infoHome?.saldoTotal || 0, 'money')}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </PanGestureHandler>
                        <FlatList
                            contentContainerStyle={styles.containerFlatList}
                            data={infoUser}
                            horizontal
                            renderItem={({ item }) => GetContainerInfoUser(item)}
                            showsHorizontalScrollIndicator={false}
                            style={styles.containerFlatListGrow}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                    <View style={styles.containerTxtActivities}>
                        <Text style={styles.txtWelcome}>Atividade</Text>
                    </View>
                    <RNFadedScrollView
                        containerStyle={styles.containerFadedScrollView}
                        fadeColors={colors.gradientOpacityScroll}
                        fadeSize={100}
                        showsVerticalScrollIndicator={false}
                        horizontal={false}
                    >
                        {GetFlatListActivity()}
                    </RNFadedScrollView>
                    <ContainerModalActivities data={dataOpenPhoto} openModal={openModal} setOpenModal={setOpenModal} />
                    <FreezeScreen openModal={freeze} />
                </>
            );
        }

        return (
            <LoadingScreen loading={loading} />
        );
    }
    return (
        <SafeAreaView style={styles.containerBackground}>
            {RenderScreen()}
        </SafeAreaView>
    );
}

export default HomeScreen;
