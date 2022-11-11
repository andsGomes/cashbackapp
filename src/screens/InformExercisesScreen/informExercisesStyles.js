// libraries
import { StyleSheet } from 'react-native';

// js
import colors from '../../util/colors';
import fonts from './../../util/fonts';

// style
const styles = StyleSheet.create({
    backgroundStopWatchContainer: {
        alignItems: 'center',
        backgroundColor: colors.blueDark,
        marginBottom: 20,
        width: '100%',
    },
    backgroundStopWatchText: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 50,
    },
    containerButton: {
        marginTop: 10,
    },
    containerButtonPhoto: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blueLight,
        borderRadius: 10,
        height: 200,
        width: 200,
    },
    containerButtonTradePhoto: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blueLight,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 60,
        width: 200,
    },
    containerIdShare: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around',
        width: '100%',
    },
    containerLinearOpacity: {
        alignItems: 'center',
        alignSelf: 'stretch',
        overflow: 'visible',
        height: 300,
        width: '100%',
    },
    iconAddPhoto: {
        height: 30,
        width: 30,
    },
    image: {
        height: 300,
        width: '80%',
    },
    imageBackground: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        height: 300,
        justifyContent: 'center',
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
    txtHeader: {
        color: colors.white,
        fontFamily: fonts.MontserratSemiBold,
    },
    txtTimer: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 50,
        marginBottom: 20,
    },
    txtAddPhoto: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        fontSize: 12,
    },
    txtTradePhoto: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        fontSize: 16,
    },
});

export default styles;
