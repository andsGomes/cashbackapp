// js
import CashbackFitnessConfig from './../configs/CashbackFitnessConfig';

// constants
const baseUrl = CashbackFitnessConfig.stagingURL;

async function GetErrorRequest(idUser, system, classError, endpoint, descriptionError, token) {
    const data = {
        idUsuario: idUser,
        sistema: system,
        classe: classError,
        metodo: endpoint,
        erro: descriptionError,
    };
    const method = 'POST';
    const body = JSON.stringify(data);
    const headers = {
        Authorization: token,
        'Content-Type': 'application/json',
    };
    const configs = {
        body,
        method,
        headers,
    };
    const response = await fetch(`${baseUrl}/erros/informar`, configs);
    const json = await response.json();
    return json;
}

export default {
    GetErrorRequest,
};
