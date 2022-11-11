// libraries
import React, { useRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import Picker from 'react-native-picker-select';
import { TextInputMask } from 'react-native-masked-text';

// js
import colors from '../../../util/colors';
import inputStyles from '../../../styles/inputStyles';
import styles from '../profileStyles';

function ContainerProfileAllTextInput(props) {
    // constants
    const {
        account,
        agency,
        bank,
        height,
        identifier,
        keyPix,
        name,
        phone,
        SaveInfoUser,
        selectedType,
        setAccount,
        setAgency,
        setBank,
        setHeight,
        setIdentifier,
        setKeyPix,
        setName,
        setPhone,
        setSelectedType,
        setSurname,
        setWeight,
        surname,
        weight,
    } = props;
    const numberPhoneMask = {
        mask: '(99) 99999-9999',
    };
    const itemsPicker = [
        { label: 'PIX', value: 1 },
        { label: 'TED', value: 2 },
    ];
    const placeholderPicker = {
        label: 'Selecione PIX ou TED',
        value: -1,
    };

    // refs
    const agencyRef = useRef();
    const bankRef = useRef();
    const heightRef = useRef();
    const identifierRef = useRef();
    const nameRef = useRef();
    const surnameRef = useRef();
    const weightRef = useRef();

    // renders
    function ValidationOptionsBank() {
        if (selectedType === 2) {
            return (
                <View style={styles.containerDobleInputBody}>
                    <Text style={styles.title}>Banco</Text>
                    <TextInput
                        maxLength={64}
                        onChangeText={setBank}
                        onSubmitEditing={() => bankRef.current.focus()}
                        placeholder='Digite seu Banco'
                        placeholderTextColor={colors.grayLight}
                        returnKeyType='next'
                        style={inputStyles.container}
                        value={bank}
                    />
                </View>
            );
        }
        return null;
    }

    function ValidationOptionsPix() {
        if (selectedType === 2) {
            return (
                <View style={styles.containerDobleInput}>
                    <View style={styles.containerDobleInputBody}>
                        <Text style={styles.title}>Agência</Text>
                        <TextInput
                            keyboardType='number-pad'
                            maxLength={64}
                            onChangeText={setAgency}
                            onSubmitEditing={() => agencyRef.current.focus()}
                            placeholder='Digite sua Agência'
                            placeholderTextColor={colors.grayLight}
                            ref={bankRef}
                            returnKeyType='next'
                            style={inputStyles.container}
                            value={agency}
                        />
                    </View>
                    <View style={styles.containerDobleInputBody}>
                        <Text style={styles.title}>Conta</Text>
                        <TextInput
                            keyboardType='number-pad'
                            maxLength={64}
                            onChangeText={setAccount}
                            onSubmitEditing={SaveInfoUser}
                            placeholder='Digite sua Conta'
                            placeholderTextColor={colors.grayLight}
                            ref={agencyRef}
                            returnKeyType='go'
                            style={inputStyles.container}
                            value={account}
                        />
                    </View>
                </View>
            );
        }
        if (selectedType === 1) {
            return (
                <>
                    <Text style={styles.title}>Chave PIX</Text>
                    <TextInput
                        maxLength={64}
                        onChangeText={setKeyPix}
                        onSubmitEditing={SaveInfoUser}
                        placeholder='Digite sua Chave PIX'
                        placeholderTextColor={colors.grayLight}
                        returnKeyType='go'
                        style={inputStyles.container}
                        value={keyPix}
                    />
                </>
            );
        }
        return null;
    }

    return (
        <>
            <View style={styles.containerHeader}>
                <Text style={styles.txtHeader}>DADOS PESSOAIS</Text>
            </View>
            <View style={styles.containerBody}>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    maxLength={64}
                    onChangeText={setName}
                    onSubmitEditing={() => nameRef.current.focus()}
                    placeholder='Digite seu nome'
                    placeholderTextColor={colors.grayLight}
                    returnKeyType='next'
                    style={inputStyles.container}
                    value={name}
                />
                <Text style={styles.title}>Apelido</Text>
                <TextInput
                    maxLength={64}
                    onChangeText={setSurname}
                    onSubmitEditing={() => surnameRef.current.getElement().focus()}
                    placeholder='Digite seu apelido'
                    placeholderTextColor={colors.grayLight}
                    ref={nameRef}
                    returnKeyType='next'
                    style={inputStyles.container}
                    value={surname}
                />
                <View style={styles.containerDobleInput}>
                    <View style={styles.containerDobleInputBody}>
                        <Text style={styles.title}>CPF</Text>
                        <TextInputMask
                            keyboardType='number-pad'
                            onChangeText={setIdentifier}
                            onSubmitEditing={() => identifierRef.current.getElement().focus()}
                            placeholder='Digite seu CPF'
                            placeholderTextColor={colors.grayLight}
                            ref={surnameRef}
                            returnKeyType='next'
                            style={inputStyles.container}
                            type='cpf'
                            value={identifier}
                        />
                    </View>
                    <View style={styles.containerDobleInputBody}>
                        <Text style={styles.title}>Telefone</Text>
                        <TextInputMask
                            keyboardType='number-pad'
                            onChangeText={setPhone}
                            onSubmitEditing={() => weightRef.current.focus()}
                            options={numberPhoneMask}
                            placeholder='Digite seu Telefone'
                            placeholderTextColor={colors.grayLight}
                            ref={identifierRef}
                            returnKeyType='next'
                            style={inputStyles.container}
                            type='custom'
                            value={phone}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.containerHeader}>
                <Text style={styles.txtHeader}>DADOS FÍSICOS</Text>
            </View>
            <View style={styles.containerBody}>
                <View style={styles.containerDobleInput}>
                    <View style={styles.containerDobleInputBody}>
                        <Text style={styles.title}>Peso</Text>
                        <TextInput
                            maxLength={64}
                            onChangeText={setWeight}
                            onSubmitEditing={() => heightRef.current.focus()}
                            placeholder='Digite seu peso'
                            placeholderTextColor={colors.grayLight}
                            ref={weightRef}
                            returnKeyType='next'
                            style={inputStyles.container}
                            value={weight}
                        />
                    </View>
                    <View style={styles.containerDobleInputBody}>
                        <Text style={styles.title}>Altura</Text>
                        <TextInput
                            maxLength={64}
                            onChangeText={setHeight}
                            placeholder='Digite sua altura'
                            placeholderTextColor={colors.grayLight}
                            ref={heightRef}
                            returnKeyType='go'
                            style={inputStyles.container}
                            value={height}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.containerHeader}>
                <Text style={styles.txtHeader}>DADOS BANCÁRIOS</Text>
            </View>
            <View style={styles.containerBody}>
                <View style={styles.containerDobleInput}>
                    <View style={styles.containerDobleInputBody}>
                        <Text style={styles.title}>PIX ou TED</Text>
                        <Picker
                            onValueChange={setSelectedType}
                            value={selectedType}
                            style={{
                                inputAndroid: styles.picker,
                                inputIOS: styles.picker,
                                placeholder: styles.pickerPlaceholder,
                            }}
                            useNativeAndroidPickerStyle={false}
                            placeholder={placeholderPicker}
                            items={itemsPicker}
                        />
                    </View>
                    {ValidationOptionsBank()}
                </View>
                {ValidationOptionsPix()}
            </View>
        </>
    );
}

export default ContainerProfileAllTextInput;
