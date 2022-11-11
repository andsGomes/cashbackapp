// actions
import { updateExercises } from '../store/modules/user/actions';

function ValidationUpdateExercises(infoExercises, dispatch) {
    const hoursActual = new Date().getUTCHours() - 3;
    const now = new Date(new Date().setUTCHours(hoursActual));
    let past;
    if (typeof infoExercises.newDate === 'string') {
        past = new Date(Date.parse(infoExercises.newDate));
    } else {
        past = new Date(new Date(infoExercises?.newDate).setUTCHours(hoursActual));
    }
    if (now.getUTCDay() > past.getUTCDay()) {
        dispatch(updateExercises(null));
    }
}

export default {
    ValidationUpdateExercises,
};
