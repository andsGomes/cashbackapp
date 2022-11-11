// libraries
import React, { useRef, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { useDispatch } from 'react-redux';

// js
import components from './authComponents';
import functions from './AuthFunctions';
import styles from './authStyles';

// components
import LoadingModal from '../../components/global/ModalLoading/ContainerModalLoading';

function AuthScreen(props) {
    // dispatch
    const dispatch = useDispatch();

    // constants
    const { navigation } = props;

    // refs
    const emailRegisterRef = useRef();
    const nameRegisterRef = useRef();
    const passwordLoginRef = useRef();
    const passwordRegisterRef = useRef();
    const telephoneRegisterRef = useRef();

    // states
    const [activeLoading, setActiveLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [emailRecover, setEmailRecover] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [idScreen, setIdScreen] = useState('LOGIN');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [phone, setPhone] = useState('');

    // methods
    function GoRecoverPassword() {
        setIdScreen('RECOVER');
    }

    function sendLogin() {
        functions.Login(navigation, setActiveLoading, email, password, dispatch);
    }

    function sendRecoveryPassword() {
        functions.RecoverPass(setActiveLoading, emailRecover, setEmailRecover);
    }

    function sendRegister() {
        functions.Register(setActiveLoading, navigation, dispatch, name, phone, emailRegister, passwordRegister);
    }

    // renders
    function renderLogin() {
        if (idScreen !== 'LOGIN') {
            return null;
        }

        return (
            <>
                {components.RenderIcon()}
                <View style={styles.containerInfo}>
                    <Text style={styles.welcome}>Seja bem-vindo,</Text>
                    <Text style={styles.welcomeInfo}>{'Faça seu login para acessar nossa\nplataforma'}</Text>
                </View>
                {components.RenderInput('Digite seu email', email, 'next', setEmail, null, passwordLoginRef)}
                {components.RenderInput('Senha', password, 'send', setPassword, sendLogin, null, passwordLoginRef)}
                <TouchableOpacity onPress={GoRecoverPassword} style={styles.buttonRecover}>
                    <Text style={styles.txtRecover}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                {components.RenderButton('Acessar App', sendLogin)}
            </>
        );
    }

    function renderRecover() {
        if (idScreen !== 'RECOVER') {
            return null;
        }

        return (
            <>
                {components.RenderIcon()}
                {components.RenderInput('Digite seu email', emailRecover, 'send', setEmailRecover, sendRecoveryPassword)}
                {components.RenderButton('Recuperar senha', sendRecoveryPassword, styles.buttonRecover)}
            </>
        );
    }

    function renderRegister() {
        if (idScreen !== 'REGISTER') {
            return null;
        }

        return (
            <>
                {components.RenderIcon()}
                <Text style={styles.txtRegisterInfo}>
                    <Text style={styles.txtRegisterInfoTwo}>Cadastre-se </Text>
                    e conheça todo o conteúdo que preparamos para você!
                </Text>
                {components.RenderInput('Seu nome', name, 'next', setName, null, emailRegisterRef, nameRegisterRef)}
                {components.RenderInput('Email', emailRegister, 'next', setEmailRegister, null, passwordRegisterRef, emailRegisterRef)}
                {components.RenderInput('Senha', passwordRegister, 'next', setPasswordRegister, null, telephoneRegisterRef, passwordRegisterRef, true)}
                {components.RenderInput('Telefone', phone, 'send', setPhone, sendRegister, null, telephoneRegisterRef, null, '(99) 99999-9999')}
                {components.RenderButton('Cadastrar', sendRegister, styles.containerButton)}
            </>
        );
    }

    return (
        <ImageBackground
            resizeMode='cover'
            source={require('./../../../assets/images/backgroundLogin.png')}
            style={styles.containerBackground}
        >
            {/* views */}
            <KeyboardAwareScrollView
                contentContainerStyle={styles.containerScroll}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.container}>
                    {renderLogin()}
                    {renderRegister()}
                    {renderRecover()}
                </View>
                {components.RenderFooter(idScreen, setIdScreen)}
            </KeyboardAwareScrollView>
            {/* modals */}
            <LoadingModal loading={activeLoading} />
        </ImageBackground>
    );
}

export default AuthScreen;
