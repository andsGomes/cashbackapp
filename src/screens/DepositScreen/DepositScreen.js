// libraries
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import Toast from 'react-native-tiny-toast';
import { CheckBox } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

// js
import backHandler from '../../util/backHandler';
import colors from '../../util/colors';
import deposit from '../../services/deposit';
import format from '../../util/format';
import fonts from '../../util/fonts';
import home from '../../services/home';
import styles from './depositStyles';

// components
import ArrowGoBack from '../../components/global/GoBackClick/ContainerGoBack';
import ContainerButton from '../../components/global/Button/ContainerButton';
import LoadingScreen from '../../components/global/LoadingScreen/ContainerLoadingScreen';

function DepositScreen(props) {
    // selectors
    const userInfo = useSelector((state) => state.user.user);

    // dispatch
    const dispatch = useDispatch();

    // constants
    const {
        navigation,
    } = props;
    const warningDeposit = 'Após confirmação de depósito, será liberado acesso aos grupos.';

    // states
    const [allInfoHeader, setAllInfoHeader] = useState({});
    const [dataDeposit, setDataDeposit] = useState({});
    const [keyPix, setKeyPix] = useState(false);
    const [tedOrDoc, setTedOrDoc] = useState(false);
    const [loading, setLoading] = useState(true);

    // useEffect
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            backHandler.BackHandlerAdjuste(dispatch);
            GetInfoDeposit();
        });

        return unsubscribe;
    }, []);

    // methods
    async function GetInfoDeposit() {
        const infoHome = await home.GetHome(userInfo?.id, userInfo?.token, navigation, dispatch);
        const infoDeposit = await deposit.GetDeposit(userInfo?.token, navigation, dispatch);
        if (!infoDeposit || !infoHome) {
            return null;
        }
        const newValue = {
            apelido: infoHome?.data.apelido,
            saldoTotal: infoHome?.data.saldoTotal,
        };
        setAllInfoHeader(newValue);
        setDataDeposit(infoDeposit.data);
        setLoading(false);
    }

    function NavigationArrowGoBack() {
        navigation.replace('AppRouteBottomTab');
    }

    function ClipboardPix(value) {
        Clipboard.setString(value);
        Toast.show('Código copiado!', {
            position: Toast.position.BOTTOM,
            containerStyle: styles.containerToast,
            textStyle: styles.txtToast,
            duration: 5000,
        });
    }

    // renders
    function CheckedBox() {
        return (
            <ImageBackground
                resizeMode='contain'
                source={require('../../../assets/icons/uncheckedBlue.png')}
                style={styles.iconBackground}
            >
                <Image
                    resizeMode='contain'
                    source={require('../../../assets/icons/checkedGreen.png')}
                    style={styles.iconChecked}
                />
            </ImageBackground>
        );
    }

    function UncheckedBox() {
        return (
            <Image
                resizeMode='contain'
                source={require('../../../assets/icons/uncheckedBlue.png')}
                style={styles.iconUnchecked}
            />
        );
    }

    function TradePix() {
        setKeyPix(!keyPix);
        setTedOrDoc(false);
    }

    function TradeTedOrDoc() {
        setTedOrDoc(!tedOrDoc);
        setKeyPix(false);
    }

    function RenderIcons(value) {
        if (value === 'PIX') {
            return (
                <CheckBox
                    title='Depositar com PIX.'
                    checked={keyPix}
                    onPress={TradePix}
                    checkedIcon={CheckedBox()}
                    uncheckedIcon={UncheckedBox()}
                    uncheckedColor={colors.blueLight}
                    containerStyle={styles.containerCheckBox}
                    fontFamily={fonts.MontserratRegular}
                    textStyle={styles.txtCheckBox}
                />
            );
        }
        if (value === 'TED') {
            return (
                <CheckBox
                    title='Depositar com TED/DOC.'
                    checked={tedOrDoc}
                    onPress={TradeTedOrDoc}
                    checkedIcon={CheckedBox()}
                    uncheckedIcon={UncheckedBox()}
                    uncheckedColor={colors.blueLight}
                    containerStyle={styles.containerCheckBox}
                    fontFamily={fonts.MontserratRegular}
                    textStyle={styles.txtCheckBox}
                />
            );
        }

        return null;
    }

    function RenderPix(value) {
        if (value) {
            return (
                <View style={styles.containerOptions}>
                    <Text style={styles.txtOptions}>{`Chave Pix: ${dataDeposit?.chavePix}`}</Text>
                    <Text style={styles.txtOptions}>{warningDeposit}</Text>
                    <ContainerButton
                        label='Copiar chave pix'
                        onPress={() => ClipboardPix(dataDeposit?.chavePix)}
                        styleContainerButton={styles.containerButton}
                    />
                </View>
            );
        }

        return null;
    }

    function RenderTedOrDoc(value) {
        if (value) {
            return (
                <View style={styles.containerOptions}>
                    <Text style={styles.txtOptions}>{`Banco: ${dataDeposit?.banco}\nAgência: ${dataDeposit?.agencia}\nConta + Dígito: ${dataDeposit?.conta}`}</Text>
                    <Text style={styles.txtOptions}>{warningDeposit}</Text>
                </View>
            );
        }

        return null;
    }

    function RenderCheckBox() {
        if (dataDeposit) {
            return (
                <>
                    {RenderIcons('PIX')}
                    {RenderPix(keyPix)}
                    {RenderIcons('TED')}
                    {RenderTedOrDoc(tedOrDoc)}
                </>
            );
        }

        return (
            <Text style={styles.txtHeaderBalance}>Não existem formas de depósitos para serem exibidas no momento.</Text>
        );
    }

    function RenderScreen() {
        if (!loading) {
            return (
                <>
                    <ArrowGoBack onPress={NavigationArrowGoBack} />
                    <View style={styles.containerHeader}>
                        <Text style={styles.txtHeaderName}>{`Olá, ${allInfoHeader?.apelido}`}</Text>
                        <Text style={styles.txtHeaderBalance}>
                            seu saldo:
                            <Text style={styles.txtHeaderBalanceResult}>{` R$ ${format.toPrice(allInfoHeader?.saldoTotal)}`}</Text>
                        </Text>
                    </View>
                    <View style={styles.containerDeposit}>
                        <Text style={styles.txtDeposit}>Depósito</Text>
                    </View>
                    <View style={styles.containerDepositInfo}>
                        <Text style={styles.txtDepositBody}>Selecione a forma de Depósito</Text>
                        {RenderCheckBox()}
                    </View>
                </>
            );
        }

        return (
            <LoadingScreen loading={loading} />
        );
    }

    return (
        <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
            style={styles.scrollBackgroundDragging}
        >
            {RenderScreen()}
        </ScrollView>
    );
}

export default DepositScreen;
