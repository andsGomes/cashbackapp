// libraries
import { StyleSheet } from 'react-native';

// js
import colors from '../../util/colors';
import fonts from './../../util/fonts';

// style
const styles = StyleSheet.create({
    containerBody: {
        marginVertical: 20,
        width: '90%',
    },
    containerButton: {
        marginBottom: 20,
    },
    containerDobleInput: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    containerDobleInputBody: {
        width: '48%',
    },
    containerHeader: {
        backgroundColor: colors.blueLight,
        height: 35,
        justifyContent: 'center',
        paddingLeft: 20,
        width: '100%',
    },
    imageBackground: {
        height: 200,
        width: '100%',
    },
    picker: {
        backgroundColor: colors.white,
        borderRadius: 5,
        color: colors.gray,
        fontFamily: fonts.MontserratMedium,
        height: 50,
        marginBottom: 5,
        marginTop: 5,
        paddingLeft: 15,
        width: '100%',
    },
    pickerPlaceholder: {
        color: colors.grayLight,
        fontFamily: fonts.MontserratMedium,
    },
    containerScroll: {
        alignItems: 'center',
        backgroundColor: colors.blueDark,
        flexGrow: 1,
        justifyContent: 'center',
    },
    scrollBackgroundDragging: {
        backgroundColor: colors.blueDark,
    },
    title: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
    },
    txtHeader: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
    },
});

export default styles;
