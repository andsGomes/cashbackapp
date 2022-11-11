// libraries
import { BackHandler } from 'react-native';

// js
import { updateBottomTab } from '../store/modules/configs/actions';

// BackHandler from Screens BottomTab
function BackHandlerAdjuste(dispatch, resetPlaying) {
    BackHandler.addEventListener('hardwareBackPress', () => {
        const updateBottom = updateBottomTab(0);
        dispatch(updateBottom);
        if (resetPlaying) {
            resetPlaying();
        }
    });
}

export default {
    BackHandlerAdjuste,
};
