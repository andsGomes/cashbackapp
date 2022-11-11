// js
import { RESET_CONFIGS, UPDATE_BOTTOMTAB } from './constants';

// actions
export const resetConfigs = () => (dispatch) => {
    dispatch({
        type: RESET_CONFIGS,
    });
};

export const updateBottomTab = (token) => (dispatch) => {
    dispatch({
        type: UPDATE_BOTTOMTAB,
        payload: token,
    });
};
