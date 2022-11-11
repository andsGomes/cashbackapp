// js
import CashbackFitnessConfig from './../configs/CashbackFitnessConfig';
import errors from '../util/errors';

// constants
const baseUrl = CashbackFitnessConfig.stagingURL;

async function GetActivity(idUser, token, navigation, dispatch) {
    try {
        const method = 'GET';
        const headers = {
            Authorization: token,
        };
        const configs = {
            method,
            headers,
        };
        const response = await fetch(`${baseUrl}/notificacao/${idUser}`, configs);
        const json = await response.json();
        if (response.status !== 200) {
            return [];
        }
        return json;
    } catch (error) {
        errors.AlertGlobalRequest(idUser, 'aplicativo', 'home', '/notificacao', error, token, navigation, dispatch);
    }
}

async function GetHome(idUser, token, navigation, dispatch) {
    try {
        const method = 'GET';
        const headers = {
            Authorization: token,
        };
        const configs = {
            method,
            headers,
        };
        const response = await fetch(`${baseUrl}/resultado/${idUser}`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        errors.AlertGlobalRequest(idUser, 'aplicativo', 'home', '/resultado', error, token, navigation, dispatch);
    }
}

async function GetPhoto(idPhoto, idUser, token, navigation, dispatch) {
    try {
        const method = 'GET';
        const headers = {
            Authorization: token,
        };
        const configs = {
            method,
            headers,
        };
        const response = await fetch(`${baseUrl}/imagem/${idPhoto}`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        errors.AlertGlobalRequest(idUser, 'aplicativo', 'home', '/imagem', error, token, navigation, dispatch);
    }
}

export default {
    GetActivity,
    GetHome,
    GetPhoto,
};
