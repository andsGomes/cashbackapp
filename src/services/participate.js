// js
import CashbackFitnessConfig from './../configs/CashbackFitnessConfig';
import errors from '../util/errors';

// constants
const baseUrl = CashbackFitnessConfig.stagingURL;

async function GetGroups(idUser, token, navigation, dispatch) {
    try {
        const method = 'GET';
        const headers = {
            Authorization: token,
        };
        const configs = {
            method,
            headers,
        };
        const response = await fetch(`${baseUrl}/grupo/${idUser}`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        errors.AlertGlobalRequest(null, 'aplicativo', 'Participar', '/grupo', error, token, navigation, dispatch);
    }
}

async function RegisterParticipate(idUser, idGroup, token, navigation, dispatch) {
    try {
        const method = 'POST';
        const data = {
            idUsuario: idUser,
            idGrupo: idGroup,
        };
        const body = JSON.stringify(data);
        const headers = {
            'Content-Type': 'application/json',
            Authorization: token,
        };
        const configs = {
            body,
            method,
            headers,
        };
        const response = await fetch(`${baseUrl}/grupo/participar`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        errors.AlertGlobalRequest(idUser, 'aplicativo', 'Participar', '/grupo/participar', error, token, navigation, dispatch);
    }
}

export default {
    GetGroups,
    RegisterParticipate,
};
