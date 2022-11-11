// js
import CashbackFitnessConfig from './../configs/CashbackFitnessConfig';
import errors from '../util/errors';

// constants
const baseUrl = CashbackFitnessConfig.stagingURL;
const headerApplicationJson = {
    'Content-Type': 'application/json',
};

async function Signin(email, senha, setActiveLoading) {
    try {
        const data = {
            email,
            senha,
        };
        const method = 'POST';
        const body = JSON.stringify(data);
        const headers = headerApplicationJson;
        const configs = {
            method,
            body,
            headers,
        };
        const response = await fetch(`${baseUrl}/usuario/login`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        setActiveLoading(false);
        errors.AlertGlobalRequest();
    }
}

async function Signup(nome, telefone, email, novaSenha, setActiveLoading) {
    try {
        const data = {
            nome,
            telefone,
            email,
            novaSenha,
        };
        const method = 'POST';
        const body = JSON.stringify(data);
        const headers = headerApplicationJson;
        const configs = {
            method,
            body,
            headers,
        };
        const response = await fetch(`${baseUrl}/usuario/novo`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        setActiveLoading(false);
        errors.AlertGlobalRequest();
    }
}

async function RecoverPassword(email, setActiveLoading) {
    try {
        const data = {
            email,
        };
        const method = 'POST';
        const body = JSON.stringify(data);
        const headers = headerApplicationJson;
        const configs = {
            method,
            body,
            headers,
        };
        const response = await fetch(`${baseUrl}/usuario/recuperarSenha`, configs);
        const json = await response.json();
        return json;
    } catch (error) {
        setActiveLoading(false);
        errors.AlertGlobalRequest();
    }

}

export default {
    Signin,
    Signup,
    RecoverPassword,
};
