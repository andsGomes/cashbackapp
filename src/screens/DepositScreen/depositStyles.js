// libraries
import { StyleSheet } from 'react-native';

// js
import colors from '../../util/colors';
import fonts from './../../util/fonts';

// style
const styles = StyleSheet.create({
    containerButton: {
        alignSelf: 'center',
        height: 35,
        marginTop: 10,
        width: '70%',
    },
    containerCheckBox: {
        backgroundColor: colors.blueDark,
        borderWidth: 0,
        justifyContent: 'center',
        marginBottom: 5,
        padding: 5,
        width: '100%',
    },
    containerDeposit: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    containerDepositInfo: {
        justifyContent: 'center',
        width: '90%',
    },
    containerHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 20,
        width: '90%',
    },
    containerOptions: {
        alignSelf: 'center',
        marginBottom: 20,
        width: '90%',
    },
    containerToast: {
        backgroundColor: colors.green,
        width: '60%',
    },
    iconBackground: {
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconChecked: {
        height: 12,
        width: 12,
    },
    iconUnchecked: {
        height: 20,
        width: 20,
    },
    scroll: {
        alignItems: 'center',
        backgroundColor: colors.blueDark,
        flexGrow: 1,
        width: '100%',
    },
    scrollBackgroundDragging: {
        backgroundColor: colors.blueDark,
    },
    txtHeaderBalance: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
    },
    txtHeaderBalanceResult: {
        color: colors.green,
        fontFamily: fonts.MontserratBold,
    },
    txtCheckBox: {
        color: colors.white,
        fontWeight: 'normal',
    },
    txtDeposit: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 24,
        marginTop: 40,
    },
    txtDepositBody: {
        color: colors.white,
        fontFamily: fonts.MontserratSemiBold,
        fontSize: 16,
        marginBottom: 40,
        marginTop: 40,
    },
    txtOptions: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        marginTop: 5,
    },
    txtHeaderName: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 16,
    },
    txtToast: {
        color: colors.black,
        fontFamily: fonts.MontserratRegular,
    },
});

export default styles;
