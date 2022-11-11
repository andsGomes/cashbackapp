// libraries
import { StyleSheet } from 'react-native';

// js
import colors from '../../../util/colors';
import fonts from '../../../util/fonts';

// style
const styles = StyleSheet.create({
    activityIndicatorWrapper: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-around',
        paddingVertical: 24,
        width: '80%',
    },
    modalBackground: {
        alignItems: 'center',
        backgroundColor: colors.blackTransparent,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    text: {
        fontFamily: fonts.MontserratSemiBold,
        fontSize: 20,
        paddingTop: 16,
    },
});

export default styles;
