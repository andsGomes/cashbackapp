// js
import CashbackFitnessConfig from './../configs/CashbackFitnessConfig';
import errors from '../util/errors';

// constants
const baseUrl = CashbackFitnessConfig.stagingURL;

async function EditProfile(nome, apelido, telefone, cpf, chavePix, banco, agencia, conta, peso, altura, email, senha, novaSenha, id, token, setActiveLoading, navigation, dispatch) {
    try {
        const method = 'POST';
        const data = {
            nome,
            apelido,
            telefone,
            cpf,
            chavePix,
            banco,
            agencia,
            conta,
            peso,
            altura,
            email,
            senha,
            novaSenha,
            id,
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
        const response = await fetch(`${baseUrl}/usuario/alterar`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        setActiveLoading(false);
        errors.AlertGlobalRequest(id, 'aplicativo', 'Meu Perfil', '/usuario/alterar', error, token, navigation, dispatch);
    }
}

async function GetInfoUser(idUser, token, setActiveLoading, navigation, dispatch) {
    try {
        const method = 'GET';
        const headers = {
            Authorization: token,
        };
        const configs = {
            method,
            headers,
        };
        const response = await fetch(`${baseUrl}/usuario/${idUser}`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        setActiveLoading(false);
        errors.AlertGlobalRequest(idUser, 'aplicativo', 'Meu Perfil', '/usuario', error, token, navigation, dispatch);
    }
}

export default {
    EditProfile,
    GetInfoUser,
};
