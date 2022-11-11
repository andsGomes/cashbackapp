// libraries
import { StyleSheet } from 'react-native';

// js
import colors from './../../../util/colors';
import fonts from './../../../util/fonts';

// style
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.blueLight,
        borderRadius: 5,
        height: 90,
        justifyContent: 'space-between',
        marginHorizontal: 5,
        paddingLeft: 5,
        paddingVertical: 10,
        width: 80,
    },
    image: {
        height: 30,
        width: 30,
    },
    scroll: {
        backgroundColor: colors.blueDark,
        flexDirection: 'row',
        flexGrow: 0,
        paddingBottom: 20,
        paddingLeft: 5,
    },
    txtButton: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        fontSize: 12,
    },
});

export default styles;
