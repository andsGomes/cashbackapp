// libraries
import React, { useEffect, useState } from 'react';
import { Alert, Image, ImageBackground, Text, View } from 'react-native';
import Toast from 'react-native-tiny-toast';
import { CheckBox } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { TextInputMask } from 'react-native-masked-text';
import { useDispatch, useSelector } from 'react-redux';

// js
import backHandler from '../../util/backHandler';
import colors from '../../util/colors';
import fonts from '../../util/fonts';
import format from '../../util/format';
import home from '../../services/home';
import inputStyles from '../../styles/inputStyles';
import ransom from '../../services/ransom';
import styles from './ransomStyles';

// components
import ArrowGoBack from '../../components/global/GoBackClick/ContainerGoBack';
import ContainerButton from '../../components/global/Button/ContainerButton';
import LoadingScreen from '../../components/global/LoadingScreen/ContainerLoadingScreen';

function RansomScreen(props) {
    // selectors
    const userInfo = useSelector((state) => state.user.user);

    // dispatch
    const dispatch = useDispatch();

    // constants
    const {
        navigation,
    } = props;

    // states
    const [value, setValue] = useState('');
    const [allInfoHeader, setAllInfoHeader] = useState({});
    const [ransomPix, setRansomPix] = useState(false);
    const [ransomTed, setRansomTed] = useState(false);
    const [rules, setRules] = useState('');
    const [loading, setLoading] = useState(true);

    // useEffect
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            backHandler.BackHandlerAdjuste(dispatch);
            GetInfoRansom();
        });

        return unsubscribe;
    }, []);

    // methods
    function NavigationArrowGoBack() {
        navigation.replace('AppRouteBottomTab');
    }

    function TradePix() {
        setRansomPix(!ransomPix);
        setRansomTed(false);
    }

    function TradeTed() {
        setRansomTed(!ransomTed);
        setRansomPix(false);
    }

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

    async function GetInfoRansom() {
        const infoHome = await home.GetHome(userInfo?.id, userInfo?.token, navigation, dispatch);
        if (!infoHome) {
            return null;
        }
        const newValue = {
            apelido: infoHome?.data.apelido,
            saldoTotal: infoHome?.data.saldoTotal,
        };
        setAllInfoHeader(newValue);
        const infoRulesRansom = await ransom.GetRulesRansom(userInfo?.token, navigation, dispatch);
        if (!infoRulesRansom) {
            return null;
        }
        setRules(infoRulesRansom?.data || '');
        setLoading(false);
    }

    async function ExecuteRansom() {
        const infoRansom = await ransom.CreateRansom(userInfo?.id, value.replace('R$ ', '').replace(',', '.'), ransomPix ? 'PIX' : 'TED', userInfo?.token, navigation, dispatch);
        if (!infoRansom) {
            return null;
        }
        if ((infoRansom?.errors || []).length) {
            setRansomPix(false);
            setRansomTed(false);
            setValue('');
            return Alert.alert('Aviso', JSON.stringify(infoRansom.errors[0]));
        }
        setRansomPix(false);
        setRansomTed(false);
        setValue('');
        Toast.show('Resgate solicitado com sucesso, aguarde os prazos informados acima.', {
            position: Toast.position.BOTTOM,
            containerStyle: styles.containerToast,
            textStyle: styles.txtToast,
            duration: 5000,
        });
    }

    function Disabled() {
        if (ransomPix || ransomTed) {
            if (value) {
                return false;
            }
            return true;
        }

        return true;
    }

    function ValidationBackgroundColor() {
        if (ransomPix || ransomTed) {
            if (value) {
                return colors.green;
            }
            return colors.grayUltraLight;
        }

        return colors.grayUltraLight;
    }

    function ValidationColor() {
        if (ransomPix || ransomTed) {
            if (value) {
                return colors.black;
            }
            return colors.white;
        }

        return colors.white;
    }

    // renders
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
                    <View style={styles.containerRansom}>
                        <Text style={styles.txtRansom}>Resgate</Text>
                    </View>
                    <View style={styles.containerDefault}>
                        <Text style={styles.txtRulesInfo}>{rules}</Text>
                    </View>
                    <View style={styles.containerDefault}>
                        <CheckBox
                            title='Resgatar com PIX.'
                            checked={ransomPix}
                            onPress={TradePix}
                            checkedIcon={CheckedBox()}
                            uncheckedIcon={UncheckedBox()}
                            uncheckedColor={colors.blueLight}
                            containerStyle={styles.containerCheckBox}
                            fontFamily={fonts.MontserratRegular}
                            textStyle={styles.txtCheckBox}
                        />
                        <CheckBox
                            title='Resgatar via deposito TED.'
                            checked={ransomTed}
                            onPress={TradeTed}
                            checkedIcon={CheckedBox()}
                            uncheckedIcon={UncheckedBox()}
                            uncheckedColor={colors.blueLight}
                            containerStyle={styles.containerCheckBox}
                            fontFamily={fonts.MontserratRegular}
                            textStyle={styles.txtCheckBox}
                        />
                        <Text style={styles.txtValue}>Digite o valor que deseja resgatar</Text>
                        <TextInputMask
                            keyboardType='number-pad'
                            onChangeText={setValue}
                            // onSubmitEditing={ExecuteRansom}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: 'R$ ',
                                suffixUnit: '',
                            }}
                            placeholder='Digite o valor'
                            placeholderTextColor={colors.grayLight}
                            returnKeyType='go'
                            style={inputStyles.container}
                            type='money'
                            value={value}
                        />
                        <ContainerButton
                            label='Confirmar Resgate'
                            onPress={ExecuteRansom}
                            disabled={Disabled()}
                            styleTxtButton={{ color: ValidationColor() }}
                            styleContainerButton={[styles.containerButton, { backgroundColor: ValidationBackgroundColor() }]}
                        />
                    </View>
                </>
            );
        }

        return (
            <LoadingScreen loading={loading} />
        );
    }

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.containerScroll}
            style={styles.scrollBackgroundDragging}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'
        >
            {RenderScreen()}
        </KeyboardAwareScrollView>
    );
}

export default RansomScreen;
