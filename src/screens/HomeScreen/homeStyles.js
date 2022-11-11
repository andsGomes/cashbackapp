// libraries
import { StyleSheet } from 'react-native';

// js
import colors from '../../util/colors';
import fonts from './../../util/fonts';

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
    buttonCloseModal: {
        alignItems: 'center',
        height: 30,
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
        // top: 10,
        top: 50,
        width: 30,
        zIndex: 2,
    },
    container: {
        justifyContent: 'center',
        marginTop: 40,
        paddingLeft: 20,
        width: '100%',
    },
    containerCentralizeImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    containerFadedScrollView: {
        width: '90%',
    },
    containerTxtActivities: {
        justifyContent: 'center',
        marginBottom: 10,
        paddingLeft: 20,
        width: '100%',
    },
    containerGreen: (isAdm: Boolean) => ({
        backgroundColor: isAdm ? colors.red : colors.green,
        borderRadius: 15,
        height: 35,
        marginRight: 10,
        width: 4,
    }),
    containerBodyActivitiesHour: {
        alignItems: 'center',
        backgroundColor: colors.blueLightOpacity,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        width: 45,
    },
    containerBodyActivitiesInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
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
    containerBodyActivities: {
        alignItems: 'center',
        backgroundColor: colors.blueLight,
        borderRadius: 5,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingHorizontal: 10,
        width: '100%',
    },
    containerBackground: {
        alignItems: 'center',
        backgroundColor: colors.blueDark,
        flex: 1,
        width: '100%',
    },
    containerBalance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
        marginTop: 20,
        paddingHorizontal: 20,
        width: '100%',
    },
    containerBalanceInfo: {
        backgroundColor: colors.white,
        borderRadius: 5,
        height: 60,
        justifyContent: 'center',
        paddingHorizontal: 5,
        paddingLeft: 15,
        width: '49%',
    },
    containerDataUser: {
        backgroundColor: colors.white,
        borderRadius: 5,
        height: 125,
        justifyContent: 'space-around',
        marginRight: 5,
        marginTop: 5,
        paddingHorizontal: 5,
        width: 120,
    },
    containerFlatList: {
        paddingHorizontal: 20,
    },
    containerFlatListGrow: {
        flexGrow: 1,
    },
    containerChildrenGesture: {
        height: 330,
    },
    containerAnimationImage: {
        width: 50,
        height: 50,
        marginBottom: 20,
        position: 'relative',
        top: 20,
    },
    iconDataUser: {
        height: 30,
        width: 30,
    },
    imageZoom: {
        backgroundColor: colors.black,
    },
    // imageModal: {
    //    height: 150,
    //    width: Dimensions.get('window').width / 1.5,
    // },
    imageModal: {
        height: 600,
        width: 600,
    },
    modalBackground: {
        alignItems: 'center',
        backgroundColor: colors.blackTransparent,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
    },
    modalBackgroundFreeze: {
        backgroundColor: 'transparent',
        flex: 1,
    },
    titleModal: {
        fontFamily: fonts.MontserratSemiBold,
        fontSize: 20,
        marginBottom: 20,
    },
    txtHeaderInfoTitle: {
        color: colors.blueDark,
        fontFamily: fonts.MontserratRegular,
        fontSize: 12,
    },
    txtHeaderInfoResult: {
        color: colors.green,
        fontFamily: fonts.MontserratSemiBold,
        fontSize: 18,
    },
    txtHeaderInfoResultFlat: {
        color: colors.green,
        fontFamily: fonts.MontserratSemiBold,
        fontSize: 18,
        marginLeft: 4,
    },
    txtWelcome: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 16,
    },
    txtWelcomeTwoLines: {
        color: colors.white,
        fontFamily: fonts.MontserratRegular,
        fontSize: 15,
    },
    txtWelcomeThreeLines: {
        color: colors.green,
        fontFamily: fonts.MontserratBold,
    },
    txtCloseModal: {
        color: colors.white,
        fontFamily: fonts.MontserratBold,
        fontSize: 20,
    },
    titleHours: {
        color: colors.black,
        fontFamily: fonts.MontserratBold,
        fontSize: 18,
        marginTop: 12,
    },
    txtHours: {
        color: colors.black,
        fontFamily: fonts.MontserratBold,
        fontSize: 20,
        marginTop: 12,
        textAlign: 'center',
    },
});

export default styles;
