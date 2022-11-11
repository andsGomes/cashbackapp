// libraries
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

// js
import backHandler from '../../util/backHandler';
import profile from '../../services/profile';
import styles from './profileStyles';
import { updateUser } from '../../store/modules/user/actions';

// components
import ArrowGoBack from '../../components/global/GoBackClick/ContainerGoBack';
import ContainerButton from '../../components/global/Button/ContainerButton';
import ContainerProfileAllTextInput from './components/ContainerProfileAllTextInput';
import ContainerProfilePasswordTextInput from './components/ContainerProfilePasswordTextInput';
import LoadingModal from '../../components/global/ModalLoading/ContainerModalLoading';

function ProfileScreen(props) {
    // selectors
    const userInfo = useSelector((state) => state.user.user);

    // dispatch
    const dispatch = useDispatch();

    // constants
    const {
        navigation,
    } = props;

    // states
    const [account, setAccount] = useState(userInfo?.conta || '');
    const [activeLoading, setActiveLoading] = useState(false);
    const [agency, setAgency] = useState(userInfo?.agencia || '');
    const [bank, setBank] = useState(userInfo?.banco || '');
    const [height, setHeight] = useState(userInfo?.altura ? userInfo.altura.toString() : '');
    const [identifier, setIdentifier] = useState(userInfo?.cpf || '');
    const [keyPix, setKeyPix] = useState(userInfo?.chavePix || '');
    const [name, setName] = useState(userInfo?.nome || '');
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [phone, setPhone] = useState(userInfo?.telefone || '');
    const [selectedType, setSelectedType] = useState(userInfo?.selectedPixOrTed || -1);
    const [surname, setSurname] = useState(userInfo?.apelido || '');
    const [weight, setWeight] = useState(userInfo?.peso ? userInfo.peso.toString() : '');

    // useEffect
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            backHandler.BackHandlerAdjuste(dispatch);
        });

        return unsubscribe;
    }, []);

    // methods
    function NavigationArrowGoBack() {
        navigation.replace('AppRouteBottomTab');
    }

    async function TradePassword() {
        setActiveLoading(true);
        const EditPassword = await profile.EditProfile(
            userInfo?.nome || '',
            userInfo?.apelido || '',
            userInfo?.telefone || '',
            userInfo?.cpf || '',
            userInfo?.chavePix || '',
            userInfo?.banco || '',
            userInfo?.agencia || '',
            userInfo?.conta || '',
            userInfo?.peso || '',
            userInfo?.altura || '',
            userInfo?.email || '',
            oldPassword,
            newPassword,
            userInfo?.id,
            userInfo?.token,
            setActiveLoading,
            navigation,
            dispatch,
        );
        if (!EditPassword) {
            return null;
        }
        if ((EditPassword?.errors || []).length) {
            setActiveLoading(false);
            return Alert.alert('Aviso', JSON.stringify(EditPassword.errors[0]));
        }
        setOldPassword('');
        setNewPassword('');
        GetInfoUserFunction();
        setActiveLoading(false);
        Alert.alert('Aviso', 'Senha alterada.');
    }

    async function SaveInfoUser() {
        setActiveLoading(true);
        if (selectedType !== -1) {
            const EditProfile = await profile.EditProfile(
                name,
                surname,
                phone.replace(/\D/g, ''),
                identifier.replace(/\D/g, ''),
                keyPix,
                bank,
                agency,
                account,
                Number(weight.replace(',', '.')),
                Number(height.replace(',', '.')),
                userInfo?.email,
                null,
                null,
                userInfo?.id,
                userInfo?.token,
                setActiveLoading,
                navigation,
                dispatch,
            );
            if (!EditProfile) {
                return null;
            }
            if ((EditProfile?.errors || []).length) {
                setActiveLoading(false);
                return Alert.alert('Aviso', JSON.stringify(EditProfile.errors[0]));
            }
            GetInfoUserFunction();
            setActiveLoading(false);
            Alert.alert('Aviso', 'Informações alteradas.');
        } else {
            setActiveLoading(false);
            Alert.alert('Aviso', 'Selecione PIX ou TED.');
        }
    }

    async function GetInfoUserFunction() {
        const id = userInfo?.id;
        const token = userInfo?.token;
        const infoProfile = await profile.GetInfoUser(id, token, navigation, dispatch);
        if (!infoProfile) {
            return null;
        }
        let selectedPixOrTed = -1;
        if (infoProfile?.data.chavePix) {
            selectedPixOrTed = 1;
        } else if (infoProfile?.data.banco && infoProfile?.data.agencia && infoProfile?.data.conta) {
            selectedPixOrTed = 2;
        }
        const dataProfile = {
            ...infoProfile.data,
            token,
            selectedPixOrTed,
        };
        const updateProfile = updateUser(dataProfile);
        dispatch(updateProfile);
        AllStates(dataProfile);
    }

    function AllStates(infoProfile) {
        setAccount(infoProfile?.conta || '');
        setAgency(infoProfile?.agencia || '');
        setBank(infoProfile?.banco || '');
        setHeight(infoProfile?.altura ? infoProfile.altura.toString() : '');
        setIdentifier(infoProfile?.cpf || '');
        setKeyPix(infoProfile?.chavePix || '');
        setName(infoProfile?.nome || '');
        setPhone(infoProfile?.telefone || '');
        setSurname(infoProfile?.apelido || '');
        setWeight(infoProfile?.peso ? infoProfile.peso.toString() : '');
        setSelectedType(infoProfile?.selectedPixOrTed || -1);
    }

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.containerScroll}
            showsVerticalScrollIndicator={false}
            style={styles.scrollBackgroundDragging}
            keyboardShouldPersistTaps='handled'
        >
            <LoadingModal loading={activeLoading} />
            <ImageBackground
                resizeMode='cover'
                source={require('../../../assets/images/backgroundExercises.png')}
                style={styles.imageBackground}
            >
                <ArrowGoBack onPress={NavigationArrowGoBack} />
            </ImageBackground>
            <ContainerProfileAllTextInput
                account={account}
                agency={agency}
                bank={bank}
                height={height}
                identifier={identifier}
                keyPix={keyPix}
                name={name}
                phone={phone}
                SaveInfoUser={SaveInfoUser}
                selectedType={selectedType}
                setAccount={setAccount}
                setAgency={setAgency}
                setBank={setBank}
                setHeight={setHeight}
                setIdentifier={setIdentifier}
                setKeyPix={setKeyPix}
                setName={setName}
                setPhone={setPhone}
                setSelectedType={setSelectedType}
                setSurname={setSurname}
                setWeight={setWeight}
                surname={surname}
                weight={weight}
            />
            <ContainerButton
                label='Alterar Dados'
                onPress={SaveInfoUser}
                styleContainerButton={styles.containerButton}
            />
            <ContainerProfilePasswordTextInput
                newPassword={newPassword}
                oldPassword={oldPassword}
                setNewPassword={setNewPassword}
                setOldPassword={setOldPassword}
                TradePassword={TradePassword}
            />
            <ContainerButton
                label='Alterar Senha'
                onPress={TradePassword}
                styleContainerButton={styles.containerButton}
            />
        </KeyboardAwareScrollView>
    );
}

export default ProfileScreen;
