// libraries
import { StyleSheet } from 'react-native';

// js
import colors from '../../util/colors';
import fonts from './../../util/fonts';

// style

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        width: '90%',
    },
    containerVideo: {
        alignSelf: 'center',
        height: 150,
        width: '90%',
        marginBottom: 20,
    },
    scroll: {
        alignItems: 'center',
        backgroundColor: colors.blueDark,
        flexGrow: 1,
        width: '100%',
    },
    image: {
        height: 100,
        marginBottom: 30,
        marginTop: 60,
        width: '70%',
    },
    scrollBackgroundDragging: {
        backgroundColor: colors.blueDark,
    },
    txtHeader: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 24,
        marginBottom: 30,
    },
    txtBody: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        fontSize: 14,
    },
    txtBodyTitle: {
        color: colors.green,
        fontFamily: fonts.MontserratSemiBold,
        fontSize: 15,
    },
    txtDistanceDescriptions: {
        marginBottom: 20,
    },
});

export default styles;
