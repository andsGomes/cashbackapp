// libraries
import { Dimensions, StyleSheet } from 'react-native';

// js
import colors from './../../../util/colors';
import fonts from './../../../util/fonts';

// style
const styles = StyleSheet.create({
    containerButton: {
        alignItems: 'center',
        backgroundColor: colors.green,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        width: Dimensions.get('window').width / 1.1,
    },
    txtButton: {
        color: colors.black,
        fontFamily: fonts.MontserratSemiBold,
        fontSize: 15,
    },
});

export default styles;
