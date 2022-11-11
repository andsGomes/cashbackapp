// libraries
import { Dimensions, StyleSheet } from 'react-native';

// js
import colors from '../../util/colors';
import fonts from './../../util/fonts';

// style
const styles = StyleSheet.create({
    containerButton: {
        alignSelf: 'center',
        height: 35,
        marginTop: 40,
        width: '70%',
    },
    circleBlue: {
        backgroundColor: 'blue',
        borderRadius: 3,
        height: 6,
        marginRight: 5,
        width: 6,
    },
    containerCheckBox: {
        backgroundColor: colors.blueDark,
        borderWidth: 0,
        justifyContent: 'center',
        marginBottom: 5,
        padding: 5,
        width: '100%',
    },
    containerDefault: {
        alignItems: 'center',
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
    containerHeaderInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    },
    containerRansom: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    containerToast: {
        backgroundColor: colors.green,
        width: Dimensions.get('window').width / 1.1,
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
    containerScroll: {
        alignItems: 'center',
        backgroundColor: colors.blueDark,
        flexGrow: 1,
    },
    scrollBackgroundDragging: {
        backgroundColor: colors.blueDark,
    },
    txtCheckBox: {
        color: colors.white,
        fontWeight: 'normal',
    },
    txtHeaderBalance: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
    },
    txtHeaderBalanceResult: {
        color: colors.green,
        fontFamily: fonts.MontserratBold,
    },
    txtHeaderName: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 16,
    },
    txtRansom: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 24,
        marginTop: 40,
    },
    txtRules: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        fontSize: 16,
    },
    txtRulesInfo: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        fontSize: 12,
        marginBottom: 40,
        marginTop: 10,
    },
    txtToast: {
        color: colors.black,
        fontFamily: fonts.MontserratRegular,
    },
    txtValue: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 16,
        marginTop: 40,
        marginBottom: 10,
    },
});

export default styles;
