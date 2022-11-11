// libraries
import React, { useEffect, useState } from 'react';
import { ScrollView, Image, ImageBackground, Text, TouchableOpacity, View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { Stopwatch } from 'react-native-stopwatch-timer';
import LinearGradient from 'react-native-linear-gradient';

// js
import backHandler from '../../util/backHandler';
import styles from './informExercisesStyles';
import InformExercisesFunctions from './InformExercisesFunctions';

// actions
// import { updateExercises } from '../../store/modules/user/actions';

// components
import ArrowGoBack from '../../components/global/GoBackClick/ContainerGoBack';
import ContainerButton from '../../components/global/Button/ContainerButton';
import colors from '../../util/colors';
import LoadingModal from '../../components/global/ModalLoading/ContainerModalLoading';


function InformExercisesScreen(props) {
    // selectors
    const userInfo = useSelector((state) => state.user.user);
    const infoExercises = useSelector((state) => state.user.infoExercises);

    // dispatch
    const dispatch = useDispatch();

    // constants
    const {
        navigation,
    } = props;

    // states
    const [activeLoading, setActiveLoading] = useState(false);
    const [activeLoadingPhoto, setActiveLoadingPhoto] = useState(false);
    // const [stopwatchStart, setStopwatchStart] = useState(false);
    // const [timeMiliActual, setTimeMiliActual] = useState(0);
    const [idScreen, setIdScreen] = useState(true);
    const [pathPhoto, setPathPhoto] = useState('');
    const [pathPhotoBase64, setPathPhotoBase64] = useState('');
    const [idGroup, setIdGroup] = useState(null);
    // const [now, setNow] = useState(new Date(new Date().setUTCHours(new Date().getUTCHours() - 3)));
    // const [past, setPast] = useState(new Date(new Date(infoExercises?.newDate)));
    // const [diff, setDiff] = useState(infoExercises?.milissegundos !== 0 ? infoExercises?.milissegundos : Math.abs(now.getTime() - past.getTime()));
    // const [statusTimer, setStatusTimer] = useState(infoExercises?.statusExercicio);
    // const [exercisesDay, setExercisesDay] = useState(false);

    // useEffect
    useEffect(() => {
        backHandler.BackHandlerAdjuste(dispatch);
        // InformExercisesFunctions.ValidationTimer(statusTimer, setStopwatchStart);
        InformExercisesFunctions.GetIdGroup(userInfo, setIdGroup, navigation, dispatch);
        // InformExercisesFunctions.GetInfoUser(userInfo?.id, userInfo?.token, setExercisesDay, navigation, dispatch);
    }, []);

    useEffect(() => {
        if (pathPhoto && pathPhotoBase64) {
            InformExercisesFunctions.SharePhoto(pathPhoto, pathPhotoBase64, idGroup, userInfo, infoExercises, dispatch, navigation, setActiveLoading);
        }
    }, [pathPhoto, pathPhotoBase64]);

    // useEffect(() => {
    //    if (timeMiliActual !== 0 && infoExercises?.statusExercicio && infoExercises?.statusExercicio !== 'lastStatus') {
    //        const newValue = {
    //            newDate: infoExercises.newDate,
    //            statusExercicio: 'finish',
    //            milissegundos: timeMiliActual,
    //        };
    //        const updateNewDate = updateExercises(newValue);
    //        dispatch(updateNewDate);
    //    }
    //    changedTimes();
    // }, [timeMiliActual, infoExercises?.statusExercicio]);

    // methods
    // function changedTimes() {
    //   if (infoExercises?.statusExercicio) {
    //        setNow(new Date(new Date().setUTCHours(new Date().getUTCHours() - 3)));
    //        setPast(new Date(new Date(infoExercises?.newDate)));
    //        setDiff(infoExercises?.milissegundos !== 0 ? infoExercises?.milissegundos : Math.abs(now.getTime() - past.getTime()));
    //        setStatusTimer(infoExercises?.statusExercicio);
    //    }
    // }

    // async function OptionsPhoto() {
    //     await onPressFinalized();
    //     // InformExercisesFunctions.OptionsCapture(setPathPhoto, setPathPhotoBase64, setActiveLoadingPhoto);
    // }

    // renders
    // function onPressStart() {
    //    return InformExercisesFunctions.ThrowExercises(exercisesDay, now, userInfo, infoExercises, setStopwatchStart, dispatch);
    // }

    async function onPressFinalized() {
        const validateExercises = await InformExercisesFunctions.validateFinishExercises(userInfo, idGroup);
        if (!validateExercises) {
            return Alert.alert('Aviso', 'Você não pode iniciar um exercício');
        }
        return InformExercisesFunctions.OptionsCapture(setPathPhoto, setPathPhotoBase64, setActiveLoadingPhoto);
    }

    function ImageRender() {
        if (pathPhoto) {
            return (
                <Image
                    source={{ uri: pathPhoto }}
                    style={styles.image}
                    resizeMode='cover'
                />
            );
        }

        return null;
    }

    function ButtonRender() {
        if (pathPhoto) {
            return (
                <TouchableOpacity style={styles.containerButtonTradePhoto} onPress={onPressFinalized}>
                    <Text style={styles.txtTradePhoto}>TROCAR IMAGEM</Text>
                </TouchableOpacity>
            );
        }

        return (
            <TouchableOpacity style={styles.containerButtonPhoto} onPress={onPressFinalized}>
                <Image
                    source={require('../../../assets/icons/addPhoto.png')}
                    style={styles.iconAddPhoto}
                    resizeMode='contain'
                />
                <Text onTextLayout={onPressFinalized} style={styles.txtAddPhoto}>Adicionar Img.</Text>
            </TouchableOpacity>
        );
    }

    function IdScreenRender() {
        if (idScreen) {
            return (
                <>
                    <ImageBackground
                        style={styles.imageBackground}
                        source={require('../../../assets/images/backgroundExercises.png')}
                        resizeMode='stretch'
                    >
                        <LinearGradient
                            colors={colors.gradientBlueDarkOpacity}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                            style={styles.containerLinearOpacity}
                        >
                            <ArrowGoBack onPress={() => InformExercisesFunctions.NavigationArrowGoBack(idScreen, setIdScreen, navigation)} />
                        </LinearGradient>
                    </ImageBackground>
                    {/*
                        <Text style={styles.txtHeader}>Tempo de Execução</Text>
                        <Stopwatch
                            laps
                            start={stopwatchStart}
                            options={{ container: styles.backgroundStopWatchContainer, text: styles.backgroundStopWatchText }}
                            startTime={diff || 0}
                            getMsecs={(time) => InformExercisesFunctions.getMsecs(time, stopwatchStart, statusTimer, setTimeMiliActual)}
                        />
                        <ContainerButton
                            label='Iniciar Exercício'
                            onPress={onPressStart}
                            styleTxtButton={{ color: InformExercisesFunctions.ValidationColor(statusTimer) }}
                            disabled={InformExercisesFunctions.ValidationDisabled(statusTimer)}
                            styleContainerButton={[styles.containerButton, { backgroundColor: InformExercisesFunctions.ValidationBackgroundColor(statusTimer) }]}
                        />
                        <ContainerButton
                            label='Finalizar Exercício'
                            disabled={InformExercisesFunctions.ValidationDisabledFinish(statusTimer)}
                            styleTxtButton={{ color: InformExercisesFunctions.ValidationBackgroundColorFinish(statusTimer) }}
                            styleContainerButton={[styles.containerButton, { backgroundColor: InformExercisesFunctions.ValidationColorFinish(statusTimer) }]}
                            onPress={onPressFinalized}
                        />
                    */}
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: '50%' }}>
                        <ContainerButton
                            label='Compartilhar Exercício'
                            disabled={InformExercisesFunctions.ValidationDisabledShare(idGroup)}
                            styleTxtButton={{ color: InformExercisesFunctions.ValidationColorShare(idGroup) }}
                            styleContainerButton={[styles.containerButton, { backgroundColor: InformExercisesFunctions.ValidationBackgroundColorShare(idGroup) }]}
                            onPress={onPressFinalized}
                        />
                    </View>
                </>
            );
        }

        return (
            <>
                <ArrowGoBack onPress={() => InformExercisesFunctions.NavigationArrowGoBack(idScreen, setIdScreen, navigation)} />
                <View style={styles.containerIdShare}>
                    <View />
                    {ImageRender()}
                    {ButtonRender()}
                    <ContainerButton
                        label='Compartilhar Fotos'
                        disabled={InformExercisesFunctions.ValidationDisabledShareTwo(pathPhoto)}
                        styleContainerButton={[styles.containerButton, { backgroundColor: InformExercisesFunctions.ValidationBackgroundColorShareTwo(pathPhoto) }]}
                        styleTxtButton={{ color: InformExercisesFunctions.ValidationColorShareTwo(pathPhoto) }}
                        onPress={() => InformExercisesFunctions.SharePhoto(pathPhoto, pathPhotoBase64, idGroup, userInfo, infoExercises, dispatch, navigation, setActiveLoading)}
                    />
                </View>
            </>
        );
    }

    return (
        <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
            style={styles.scrollBackgroundDragging}
        >
            {IdScreenRender()}
            {/* modals */}
            <LoadingModal loading={activeLoading} />
            <LoadingModal loading={activeLoadingPhoto} activityIndicatorNull />
        </ScrollView>
    );
}

export default InformExercisesScreen;
