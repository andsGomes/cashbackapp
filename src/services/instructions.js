// js
import CashbackFitnessConfig from './../configs/CashbackFitnessConfig';
import errors from '../util/errors';

// constants
const baseUrl = CashbackFitnessConfig.stagingURL;

async function GetInstructions(token, navigation, dispatch) {
    try {
        const method = 'GET';
        const headers = {
            Authorization: token,
        };
        const configs = {
            method,
            headers,
        };
        const response = await fetch(`${baseUrl}/descritivos`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        errors.AlertGlobalRequest(null, 'aplicativo', 'Como funciona?', '/descritivos', error, token, navigation, dispatch);
    }
}

export default {
    GetInstructions,
};
