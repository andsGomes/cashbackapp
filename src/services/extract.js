// js
import CashbackFitnessConfig from './../configs/CashbackFitnessConfig';
import errors from '../util/errors';

// constants
const baseUrl = CashbackFitnessConfig.stagingURL;

async function GetFilterExtract(idUser, lastDay, description, token, navigation, dispatch) {
    try {
        const method = 'POST';
        const data = {
            idUsuario: idUser,
            ultimosDias: lastDay,
            tipoValorFinanceiro: description,
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
        const response = await fetch(`${baseUrl}/financeiro/extrato`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        errors.AlertGlobalRequest(idUser, 'aplicativo', 'extrato', '/extrato', error, token, navigation, dispatch);
    }
}

export default {
    GetFilterExtract,
};
