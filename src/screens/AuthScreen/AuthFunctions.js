// libraries
import { Alert } from 'react-native';

// js
import auth from '../../services/auth';
import profile from '../../services/profile';

// actions
import { updateUser } from '../../store/modules/user/actions';

// api
async function Login(navigation, setActiveLoading, email, password, dispatch) {
    setActiveLoading(true);
    const comeIn = await auth.Signin(email, password, setActiveLoading);
    if (!comeIn) {
        return null;
    }
    if ((comeIn?.errors || []).length) {
        setActiveLoading(false);
        return Alert.alert('Aviso', JSON.stringify(comeIn.errors[0]));
    }
    const infoProfile = await profile.GetInfoUser(comeIn?.data.id, comeIn?.data.token, navigation, dispatch);
    if (infoProfile?.data) {
        const selectedPixOrTed = ValidationTedOrPix(infoProfile);
        const dataProfile = {
            ...infoProfile.data,
            token: comeIn.data.token,
            selectedPixOrTed,
        };
        const updateProfile = updateUser(dataProfile);
        dispatch(updateProfile);
        setActiveLoading(false);
        navigation.replace('AppRouteBottomTab', { screen: 'HomeScreen' });
    }
}

async function Register(setActiveLoading, navigation, dispatch, name, phone, emailRegister, passwordRegister) {
    setActiveLoading(true);
    const record = await auth.Signup(
        name,
        phone.replace(/\D/g, ''),
        emailRegister,
        passwordRegister,
        setActiveLoading,
    );
    if (!record) {
        return null;
    }
    if ((record?.errors || []).length) {
        setActiveLoading(false);
        return Alert.alert('Aviso', JSON.stringify(record.errors[0]));
    }
    const login = await auth.Signin(emailRegister, passwordRegister);
    if (login) {
        const infoProfile = await profile.GetInfoUser(login.data.id, login.data.token, navigation, dispatch);
        if (infoProfile?.data) {
            const selectedPixOrTed = ValidationTedOrPix(infoProfile);
            const dataProfile = {
                ...infoProfile.data,
                token: login.data.token,
                selectedPixOrTed,
            };
            const updateProfile = updateUser(dataProfile);
            dispatch(updateProfile);
            setActiveLoading(false);
            navigation.replace('AppRouteBottomTab', { screen: 'HomeScreen' });
        }
    }
}

async function RecoverPass(setActiveLoading, emailRecover, setEmailRecover) {
    setActiveLoading(true);
    const forgotPassword = await auth.RecoverPassword(emailRecover, setActiveLoading);
    if (!forgotPassword) {
        return null;
    }
    if ((forgotPassword?.errors || []).length) {
        setActiveLoading(false);
        return Alert.alert('Aviso', JSON.stringify(forgotPassword.errors[0]));
    }
    setActiveLoading(false);
    setEmailRecover('');
    Alert.alert('Aviso', 'Enviamos uma nova senha para o seu email!');
}

// methods
function ValidationTedOrPix(infoProfile) {
    if (infoProfile?.data.chavePix) {
        return 1;
    }
    if (infoProfile?.data.banco && infoProfile?.data.agencia && infoProfile?.data.conta) {
        return 2;
    }
    return -1;
}

export default {
    Login,
    RecoverPass,
    Register,
};
