// methods
function ValidationIcon(route) {
    if (route.name === 'ProfileScreen') {
        return require('../../../../assets/icons/iconUser.png');
    } if (route.name === 'InstructionScreen') {
        return require('../../../../assets/icons/iconInstructions.png');
    } if (route.name === 'ParticipateScreen') {
        return require('../../../../assets/icons/iconPartipate.png');
    } if (route.name === 'ExtractScreen') {
        return require('../../../../assets/icons/iconExtract.png');
    } if (route.name === 'InformExercisesScreen') {
        return require('../../../../assets/icons/iconInformExercises.png');
    } if (route.name === 'RansomScreen') {
        return require('../../../../assets/icons/iconRansom.png');
    } if (route.name === 'DepositScreen') {
        return require('../../../../assets/icons/iconDeposit.png');
    }
    return require('../../../../assets/icons/iconUser.png');
}

export default {
    ValidationIcon,
};
