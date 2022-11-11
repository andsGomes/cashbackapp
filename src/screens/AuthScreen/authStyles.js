// libraries
import { StyleSheet } from 'react-native';

// js
import colors from './../../util/colors';
import fonts from './../../util/fonts';

// style
const authStyles = StyleSheet.create({
    buttonRecover: {
        alignSelf: 'flex-end',
        marginVertical: 10,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginVertical: 60,
        paddingHorizontal: 20,
        width: '100%',
    },
    containerBackground: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    containerButton: {
        marginBottom: 20,
        marginTop: 10,
    },
    containerInfo: {
        marginBottom: 20,
        width: '100%',
    },
    containerRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    containerScroll: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    image: {
        height: 100,
        marginBottom: 70,
        width: '70%',
    },
    txtRecover: {
        color: colors.white,
        fontFamily: fonts.MontserratMedium,
        fontSize: 13,
    },
    txtRegister: {
        color: colors.green,
        fontFamily: fonts.MontserratMedium,
        fontSize: 13,
    },
    txtRegisterInfo: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        fontSize: 16,
        marginBottom: 20,
    },
    txtRegisterInfoTwo: {
        fontFamily: fonts.MontserratSemiBold,
    },
    welcome: {
        color: colors.white,
        fontFamily: fonts.MontserratSemiBold,
        fontSize: 16,
    },
    welcomeInfo: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        fontSize: 14,
    },
});

export default authStyles;
