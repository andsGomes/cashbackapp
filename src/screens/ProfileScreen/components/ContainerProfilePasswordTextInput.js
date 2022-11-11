// libraries
import React, { useRef } from 'react';
import { Text, TextInput, View } from 'react-native';

// js
import colors from '../../../util/colors';
import inputStyles from '../../../styles/inputStyles';
import styles from '../profileStyles';

function ContainerProfilePasswordTextInput(props) {
    // constants
    const {
        oldPassword,
        setOldPassword,
        newPassword,
        setNewPassword,
        TradePassword,
    } = props;

    // refs
    const passwordRef = useRef();

    return (
        <>
            <View style={styles.containerHeader}>
                <Text style={styles.txtHeader}>ALTERAR SENHA</Text>
            </View>
            <View style={styles.containerBody}>
                <Text style={styles.title}>Digite a Senha Antiga</Text>
                <TextInput
                    maxLength={64}
                    onChangeText={setOldPassword}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder='Senha Antiga'
                    placeholderTextColor={colors.grayLight}
                    returnKeyType='next'
                    secureTextEntry
                    style={inputStyles.container}
                    value={oldPassword}
                />
                <Text style={styles.title}>Digite a Nova Senha</Text>
                <TextInput
                    maxLength={64}
                    onChangeText={setNewPassword}
                    onSubmitEditing={TradePassword}
                    placeholder='Senha Nova'
                    placeholderTextColor={colors.grayLight}
                    ref={passwordRef}
                    returnKeyType='go'
                    secureTextEntry
                    style={inputStyles.container}
                    value={newPassword}
                />
            </View>
        </>
    );
}

export default ContainerProfilePasswordTextInput;
