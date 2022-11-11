// libraries
import { Dimensions, StyleSheet } from 'react-native';

// js
import colors from './../../util/colors';
import fonts from './../../util/fonts';

// style
const styles = StyleSheet.create({
    containerFlatListGroups: {
        width: Dimensions.get('window').width / 1.1,
    },
    containerGroups: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    containerGroupsBody: {
        alignItems: 'center',
        backgroundColor: colors.blueLight,
        borderRadius: 10,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        marginBottom: 15,
        width: '100%',
    },
    containerGroupsBodyParticipate: {
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
        elevation: 5,
        height: 40,
        justifyContent: 'center',
        paddingRight: 5,
        position: 'absolute',
        right: 0,
        shadowColor: colors.black,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: '25%',
    },
    containerGroupsInfo: {
        alignItems: 'center',
        width: '15%',
    },
    containerHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 20,
        width: '90%',
    },
    containerToast: {
        backgroundColor: colors.green,
        width: Dimensions.get('window').width / 1.1,
    },
    containerNull: {
        width: '20%',
    },
    viewBlind: {
        height: 80,
    },
    txtValueTotal: {
        color: colors.green,
        fontFamily: fonts.MontserratRegular,
        fontSize: 14,
    },
    containerAbsolute: {
        alignItems: 'center',
        bottom: 0,
        flexDirection: 'row',
        height: 80,
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
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
    txtGroups: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 24,
        marginTop: 40,
    },
    txtGroupsBody: {
        color: colors.white,
        fontFamily: fonts.MontserratSemiBold,
        fontSize: 16,
        marginBottom: 10,
        marginTop: 40,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    txtGroupsBodyTwo: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
    },
    txtGroupsBodyParticipate: {
        color: colors.green,
        fontFamily: fonts.MontserratSemiBold,
    },
    txtGroupsBodyParticipateTwo: {
        color: colors.pinkLight,
        fontFamily: fonts.MontserratSemiBold,
    },
    txtGroupsDescription: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        marginTop: 20,
    },
    txtHeaderList: {
        color: colors.white,
        fontFamily: fonts.MontserratSemiBold,
        fontSize: 13,
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
