// libraries
import { Alert } from 'react-native';

// js
import errorRequest from '../services/errorRequest';

// actions
import { logoutAuth } from '../store/modules/user/actions';

// Function Alert Global Requests
async function AlertGlobalRequest(idUser, system, classError, endpoint, descriptionError, token, navigation, dispatch) {
    Alert.alert('Aviso', 'Ocorreu um problema em nosso servidor, tente novamente mais tarde.');
    if (token) {
        errorRequest.GetErrorRequest(idUser, system, classError, endpoint, descriptionError, token);
        dispatch(logoutAuth());
        navigation.navigate('authRoutes');
    }
}

export default {
    AlertGlobalRequest,
};
