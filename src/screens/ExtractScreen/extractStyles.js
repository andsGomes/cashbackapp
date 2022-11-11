// libraries
import { StyleSheet } from 'react-native';

// js
import colors from '../../util/colors';
import fonts from './../../util/fonts';

// style
const styles = StyleSheet.create({
    buttonFilters: {
        alignItems: 'center',
        backgroundColor: colors.blueLight,
        borderRadius: 10,
        height: 60,
        justifyContent: 'center',
        marginBottom: 10,
        marginRight: 10,
        width: 60,
    },
    container: {
        marginBottom: 40,
        marginTop: 20,
        width: '90%',
    },
    containerAbsolute: {
        alignItems: 'center',
        backgroundColor: colors.blueLight,
        bottom: 0,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-around',
        position: 'absolute',
        width: '100%',
    },
    containerBodyActivities: {
        alignItems: 'center',
        backgroundColor: colors.blueLight,
        borderRadius: 5,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingHorizontal: 10,
        width: '90%',
    },
    containerBodyActivitiesInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    containerBodyActivitiesInfoTwo: {
        flexDirection: 'row',
    },
    containerFlatList: {
        alignItems: 'center',
        width: '100%',
    },
    containerGreen: {
        backgroundColor: colors.green,
        borderRadius: 15,
        height: 35,
        marginRight: 10,
        width: 4,
    },
    containerHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        width: '100%',
    },
    containerIcon: {
        alignItems: 'center',
        backgroundColor: colors.blueLight,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        marginRight: 10,
        width: 50,
    },
    containerLineTransparent: {
        backgroundColor: colors.white,
        height: 1,
        opacity: 0.1,
        marginTop: 10,
    },
    containerNull: {
        height: 50,
    },
    containerTabFilters: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
    },
    icon: {
        height: 30,
        width: 30,
    },
    scroll: {
        alignItems: 'center',
        backgroundColor: colors.blueDark,
        flex: 1,
        width: '100%',
    },
    txtBodyActivitiesName: {
        color: colors.white,
        fontFamily: fonts.MontserratSemiBold,
    },
    txtBodyActivitiesDescription: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        fontSize: 12,
    },
    txtButtonFilters: {
        color: colors.white,
        fontFamily: fonts.MontserratSemiBold,
        fontSize: 12,
        textAlign: 'center',
    },
    txtHeader: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 16,
    },
    txtValueTotal: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        fontSize: 14,
    },
    txtValueTotalResult: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 16,
    },
    emptyExtract: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 14,
    },
});

export default styles;
