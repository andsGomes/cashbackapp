// js
import CashbackFitnessConfig from './../configs/CashbackFitnessConfig';
import errors from '../util/errors';

// constants
const baseUrl = CashbackFitnessConfig.stagingURL;

async function CreateRansom(idUser, value, type, token, navigation, dispatch) {
    try {
        const method = 'POST';
        const data = {
            idUsuario: idUser,
            valor: value,
            tipoTransacao: type,
        };
        const body = JSON.stringify(data);
        const headers = {
            'Content-Type': 'application/json',
            Authorization: token,
        };
        const configs = {
            method,
            body,
            headers,
        };
        const response = await fetch(`${baseUrl}/resgate/solicitar`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        errors.AlertGlobalRequest(idUser, 'aplicativo', 'Resgate', '/resgate/solicitar', error, token, navigation, dispatch);
    }
}

async function GetRulesRansom(token, navigation, dispatch) {
    try {
        const method = 'GET';
        const headers = {
            Authorization: token,
        };
        const configs = {
            method,
            headers,
        };
        const response = await fetch(`${baseUrl}/descritivos/regrasResgate`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        errors.AlertGlobalRequest(null, 'aplicativo', 'Resgate', '/descritivos/regrasResgate', error, token, navigation, dispatch);
    }
}

export default {
    CreateRansom,
    GetRulesRansom,
};
