// library
import qs from 'querystring';

// js
import CashbackFitnessConfig from './../configs/CashbackFitnessConfig';
import errors from '../util/errors';

// constants
const baseUrl = CashbackFitnessConfig.stagingURL;
async function RegisterExercises(idUser, idGroup, activityTime, uploadURL, token, setActiveLoading, navigation, dispatch) {
    try {
        const method = 'POST';
        const data = {
            idUsuario: idUser,
            idGrupo: idGroup,
            tempoAtividade: 30,
            situacao: 'REALIZADO',
            fotoComprovante: uploadURL,
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
        const response = await fetch(`${baseUrl}/acompanhamento/gravar`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        setActiveLoading(false);
        errors.AlertGlobalRequest(idUser, 'aplicativo', 'Informar Exercício', '/acompanhamento/gravar', error, token, navigation, dispatch);
    }
}

async function UploadPhotoBase64(uploadPhotoBase64, idUser, token, navigation, dispatch) {
    try {
        const data = {
            key: 'fa09c756024bf3c969630c9673b6aca9',
            image: uploadPhotoBase64,
            name: `${idUser}_data`,
            expiration: null,
        };
        const formBody = qs.stringify(data);
        const response = await fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody,
        });
        const json = await response.json();
        return json;
    } catch (error) {
        return errors.AlertGlobalRequest(idUser, 'aplicativo', 'Upload da foto base64', 'https://api.imgbb.com/1/upload', error, token, navigation, dispatch);
    }
}

async function validateTime(idUser, idGroup, token) {
    try {
        const method = 'POST';
        const data = {
            idUsuario: idUser,
            // idGrupo: idGroup,
            // tempoAtividade: activityTime,
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
        const response = await fetch(`${baseUrl}/acompanhamento/validarInicioExercicio`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        return errors.AlertGlobalRequest(idUser, 'aplicativo', 'Finalizar exercício', '/acompanhamento/validarExercicio', error, token);
    }
}

export default {
    UploadPhotoBase64,
    RegisterExercises,
    validateTime,
};
