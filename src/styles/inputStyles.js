// libraries
import { StyleSheet } from 'react-native';

// js
import colors from '../util/colors';
import fonts from '../util/fonts';

// styles
const inputStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 5,
        color: colors.gray,
        fontFamily: fonts.MontserratMedium,
        height: 50,
        marginBottom: 5,
        marginTop: 5,
        minWidth: '100%',
        paddingLeft: 15,
    },
});

export default inputStyles;
