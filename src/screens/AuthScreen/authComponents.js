// libraries
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

// js
import colors from '../../util/colors';
import inputStyles from '../../styles/inputStyles';
import styles from './authStyles';

// components
import ContainerButton from '../../components/global/Button/ContainerButton';

// renders
function RenderButton(label: String, onPress: () => void, style: ViewStyle) {
    return (
        <ContainerButton
            label={label}
            onPress={onPress}
            styleContainerButton={style}
        />
    );
}

function RenderFooter(idScreen: 'LOGIN' | 'REGISTER' | 'RECOVER', setIdScreen: () => void) {
    const labelForNavigation = idScreen === 'LOGIN' ? 'Ainda não tem cadastro?' : 'Já é cadastrado?';

    const changedScreenAuth = () => {
        const routeName = idScreen === 'LOGIN' ? 'REGISTER' : 'LOGIN';
        setIdScreen(routeName);
    };

    return (
        <View style={styles.containerRegister}>
            <Text style={styles.txtRecover}>{labelForNavigation}</Text>
            <TouchableOpacity onPress={changedScreenAuth}>
                <Text style={styles.txtRegister}> Clique aqui</Text>
            </TouchableOpacity>
        </View>
    );
}

function RenderIcon() {
    return (
        <Image
            resizeMode='contain'
            source={require('./../../../assets/icons/logo.png')}
            style={styles.image}
        />
    );
}

function RenderInput(
    placeholder: String,
    value: String,
    returnKeyType: String,
    onChangeText: () => void,
    onSubmitEditing: () => void,
    nextRef: any,
    currentRef: any,
    nextIsMask: Boolean,
    mask: String,
) {
    const focusToRef = () => {
        if (nextIsMask) {
            nextRef.current.getElement().focus();
        } else {
            nextRef.current.focus();
        }
    };

    const conditionSubmitEditing = nextRef ? () => focusToRef() : onSubmitEditing;
    const options = {
        mask,
    };

    if (mask) {
        return (
            <TextInputMask
                keyboardType='number-pad'
                onChangeText={onChangeText}
                onSubmitEditing={conditionSubmitEditing}
                options={options}
                placeholder={placeholder}
                placeholderTextColor={colors.grayLight}
                ref={currentRef}
                returnKeyType={returnKeyType}
                style={inputStyles.container}
                type='custom'
                value={value}
            />
        );
    }

    return (
        <TextInput
            maxLength={64}
            onChangeText={onChangeText}
            onSubmitEditing={conditionSubmitEditing}
            placeholder={placeholder}
            placeholderTextColor={colors.grayLight}
            ref={currentRef}
            returnKeyType={returnKeyType}
            style={inputStyles.container}
            value={value}
            secureTextEntry={placeholder.toUpperCase() === 'SENHA'}
        />
    );
}

export default {
    RenderButton,
    RenderFooter,
    RenderIcon,
    RenderInput,
};
