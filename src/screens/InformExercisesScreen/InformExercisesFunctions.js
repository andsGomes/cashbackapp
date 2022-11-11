// libraries
import { Alert } from 'react-native';
import RNFS from 'react-native-fs';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// js
import informExercises from '../../services/informExercises';
import profile from '../../services/profile';
import colors from '../../util/colors';

// actions
import { updateExercises } from '../../store/modules/user/actions';

// methods
function getMsecs(time, stopwatchStart, statusTimer, setTimeMiliActual) {
    if (!stopwatchStart && statusTimer === 'finish') {
        setTimeMiliActual(time);
    }
}
function ValidationTimer(statusTimer, setStopwatchStart) {
    if (statusTimer === 'throw') {
        setStopwatchStart(true);
    }
}
function NavigationArrowGoBack(idScreen, setIdScreen, navigation) {
    if (!idScreen) {
        setIdScreen(true);
    } else {
        navigation.replace('AppRouteBottomTab');
    }
}
function OpenGallery(setPathPhoto, setPathPhotoBase64, setActiveLoadingPhoto) {
    setActiveLoadingPhoto(true);
    const options = {
        mediaType: 'photo',
    };
    launchImageLibrary(options, (value) => {
        setActiveLoadingPhoto(false);
        if (value.uri) {
            setPathPhoto(value.uri);
            RNFS.readFile(value.uri, 'base64').then((valueBase64) => {
                setPathPhotoBase64(valueBase64);
            });
        }
    });
}
function OpenCamera(setPathPhoto, setPathPhotoBase64, setActiveLoadingPhoto) {
    setActiveLoadingPhoto(true);
    const options = {
        mediaType: 'photo',
    };
    launchCamera(options, (value) => {
        setActiveLoadingPhoto(false);
        if (value.uri) {
            setPathPhoto(value.uri);
            RNFS.readFile(value.uri, 'base64').then((valueBase64) => {
                setPathPhotoBase64(valueBase64);
            });
        }
    });
}
function ValidationColor(statusTimer) {
    if (statusTimer === 'throw' || statusTimer === 'finish' || statusTimer === 'lastStatus') {
        return colors.white;
    }
    return colors.black;
}
function ValidationColorFinish(statusTimer) {
    if (statusTimer === 'throw') {
        return colors.green;
    }
    return colors.grayUltraLight;
}
function ValidationColorShare(idGroup) {
    if (idGroup) {
        return colors.black;
    }
    return colors.white;
}
function ValidationColorShareTwo(pathPhoto) {
    if (pathPhoto) {
        return colors.black;
    }
    return colors.white;
}
function ValidationDisabled(statusTimer) {
    if (statusTimer === 'throw' || statusTimer === 'finish' || statusTimer === 'lastStatus') {
        return true;
    }
    return false;
}
function ValidationDisabledFinish(statusTimer) {
    if (statusTimer === 'throw') {
        return false;
    }
    return true;
}
function ValidationDisabledShare(idGroup) {
    if (idGroup) {
        return false;
    }
    return true;
}
function ValidationDisabledShareTwo(pathPhoto) {
    if (pathPhoto) {
        return false;
    }
    return true;
}
function ValidationBackgroundColor(statusTimer) {
    if (statusTimer === 'throw' || statusTimer === 'finish' || statusTimer === 'lastStatus') {
        return colors.grayUltraLight;
    }
    return colors.green;
}
function ValidationBackgroundColorFinish(statusTimer) {
    if (statusTimer === 'throw') {
        return colors.black;
    }
    return colors.white;
}
function ValidationBackgroundColorShare(idGroup) {
    if (idGroup) {
        return colors.green;
    }
    return colors.grayUltraLight;
}
function ValidationBackgroundColorShareTwo(pathPhoto) {
    if (pathPhoto) {
        return colors.green;
    }
    return colors.grayUltraLight;
}
function OptionsCapture(setPathPhoto, setPathPhotoBase64, setActiveLoadingPhoto) {
    const buttonsAlert = [
        {
            text: 'Escolher na galeria',
            onPress: () => OpenGallery(setPathPhoto, setPathPhotoBase64, setActiveLoadingPhoto),
            style: 'destructive',
        },
        {
            text: 'Tirar foto',
            onPress: () => OpenCamera(setPathPhoto, setPathPhotoBase64, setActiveLoadingPhoto),
            style: 'destructive',
        },
    ];
    const optionsAlert = {
        cancelable: false,
    };
    Alert.alert('Aviso', 'Escolha uma das opções abaixo:', buttonsAlert, optionsAlert);
}
async function GetInfoUser(id, token, setExercisesDay, navigation, dispatch) {
    const infoProfile = await profile.GetInfoUser(id, token, navigation, dispatch);
    setExercisesDay(infoProfile.data.praticouExercicioHoje);
}
function ThrowExercises(exercisesDay, now, userInfo, infoExercises, setStopwatchStart, dispatch) {
    if (!exercisesDay) {
        if (!infoExercises && userInfo?.idGrupoAtual) {
            setStopwatchStart(true);
            const newValue = {
                newDate: new Date(new Date().setUTCHours(new Date().getUTCHours() - 3)),
                statusExercicio: 'throw',
                milissegundos: 0,
            };
            const updateNewDate = updateExercises(newValue);
            dispatch(updateNewDate);
        } else {
            Alert.alert('Aviso', 'Você precisa participar de um grupo antes de iniciar um exercício.');
        }
    } else {
        Alert.alert('Aviso', 'Você já fez seu exercício hoje. Tente novamente amanhã.');
    }
}
function FinishExercises(statusTimer, infoExercises, setStopwatchStart, dispatch) {
    if (statusTimer === 'throw') {
        setStopwatchStart(false);
        const newValue = {
            newDate: infoExercises.newDate,
            statusExercicio: 'finish',
            milissegundos: 0,
        };
        const updateNewDate = updateExercises(newValue);
        dispatch(updateNewDate);
    }
}
function ShareExercises(idGroup, setIdScreen) {
    if (idGroup) {
        setIdScreen(false);
    }
}

// api
async function GetIdGroup(userInfo, setIdGroup, navigation, dispatch) {
    const id = userInfo?.id;
    const token = userInfo?.token;
    const infoProfile = await profile.GetInfoUser(id, token, navigation, dispatch);
    setIdGroup(infoProfile?.data.idGrupoAtual);
}
async function SharePhoto(pathPhoto, pathPhotoBase64, idGroup, userInfo, infoExercises, dispatch, navigation, setActiveLoading) {
    const timeMiliActual = '';
    if (pathPhoto && pathPhotoBase64) {
        if (idGroup) {
            setActiveLoading(true);
            const UploadBase64 = await informExercises.UploadPhotoBase64(pathPhotoBase64, userInfo?.id, userInfo?.token, navigation, dispatch);
            if (!UploadBase64) {
                return null;
            }
            if ((UploadBase64?.status_code)) {
                setActiveLoading(false);
                return Alert.alert('Aviso', 'Ocorreu um erro ao fazer upload da foto.');
            }
            if (UploadBase64?.status === 200) {
                const Register = await informExercises.RegisterExercises(userInfo?.id, idGroup, timeMiliActual, UploadBase64.data.url, userInfo?.token, setActiveLoading, navigation, dispatch);
                if (!Register) {
                    return null;
                }
                if ((Register?.errors || []).length) {
                    setActiveLoading(false);
                    return Alert.alert('Aviso', JSON.stringify(Register.errors[0]));
                }
                // const newValue = {
                //     newDate: infoExercises.newDate,
                //     statusExercicio: 'lastStatus',
                //    milissegundos: infoExercises?.milissegundos,
                // };
                // const updateNewDate = updateExercises(newValue);
                // dispatch(updateNewDate);
                const buttonsAlert = [
                    {
                        text: 'OK',
                        onPress: () => navigation.replace('AppRouteBottomTab'),
                        style: 'destructive',
                    },
                ];
                const optionsAlert = {
                    cancelable: false,
                };
                Alert.alert('Aviso', 'Parabéns por ter feito seu exercício.', buttonsAlert, optionsAlert);
                setActiveLoading(false);
            }
        } else {
            Alert.alert('Aviso', 'Precisa participar de um grupo antes de registrar seu exercício.');
        }
    } else {
        Alert.alert('Aviso', 'Ocorreu um problema ao adicionar sua foto.');
    }
}
async function validateFinishExercises(userInfo, idGroup) {
    const id = userInfo?.id;
    const token = userInfo?.token;
    const responseValidate = await informExercises.validateTime(id, idGroup, token);
    return responseValidate?.status;
}

export default {
    SharePhoto,
    getMsecs,
    ValidationTimer,
    NavigationArrowGoBack,
    OptionsCapture,
    GetIdGroup,
    ValidationColor,
    ValidationColorFinish,
    ValidationColorShare,
    ValidationColorShareTwo,
    ValidationDisabled,
    ValidationDisabledFinish,
    ValidationDisabledShare,
    ValidationDisabledShareTwo,
    ValidationBackgroundColor,
    ValidationBackgroundColorFinish,
    ValidationBackgroundColorShare,
    ValidationBackgroundColorShareTwo,
    ThrowExercises,
    FinishExercises,
    ShareExercises,
    validateFinishExercises,
    GetInfoUser,
};
